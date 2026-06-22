"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import AutomationIcon from "@/components/AutomationIcon";
import { FUNCTION_MAP } from "@/lib/assessment-data";
import { calculateAssessment } from "@/lib/scoring-engine";
import type { AnswerMap, FunctionId, IntakeData, LeadData } from "@/types/assessment";
import AssessmentWizard, { BusinessContextForm } from "./AssessmentWizard";
import FunctionSelector from "./FunctionSelector";
import LeadCaptureForm from "./LeadCaptureForm";
import SampleReport from "./SampleReport";
import ScoreDashboard from "./ScoreDashboard";

type View = "landing" | "intake" | "assessment" | "capture" | "report" | "sample";

const emptyIntake: IntakeData = { company: "", industry: "", size: "", revenue: "", role: "", functionId: "", challenge: "", otherChallenge: "" };
const emptyLead: LeadData = { name: "", company: "", email: "", phone: "", role: "", functionId: "", size: "", challenge: "", preferredTime: "" };

function Header({ onStart, onHome }: { onStart: () => void; onHome: () => void }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[4.5rem] w-full max-w-7xl items-center justify-between px-5 sm:h-20 sm:px-8 lg:px-12">
        <button type="button" onClick={onHome} className="relative h-14 w-52 sm:h-16 sm:w-64" aria-label="Automation Opportunity Assessment home"><Image src="/sentientlogo-wordmark.png" alt="Sentient Engineering" fill sizes="(min-width:640px) 256px, 208px" className="object-contain object-left" priority /></button>
        <div className="flex items-center gap-4"><Link href="/" className="hidden text-sm font-medium text-slate-300 transition hover:text-cyan sm:block">Main website</Link><button type="button" onClick={onStart} className="primary-button min-h-0 px-4 py-2.5 sm:px-5">Start Assessment</button></div>
      </div>
    </header>
  );
}

function Landing({ onSelect, onSample, onStart }: { onSelect: (id: FunctionId) => void; onSample: () => void; onStart: () => void }) {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy py-16 sm:py-24 lg:py-28">
        <div className="absolute inset-0 -z-10 hero-grid opacity-60" />
        <div className="absolute -right-32 top-10 -z-10 h-96 w-96 rounded-full bg-cyan/10 blur-[110px]" />
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.08fr_.92fr] lg:px-12">
          <div>
            <p className="dark-eyebrow">Automation Opportunity Assessment</p>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.01] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">Find the Highest-Value Automation Opportunities in Your Business</h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">Choose a business function, complete a guided assessment, and receive an executive automation report showing where your business may be losing time, leads, revenue, customers, control, and operational speed.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><button type="button" onClick={onStart} className="primary-button px-7">Start Automation Assessment <AutomationIcon name="arrow" className="ml-2 h-4 w-4" /></button><button type="button" onClick={onSample} className="ghost-button px-7">View Sample Executive Report</button></div>
            <p className="mt-7 flex items-start gap-3 border-l border-cyan/60 pl-4 text-sm leading-6 text-slate-400"><AutomationIcon name="shield" className="mt-0.5 h-4 w-4 shrink-0 text-emerald" />No contact details required to begin. Your report uses professional estimates—not fake financial promises.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 shadow-2xl shadow-black/20 backdrop-blur-sm sm:p-7">
            <div className="flex items-center justify-between border-b border-white/10 pb-5"><div><p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan">Executive diagnostic</p><p className="mt-2 text-lg font-semibold text-white">Business performance view</p></div><span className="grid h-12 w-12 place-items-center rounded-xl bg-cyan/10 text-cyan"><AutomationIcon name="chart" className="h-6 w-6" /></span></div>
            <div className="mt-5 grid grid-cols-2 gap-3">{[["5", "Core scores"], ["7", "Business functions"], ["3", "Roadmap phases"], ["15", "Field questions"]].map(([value, label]) => <div key={label} className="rounded-xl border border-white/10 bg-white/[0.04] p-4"><p className="text-2xl font-semibold text-white">{value}</p><p className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.1em] text-slate-500">{label}</p></div>)}</div>
            <div className="mt-4 space-y-2">{["Revenue and cost impact", "Process risk and readiness", "Executive visibility", "Priority automation plays"].map((item) => <div key={item} className="flex items-center gap-3 rounded-lg border border-white/[0.07] px-3 py-2.5 text-xs text-slate-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald" />{item}</div>)}</div>
          </div>
        </div>
      </section>
      <section className="border-b border-slate-200 bg-white py-8"><div className="mx-auto grid w-full max-w-7xl gap-5 px-5 sm:grid-cols-3 sm:px-8 lg:px-12">{[["Field-oriented", "Built around how work actually moves—not software features."], ["Decision-grade", "Connects bottlenecks to risk, impact, readiness, and visibility."], ["Actionable", "Ends with a phased systems roadmap and practical next step."]].map(([title, copy]) => <div key={title} className="flex gap-3"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-cyan" /><div><p className="text-sm font-semibold text-navy">{title}</p><p className="mt-1 text-xs leading-5 text-muted">{copy}</p></div></div>)}</div></section>
      <FunctionSelector onSelect={onSelect} />
      <section className="bg-white py-16 sm:py-24"><div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12"><div className="rounded-2xl bg-navy p-6 sm:p-10"><div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center"><div><p className="dark-eyebrow">What the assessment reveals</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">A business performance diagnostic—not a technology demo.</h2><p className="mt-5 text-sm leading-7 text-slate-400">Find where manual work is slowing growth, identify revenue leakage points, reduce avoidable operational waste, and strengthen visibility before adding more headcount.</p></div><div className="grid grid-cols-2 gap-3">{["Automation Opportunity", "Revenue / Cost Impact", "Process Risk", "Executive Visibility"].map((item) => <div key={item} className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-sm font-semibold text-slate-200">{item}</div>)}</div></div></div></div></section>
    </>
  );
}

export default function AutomationAssessment() {
  const [view, setView] = useState<View>("landing");
  const [intake, setIntake] = useState<IntakeData>(emptyIntake);
  const [lead, setLead] = useState<LeadData>(emptyLead);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [reviewFromEnd, setReviewFromEnd] = useState(false);
  const result = useMemo(() => intake.functionId ? calculateAssessment(intake.functionId, answers) : null, [intake.functionId, answers]);

  const changeView = (next: View) => { setView(next); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const scrollToFunctions = () => { if (view !== "landing") { changeView("landing"); setTimeout(() => document.getElementById("function-selector")?.scrollIntoView({ behavior: "smooth" }), 120); } else document.getElementById("function-selector")?.scrollIntoView({ behavior: "smooth" }); };
  const selectFunction = (functionId: FunctionId) => { setIntake({ ...emptyIntake, functionId }); setAnswers({}); setReviewFromEnd(false); changeView("intake"); };
  const beginAssessment = () => { setLead({ ...emptyLead, company: intake.company, role: intake.role, functionId: intake.functionId, size: intake.size, challenge: intake.challenge === "Other" ? intake.otherChallenge : intake.challenge }); setReviewFromEnd(false); changeView("assessment"); };
  const completeAssessment = () => changeView("capture");
  const submitLead = async () => {
    if (!result) return;
    const response = await fetch("/api/diagnostic-leads", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({
      lead: { ...lead, sector: intake.industry, function: FUNCTION_MAP[result.functionId].name, preferredTime: lead.preferredTime },
      intake,
      result: { opportunityScore: result.opportunityScore, readinessScore: result.readinessScore, impactScore: result.impactScore, riskScore: result.riskScore, visibilityScore: result.visibilityScore, maturity: result.maturity.name, risk: result.riskLevel, opportunity: result.opportunityLevel },
    }) });
    if (!response.ok) throw new Error("Lead delivery failed");
    changeView("report");
  };
  const restart = () => { setIntake(emptyIntake); setLead(emptyLead); setAnswers({}); setReviewFromEnd(false); changeView("landing"); };

  return (
    <div className="min-h-screen bg-background">
      <Header onStart={scrollToFunctions} onHome={restart} />
      {view === "landing" ? <Landing onSelect={selectFunction} onSample={() => changeView("sample")} onStart={scrollToFunctions} /> : null}
      {view === "intake" ? <BusinessContextForm data={intake} onChange={setIntake} onContinue={beginAssessment} onBack={() => changeView("landing")} /> : null}
      {view === "assessment" ? <AssessmentWizard key={`${intake.functionId}-${reviewFromEnd}`} intake={intake} answers={answers} onAnswersChange={setAnswers} onComplete={completeAssessment} onExit={() => changeView("intake")} startAtEnd={reviewFromEnd} /> : null}
      {view === "capture" && result ? <LeadCaptureForm data={lead} result={result} onChange={setLead} onSubmit={submitLead} onBack={() => { setReviewFromEnd(true); changeView("assessment"); }} /> : null}
      {view === "report" && result ? <main className="bg-background py-8 sm:py-12"><div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12"><ScoreDashboard result={result} lead={lead} onRestart={restart} /></div></main> : null}
      {view === "sample" ? <SampleReport onClose={() => changeView("landing")} onStart={scrollToFunctions} /> : null}
      <footer className="border-t border-white/10 bg-navy py-8"><div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12"><p>© {new Date().getFullYear()} Sentient Engineering. Automation Opportunity Assessment.</p><a href="mailto:hello@sentientengineering.com" className="hover:text-cyan">hello@sentientengineering.com</a></div></footer>
    </div>
  );
}

