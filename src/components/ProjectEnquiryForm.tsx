"use client";

import { FormEvent, useState } from "react";
import { projectTypes } from "@/lib/site-data";

type SubmissionState = "idle" | "sending" | "success" | "error";

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
        throw new Error(result.message || "Unable to send your enquiry.");
      }

      form.reset();
      setSubmissionState("success");
      setMessage(
        result.message ||
          "Thank you. Your project enquiry has been sent successfully.",
      );
    } catch (error) {
      setSubmissionState("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Unable to send your enquiry. Please try again.",
      );
    }
  }

  return (
    <form
      id="project-enquiry"
      onSubmit={handleSubmit}
      className="grid scroll-mt-28 gap-5 border-t border-white/15 pt-8 sm:grid-cols-2 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0"
    >
      <label className="grid gap-2 text-sm font-medium text-slate-200">
        Name
        <input name="name" autoComplete="name" maxLength={100} required />
      </label>
      <label className="grid gap-2 text-sm font-medium text-slate-200">
        Work email
        <input
          name="email"
          type="email"
          autoComplete="email"
          maxLength={200}
          required
        />
      </label>
      <label className="grid gap-2 text-sm font-medium text-slate-200">
        Company
        <input
          name="company"
          autoComplete="organization"
          maxLength={150}
          required
        />
      </label>
      <label className="grid gap-2 text-sm font-medium text-slate-200">
        Phone number
        <input
          name="phone"
          type="tel"
          autoComplete="tel"
          maxLength={50}
        />
      </label>
      <label className="grid gap-2 text-sm font-medium text-slate-200 sm:col-span-2">
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
      <label className="grid gap-2 text-sm font-medium text-slate-200 sm:col-span-2">
        Brief project description
        <textarea
          name="project_description"
          rows={5}
          maxLength={5000}
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
        className="primary-button px-6 disabled:cursor-wait disabled:opacity-60 sm:col-span-2"
        type="submit"
        disabled={submissionState === "sending"}
      >
        {submissionState === "sending"
          ? "Sending Enquiry…"
          : "Submit Project Enquiry"}
      </button>
      <p
        className={`text-sm sm:col-span-2 ${
          submissionState === "error" ? "text-red-300" : "text-white/70"
        }`}
        role="status"
        aria-live="polite"
      >
        {message}
      </p>
    </form>
  );
}
