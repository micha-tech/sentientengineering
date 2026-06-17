import Container from "./Container";

export default function FinalCTASection() {
  return (
    <section id="audit" className="section-shell bg-black py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase text-zinc-500">
            Start with an Operations Audit
          </p>
          <h2 className="mt-5 text-balance text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
            Every inefficient process costs your business money.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            Let&apos;s find where your operations are leaking time, cash, and
            performance.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="mailto:hello@sentientengineering.com?subject=Operations%20Audit%20Request"
              className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-black transition hover:bg-zinc-200"
            >
              Request an Operations Audit
            </a>
            <a
              href="mailto:hello@sentientengineering.com?subject=Executive%20Operations%20Consultation"
              className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.03] px-6 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
            >
              Schedule an Executive Consultation
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
