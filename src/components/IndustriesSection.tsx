import { INDUSTRIES } from "@/lib/constants";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

export default function IndustriesSection() {
  return (
    <section id="industries" className="section-shell bg-background py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Industries"
          title="For organizations where operational complexity affects growth."
          description="We work across sectors where delays, poor visibility, manual coordination, cash flow pressure, and inconsistent execution directly affect performance."
        />
        <div className="mt-10 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((industry) => (
            <div
              key={industry}
              className="rounded-lg border border-slate-200 bg-white px-4 py-4 text-sm font-medium text-slate-700 shadow-sm"
            >
              {industry}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
