import { OUTCOMES } from "@/lib/constants";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

export default function OutcomesSection() {
  return (
    <section id="outcomes" className="section-shell bg-white py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="What we improve"
          title="Business outcomes first. Technology second."
          description="We engineer better operations around the results leaders actually care about: cash, speed, control, productivity, customer experience, and measurable ROI."
        />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {OUTCOMES.map((outcome, index) => (
            <article
              key={outcome.title}
              className="premium-card relative overflow-hidden rounded-xl p-5 sm:p-6"
            >
              <span className="absolute inset-x-0 top-0 h-1 bg-emerald" />
              <p className="text-xs font-semibold uppercase tracking-widest text-navy">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-6 text-xl font-semibold text-navy">
                {outcome.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted">
                {outcome.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
