import { PILLARS } from "./diagnostic-data";
import type { DiagnosticResult } from "./scoring";

type Props = {
  result: DiagnosticResult;
  isSample?: boolean;
  companyName?: string;
  onStartDiagnostic?: () => void;
};

function ScoreRing({ score }: { score: number }) {
  return (
    <div
      className="relative grid h-44 w-44 place-items-center rounded-full sm:h-52 sm:w-52"
      style={{ background: `conic-gradient(#06B6D4 ${score * 3.6}deg, rgba(255,255,255,.09) 0deg)` }}
      aria-label={`Overall score ${score} out of 100`}
    >
      <div className="grid h-[84%] w-[84%] place-items-center rounded-full bg-navy text-center">
        <div>
          <p className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">{score}</p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">out of 100</p>
        </div>
      </div>
    </div>
  );
}

function StatusCard({ label, value, tone }: { label: string; value: string; tone: "cyan" | "emerald" | "amber" }) {
  const styles = {
    cyan: "border-cyan/20 bg-cyan/10 text-cyan-300",
    emerald: "border-emerald/20 bg-emerald/10 text-emerald-300",
    amber: "border-amber-400/20 bg-amber-400/10 text-amber-200",
  };
  return (
    <div className={`rounded-xl border p-4 ${styles[tone]}`}>
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-slate-400">{label}</p>
      <p className="mt-2 text-lg font-semibold text-white">{value}</p>
    </div>
  );
}

export default function ExecutiveReport({ result, isSample = false, companyName, onStartDiagnostic }: Props) {
  const mailSubject = encodeURIComponent("Business Systems Review Request");
  const mailBody = encodeURIComponent(
    `I would like to discuss our Business Growth & Operations Diagnostic${companyName ? ` for ${companyName}` : ""}. Overall score: ${result.overall}/100.`,
  );

  return (
    <section aria-labelledby="report-title" className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_30px_90px_-55px_rgba(15,23,42,.4)]">
      <div className="bg-navy px-5 py-7 sm:px-8 sm:py-10 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-3">
              <p className="dark-eyebrow">Executive diagnostic report</p>
              {isSample ? (
                <span className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-xs font-semibold text-slate-300">
                  Fictional sample
                </span>
              ) : null}
            </div>
            <h2 id="report-title" className="mt-4 text-balance text-3xl font-semibold text-white sm:text-5xl">
              {isSample ? "A growing service business with preventable operating leakage." : `${companyName || "Your business"}: operations opportunity profile.`}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
              This report identifies operating maturity, control gaps, and practical opportunities. It is directional—not a promise of exact financial return.
            </p>
          </div>
          <div className="shrink-0 self-center">
            <ScoreRing score={result.overall} />
          </div>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <StatusCard label="Business maturity" value={result.maturity} tone="cyan" />
          <StatusCard label="Revenue leakage risk" value={result.risk} tone="amber" />
          <StatusCard label="Opportunity level" value={result.opportunity} tone="emerald" />
          <StatusCard label="Automation opportunity" value={`${result.automationScore}/100`} tone="emerald" />
        </div>
      </div>

      <div className="grid gap-8 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
        <div>
          <p className="eyebrow">Five-pillar performance</p>
          <div className="mt-6 space-y-5">
            {PILLARS.map((pillar) => {
              const score = result.pillarScores[pillar.id];
              return (
                <div key={pillar.id}>
                  <div className="mb-2 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-navy">{pillar.name}</p>
                      <p className="mt-1 hidden text-xs text-muted sm:block">{pillar.description}</p>
                    </div>
                    <span className="text-sm font-semibold text-navy">{score}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full rounded-full bg-cyan transition-[width] duration-700" style={{ width: `${score}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-xl border border-emerald/20 bg-emerald/5 p-5 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-navy">Estimated impact areas</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {result.impacts.map((impact) => (
              <div key={impact} className="flex items-center gap-3 rounded-lg border border-emerald/20 bg-white px-4 py-3 text-sm font-semibold text-navy">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald/10 text-emerald" aria-hidden="true">↗</span>
                {impact}
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm leading-6 text-slate-600">
            Faster lead response may improve conversion consistency. Workflow automation can reduce administrative workload, while better reporting can improve management control.
          </p>
        </div>
      </div>

      <div className="grid border-t border-slate-200 lg:grid-cols-2">
        <div className="px-5 py-8 sm:px-8 lg:px-12">
          <p className="eyebrow">Top business bottlenecks</p>
          <ol className="mt-6 space-y-4">
            {result.bottlenecks.map((item, index) => (
              <li key={item} className="flex gap-4">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-navy text-xs font-semibold text-white">{index + 1}</span>
                <p className="pt-1 text-sm leading-6 text-slate-700">{item}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="border-t border-slate-200 bg-slate-50 px-5 py-8 sm:px-8 lg:border-l lg:border-t-0 lg:px-12">
          <p className="eyebrow">Priority automation opportunities</p>
          <ol className="mt-6 space-y-4">
            {result.opportunities.map((item, index) => (
              <li key={item} className="flex gap-4">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-cyan text-xs font-semibold text-navy">{index + 1}</span>
                <p className="pt-1 text-sm leading-6 text-slate-700">{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="border-t border-slate-200 px-5 py-8 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow">Suggested systems roadmap</p>
            <h3 className="mt-3 text-2xl font-semibold text-navy">Stabilize control before scaling automation.</h3>
          </div>
          <p className="max-w-xl text-sm leading-6 text-muted">Sequence improvements around business risk and operational value. Validate workflows before selecting or building technology.</p>
        </div>
        <div className="mt-7 grid gap-3 lg:grid-cols-3">
          {[
            ["01", "Control", "Define ownership, service levels, pipeline stages, and decision-grade KPIs."],
            ["02", "Connect", "Create reliable records and connect the workflows that affect revenue and customers."],
            ["03", "Automate & optimize", "Automate repeatable work, instrument performance, and improve from evidence."],
          ].map(([number, title, copy]) => (
            <article key={number} className="rounded-xl border border-slate-200 p-5">
              <p className="text-xs font-semibold tracking-[0.16em] text-cyan-dark">PHASE {number}</p>
              <h4 className="mt-3 text-lg font-semibold text-navy">{title}</h4>
              <p className="mt-2 text-sm leading-6 text-muted">{copy}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 bg-navy px-5 py-8 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="dark-eyebrow">Turn insight into an operating plan</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">Book a 30-Minute Business Systems Review.</h3>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            {isSample ? (
              <button type="button" onClick={onStartDiagnostic} className="primary-button px-6">Start My Diagnostic</button>
            ) : (
              <a href={`mailto:hello@sentientengineering.com?subject=${mailSubject}&body=${mailBody}`} className="primary-button px-6">Book My Systems Review</a>
            )}
            <a href={`mailto:hello@sentientengineering.com?subject=${encodeURIComponent("Send My Diagnostic Report")}`} className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:border-cyan hover:bg-white/[0.06]">
              Send My Report to Email
            </a>
            <a href="#transformation" className="inline-flex min-h-[3.25rem] items-center justify-center px-3 text-sm font-semibold text-cyan transition hover:text-white">
              Explore Automation Opportunities
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
