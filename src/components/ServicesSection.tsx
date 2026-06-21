import { TOOLS } from "@/lib/constants";
import Container from "./Container";
import ImagePanel from "./ImagePanel";
import SectionHeading from "./SectionHeading";

export default function ServicesSection() {
  return (
    <section id="tools" className="section-shell bg-background py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Modern tools"
              title="Business outcomes first."
              description="We use AI, automation, custom software, data analytics, dashboards, and business systems as practical tools for improving operations."
            />
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted">
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
              className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-4 text-sm font-medium text-slate-700 shadow-sm"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
              {tool}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
