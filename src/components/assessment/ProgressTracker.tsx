export default function ProgressTracker({ current, total, label }: { current: number; total: number; label: string }) {
  const progress = Math.round((current / total) * 100);
  return (
    <div>
      <div className="flex items-center justify-between gap-4 text-xs font-semibold">
        <span className="uppercase tracking-[0.13em] text-muted">{label}</span>
        <span className="text-navy">{current} of {total}</span>
      </div>
      <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200" aria-label={`${progress}% complete`}>
        <div className="h-full rounded-full bg-cyan transition-[width] duration-300" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}

