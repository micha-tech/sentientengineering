import Image from "next/image";
import Container from "./Container";

export default function HeroSection() {
  return (
    <section className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden bg-[#071b20] text-white md:min-h-[760px]">
      <Image
        src="/images/automation-hero-banner.png"
        alt="Sentient Engineering intelligent systems hero artwork"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-30 hidden object-cover object-top md:block"
      />
      <Image
        src="/images/hero-cover.jpg"
        alt="Sentient Engineering hero artwork for applied AI and intelligent systems"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-30 object-cover object-[58%_center] md:hidden"
      />

      <div className="absolute inset-0 -z-20 bg-[#071b20]/34 md:bg-transparent" />
      <div className="absolute inset-y-0 left-0 -z-10 w-full bg-[#041b2f] md:w-[55%]" />
      <div className="absolute inset-y-0 left-[55%] -z-10 hidden w-[18%] bg-gradient-to-r from-[#041b2f] to-transparent md:block" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-[#041b2f]/92 to-transparent" />

      <Container>
        <div className="flex min-h-[calc(100svh-5rem)] items-center pb-10 pt-24 md:min-h-[760px] md:pb-12 md:pt-28">
          <div className="max-w-3xl md:max-w-[760px]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#67dfff] md:text-sm">
              Applied AI and intelligent systems engineering
            </p>
            <h1 className="mt-5 max-w-4xl text-balance text-5xl font-semibold leading-[1.04] md:text-[4.65rem] md:leading-[1.06]">
              Intelligent Systems for Business and Industry
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
              Sentient Engineering designs and deploys applied AI, machine
              learning, computer vision, robotics, automation, and decision
              systems for real business and industrial operations.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#67dfff] px-8 text-sm font-bold text-[#041b2f] shadow-[0_0_28px_rgba(103,223,255,0.35)] transition hover:-translate-y-0.5 hover:bg-[#8ce8ff]"
                href="#contact"
              >
                Talk to an Engineer
              </a>
              <a
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/20 bg-white/[0.05] px-8 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-[#67dfff]/70 hover:bg-white/[0.08]"
                href="#capabilities"
              >
                Explore Capabilities
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
