const phases = [
  { number: "01", name: "Stabilize", timeframe: "Foundation", copy: "Document the process, centralize records, assign owners, remove obvious manual gaps, and establish baseline reporting." },
  { number: "02", name: "Automate", timeframe: "Workflow", copy: "Introduce workflows, reminders, alerts, approvals, integrations, dashboards, and dependable automated handoffs." },
  { number: "03", name: "Intelligence", timeframe: "Optimization", copy: "Add AI assistance, prediction, recommendations, anomaly detection, self-service, and executive decision support." },
];

export default function RoadmapTimeline() {
  return (
    <div className="relative grid gap-4 lg:grid-cols-3">
      <div className="absolute left-[15%] right-[15%] top-7 hidden border-t border-dashed border-cyan/30 lg:block" />
      {phases.map((phase, index) => (
        <article key={phase.name} className="relative rounded-xl border border-slate-200 bg-slate-50 p-5">
          <div className="relative z-10 flex items-center justify-between"><span className="grid h-11 w-11 place-items-center rounded-xl bg-navy text-xs font-bold text-cyan">{phase.number}</span><span className="text-[0.65rem] font-bold uppercase tracking-[0.13em] text-slate-400">{phase.timeframe}</span></div>
          <h4 className="mt-5 text-lg font-semibold text-navy">Phase {index + 1}: {phase.name}</h4>
          <p className="mt-3 text-sm leading-7 text-muted">{phase.copy}</p>
        </article>
      ))}
    </div>
  );
}

