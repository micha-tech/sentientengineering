"use client";

import { useState } from "react";
import { DEPARTMENTS, type DepartmentName } from "./diagnostic-data";

export default function DepartmentTransformation() {
  const [active, setActive] = useState<DepartmentName>("Sales");
  const department = DEPARTMENTS[active];

  return (
    <section id="transformation" className="bg-background py-16 sm:py-24" aria-labelledby="transformation-title">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="eyebrow">See the transformation</p>
          <h2 id="transformation-title" className="mt-4 text-balance text-3xl font-semibold text-navy sm:text-5xl">
            See how better operating systems change the work.
          </h2>
          <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
            Select a business function to explore the shift from manual coordination to controlled, measurable execution.
          </p>
        </div>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Business departments">
          {(Object.keys(DEPARTMENTS) as DepartmentName[]).map((name) => (
            <button
              key={name}
              type="button"
              role="tab"
              aria-selected={active === name}
              onClick={() => setActive(name)}
              className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-semibold transition ${
                active === name
                  ? "border-navy bg-navy text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:border-cyan hover:text-navy"
              }`}
            >
              {name}
            </button>
          ))}
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_24px_70px_-50px_rgba(15,23,42,.4)]">
          <div className="border-b border-slate-200 px-5 py-6 sm:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-dark">{active} operating model</p>
                <h3 className="mt-2 max-w-3xl text-2xl font-semibold text-navy">{department.statement}</h3>
              </div>
              <div className="w-fit rounded-xl border border-emerald/20 bg-emerald/5 px-4 py-3">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-slate-500">Outcome focus</p>
                <p className="mt-1 text-sm font-semibold text-navy">{department.metric}</p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1fr_auto_1fr]">
            <div className="p-5 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Before — fragmented operations</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {department.before.map((item) => (
                  <div key={item} className="flex min-h-20 items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-slate-400" />
                    <p className="text-sm font-medium leading-6 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden w-px bg-slate-200 lg:block">
              <span className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-cyan/30 bg-white text-cyan-dark">→</span>
            </div>

            <div className="border-t border-slate-200 bg-emerald/[0.035] p-5 sm:p-8 lg:border-l-0 lg:border-t-0">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald">After — engineered execution</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {department.after.map((item) => (
                  <div key={item} className="flex min-h-20 items-start gap-3 rounded-xl border border-emerald/20 bg-white p-4">
                    <span className="mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-emerald text-[0.6rem] font-bold text-white">✓</span>
                    <p className="text-sm font-semibold leading-6 text-navy">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
