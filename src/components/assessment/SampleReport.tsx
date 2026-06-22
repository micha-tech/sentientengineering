import { SAMPLE_RESULT } from "@/lib/scoring-engine";
import ScoreDashboard from "./ScoreDashboard";

export default function SampleReport({ onClose, onStart }: { onClose: () => void; onStart: () => void }) {
  return <main className="bg-background py-8 sm:py-12"><div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12"><div className="mb-6 flex items-center justify-between gap-4"><button type="button" onClick={onClose} className="text-sm font-semibold text-muted hover:text-navy">← Back to assessment</button><button type="button" onClick={onStart} className="primary-button min-h-11 px-5">Start My Assessment</button></div><ScoreDashboard result={SAMPLE_RESULT} isSample onRestart={onStart} /></div></main>;
}

