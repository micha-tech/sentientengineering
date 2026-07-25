import nodemailer from "nodemailer";

export const runtime = "nodejs";

const RECIPIENT_EMAIL = "pstmichaeljohnson721@gmail.com";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
    const website = clean(body.website, 200);

    if (website) {
      return Response.json({
        message: "Thank you. Your project enquiry has been sent successfully.",
      });
    }

    if (
      !name ||
      !EMAIL_PATTERN.test(email) ||
      !company ||
      !projectType ||
      !projectDescription
    ) {
      return Response.json(
        { message: "Please complete all required fields correctly." },
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
      projectDescription: escapeHtml(projectDescription).replace(
        /\n/g,
        "<br />",
      ),
    };

    await transporter.sendMail({
      from:
        process.env.SMTP_FROM ||
        `Sentient Engineering Website <${smtpUser}>`,
      to: RECIPIENT_EMAIL,
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
        <p><strong>Project description:</strong><br />${safe.projectDescription}</p>
      `,
    });

    return Response.json({
      message:
        "Thank you. Your project enquiry has been sent successfully.",
    });
  } catch (error) {
    console.error("Unable to send project enquiry:", error);
    return Response.json(
      { message: "Unable to send your enquiry. Please try again shortly." },
      { status: 500 },
    );
  }
}
