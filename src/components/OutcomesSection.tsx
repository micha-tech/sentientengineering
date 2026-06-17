import { OUTCOMES } from "@/lib/constants";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

export default function OutcomesSection() {
  return (
    <section id="outcomes" className="section-shell bg-black py-16 sm:py-24">
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
              className="premium-card rounded-lg p-5 sm:p-6"
            >
              <p className="text-xs font-semibold uppercase text-zinc-600">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-6 text-xl font-semibold text-white">
                {outcome.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-zinc-400">
                {outcome.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
