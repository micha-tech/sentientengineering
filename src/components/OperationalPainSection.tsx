import { PROBLEMS } from "@/lib/constants";
import Container from "./Container";

export default function OperationalPainSection() {
  return (
    <section className="section-shell bg-black py-16 sm:py-24">
      <Container>
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase text-zinc-500">
            The business problem
          </p>
          <h2 className="mt-5 text-balance text-3xl font-semibold text-white sm:text-5xl">
            Most businesses are losing money through inefficient operations.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
            Slow approvals. Manual work. Poor visibility. Delayed collections.
            Rework. Bottlenecks. Disconnected teams. These problems quietly
            reduce profit, cash flow, productivity, and customer experience.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-2">
          {PROBLEMS.map((problem) => (
            <span
              key={problem}
              className="rounded-full border border-white/[0.08] bg-white/[0.035] px-4 py-2 text-sm text-zinc-300"
            >
              {problem}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
