"use client";

import { useState } from "react";
import Link from "next/link";
import AutomationIcon from "./AutomationIcon";
import Container from "./Container";

type IconName = Parameters<typeof AutomationIcon>[0]["name"];

const problems: { icon: IconName; title: string; copy: string; signal: string }[] = [
  { icon: "target", title: "Missed leads", copy: "Enquiries arrive from forms, WhatsApp, social, email, and referrals—but too many disappear between channels.", signal: "Revenue slips through gaps" },
  { icon: "clock", title: "Slow follow-up", copy: "Sales and support teams respond late because the next action depends on someone remembering to do it.", signal: "Customers wait too long" },
  { icon: "layers", title: "Repetitive admin", copy: "Your team spends valuable hours copying data, chasing approvals, sending updates, and rebuilding reports.", signal: "Talent gets buried in tasks" },
  { icon: "chart", title: "Poor visibility", copy: "Managers cannot quickly see what is pending, delayed, assigned, approved, or quietly stuck.", signal: "Decisions run on guesswork" },
];

const solutions: { icon: IconName; number: string; title: string; copy: string; tags: string[] }[] = [
  { icon: "sales", number: "01", title: "Sales automation", copy: "Capture every lead, update your CRM, trigger timely follow-ups, generate quotes, and keep the pipeline visible.", tags: ["Lead capture", "CRM", "Follow-up"] },
  { icon: "headset", number: "02", title: "Customer support", copy: "Route tickets, send instant acknowledgements, protect SLAs, and escalate the right cases to the right people.", tags: ["Routing", "SLAs", "Escalations"] },
  { icon: "coins", number: "03", title: "Finance automation", copy: "Automate invoice reminders, payment follow-up, approvals, expense flows, receipts, and routine reporting.", tags: ["Invoices", "Approvals", "Reports"] },
  { icon: "people", number: "04", title: "HR & admin", copy: "Make onboarding, leave, attendance, employee requests, and internal approvals faster and easier to track.", tags: ["Onboarding", "Leave", "Requests"] },
  { icon: "workflow", number: "05", title: "Operations automation", copy: "Assign work, move approvals, update statuses, surface exceptions, and give managers a live view of execution.", tags: ["Tasks", "Approvals", "Tracking"] },
  { icon: "bot", number: "06", title: "AI workflow assistants", copy: "Use AI where it earns its place: qualifying leads, handling FAQs, reading documents, and summarising information.", tags: ["AI agents", "Documents", "Knowledge"] },
];

const steps = [
  { icon: "audit" as IconName, number: "01", title: "Audit", copy: "We review how work moves today—your tools, handoffs, bottlenecks, exceptions, and repetitive tasks." },
  { icon: "layers" as IconName, number: "02", title: "Design", copy: "We map the improved workflow, define ownership, and agree on the automation logic before we build." },
  { icon: "code" as IconName, number: "03", title: "Automate", copy: "We connect systems, build workflows, configure alerts, and create dashboards or AI assistants where useful." },
  { icon: "pulse" as IconName, number: "04", title: "Manage", copy: "We monitor, maintain, improve, and support the system so automation keeps working as the business changes." },
];

const useCases: { icon: IconName; title: string; copy: string; outcome: string }[] = [
  { icon: "target", title: "Never lose a lead again", copy: "Bring enquiries from every channel into one tracked flow with ownership and next steps.", outcome: "More captured revenue" },
  { icon: "clock", title: "Follow up while interest is high", copy: "Trigger the right message and task the moment a prospect or customer takes action.", outcome: "Faster response" },
  { icon: "spark", title: "Give hours back to your team", copy: "Remove routine copying, reminders, status updates, and reporting from the working week.", outcome: "Less manual admin" },
  { icon: "headset", title: "Make support feel effortless", copy: "Acknowledge requests instantly, route them intelligently, and escalate before service slips.", outcome: "Better customer experience" },
  { icon: "check", title: "Move approvals forward", copy: "Send requests to the right decision-maker, remind them automatically, and retain a clear record.", outcome: "Shorter cycle times" },
  { icon: "chart", title: "See operations as they happen", copy: "Turn workflow activity into useful dashboards for workload, delays, ownership, and outcomes.", outcome: "Clearer decisions" },
];

const managedBenefits: { icon: IconName; title: string }[] = [
  { icon: "cloud", title: "Workflow hosting" },
  { icon: "pulse", title: "24/7 monitoring" },
  { icon: "shield", title: "Error handling" },
  { icon: "database", title: "Backups & credentials" },
  { icon: "spark", title: "Monthly optimisation" },
  { icon: "headset", title: "Team support" },
];

const auditData = {
  Sales: {
    icon: "sales" as IconName,
    bottlenecks: ["Leads live across disconnected channels", "Follow-up depends on memory", "Pipeline data is incomplete"],
    opportunities: ["Omnichannel lead capture", "Automated lead routing and reminders", "Live pipeline reporting"],
    impact: ["Faster first response", "More consistent follow-up", "Fewer lost opportunities"],
    workflow: ["Enquiry", "Qualify", "Assign", "Follow up", "Report"],
  },
  "Customer Support": {
    icon: "headset" as IconName,
    bottlenecks: ["Requests land in personal inboxes", "Urgent cases are hard to spot", "Customers chase for updates"],
    opportunities: ["Central request capture", "Smart routing and SLA timers", "Automatic status communication"],
    impact: ["Shorter wait times", "Reliable escalation", "Better customer confidence"],
    workflow: ["Request", "Classify", "Route", "Resolve", "Close loop"],
  },
  Finance: {
    icon: "coins" as IconName,
    bottlenecks: ["Invoices are followed up manually", "Approvals stall without visibility", "Reports take too long to prepare"],
    opportunities: ["Scheduled payment reminders", "Approval workflows with escalation", "Automated finance summaries"],
    impact: ["Faster collections", "Stronger control", "Less reporting admin"],
    workflow: ["Invoice", "Remind", "Escalate", "Reconcile", "Report"],
  },
  HR: {
    icon: "people" as IconName,
    bottlenecks: ["Employee requests arrive informally", "Onboarding steps get missed", "Records require repeated updates"],
    opportunities: ["Self-service request flows", "Automated onboarding journeys", "Connected employee records"],
    impact: ["Faster service", "Consistent onboarding", "Lower admin workload"],
    workflow: ["Request", "Validate", "Approve", "Update", "Notify"],
  },
  Operations: {
    icon: "workflow" as IconName,
    bottlenecks: ["Work ownership is unclear", "Teams chase status manually", "Managers learn about delays too late"],
    opportunities: ["Rules-based task assignment", "Automatic progress updates", "Exception and delay dashboards"],
    impact: ["Clear accountability", "Fewer handoff delays", "Real-time visibility"],
    workflow: ["Trigger", "Assign", "Execute", "Escalate", "Measure"],
  },
};

type AuditCategory = keyof typeof auditData;

function SectionIntro({ eyebrow, title, copy, light = false }: { eyebrow: string; title: string; copy?: string; light?: boolean }) {
  return (
    <div className="max-w-3xl">
      <p className={light ? "dark-eyebrow" : "eyebrow"}>{eyebrow}</p>
      <h2 className={`mt-5 text-balance text-4xl font-semibold leading-[1.03] tracking-[-0.04em] sm:text-5xl lg:text-6xl ${light ? "text-white" : "text-navy"}`}>{title}</h2>
      {copy ? <p className={`mt-5 max-w-2xl text-base leading-8 sm:text-lg ${light ? "text-slate-400" : "text-muted"}`}>{copy}</p> : null}
    </div>
  );
}

export default function AutomationSections() {
  const [category, setCategory] = useState<AuditCategory>("Sales");
  const active = auditData[category];

  return (
    <>
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <SectionIntro eyebrow="The real bottleneck" title="Most businesses do not have a technology problem. They have a process problem." copy="When everyday work relies on scattered messages, spreadsheets, memory, and manual chasing, growth creates more friction—not more freedom." />
            <div className="grid gap-4 sm:grid-cols-2">
              {problems.map((problem, index) => (
                <article key={problem.title} className="problem-card group rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:p-7">
                  <div className="flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl border border-slate-200 bg-white text-cyan-dark shadow-sm"><AutomationIcon name={problem.icon} className="h-6 w-6" /></span>
                    <span className="text-xs font-semibold tracking-[0.16em] text-slate-300">0{index + 1}</span>
                  </div>
                  <h3 className="mt-7 text-xl font-semibold tracking-tight text-navy">{problem.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{problem.copy}</p>
                  <p className="mt-5 flex items-center gap-2 text-xs font-semibold text-slate-500"><span className="h-1.5 w-1.5 rounded-full bg-amber-400" />{problem.signal}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="solutions" className="scroll-mt-20 bg-slate-50 py-20 sm:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionIntro eyebrow="What we automate" title="We turn manual processes into dependable workflows." copy="The goal is not more software. It is a smoother business—faster responses, cleaner handoffs, less admin, and better visibility." />
            <a href="#automation-audit" className="text-link group shrink-0">Find your best starting point <AutomationIcon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <article key={solution.title} className="solution-card group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
                <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-cyan/[0.035] transition-transform duration-500 group-hover:scale-150" />
                <div className="relative flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-navy text-cyan shadow-lg shadow-navy/10"><AutomationIcon name={solution.icon} className="h-6 w-6" /></span>
                  <span className="text-xs font-semibold tracking-[0.14em] text-slate-300">{solution.number}</span>
                </div>
                <h3 className="relative mt-7 text-xl font-semibold tracking-tight text-navy">{solution.title}</h3>
                <p className="relative mt-3 min-h-20 text-sm leading-7 text-muted">{solution.copy}</p>
                <div className="relative mt-6 flex flex-wrap gap-2">
                  {solution.tags.map((tag) => <span key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[0.65rem] font-semibold text-slate-500">{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="process" className="scroll-mt-20 overflow-hidden bg-navy py-20 sm:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionIntro light eyebrow="How it works" title="From manual work to managed automation." copy="A clear, practical path from the way work happens today to a system your team can trust tomorrow." />
            <div className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-xs font-medium text-slate-400"><span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald" />Designed around your real operation</div>
          </div>
          <div className="relative mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-[12%] right-[12%] top-10 hidden border-t border-dashed border-cyan/25 lg:block" />
            {steps.map((step, index) => (
              <article key={step.title} className="relative rounded-2xl border border-white/[0.1] bg-white/[0.045] p-6 backdrop-blur-sm">
                <div className="relative z-10 flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border border-cyan/20 bg-navy text-cyan shadow-xl"><AutomationIcon name={step.icon} className="h-6 w-6" /></span>
                  <span className="text-xs font-semibold tracking-[0.16em] text-cyan/50">{step.number}</span>
                </div>
                <h3 className="mt-8 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{step.copy}</p>
                {index < steps.length - 1 ? <span className="absolute -right-2 top-9 z-20 hidden h-4 w-4 rounded-full border-4 border-navy bg-cyan lg:block" /> : null}
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="use-cases" className="scroll-mt-20 bg-white py-20 sm:py-28">
        <Container>
          <SectionIntro eyebrow="Built for business outcomes" title="Automation use cases that make the working day work better." copy="Every workflow should earn its keep through a measurable improvement in speed, workload, service, control, or revenue." />
          <div className="mt-12 grid gap-x-10 border-y border-slate-200 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((item, index) => (
              <article key={item.title} className={`use-case group py-8 ${index < useCases.length - 3 ? "lg:border-b lg:border-slate-200" : ""} ${index < useCases.length - 2 ? "md:border-b md:border-slate-200" : ""}`}>
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cyan/10 text-cyan-dark transition group-hover:bg-cyan group-hover:text-navy"><AutomationIcon name={item.icon} /></span>
                  <div>
                    <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-emerald">{item.outcome}</p>
                    <h3 className="mt-2 text-lg font-semibold tracking-tight text-navy">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted">{item.copy}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="managed-automation" className="scroll-mt-20 bg-slate-50 py-20 sm:py-28">
        <Container>
          <div className="managed-panel relative isolate overflow-hidden rounded-[2rem] bg-navy p-6 sm:p-10 lg:p-14">
            <div className="absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-cyan/15 blur-[100px]" />
            <div className="grid gap-12 lg:grid-cols-[1.06fr_.94fr] lg:items-center lg:gap-20">
              <div>
                <SectionIntro light eyebrow="Managed automation" title="We do not just build automations. We manage them." copy="Your automation system should not break silently. We manage the workflows, infrastructure, monitoring, and improvements so your team can focus on running the business." />
                <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {managedBenefits.map((benefit) => (
                    <div key={benefit.title} className="rounded-xl border border-white/[0.1] bg-white/[0.045] p-3.5">
                      <AutomationIcon name={benefit.icon} className="h-5 w-5 text-cyan" />
                      <p className="mt-3 text-xs font-medium text-slate-300">{benefit.title}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/[0.12] bg-[#111d32] shadow-2xl shadow-black/20">
                <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4">
                  <div><p className="text-sm font-semibold text-white">Automation health</p><p className="mt-1 text-[0.65rem] text-slate-500">Live system monitoring</p></div>
                  <span className="rounded-full bg-emerald/10 px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-wider text-emerald">All systems operational</span>
                </div>
                <div className="grid grid-cols-3 border-b border-white/[0.08]">
                  {[["99.9%", "Uptime"], ["1,482", "Runs this month"], ["0", "Open errors"]].map(([value, label]) => <div key={label} className="border-r border-white/[0.08] p-4 last:border-0"><p className="text-xl font-semibold text-white">{value}</p><p className="mt-1 text-[0.6rem] uppercase tracking-wider text-slate-500">{label}</p></div>)}
                </div>
                <div className="space-y-3 p-5">
                  {[
                    ["Lead capture & routing", "Healthy", "2 min ago"],
                    ["Invoice reminder sequence", "Healthy", "18 min ago"],
                    ["Support SLA monitor", "Healthy", "34 min ago"],
                    ["Weekly operations report", "Scheduled", "Monday 8:00"],
                  ].map(([name, status, time], index) => (
                    <div key={name} className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.035] p-3.5">
                      <span className={`h-2 w-2 shrink-0 rounded-full ${index === 3 ? "bg-cyan" : "bg-emerald"}`} />
                      <span className="min-w-0 flex-1 truncate text-xs font-medium text-slate-200">{name}</span>
                      <span className="hidden text-[0.62rem] text-slate-500 sm:block">{time}</span>
                      <span className="text-[0.6rem] font-semibold text-emerald">{status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="automation-audit" className="scroll-mt-20 bg-white py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow justify-center">Interactive opportunity finder</p>
            <h2 className="mt-5 text-balance text-4xl font-semibold leading-[1.03] tracking-[-0.04em] text-navy sm:text-5xl lg:text-6xl">See what automation could fix in your business.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">Choose a function to reveal common bottlenecks, practical automation opportunities, and the business impact you can target.</p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-2" role="group" aria-label="Business function">
            {(Object.keys(auditData) as AuditCategory[]).map((item) => (
              <button key={item} type="button" onClick={() => setCategory(item)} aria-pressed={category === item} className={`audit-tab flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition ${category === item ? "border-navy bg-navy text-white shadow-lg shadow-navy/15" : "border-slate-200 bg-white text-slate-600 hover:border-cyan/40 hover:text-navy"}`}>
                <AutomationIcon name={auditData[item].icon} className={`h-4 w-4 ${category === item ? "text-cyan" : "text-slate-400"}`} />{item}
              </button>
            ))}
          </div>

          <div key={category} className="audit-result mt-8 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50 shadow-[0_30px_70px_-50px_rgba(15,23,42,.45)]">
            <div className="grid lg:grid-cols-[1fr_1fr_1fr]">
              {[
                ["Where work gets stuck", active.bottlenecks, "amber"],
                ["What we can automate", active.opportunities, "cyan"],
                ["The business impact", active.impact, "emerald"],
              ].map(([title, items, colour], columnIndex) => (
                <div key={title as string} className={`p-6 sm:p-8 ${columnIndex ? "border-t border-slate-200 lg:border-l lg:border-t-0" : ""}`}>
                  <div className="flex items-center gap-2">
                    <span className={`h-2 w-2 rounded-full ${colour === "amber" ? "bg-amber-400" : colour === "cyan" ? "bg-cyan" : "bg-emerald"}`} />
                    <h3 className="text-xs font-bold uppercase tracking-[0.13em] text-navy">{title as string}</h3>
                  </div>
                  <ul className="mt-6 space-y-4">
                    {(items as string[]).map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-600"><AutomationIcon name={colour === "amber" ? "clock" : "check"} className={`mt-0.5 h-4 w-4 shrink-0 ${colour === "amber" ? "text-amber-500" : colour === "cyan" ? "text-cyan-dark" : "text-emerald"}`} />{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="border-t border-slate-200 bg-white p-5 sm:p-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.13em] text-slate-400">Example {category.toLowerCase()} workflow</p>
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {active.workflow.map((item, index) => (
                      <span key={item} className="flex items-center gap-2"><span className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-navy">{item}</span>{index < active.workflow.length - 1 ? <AutomationIcon name="arrow" className="h-3.5 w-3.5 text-cyan-dark" /> : null}</span>
                    ))}
                  </div>
                </div>
                <Link href="/diagnostic" className="primary-button group shrink-0 px-6">Audit my {category.toLowerCase()} process <AutomationIcon name="arrow" className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white pb-20 sm:pb-28">
        <Container>
          <div className="final-cta relative isolate overflow-hidden rounded-[2rem] bg-cyan px-6 py-14 text-center sm:px-12 sm:py-20">
            <div className="absolute inset-0 -z-10 opacity-20 hero-grid" />
            <div className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-white/40 blur-[100px]" />
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-navy text-cyan shadow-xl shadow-cyan-dark/20"><AutomationIcon name="spark" className="h-7 w-7" /></span>
            <h2 className="mx-auto mt-7 max-w-4xl text-balance text-4xl font-semibold leading-[1.03] tracking-[-0.045em] text-navy sm:text-5xl lg:text-6xl">Ready to automate the work holding your business back?</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-navy/70 sm:text-lg">Book an automation audit. We will review your workflow, identify the bottlenecks, and show you where automation can improve speed, visibility, and performance.</p>
            <Link href="/diagnostic" className="mt-8 inline-flex min-h-14 items-center justify-center rounded-full bg-navy px-7 text-sm font-bold text-white shadow-xl shadow-cyan-dark/20 transition hover:-translate-y-0.5 hover:bg-slate-800">Book an Automation Audit <AutomationIcon name="arrow" className="ml-2 h-4 w-4" /></Link>
            <p className="mt-5 text-xs font-medium text-navy/60">No hard sell. Just a practical look at what could work better.</p>
          </div>
        </Container>
      </section>
    </>
  );
}

