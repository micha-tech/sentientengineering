"use client";

import { FormEvent, useState } from "react";
import { projectTypes } from "@/lib/site-data";

type SubmissionState = "idle" | "sending" | "success" | "error";

const preferredContactMethods = ["Email", "WhatsApp", "Phone call"] as const;

export default function ProjectEnquiryForm() {
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmissionState("sending");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(
          result.message ||
            "We could not send your enquiry. Check the form and try again.",
        );
      }

      form.reset();
      setSubmissionState("success");
      setMessage(
        "Thank you. Your project enquiry has been received. Our team will review it and contact you shortly.",
      );
    } catch (error) {
      setSubmissionState("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "We could not send your enquiry. Please try again or contact us directly.",
      );
    }
  }

  return (
    <form
      id="project-enquiry"
      onSubmit={handleSubmit}
      className="grid scroll-mt-28 content-start gap-5 border-t border-white/15 pt-8 sm:grid-cols-2 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0"
    >
      <label className="grid gap-2 text-sm font-medium text-slate-200">
        Full name
        <input
          name="name"
          autoComplete="name"
          maxLength={100}
          placeholder="Your full name"
          required
        />
      </label>
      <label className="grid gap-2 text-sm font-medium text-slate-200">
        Work email
        <input
          name="email"
          type="email"
          autoComplete="email"
          maxLength={200}
          placeholder="you@company.com"
          required
        />
      </label>
      <label className="grid gap-2 text-sm font-medium text-slate-200">
        Phone or WhatsApp number
        <input
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          maxLength={50}
          placeholder="+234..."
          required
        />
      </label>
      <label className="grid gap-2 text-sm font-medium text-slate-200">
        Company name
        <input
          name="company"
          autoComplete="organization"
          maxLength={150}
          placeholder="Your organisation"
          required
        />
      </label>
      <label className="grid gap-2 text-sm font-medium text-slate-200">
        Project type
        <select name="project_type" defaultValue="" required>
          <option value="" disabled>
            Select a project type
          </option>
          {projectTypes.map((projectType) => (
            <option key={projectType} value={projectType}>
              {projectType}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-medium text-slate-200">
        Preferred contact method
        <select name="preferred_contact_method" defaultValue="" required>
          <option value="" disabled>
            Select a contact method
          </option>
          {preferredContactMethods.map((method) => (
            <option key={method} value={method}>
              {method}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-medium text-slate-200 sm:col-span-2">
        Briefly describe the problem
        <textarea
          name="project_description"
          rows={6}
          maxLength={5000}
          placeholder="What is happening now, what should improve, and what outcome would make the project successful?"
          required
        />
      </label>
      <label
        className="pointer-events-none absolute -left-[9999px]"
        aria-hidden="true"
      >
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <button
        className="inline-flex min-h-13 items-center justify-center bg-white px-6 text-sm font-bold text-black transition hover:bg-[#83a8ff] disabled:cursor-wait disabled:opacity-60 sm:col-span-2"
        type="submit"
        disabled={submissionState === "sending"}
      >
        {submissionState === "sending"
          ? "Sending enquiry…"
          : "Discuss your project"}
      </button>
      <p
        className={`min-h-6 text-sm leading-6 sm:col-span-2 ${
          submissionState === "error" ? "text-red-300" : "text-white/70"
        }`}
        role={submissionState === "error" ? "alert" : "status"}
        aria-live="polite"
      >
        {message}
      </p>
    </form>
  );
}
