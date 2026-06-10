import Container from "./Container";
import ImagePanel from "./ImagePanel";

export default function PositioningSection() {
  return (
    <section className="section-shell bg-black py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-500">
              Positioning
            </p>
            <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
              Most businesses do not have a technology problem. They have an
              operations problem.
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
              New tools rarely fix unclear ownership, slow approvals, duplicated
              work, missing data, or fragile workflows. We start with the
              operating model, then engineer the systems that make performance
              visible and repeatable.
            </p>
          </div>
          <ImagePanel
            src="/images/operations-review.png"
            alt="Executives reviewing monochrome operational dashboards in a dark boardroom"
            caption="Operational performance review"
            priority
          />
        </div>
      </Container>
    </section>
  );
}
