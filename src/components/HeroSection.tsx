import Link from "next/link";
import Container from "./Container";
import TypingValueLine from "./TypingValueLine";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#030d0f] pt-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_5%,rgba(64,164,137,0.46),transparent_38%),radial-gradient(circle_at_15%_35%,rgba(27,94,88,0.34),transparent_30%),linear-gradient(180deg,#10251c_0%,#061315_48%,#020809_100%)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(143,211,191,.45)_1px,transparent_1px),linear-gradient(90deg,rgba(143,211,191,.45)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 opacity-70 sm:h-[58rem] sm:w-[58rem]"
      >
        <div className="absolute inset-[16%] rotate-[18deg] scale-y-[0.42]">
          <div className="relative h-full w-full rounded-full border border-[#8fd3bf]/20 motion-safe:animate-[electron-orbit_18s_linear_infinite]">
            <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 scale-y-[2.35] rounded-full bg-[#8fd3bf] shadow-[0_0_18px_5px_rgba(143,211,191,0.55)]" />
          </div>
        </div>
        <div className="absolute inset-[23%] rotate-[78deg] scale-y-[0.48]">
          <div className="relative h-full w-full rounded-full border border-[#8fd3bf]/15 motion-safe:animate-[electron-orbit_reverse_14s_linear_infinite]">
            <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 scale-y-[2.08] rounded-full bg-white shadow-[0_0_15px_4px_rgba(255,255,255,0.38)]" />
          </div>
        </div>
        <div className="absolute inset-[30%] -rotate-[42deg] scale-y-[0.5]">
          <div className="relative h-full w-full rounded-full border border-[#8fd3bf]/20 motion-safe:animate-[electron-orbit_11s_linear_infinite]">
            <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 scale-y-[2] rounded-full bg-[#8fd3bf] shadow-[0_0_12px_3px_rgba(143,211,191,0.5)]" />
          </div>
        </div>
        <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8fd3bf]/10 blur-xl" />
      </div>

      <Container className="relative z-10">
        <div className="flex min-h-[calc(100svh-5rem)] items-center justify-center py-14 text-center sm:py-20">
          <div className="w-full motion-safe:animate-[hero-reveal_700ms_ease-out_both]">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8fd3bf]">
              Sentient Engineering · Applied AI Engineering
            </p>
            <div className="mt-8">
              <p className="mx-auto inline-flex rounded-full border border-[#8fd3bf]/30 bg-[#8fd3bf]/10 px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#a9dfcf]">
                Built for real business outcomes
              </p>
              <h1 className="mx-auto mt-6 max-w-5xl text-balance text-[2.55rem] font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                AI systems that help businesses sell faster, operate leaner,
                and make better decisions.
              </h1>
            </div>
            <TypingValueLine />
            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-300 sm:text-lg sm:leading-8">
              We transform manual workflows, disconnected data, slow customer
              response, and operational blind spots into reliable production
              systems.
            </p>
            <div className="mx-auto mt-8 grid max-w-md grid-cols-2 gap-2 sm:flex sm:max-w-none sm:justify-center sm:gap-3">
              <a
                className="primary-button px-3 text-xs sm:px-6 sm:text-sm"
                href="#contact"
              >
                Discuss Your Project
              </a>
              <Link
                className="ghost-button px-3 text-xs sm:px-6 sm:text-sm"
                href="/services"
              >
                Explore Our Capabilities
              </Link>
            </div>
            <p className="mx-auto mt-8 max-w-3xl border-t border-white/10 pt-5 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 sm:text-sm">
              Intelligent automation · Computer vision · Enterprise AI ·
              Decision intelligence
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
