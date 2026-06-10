import { INDUSTRIES } from "@/lib/constants";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

export default function IndustriesSection() {
  return (
    <section className="section-shell bg-black py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Industries"
          title="Built for organizations where operational complexity compounds quickly."
          description="The method is industry-aware but not tool-led. We adapt to how value moves through your business."
        />
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {INDUSTRIES.map((industry) => (
            <div
              key={industry}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.035] px-4 py-5 text-sm font-medium text-zinc-300 transition hover:border-white/18 hover:bg-white/[0.06] hover:text-white"
            >
              {industry}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
