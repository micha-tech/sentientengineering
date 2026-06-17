import { TOOLS } from "@/lib/constants";
import Container from "./Container";
import ImagePanel from "./ImagePanel";
import SectionHeading from "./SectionHeading";

export default function ServicesSection() {
  return (
    <section id="tools" className="section-shell bg-black py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Modern tools"
              title="Business outcomes first."
              description="We use AI, automation, custom software, data analytics, dashboards, and business systems as practical tools for improving operations."
            />
            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400">
              The goal is never technology for its own sake. The goal is better
              execution, lower waste, stronger visibility, and measurable
              business performance.
            </p>
          </div>
          <ImagePanel
            src="/images/dashboard.jpg"
            alt="Operational dashboards and business intelligence used to improve business operations"
            caption="Operational visibility and business intelligence"
          />
        </div>
        <div className="mt-10 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-5">
          {TOOLS.map((tool) => (
            <div
              key={tool}
              className="border border-white/[0.08] bg-white/[0.03] px-4 py-4 text-sm font-medium text-zinc-300"
            >
              {tool}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
