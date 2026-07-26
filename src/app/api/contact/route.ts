import nodemailer from "nodemailer";
import { COMPANY } from "@/lib/constants";
import { projectTypes } from "@/lib/site-data";

export const runtime = "nodejs";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[+\d][\d\s()-]{6,49}$/;
const CONTACT_METHODS = new Set(["Email", "WhatsApp", "Phone call"]);
const PROJECT_TYPES = new Set<string>(projectTypes);

function clean(value: unknown, maxLength: number) {
  return typeof value === "string"
    ? value.trim().slice(0, maxLength)
    : "";
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[character] || character,
  );
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const name = clean(body.name, 100);
    const email = clean(body.email, 200);
    const company = clean(body.company, 150);
    const phone = clean(body.phone, 50);
    const projectType = clean(body.project_type, 150);
    const projectDescription = clean(body.project_description, 5000);
    const preferredContactMethod = clean(
      body.preferred_contact_method,
      50,
    );
    const website = clean(body.website, 200);

    if (website) {
      return Response.json({
        message:
          "Thank you. Your project enquiry has been received. Our team will review it and contact you shortly.",
      });
    }

    if (!name) {
      return Response.json(
        { message: "Please enter your full name." },
        { status: 400 },
      );
    }

    if (!EMAIL_PATTERN.test(email)) {
      return Response.json(
        { message: "Please enter a valid work email address." },
        { status: 400 },
      );
    }

    if (!PHONE_PATTERN.test(phone)) {
      return Response.json(
        { message: "Please enter a valid phone or WhatsApp number." },
        { status: 400 },
      );
    }

    if (!company) {
      return Response.json(
        { message: "Please enter your company name." },
        { status: 400 },
      );
    }

    if (!PROJECT_TYPES.has(projectType)) {
      return Response.json(
        { message: "Please select a valid project type." },
        { status: 400 },
      );
    }

    if (!CONTACT_METHODS.has(preferredContactMethod)) {
      return Response.json(
        { message: "Please select your preferred contact method." },
        { status: 400 },
      );
    }

    if (!projectDescription) {
      return Response.json(
        { message: "Please briefly describe the problem you want to solve." },
        { status: 400 },
      );
    }

    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpUser || !smtpPass) {
      console.error("Contact email is missing SMTP_USER or SMTP_PASS.");
      return Response.json(
        {
          message:
            "Email delivery is not configured yet. Please contact us directly.",
        },
        { status: 503 },
      );
    }

    const smtpPort = Number(process.env.SMTP_PORT || 465);
    const recipientEmail =
      process.env.CONTACT_RECIPIENT || COMPANY.email;
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: smtpPort,
      secure:
        process.env.SMTP_SECURE !== undefined
          ? process.env.SMTP_SECURE === "true"
          : smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const safe = {
      name: escapeHtml(name),
      email: escapeHtml(email),
      company: escapeHtml(company),
      phone: escapeHtml(phone || "Not provided"),
      projectType: escapeHtml(projectType),
      preferredContactMethod: escapeHtml(preferredContactMethod),
      projectDescription: escapeHtml(projectDescription).replace(
        /\n/g,
        "<br />",
      ),
    };

    await transporter.sendMail({
      from:
        process.env.SMTP_FROM ||
        `Sentient Engineering Website <${smtpUser}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `New project enquiry from ${company.replace(/[\r\n]/g, " ")}`,
      text: [
        "New project enquiry",
        "",
        `Name: ${name}`,
        `Work email: ${email}`,
        `Company: ${company}`,
        `Phone: ${phone || "Not provided"}`,
        `Project type: ${projectType}`,
        `Preferred contact method: ${preferredContactMethod}`,
        "",
        "Project description:",
        projectDescription,
      ].join("\n"),
      html: `
        <h2>New project enquiry</h2>
        <p><strong>Name:</strong> ${safe.name}</p>
        <p><strong>Work email:</strong> ${safe.email}</p>
        <p><strong>Company:</strong> ${safe.company}</p>
        <p><strong>Phone:</strong> ${safe.phone}</p>
        <p><strong>Project type:</strong> ${safe.projectType}</p>
        <p><strong>Preferred contact method:</strong> ${safe.preferredContactMethod}</p>
        <p><strong>Project description:</strong><br />${safe.projectDescription}</p>
      `,
    });

    return Response.json({
      message:
        "Thank you. Your project enquiry has been received. Our team will review it and contact you shortly.",
    });
  } catch (error) {
    console.error("Unable to send project enquiry:", error);
    return Response.json(
      { message: "Unable to send your enquiry. Please try again shortly." },
      { status: 500 },
    );
  }
}
