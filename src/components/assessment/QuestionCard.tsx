import { ANSWER_SCALE } from "@/lib/assessment-data";

export default function QuestionCard({ question, dimension, value, onChange }: { question: string; dimension: string; value?: number; onChange: (value: number) => void }) {
  return (
    <fieldset>
      <legend className="sr-only">{question}</legend>
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan-dark">{dimension}</p>
      <h1 className="mt-4 max-w-4xl text-balance text-2xl font-semibold leading-tight tracking-[-0.025em] text-navy sm:text-4xl">{question}</h1>
      <p className="mt-4 text-sm leading-7 text-muted">Choose the response that best represents normal execution today—not the intended process or the best day.</p>
      <div className="mt-7 grid gap-3">
        {ANSWER_SCALE.map((option) => {
          const active = value === option.value;
          return (
            <label key={option.value} className={`flex cursor-pointer items-start gap-4 rounded-xl border p-4 transition sm:p-5 ${active ? "border-cyan bg-cyan/5 shadow-[0_0_0_1px_#06B6D4]" : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"}`}>
              <input type="radio" name="assessment-answer" value={option.value} checked={active} onChange={() => onChange(option.value)} className="sr-only" />
              <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg border text-xs font-bold ${active ? "border-cyan bg-cyan text-navy" : "border-slate-300 bg-white text-slate-500"}`}>{option.value}</span>
              <span><span className="block text-sm font-semibold text-navy sm:text-base">{option.label}</span><span className="mt-1 block text-sm leading-6 text-muted">{option.detail}</span></span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

