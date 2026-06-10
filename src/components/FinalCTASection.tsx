import Container from "./Container";

export default function FinalCTASection() {
  return (
    <section id="audit" className="section-shell bg-black py-20 sm:py-28">
      <Container>
        <div className="premium-card relative isolate overflow-hidden rounded-[2rem] px-5 py-12 text-center sm:px-8 sm:py-16 lg:px-16">
          <div className="absolute left-1/2 top-0 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-white/[0.08] blur-3xl" />
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-500">
            Start with clarity
          </p>
          <h2 className="mx-auto mt-5 max-w-4xl text-balance text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Find the operational constraints limiting cost, speed, visibility,
            and scale.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            An Operations Audit gives leadership a clear view of where
            performance is leaking, what it costs, and which improvements should
            happen first.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="mailto:hello@sentientengineering.com?subject=Operations%20Audit%20Request"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-black transition hover:bg-zinc-200"
            >
              Book an Operations Audit
            </a>
            <a
              href="mailto:hello@sentientengineering.com?subject=Discuss%20an%20Operational%20Challenge"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.03] px-6 text-sm font-medium text-white transition hover:bg-white/[0.08]"
            >
              Discuss Your Challenge
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
