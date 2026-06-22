import Link from "next/link";
import AutomationIcon from "@/components/AutomationIcon";
import { FUNCTION_MAP } from "@/lib/assessment-data";
import type { AssessmentResult, LeadData } from "@/types/assessment";
import RoadmapTimeline from "./RoadmapTimeline";

function Scorecard({ label, score, note, tone = "cyan" }: { label: string; score: number; note: string; tone?: "cyan" | "emerald" | "amber" }) {
  const color = tone === "emerald" ? "bg-emerald" : tone === "amber" ? "bg-amber-400" : "bg-cyan";
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex items-start justify-between gap-4"><p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">{label}</p><span className="text-2xl font-semibold tracking-tight text-navy">{score}</span></div>
      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-100"><div className={`h-full rounded-full ${color}`} style={{ width: `${score}%` }} /></div>
      <p className="mt-3 text-xs leading-5 text-muted">{note}</p>
    </article>
  );
}

function DashboardSection({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_22px_55px_-48px_rgba(15,23,42,.35)] sm:p-8"><p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-dark">{eyebrow}</p><h3 className="mt-2 text-2xl font-semibold tracking-[-0.025em] text-navy">{title}</h3><div className="mt-6">{children}</div></section>;
}

export default function ScoreDashboard({ result, lead, isSample = false, onRestart }: { result: AssessmentResult; lead?: LeadData; isSample?: boolean; onRestart: () => void }) {
  const config = FUNCTION_MAP[result.functionId];
  const reviewHref = `mailto:hello@sentientengineering.com?subject=${encodeURIComponent(`Business Systems Review — ${lead?.company || "Assessment"}`)}&body=${encodeURIComponent(`I completed the ${config.name} Automation Opportunity Assessment and would like to book a 30-minute Business Systems Review.`)}`;
  const emailHref = lead?.email ? `mailto:${lead.email}?subject=${encodeURIComponent(`${config.name} Automation Opportunity Report`)}&body=${encodeURIComponent(`Your assessment indicates ${result.opportunityLevel.toLowerCase()} automation opportunity. Key priorities: ${result.opportunities.join(" ")}`)}` : reviewHref;
  const scores = [
    ["Automation Opportunity", result.opportunityScore, result.opportunityLevel, "cyan" as const],
    ["Readiness", result.readinessScore, result.readinessLevel, "emerald" as const],
    ["Revenue / Cost Impact", result.impactScore, "Estimated business relevance", "cyan" as const],
    ["Process Risk", result.riskScore, `${result.riskLevel} exposure`, "amber" as const],
    ["Executive Visibility", result.visibilityScore, "Decision-grade visibility", "emerald" as const],
  ];

  return (
    <div className="space-y-5">
      {isSample ? <div className="rounded-xl border border-cyan/20 bg-cyan/5 px-5 py-4 text-sm font-medium text-navy"><span className="mr-2 inline-block h-2 w-2 rounded-full bg-cyan" />Sample report for a fictional growing business with delayed follow-up, manual reporting, and disconnected tools.</div> : null}
      <section className="overflow-hidden rounded-2xl bg-navy p-6 text-white sm:p-9">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl"><p className="dark-eyebrow">Executive automation report</p><h1 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">{config.name}</h1><p className="mt-5 text-base leading-8 text-slate-300">{result.executiveSummary}</p></div>
          <div className="grid shrink-0 grid-cols-2 gap-3"><div className="rounded-xl border border-white/10 bg-white/[0.05] p-4"><p className="text-[0.65rem] font-bold uppercase tracking-[0.12em] text-slate-500">Opportunity</p><p className="mt-2 text-lg font-semibold text-cyan">{result.opportunityLevel}</p></div><div className="rounded-xl border border-white/10 bg-white/[0.05] p-4"><p className="text-[0.65rem] font-bold uppercase tracking-[0.12em] text-slate-500">Risk</p><p className="mt-2 text-lg font-semibold text-amber-300">{result.riskLevel}</p></div></div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{scores.map(([label, score, note, tone]) => <Scorecard key={label} label={label as string} score={score as number} note={note as string} tone={tone as "cyan" | "emerald" | "amber"} />)}</section>

      <div className="grid gap-5 lg:grid-cols-[.72fr_1.28fr]">
        <DashboardSection eyebrow="Operational maturity" title={`Level ${result.maturity.level}: ${result.maturity.name}`}><div className="flex items-center gap-2">{[1,2,3,4,5].map((level) => <span key={level} className={`h-2 flex-1 rounded-full ${level <= result.maturity.level ? "bg-cyan" : "bg-slate-200"}`} />)}</div><p className="mt-5 text-sm leading-7 text-muted">{result.maturity.description}</p><p className="mt-4 rounded-lg bg-slate-50 p-3 text-xs font-semibold text-navy">Readiness: {result.readinessLevel}</p></DashboardSection>
        <DashboardSection eyebrow="Function diagnostics" title="Dimension performance"><div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">{Object.entries(result.dimensionScores).map(([name, score]) => <div key={name}><div className="flex justify-between gap-3 text-xs font-semibold"><span className="text-slate-600">{name}</span><span className="text-navy">{score}%</span></div><div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-cyan" style={{ width: `${score}%` }} /></div></div>)}</div></DashboardSection>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <DashboardSection eyebrow="Priority bottlenecks" title="Where performance is being constrained"><ol className="space-y-3">{result.bottlenecks.map((item, index) => <li key={item} className="flex gap-4 rounded-xl border border-slate-200 p-4"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-amber-50 text-xs font-bold text-amber-700">{index + 1}</span><p className="text-sm leading-6 text-slate-600">{item}</p></li>)}</ol></DashboardSection>
        <DashboardSection eyebrow="Highest-value automation plays" title="Where to focus first"><ol className="space-y-3">{result.opportunities.map((item, index) => <li key={item} className="flex gap-4 rounded-xl border border-slate-200 p-4"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-emerald/10 text-xs font-bold text-emerald">{index + 1}</span><p className="text-sm leading-6 text-slate-600">{item}</p></li>)}</ol></DashboardSection>
      </div>

      <DashboardSection eyebrow="Estimated impact areas" title="Business outcomes this roadmap may improve"><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{result.impactAreas.map((item) => <div key={item} className="rounded-xl border border-slate-200 bg-slate-50 p-4"><AutomationIcon name="target" className="h-5 w-5 text-cyan-dark" /><p className="mt-3 text-sm font-semibold text-navy">{item}</p></div>)}</div><p className="mt-5 text-xs leading-5 text-muted">Impact areas are directional estimates based on your responses. Exact financial value requires validation against process, volume, cost, and performance data.</p></DashboardSection>

      <DashboardSection eyebrow="Recommended systems roadmap" title="A practical three-phase path"><RoadmapTimeline /><div className="mt-6 flex flex-wrap gap-2">{result.systems.map((system) => <span key={system} className="rounded-full border border-cyan/20 bg-cyan/5 px-3 py-1.5 text-xs font-semibold text-navy">{system}</span>)}</div></DashboardSection>

      <DashboardSection eyebrow="Function-specific measures" title="KPIs to establish or strengthen"><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{config.kpis.slice(0, 6).map((kpi) => <div key={kpi} className="flex items-center gap-3 rounded-xl border border-slate-200 p-4"><span className="h-2 w-2 rounded-full bg-emerald" /><span className="text-sm font-medium text-navy">{kpi}</span></div>)}</div></DashboardSection>

      <section className="rounded-2xl bg-cyan p-6 sm:p-9"><div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between"><div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.14em] text-navy/60">Recommended next step</p><h3 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-navy">Validate the highest-value opportunities with an operations engineer.</h3><p className="mt-4 text-sm leading-7 text-navy/70">A 30-minute review turns the diagnostic into a practical scope, priority sequence, and implementation decision.</p></div><a href={reviewHref} className="inline-flex min-h-14 shrink-0 items-center justify-center rounded-full bg-navy px-7 text-sm font-bold text-white">Book a 30-Minute Business Systems Review <AutomationIcon name="arrow" className="ml-2 h-4 w-4" /></a></div><div className="mt-7 flex flex-wrap gap-3 border-t border-navy/10 pt-5"><a href={emailHref} className="text-sm font-semibold text-navy underline underline-offset-4">Send My Report to Email</a><span className="text-navy/30">·</span><Link href="/#solutions" className="text-sm font-semibold text-navy underline underline-offset-4">Explore Automation Opportunities</Link><span className="text-navy/30">·</span><button type="button" onClick={onRestart} className="text-sm font-semibold text-navy underline underline-offset-4">Run Another Assessment</button></div></section>
    </div>
  );
}

