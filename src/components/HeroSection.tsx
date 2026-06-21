import Image from "next/image";
import Container from "./Container";

const heroMetrics = [
  "Cash flow",
  "Speed",
  "Visibility",
  "Productivity",
] as const;

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-navy pt-28 sm:pt-32 lg:min-h-[92vh] lg:pt-36">
      <div className="absolute inset-0 -z-10 hairline-grid opacity-55" />
      <Container className="pb-[4.5rem] sm:pb-24 lg:pb-28">
        <div className="grid gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
          <div>
            <p className="dark-eyebrow mb-5">
              Operations Engineering
            </p>
            <h1 className="text-balance text-5xl font-semibold leading-[0.96] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
              Engineering Better Business Operations.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Sentient Engineering helps organizations eliminate operational
              waste, improve execution, strengthen cash flow, and build systems
              that deliver measurable business performance.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#audit" className="primary-button px-6">
                Request an Operations Audit
              </a>
              <a
                href="#outcomes"
                className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full border border-white/30 bg-white/[0.03] px-6 text-sm font-semibold text-white transition hover:border-cyan-300 hover:bg-white/[0.07]"
              >
                See How We Improve Operations
              </a>
            </div>
            <p className="mt-8 max-w-xl border-l border-cyan/70 pl-4 text-sm leading-6 text-slate-400">
              <span className="text-white">
                Technology is our tool.
              </span>{" "}
              Efficient business operations are our product.
            </p>
          </div>

          <div className="premium-card-dark overflow-hidden rounded-xl">
            <div className="relative aspect-[4/3] sm:aspect-[16/12]">
              <Image
                src="/images/operations-review.png"
                alt="Executive operations review with operational dashboards and business performance visibility"
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/20 to-transparent" />
              <div className="absolute inset-x-4 bottom-4 sm:inset-x-6 sm:bottom-6">
                <div className="border border-white/10 bg-navy/80 p-4 backdrop-blur-md">
                  <p className="dark-eyebrow">
                    Business performance focus
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {heroMetrics.map((metric) => (
                      <div
                        key={metric}
                        className="flex items-center gap-2 border border-white/10 bg-white/[0.04] px-3 py-3 text-sm font-medium text-white"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
