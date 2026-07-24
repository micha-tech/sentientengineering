import Image from "next/image";
import Link from "next/link";
import Container from "./Container";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#041619] pt-20 text-white">
      <div className="pointer-events-none absolute -left-40 top-32 h-96 w-96 rounded-full bg-[#8fd3bf]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-2/3 bg-[radial-gradient(circle_at_70%_42%,rgba(26,113,92,0.2),transparent_52%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,.55)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.55)_1px,transparent_1px)] [background-size:52px_52px]" />

      <Container className="relative z-10">
        <div className="grid min-h-[calc(100svh-5rem)] items-center gap-12 py-14 lg:grid-cols-[1.03fr_0.97fr] lg:gap-10 lg:py-20">
          <div className="max-w-3xl motion-safe:animate-[hero-reveal_700ms_ease-out_both]">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#a9dfcf]">
              <span className="h-2 w-2 rounded-full bg-[#8fd3bf] shadow-[0_0_14px_#8fd3bf]" />
              Applied AI Engineering
            </div>
            <h1 className="mt-7 max-w-3xl text-balance text-[2.65rem] font-semibold leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-[4.6rem]">
              Intelligence built to move{" "}
              <span className="text-[#8fd3bf]">real operations</span> forward.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              We engineer AI systems that see, decide, automate, and improve
              how businesses and industries work.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="primary-button px-6" href="#contact">
                Discuss Your Project
                <span aria-hidden="true" className="ml-3">↗</span>
              </a>
              <Link className="ghost-button px-6" href="/services">
                Explore Our Capabilities
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-6 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
              <span>Enterprise AI</span>
              <span>Automation</span>
              <span>Computer Vision</span>
              <span>Decision Intelligence</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[38rem] lg:mx-0">
            <div className="absolute -inset-5 rounded-[2rem] border border-[#8fd3bf]/15 bg-[#8fd3bf]/[0.03]" />
            <div className="relative aspect-[1.03/1] overflow-hidden rounded-[1.5rem] border border-white/15 bg-[#08252a] shadow-[0_30px_90px_rgba(0,0,0,0.38)]">
              <Image
                src="/images/hero-cover.jpg"
                alt="Applied AI engineering connecting digital intelligence with industrial operations"
                fill
                priority
                sizes="(min-width: 1024px) 48vw, 92vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,22,25,0.04)_35%,rgba(4,22,25,0.9)_100%)]" />
              <div className="absolute inset-x-5 bottom-5 rounded-xl border border-white/15 bg-[#06191d]/85 p-4 backdrop-blur-md sm:inset-x-7 sm:bottom-7 sm:p-5">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8fd3bf]">
                    Intelligent system
                  </p>
                  <span className="rounded-full bg-[#8fd3bf]/15 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-[#a9dfcf]">
                    Operational
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {["Sense", "Reason", "Act"].map((item, index) => (
                    <div key={item} className="rounded-lg bg-white/[0.06] px-3 py-3">
                      <p className="text-[0.62rem] text-slate-500">0{index + 1}</p>
                      <p className="mt-1 text-sm font-semibold text-white">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -right-2 top-10 hidden rounded-xl border border-white/15 bg-[#0a292e]/90 px-4 py-3 shadow-xl backdrop-blur-md sm:block">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-slate-400">System state</p>
              <p className="mt-1 flex items-center gap-2 text-sm font-semibold text-white">
                <span className="h-2 w-2 rounded-full bg-[#8fd3bf]" />
                Learning continuously
              </p>
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10 bg-white/[0.025]">
        <Container>
          <div className="grid divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {[
              ["Integrated", "Built around your existing workflows and data"],
              ["Production-ready", "Secure, observable, and maintainable"],
              ["Outcome-driven", "Measured against operational performance"],
            ].map(([title, copy]) => (
              <div key={title} className="py-5 sm:px-6 sm:first:pl-0">
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">{copy}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
