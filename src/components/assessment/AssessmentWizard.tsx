"use client";

import { useState } from "react";
import { CHALLENGES, COMPANY_SIZES, FUNCTION_MAP, INDUSTRIES, REVENUE_RANGES, ROLES } from "@/lib/assessment-data";
import { questionId } from "@/lib/scoring-engine";
import type { AnswerMap, IntakeData } from "@/types/assessment";
import ProgressTracker from "./ProgressTracker";
import QuestionCard from "./QuestionCard";

const fieldClass = "mt-2 min-h-12 w-full rounded-xl border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-cyan focus:ring-4 focus:ring-cyan/10";

export function BusinessContextForm({ data, onChange, onContinue, onBack }: { data: IntakeData; onChange: (data: IntakeData) => void; onContinue: () => void; onBack: () => void }) {
  const [attempted, setAttempted] = useState(false);
  const selected = data.functionId ? FUNCTION_MAP[data.functionId] : null;
  const valid = data.company.trim() && data.industry && data.size && data.revenue && data.role && data.functionId && data.challenge && (data.challenge !== "Other" || data.otherChallenge.trim());

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    setAttempted(true);
    if (valid) onContinue();
  };

  return (
    <main className="min-h-[calc(100vh-5rem)] bg-background py-8 sm:py-14">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-5 sm:px-8 lg:grid-cols-[.7fr_1.3fr] lg:gap-8">
        <aside className="rounded-2xl bg-navy p-6 text-white lg:sticky lg:top-8 lg:self-start sm:p-8">
          <p className="dark-eyebrow">Business context</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-[-0.03em]">Frame the assessment around your operating reality.</h1>
          <p className="mt-5 text-sm leading-7 text-slate-300">This context helps interpret readiness, impact, and risk at the right business scale. Contact details are not required to begin.</p>
          {selected ? <div className="mt-7 rounded-xl border border-cyan/20 bg-cyan/10 p-4"><p className="text-xs font-bold uppercase tracking-[0.13em] text-cyan">Selected function</p><p className="mt-2 font-semibold">{selected.name}</p><p className="mt-2 text-xs leading-5 text-slate-400">{selected.coreQuestion}</p></div> : null}
        </aside>
        <form onSubmit={submit} noValidate className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_28px_80px_-55px_rgba(15,23,42,.35)] sm:p-8">
          <p className="eyebrow">Step 1 of 2</p>
          <h2 className="mt-4 text-2xl font-semibold text-navy sm:text-3xl">Tell us enough to make the diagnostic useful.</h2>
          {attempted && !valid ? <p role="alert" className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">Complete each required field before continuing.</p> : null}
          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-semibold text-navy">Company name<input value={data.company} onChange={(e) => onChange({ ...data, company: e.target.value })} className={fieldClass} placeholder="Company name" autoComplete="organization" /></label>
            <label className="text-sm font-semibold text-navy">Industry<select value={data.industry} onChange={(e) => onChange({ ...data, industry: e.target.value })} className={fieldClass}><option value="">Select industry</option>{INDUSTRIES.map((item) => <option key={item}>{item}</option>)}</select></label>
            <label className="text-sm font-semibold text-navy">Company size<select value={data.size} onChange={(e) => onChange({ ...data, size: e.target.value })} className={fieldClass}><option value="">Select team size</option>{COMPANY_SIZES.map((item) => <option key={item}>{item}</option>)}</select></label>
            <label className="text-sm font-semibold text-navy">Approximate monthly revenue<select value={data.revenue} onChange={(e) => onChange({ ...data, revenue: e.target.value })} className={fieldClass}><option value="">Select range</option>{REVENUE_RANGES.map((item) => <option key={item}>{item}</option>)}</select></label>
            <label className="text-sm font-semibold text-navy">Your role<select value={data.role} onChange={(e) => onChange({ ...data, role: e.target.value })} className={fieldClass}><option value="">Select role</option>{ROLES.map((item) => <option key={item}>{item}</option>)}</select></label>
            <label className="text-sm font-semibold text-navy">Business function<input value={selected?.name ?? ""} disabled className={`${fieldClass} bg-slate-50 text-slate-500`} /></label>
          </div>
          <label className="mt-5 block text-sm font-semibold text-navy">Biggest operational challenge<select value={data.challenge} onChange={(e) => onChange({ ...data, challenge: e.target.value })} className={fieldClass}><option value="">Select challenge</option>{CHALLENGES.map((item) => <option key={item}>{item}</option>)}</select></label>
          {data.challenge === "Other" ? <label className="mt-5 block text-sm font-semibold text-navy">Describe the challenge<textarea value={data.otherChallenge} onChange={(e) => onChange({ ...data, otherChallenge: e.target.value })} className={`${fieldClass} min-h-28 resize-y`} placeholder="What is creating the most friction?" /></label> : null}
          <div className="mt-8 flex flex-col-reverse gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:justify-between">
            <button type="button" onClick={onBack} className="secondary-button min-h-11 px-5">Choose another function</button>
            <button type="submit" className="primary-button min-h-11 px-6">Continue to Assessment <span className="ml-2">→</span></button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default function AssessmentWizard({ intake, answers, onAnswersChange, onComplete, onExit, startAtEnd = false }: { intake: IntakeData; answers: AnswerMap; onAnswersChange: (answers: AnswerMap) => void; onComplete: () => void; onExit: () => void; startAtEnd?: boolean }) {
  const [index, setIndex] = useState(startAtEnd && intake.functionId ? FUNCTION_MAP[intake.functionId].questions.length - 1 : 0);
  if (!intake.functionId) return null;
  const config = FUNCTION_MAP[intake.functionId];
  const id = questionId(intake.functionId, index);
  const value = answers[id];
  const dimension = config.dimensions[index % config.dimensions.length];
  const next = () => value !== undefined && (index === config.questions.length - 1 ? onComplete() : setIndex(index + 1));

  return (
    <main className="min-h-[calc(100vh-5rem)] bg-background py-7 sm:py-12">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        <div className="flex items-center justify-between gap-4">
          <button type="button" onClick={onExit} className="text-sm font-semibold text-muted transition hover:text-navy">← Exit assessment</button>
          <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-navy">{config.shortName}</span>
        </div>
        <div className="mt-6"><ProgressTracker current={index + 1} total={config.questions.length} label="Function assessment" /></div>
        <section key={id} className="diagnostic-enter mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_30px_75px_-55px_rgba(15,23,42,.4)]">
          <div className="border-b border-slate-200 bg-navy px-5 py-4 sm:px-8"><div className="flex items-center justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan">Automation Opportunity Assessment</p><p className="mt-1 text-sm font-medium text-slate-300">{config.name}</p></div><span className="text-xs font-semibold text-slate-400">Q{String(index + 1).padStart(2, "0")}</span></div></div>
          <div className="p-5 sm:p-8 lg:p-10">
            <QuestionCard question={config.questions[index]} dimension={dimension} value={value} onChange={(answer) => onAnswersChange({ ...answers, [id]: answer })} />
            <div className="mt-8 flex items-center justify-between gap-4 border-t border-slate-200 pt-6">
              <button type="button" disabled={index === 0} onClick={() => setIndex(index - 1)} className="secondary-button min-h-11 px-5 disabled:cursor-not-allowed disabled:opacity-35">Back</button>
              <button type="button" disabled={value === undefined} onClick={next} className="primary-button min-h-11 px-6 disabled:cursor-not-allowed disabled:opacity-40">{index === config.questions.length - 1 ? "Calculate Results" : "Continue"}<span className="ml-2">→</span></button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
