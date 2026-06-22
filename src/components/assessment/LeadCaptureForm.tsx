"use client";

import { useState } from "react";
import { COMPANY_SIZES, CONSULTATION_TIMES, FUNCTION_MAP, ROLES } from "@/lib/assessment-data";
import type { AssessmentResult, LeadData } from "@/types/assessment";

const fieldClass = "mt-2 min-h-12 w-full rounded-xl border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-cyan focus:ring-4 focus:ring-cyan/10";

export default function LeadCaptureForm({ data, result, onChange, onSubmit, onBack }: { data: LeadData; result: AssessmentResult; onChange: (data: LeadData) => void; onSubmit: () => Promise<void>; onBack: () => void }) {
  const [attempted, setAttempted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
  const valid = data.name.trim() && data.company.trim() && emailValid && data.phone.trim() && data.role && data.functionId && data.size && data.challenge && data.preferredTime;
  const config = FUNCTION_MAP[result.functionId];

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setAttempted(true);
    if (!valid) return;
    setSubmitting(true);
    setError("");
    try { await onSubmit(); } catch { setError("We could not unlock the report. Please try again."); setSubmitting(false); }
  };

  return (
    <main className="min-h-[calc(100vh-5rem)] bg-background py-8 sm:py-14">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-8">
        <aside className="rounded-2xl bg-navy p-6 text-white lg:sticky lg:top-8 lg:self-start sm:p-8">
          <p className="dark-eyebrow">Partial result preview</p>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.13em] text-slate-500">Automation Opportunity Score</p>
          <div className="mt-3 flex items-end gap-2"><span className="text-7xl font-semibold tracking-[-0.07em] text-white">{result.opportunityScore}</span><span className="mb-2 text-lg text-slate-500">/100</span></div>
          <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-cyan" style={{ width: `${result.opportunityScore}%` }} /></div>
          <p className="mt-5 text-lg font-semibold text-cyan">{result.opportunityLevel} automation potential</p>
          <p className="mt-3 text-sm leading-7 text-slate-300">Your {config.name} function shows meaningful opportunities to reduce manual work, improve control, and strengthen business visibility.</p>
          <div className="mt-7 space-y-3 border-t border-white/10 pt-6">{["Five executive scorecards", "Priority bottlenecks", "Highest-value automation plays", "Three-phase systems roadmap", "Function-specific KPIs"].map((item) => <div key={item} className="flex items-center gap-3 text-sm text-slate-300"><span className="grid h-5 w-5 place-items-center rounded-full bg-emerald/15 text-[0.65rem] font-bold text-emerald">✓</span>{item}</div>)}</div>
        </aside>

        <form onSubmit={submit} noValidate className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_28px_80px_-55px_rgba(15,23,42,.4)] sm:p-8">
          <p className="eyebrow">Assessment complete</p>
          <h1 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.035em] text-navy sm:text-4xl">Unlock your full executive automation report.</h1>
          <p className="mt-4 text-sm leading-7 text-muted">Add your contact details to view the full diagnostic dashboard and recommended systems roadmap.</p>
          {attempted && !valid ? <p role="alert" className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">Complete every field and enter a valid work email.</p> : null}
          {error ? <p role="alert" className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{error}</p> : null}
          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-semibold text-navy">Full name<input value={data.name} onChange={(e) => onChange({ ...data, name: e.target.value })} className={fieldClass} autoComplete="name" placeholder="Your full name" /></label>
            <label className="text-sm font-semibold text-navy">Company name<input value={data.company} onChange={(e) => onChange({ ...data, company: e.target.value })} className={fieldClass} autoComplete="organization" placeholder="Company name" /></label>
            <label className="text-sm font-semibold text-navy">Work email<input type="email" value={data.email} onChange={(e) => onChange({ ...data, email: e.target.value })} className={fieldClass} autoComplete="email" placeholder="you@company.com" /></label>
            <label className="text-sm font-semibold text-navy">Phone number<input type="tel" value={data.phone} onChange={(e) => onChange({ ...data, phone: e.target.value })} className={fieldClass} autoComplete="tel" placeholder="+234…" /></label>
            <label className="text-sm font-semibold text-navy">Your role<select value={data.role} onChange={(e) => onChange({ ...data, role: e.target.value })} className={fieldClass}><option value="">Select role</option>{ROLES.map((item) => <option key={item}>{item}</option>)}</select></label>
            <label className="text-sm font-semibold text-navy">Company size<select value={data.size} onChange={(e) => onChange({ ...data, size: e.target.value })} className={fieldClass}><option value="">Select size</option>{COMPANY_SIZES.map((item) => <option key={item}>{item}</option>)}</select></label>
            <label className="text-sm font-semibold text-navy">Function assessed<input disabled value={config.name} className={`${fieldClass} bg-slate-50 text-slate-500`} /></label>
            <label className="text-sm font-semibold text-navy">Preferred consultation time<select value={data.preferredTime} onChange={(e) => onChange({ ...data, preferredTime: e.target.value })} className={fieldClass}><option value="">Select preference</option>{CONSULTATION_TIMES.map((item) => <option key={item}>{item}</option>)}</select></label>
          </div>
          <label className="mt-5 block text-sm font-semibold text-navy">Main challenge<input disabled value={data.challenge} className={`${fieldClass} bg-slate-50 text-slate-500`} /></label>
          <div className="mt-8 flex flex-col-reverse gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between"><button type="button" onClick={onBack} className="secondary-button min-h-11 px-5">Review answers</button><button type="submit" disabled={submitting} className="primary-button min-h-11 px-7 disabled:cursor-wait disabled:opacity-60">{submitting ? "Preparing Report…" : "Unlock My Full Automation Report"}</button></div>
          <p className="mt-4 text-xs leading-5 text-muted">Your details are used to personalize the report and follow up on your requested systems review. We do not sell assessment data.</p>
        </form>
      </div>
    </main>
  );
}

