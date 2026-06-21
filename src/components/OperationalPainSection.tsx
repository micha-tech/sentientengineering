import { PROBLEMS } from "@/lib/constants";
import Container from "./Container";

export default function OperationalPainSection() {
  return (
    <section className="section-shell bg-background py-16 sm:py-24">
      <Container>
        <div className="max-w-4xl">
          <p className="eyebrow">
            The business problem
          </p>
          <h2 className="mt-5 text-balance text-3xl font-semibold text-navy sm:text-5xl">
            Most businesses are losing money through inefficient operations.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
            Slow approvals. Manual work. Poor visibility. Delayed collections.
            Rework. Bottlenecks. Disconnected teams. These problems quietly
            reduce profit, cash flow, productivity, and customer experience.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-2">
          {PROBLEMS.map((problem) => (
            <span
              key={problem}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm"
            >
              {problem}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
