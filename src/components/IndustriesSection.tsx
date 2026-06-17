import { INDUSTRIES } from "@/lib/constants";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

export default function IndustriesSection() {
  return (
    <section id="industries" className="section-shell bg-black py-16 sm:py-24">
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
              className="border border-white/[0.08] bg-white/[0.03] px-4 py-4 text-sm font-medium text-zinc-300"
            >
              {industry}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
