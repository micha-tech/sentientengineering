import { METRICS } from "@/lib/constants";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

export default function MetricsSection() {
  return (
    <section id="metrics" className="section-shell bg-black py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <SectionHeading
            eyebrow="Metrics we improve"
            title="If it cannot be measured, it cannot be improved consistently."
            description="Every operations review connects process improvement, business process automation, data analytics, and business systems to practical operating metrics."
          />
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {METRICS.map((metric) => (
              <div
                key={metric}
                className="min-h-24 border border-white/[0.08] bg-white/[0.03] p-4 text-sm font-medium leading-6 text-zinc-200"
              >
                {metric}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
