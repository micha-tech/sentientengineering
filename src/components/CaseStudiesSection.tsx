import { PROOF_POINTS } from "@/lib/constants";
import Container from "./Container";

export default function CaseStudiesSection() {
  return (
    <section className="border-t border-white/10 bg-navy py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <p className="dark-eyebrow">
              Why Sentient Engineering
            </p>
            <h2 className="mt-5 text-balance text-3xl font-semibold text-white sm:text-5xl">
              We are not here to sell tools.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              We are here to improve how your business operates. We combine
              operational thinking, process improvement, automation, AI, custom
              software, and data analytics to solve real business problems and
              deliver measurable performance improvement.
            </p>
          </div>
          <div className="grid gap-3">
            {PROOF_POINTS.map((point, index) => (
              <div
                key={point}
                className="grid gap-4 rounded-xl border border-white/10 bg-white/[0.045] p-5 sm:grid-cols-[3rem_1fr]"
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-base leading-7 text-slate-200">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
