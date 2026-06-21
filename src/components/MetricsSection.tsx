import { METRICS } from "@/lib/constants";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

export default function MetricsSection() {
  return (
    <section id="metrics" className="section-shell bg-white py-16 sm:py-24">
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
                className="min-h-24 rounded-lg border border-emerald/20 bg-emerald/5 p-4 text-sm font-semibold leading-6 text-navy"
              >
                <span className="mb-3 block h-2 w-2 rounded-full bg-emerald" />
                {metric}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
