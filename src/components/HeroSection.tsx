import Link from "next/link";
import Container from "./Container";
import TechnicalSystemDiagram from "./TechnicalSystemDiagram";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-black pt-[4.5rem] text-white">
      <div className="pointer-events-none absolute left-[-14rem] top-[-10rem] h-[36rem] w-[36rem] rounded-full bg-[#1f5eff]/15 blur-[130px]" aria-hidden="true" />
      <Container className="relative border-x border-white/15 px-0">
        <div className="grid min-h-[calc(100svh-4.5rem)] lg:grid-cols-[1.08fr_0.92fr]">
          <div className="flex flex-col justify-between border-b border-white/15 p-6 py-10 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
            <div className="flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white/45">
              <span className="h-px w-10 bg-[#83a8ff]" />
              Lagos · Nigeria · Africa
            </div>

            <div className="mt-24 motion-safe:animate-[hero-reveal_700ms_ease-out_both] lg:mt-16">
              <p className="eyebrow text-[#83a8ff]">Applied AI Engineering</p>
              <h1 className="mt-7 max-w-5xl text-balance text-[2.7rem] font-medium leading-[0.96] tracking-[-0.06em] sm:text-6xl lg:text-[4.25rem] xl:text-[4.65rem]">
                Applied AI Engineering for Business, Science and Industry.
              </h1>
              <p className="mt-7 max-w-3xl text-sm leading-7 text-white/60 sm:text-lg sm:leading-8">
                Sentient Engineering builds complete intelligent systems—from AI customer operations and commerce platforms to computer vision, speech recognition, biometric identity, vibration analysis, acoustic intelligence and predictive maintenance.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="inline-flex min-h-13 items-center justify-center bg-white px-6 text-sm font-bold text-black transition hover:bg-[#83a8ff]">
                  Discuss Your Engineering Problem
                </Link>
                <Link href="/services" className="inline-flex min-h-13 items-center justify-center border border-white/25 px-6 text-sm font-bold text-white transition hover:border-white hover:bg-white/5">
                  Explore What We Build
                </Link>
              </div>
            </div>

            <p className="mt-16 max-w-xl border-t border-white/15 pt-5 text-xs leading-6 text-white/40">
              Technology is a tool. The real product is better business performance.
            </p>
          </div>

          <div className="flex items-center bg-[#070707] p-5 sm:p-8 lg:p-10">
            <TechnicalSystemDiagram className="w-full" />
          </div>
        </div>
      </Container>
    </section>
  );
}
