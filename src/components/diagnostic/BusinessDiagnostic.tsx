"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import DepartmentTransformation from "./DepartmentTransformation";
import ExecutiveReport from "./ExecutiveReport";
import { PILLARS, QUESTIONS } from "./diagnostic-data";
import { calculateResult, SAMPLE_RESULT, type AnswerMap } from "./scoring";

type View = "landing" | "assessment" | "capture" | "report" | "sample";

type LeadData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  sector: string;
  size: string;
  challenge: string;
};

const emptyLead: LeadData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  sector: "",
  size: "",
  challenge: "",
};

const FAQS = [
  ["Is this a financial valuation?", "No. The diagnostic is an operational maturity assessment. It identifies control gaps and opportunity areas; exact financial impact requires validation against your process and business data."],
  ["How long does it take?", "Most leadership teams complete the 25 questions in five to ten minutes. Choose the answer that best represents normal execution—not the best day or the intended process."],
  ["What happens to my information?", "This demo keeps assessment responses in your browser session. Contact actions open your email client so you stay in control of what is sent."],
  ["What is a Business Systems Review?", "A focused executive conversation to validate the highest-value bottlenecks, define measurable improvement priorities, and decide whether deeper process diagnosis is warranted."],
] as const;

function Header({ onStart, showTransformation }: { onStart: () => void; showTransformation: boolean }) {
  return (
    <header className="border-b border-white/10 bg-navy">
      <div className="mx-auto flex h-[4.5rem] w-full max-w-7xl items-center justify-between px-5 sm:h-20 sm:px-8 lg:px-12">
        <Link href="/" className="relative h-14 w-52 shrink-0 sm:h-16 sm:w-64" aria-label="Sentient Engineering home">
          <Image src="/sentientlogo-wordmark.png" alt="Sentient Engineering" fill sizes="(min-width: 640px) 256px, 208px" className="object-contain object-left" priority />
        </Link>
        <div className="flex items-center gap-4">
          {showTransformation ? <a href="#transformation" className="hidden text-sm font-medium text-slate-300 transition hover:text-cyan sm:block">See transformation</a> : null}
          <button type="button" onClick={onStart} className="primary-button min-h-0 px-4 py-2.5 sm:px-5">Start Diagnostic</button>
        </div>
      </div>
    </header>
  );
}

function Landing({ onStart, onSample }: { onStart: () => void; onSample: () => void }) {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy py-16 sm:py-24 lg:py-28">
        <div className="absolute inset-0 -z-10 hairline-grid opacity-55" />
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:px-12">
          <div>
            <p className="dark-eyebrow">Business Growth & Operations Diagnostic</p>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              Find Where Your Business Is Losing Sales, Time, and Profit.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Take a guided operations assessment and discover practical opportunities to recover leads, improve customer response, automate manual work, reduce waste, and scale with stronger business systems.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button type="button" onClick={onStart} className="primary-button px-6">Start Free Diagnostic <span className="ml-2" aria-hidden="true">→</span></button>
              <button type="button" onClick={onSample} className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full border border-white/30 px-6 text-sm font-semibold text-white transition hover:border-cyan hover:bg-white/[0.06]">See Sample Report</button>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
              {["5–10 minutes", "25 executive questions", "Immediate opportunity report"].map((item) => (
                <span key={item} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan" />{item}</span>
              ))}
            </div>
          </div>

          <div className="premium-card-dark rounded-2xl p-5 sm:p-7">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan">Diagnostic preview</p>
                <p className="mt-2 text-lg font-semibold text-white">Business performance profile</p>
              </div>
              <div className="grid h-12 w-12 place-items-center rounded-xl border border-cyan/20 bg-cyan/10 text-cyan" aria-hidden="true">◎</div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {[
                ["Overall operations", "0–100"],
                ["Revenue leakage", "Risk level"],
                ["Automation", "Opportunity"],
                ["Systems roadmap", "3 phases"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-slate-500">{label}</p>
                  <p className="mt-2 text-base font-semibold text-white">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-xl border border-emerald/20 bg-emerald/10 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-300">Outcome-led analysis</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">Priorities are ranked around revenue, customer response, workload, throughput, and executive control.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-10">
        <div className="mx-auto grid w-full max-w-7xl gap-4 px-5 sm:grid-cols-3 sm:px-8 lg:px-12">
          {[
            ["Diagnose before digitizing", "We assess operating friction before recommending tools."],
            ["Prioritize business value", "Every finding connects to control, speed, revenue, or customer outcomes."],
            ["Build a practical roadmap", "Recommendations are sequenced from foundational control to automation."],
          ].map(([title, copy], index) => (
            <div key={title} className="flex gap-4 px-1 py-3 sm:px-4">
              <span className="text-xs font-semibold tracking-[0.14em] text-cyan-dark">0{index + 1}</span>
              <div><h2 className="font-semibold text-navy">{title}</h2><p className="mt-2 text-sm leading-6 text-muted">{copy}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="eyebrow">Five operating pillars</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold text-navy sm:text-5xl">A cross-functional view of how the business really executes.</h2>
            <p className="mt-5 text-base leading-8 text-muted sm:text-lg">The assessment looks beyond isolated tools to the operating system connecting demand, customers, work, and leadership decisions.</p>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {PILLARS.map((pillar, index) => (
              <article key={pillar.id} className="premium-card rounded-xl p-5">
                <div className="flex items-center justify-between"><span className="grid h-9 w-9 place-items-center rounded-lg bg-navy text-xs font-semibold text-white">0{index + 1}</span><span className="h-2 w-2 rounded-full bg-cyan" /></div>
                <h3 className="mt-6 text-lg font-semibold text-navy">{pillar.name}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{pillar.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-9 text-center"><button type="button" onClick={onStart} className="primary-button px-7">Assess My Business Operations</button></div>
        </div>
      </section>
    </>
  );
}

function Assessment({ answers, setAnswers, questionIndex, setQuestionIndex, onComplete, onExit }: {
  answers: AnswerMap;
  setAnswers: (answers: AnswerMap) => void;
  questionIndex: number;
  setQuestionIndex: (index: number) => void;
  onComplete: () => void;
  onExit: () => void;
}) {
  const question = QUESTIONS[questionIndex];
  const pillarIndex = PILLARS.findIndex((pillar) => pillar.id === question.pillar);
  const pillar = PILLARS[pillarIndex];
  const selected = answers[question.id];
  const answered = Object.keys(answers).length;
  const progress = Math.round((answered / QUESTIONS.length) * 100);
  const previousQuestion = QUESTIONS[questionIndex - 1];
  const isAdaptive = previousQuestion?.pillar === question.pillar && (answers[previousQuestion.id] ?? 4) <= 1;

  const next = () => {
    if (selected === undefined) return;
    if (questionIndex === QUESTIONS.length - 1) onComplete();
    else setQuestionIndex(questionIndex + 1);
  };

  return (
    <main className="min-h-[calc(100vh-4.5rem)] bg-background py-8 sm:py-12">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        <div className="flex items-center justify-between gap-4">
          <button type="button" onClick={onExit} className="text-sm font-semibold text-muted transition hover:text-navy">← Exit diagnostic</button>
          <p className="text-sm font-semibold text-navy">{answered} of {QUESTIONS.length} answered</p>
        </div>

        <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-200" aria-label={`${progress}% complete`}>
          <div className="h-full rounded-full bg-cyan transition-[width] duration-300" style={{ width: `${progress}%` }} />
        </div>

        <div className="mt-4 hidden grid-cols-5 gap-2 sm:grid">
          {PILLARS.map((item, index) => (
            <div key={item.id} className={`rounded-lg border px-3 py-2 text-center text-xs font-semibold ${index === pillarIndex ? "border-cyan bg-cyan/10 text-navy" : index < pillarIndex ? "border-emerald/20 bg-emerald/5 text-navy" : "border-slate-200 bg-white text-slate-400"}`}>
              {item.shortName}
            </div>
          ))}
        </div>

        <section key={question.id} className="diagnostic-enter mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_28px_80px_-55px_rgba(15,23,42,.4)]">
          <div className="border-b border-slate-200 bg-navy px-5 py-5 sm:px-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan">Pillar {pillarIndex + 1} of 5</p>
                <p className="mt-1 text-sm font-semibold text-white">{pillar.name}</p>
              </div>
              <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold text-slate-300">Question {questionIndex + 1}</span>
            </div>
          </div>

          <div className="p-5 sm:p-8 lg:p-10">
            {isAdaptive ? <p className="mb-4 rounded-lg border border-cyan/20 bg-cyan/5 px-4 py-3 text-xs font-semibold text-navy">Priority follow-up based on your previous response</p> : null}
            <h1 className="max-w-3xl text-balance text-2xl font-semibold leading-tight text-navy sm:text-4xl">{question.prompt}</h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted sm:text-base">{question.guidance}</p>

            <fieldset className="mt-8 grid gap-3" aria-label="Choose the statement that best describes your business">
              {question.options.map((option) => {
                const active = selected === option.value;
                return (
                  <label key={option.value} className={`group flex cursor-pointer items-start gap-4 rounded-xl border p-4 transition sm:p-5 ${active ? "border-cyan bg-cyan/5 shadow-[0_0_0_1px_#06B6D4]" : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"}`}>
                    <input type="radio" name={question.id} value={option.value} checked={active} onChange={() => setAnswers({ ...answers, [question.id]: option.value })} className="sr-only" />
                    <span className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border ${active ? "border-cyan bg-cyan" : "border-slate-300 bg-white"}`}>
                      {active ? <span className="h-2 w-2 rounded-full bg-navy" /> : null}
                    </span>
                    <span><span className="block text-sm font-semibold text-navy sm:text-base">{option.label}</span><span className="mt-1 block text-sm leading-6 text-muted">{option.detail}</span></span>
                  </label>
                );
              })}
            </fieldset>

            <div className="mt-8 flex items-center justify-between gap-4 border-t border-slate-200 pt-6">
              <button type="button" disabled={questionIndex === 0} onClick={() => setQuestionIndex(questionIndex - 1)} className="secondary-button min-h-11 px-5 disabled:cursor-not-allowed disabled:opacity-35">Back</button>
              <button type="button" disabled={selected === undefined} onClick={next} className="primary-button min-h-11 px-6 disabled:cursor-not-allowed disabled:opacity-40">
                {questionIndex === QUESTIONS.length - 1 ? "Continue to Report" : "Continue"} <span className="ml-2" aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function LeadCapture({ data, setData, onSubmit, onBack }: { data: LeadData; setData: (data: LeadData) => void; onSubmit: () => Promise<void>; onBack: () => void }) {
  const [attempted, setAttempted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
  const requiredValid = data.name.trim() && data.company.trim() && emailValid && data.phone.trim() && data.sector && data.size && data.challenge.trim();
  const fieldClass = "mt-2 min-h-12 w-full border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-cyan focus:ring-4 focus:ring-cyan/10";

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setAttempted(true);
    if (!requiredValid) return;
    setSubmitting(true);
    setSubmitError("");
    try {
      await onSubmit();
    } catch {
      setSubmitError("We could not prepare your report. Please try again.");
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-[calc(100vh-4.5rem)] bg-background py-10 sm:py-16">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 sm:px-8 lg:grid-cols-[.82fr_1.18fr] lg:items-start">
        <div className="rounded-2xl bg-navy p-6 text-white sm:p-8 lg:sticky lg:top-8">
          <p className="dark-eyebrow">Assessment complete</p>
          <h1 className="mt-4 text-balance text-3xl font-semibold sm:text-4xl">Your executive report is ready.</h1>
          <p className="mt-5 text-sm leading-7 text-slate-300">Add your business context to unlock the full diagnostic. Your responses remain in this browser; contact buttons let you choose what to send.</p>
          <div className="mt-7 space-y-3">
            {["Overall and pillar scores", "Revenue leakage and automation risk", "Top bottlenecks and opportunities", "Prioritized systems roadmap"].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-slate-200"><span className="grid h-5 w-5 place-items-center rounded-full bg-emerald text-[0.65rem] font-bold text-white">✓</span>{item}</div>
            ))}
          </div>
        </div>

        <form onSubmit={submit} noValidate className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_28px_80px_-55px_rgba(15,23,42,.4)] sm:p-8">
          <p className="eyebrow">Business profile</p>
          <h2 className="mt-3 text-2xl font-semibold text-navy">Personalize your improvement roadmap.</h2>
          <p className="mt-3 text-sm leading-6 text-muted">All fields are required. We use this context to frame recommendations at the right operating scale.</p>
          {attempted && !requiredValid ? <p role="alert" className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">Please complete every field and enter a valid work email.</p> : null}
          {submitError ? <p role="alert" className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">{submitError}</p> : null}

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-semibold text-navy">Name<input value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} autoComplete="name" className={fieldClass} placeholder="Your full name" /></label>
            <label className="text-sm font-semibold text-navy">Company name<input value={data.company} onChange={(e) => setData({ ...data, company: e.target.value })} autoComplete="organization" className={fieldClass} placeholder="Company name" /></label>
            <label className="text-sm font-semibold text-navy">Work email<input type="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} autoComplete="email" className={fieldClass} placeholder="you@company.com" /></label>
            <label className="text-sm font-semibold text-navy">Phone number<input type="tel" value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} autoComplete="tel" className={fieldClass} placeholder="+234…" /></label>
            <label className="text-sm font-semibold text-navy">Business sector<select value={data.sector} onChange={(e) => setData({ ...data, sector: e.target.value })} className={fieldClass}><option value="">Select sector</option>{["Professional Services", "Retail & Distribution", "Logistics", "Manufacturing", "Construction", "Healthcare", "Education", "Real Estate", "Financial Services", "Other"].map((item) => <option key={item}>{item}</option>)}</select></label>
            <label className="text-sm font-semibold text-navy">Company size<select value={data.size} onChange={(e) => setData({ ...data, size: e.target.value })} className={fieldClass}><option value="">Select team size</option>{["1–10 employees", "11–50 employees", "51–200 employees", "201–500 employees", "500+ employees"].map((item) => <option key={item}>{item}</option>)}</select></label>
          </div>
          <label className="mt-5 block text-sm font-semibold text-navy">Main business challenge<textarea value={data.challenge} onChange={(e) => setData({ ...data, challenge: e.target.value })} className={`${fieldClass} min-h-28 resize-y`} placeholder="Where is the business experiencing the most friction today?" /></label>

          <div className="mt-7 flex flex-col-reverse gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <button type="button" onClick={onBack} className="secondary-button min-h-11 px-5">Back to assessment</button>
            <button type="submit" disabled={submitting} className="primary-button min-h-11 px-6 disabled:cursor-wait disabled:opacity-60">{submitting ? "Preparing Report…" : "View My Full Report →"}</button>
          </div>
          <p className="mt-4 text-xs leading-5 text-muted">By continuing, you agree that Sentient Engineering may use this information to personalize your report. No data is transmitted by this demo until you choose a contact action.</p>
        </form>
      </div>
    </main>
  );
}

function FAQSection({ onStart }: { onStart: () => void }) {
  return (
    <section className="border-t border-slate-200 bg-white py-16 sm:py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[.72fr_1.28fr] lg:px-12">
        <div><p className="eyebrow">Executive questions</p><h2 className="mt-4 text-3xl font-semibold text-navy sm:text-4xl">What to know before you begin.</h2><button type="button" onClick={onStart} className="primary-button mt-7 px-6">Start Free Diagnostic</button></div>
        <div className="space-y-3">{FAQS.map(([q, a]) => <details key={q} className="group rounded-xl border border-slate-200 p-5 open:border-cyan/30"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-navy">{q}<span className="text-cyan-dark transition group-open:rotate-45">+</span></summary><p className="mt-4 text-sm leading-7 text-muted">{a}</p></details>)}</div>
      </div>
    </section>
  );
}

export default function BusinessDiagnostic() {
  const [view, setView] = useState<View>("landing");
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [questionIndex, setQuestionIndex] = useState(0);
  const [lead, setLead] = useState<LeadData>(emptyLead);
  const result = useMemo(() => calculateResult(answers), [answers]);

  const changeView = (next: View) => {
    setView(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const start = () => {
    if (view === "report" || view === "sample") {
      setAnswers({});
      setQuestionIndex(0);
    }
    changeView("assessment");
  };

  const submitLead = async () => {
    const response = await fetch("/api/diagnostic-leads", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        lead,
        result: {
          overall: result.overall,
          maturity: result.maturity,
          risk: result.risk,
          opportunity: result.opportunity,
          automationScore: result.automationScore,
        },
      }),
    });

    if (!response.ok) throw new Error("Lead delivery failed");
    changeView("report");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onStart={start} showTransformation={view !== "assessment" && view !== "capture"} />
      {view === "landing" ? <Landing onStart={start} onSample={() => changeView("sample")} /> : null}
      {view === "assessment" ? <Assessment answers={answers} setAnswers={setAnswers} questionIndex={questionIndex} setQuestionIndex={setQuestionIndex} onComplete={() => changeView("capture")} onExit={() => changeView("landing")} /> : null}
      {view === "capture" ? <LeadCapture data={lead} setData={setLead} onSubmit={submitLead} onBack={() => { setQuestionIndex(QUESTIONS.length - 1); changeView("assessment"); }} /> : null}
      {view === "report" || view === "sample" ? (
        <main className="bg-background py-8 sm:py-12"><div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12"><ExecutiveReport result={view === "sample" ? SAMPLE_RESULT : result} isSample={view === "sample"} companyName={lead.company} onStartDiagnostic={start} /></div></main>
      ) : null}
      {view !== "assessment" && view !== "capture" ? <DepartmentTransformation /> : null}
      {view !== "assessment" && view !== "capture" ? <FAQSection onStart={start} /> : null}
      {view !== "assessment" && view !== "capture" ? (
        <footer className="border-t border-white/10 bg-navy py-10">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
            <div><p className="text-lg font-semibold text-white">Sentient Engineering</p><p className="mt-2 text-sm text-slate-400">Engineering better business operations.</p></div>
            <div className="flex flex-wrap items-center gap-5 text-sm text-slate-400"><Link href="/" className="hover:text-cyan">Home</Link><a href="mailto:hello@sentientengineering.com" className="hover:text-cyan">hello@sentientengineering.com</a></div>
          </div>
        </footer>
      ) : null}
    </div>
  );
}
