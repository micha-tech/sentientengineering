import { SENTIENT_METHOD } from "@/lib/constants";
import Container from "./Container";
import ImagePanel from "./ImagePanel";
import SectionHeading from "./SectionHeading";

export default function SentientMethodSection() {
  return (
    <section id="method" className="border-t border-white/10 bg-navy py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="grid gap-8">
            <SectionHeading
              eyebrow="How we work"
              title="Diagnose the operation. Build what improves performance."
              description="We do not simply advise. We diagnose, design, build, improve, measure, and optimize business operations."
              tone="dark"
            />
            <ImagePanel
              src="/images/workflow-map.png"
              alt="Business process optimization map used for an operations audit"
              caption="Operations audit and process diagnosis"
              className="hidden lg:block"
            />
          </div>
          <div className="grid gap-3">
            {SENTIENT_METHOD.map((step, index) => (
              <article
                key={step.title}
                className="grid gap-4 rounded-xl border border-white/10 bg-white/[0.045] p-5 sm:grid-cols-[3.5rem_1fr] sm:p-6"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full border border-cyan/30 bg-cyan/10 text-sm font-semibold text-cyan-300">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
