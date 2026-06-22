import AutomationIcon from "@/components/AutomationIcon";
import { ASSESSMENT_FUNCTIONS } from "@/lib/assessment-data";
import type { FunctionId } from "@/types/assessment";

export default function FunctionSelector({ onSelect }: { onSelect: (id: FunctionId) => void }) {
  return (
    <section id="function-selector" className="scroll-mt-24 bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="eyebrow">Start with one operating function</p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-[-0.035em] text-navy sm:text-5xl">Choose the Business Function You Want to Improve</h2>
          <p className="mt-5 text-base leading-8 text-muted">Select the function where manual work, weak visibility, or slow execution is creating the greatest business drag.</p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {ASSESSMENT_FUNCTIONS.map((item, index) => (
            <button key={item.id} type="button" onClick={() => onSelect(item.id)} className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-[0_25px_55px_-45px_rgba(15,23,42,.4)] transition hover:-translate-y-1 hover:border-cyan/40 hover:shadow-[0_32px_65px_-42px_rgba(15,23,42,.35)] ${index === 6 ? "lg:col-start-2" : ""}`}>
              <span className="absolute right-5 top-5 text-xs font-bold tracking-[0.15em] text-slate-300">0{index + 1}</span>
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-navy text-cyan"><AutomationIcon name={item.icon} className="h-6 w-6" /></span>
              <h3 className="mt-6 text-lg font-semibold text-navy">{item.name}</h3>
              <p className="mt-3 min-h-20 text-sm leading-7 text-muted">{item.description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-dark">Assess this function <AutomationIcon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

