import Image from "next/image";
import Container from "./Container";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#071b20] pt-28 text-white sm:pt-32 lg:min-h-[760px] lg:pt-36">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(135deg,#071b20_0%,#0d2a32_48%,#f5f7f3_100%)]" />
      <div className="absolute inset-y-0 right-0 -z-10 hidden w-[58%] overflow-hidden lg:block">
        <Image
          src="/images/automation-hero-banner.png"
          alt="Sentient Engineering intelligent systems visual showing connected technology and AI systems"
          fill
          sizes="58vw"
          priority
          className="scale-[1.75] object-cover object-[78%_58%] opacity-40 saturate-[0.85]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071b20] via-[#071b20]/55 to-[#071b20]/20" />
      </div>

      <Container className="relative">
        <div className="grid gap-12 pb-16 sm:pb-20 lg:grid-cols-[0.94fr_0.86fr] lg:items-center lg:gap-16 lg:pb-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8fd3bf]">
              Applied AI and intelligent systems engineering
            </p>
            <h1 className="mt-5 max-w-4xl text-balance text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
              Intelligent Systems for Business and Industry
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              Sentient Engineering designs and deploys applied AI, machine
              learning, computer vision, robotics, automation, and decision
              systems that help organizations operate smarter, faster, and more
              efficiently.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a className="primary-button px-6" href="#contact">
                Talk to an Engineer
              </a>
              <a className="ghost-button px-6" href="#capabilities">
                Explore Our Capabilities
              </a>
            </div>
          </div>

          <figure className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] lg:hidden">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/automation-hero-banner.png"
                alt="Sentient Engineering intelligent systems visual showing connected technology and AI systems"
                fill
                sizes="100vw"
                priority
                className="scale-[1.9] object-cover object-[78%_58%] opacity-70"
              />
              <div className="absolute inset-0 bg-[#071b20]/35" />
            </div>
          </figure>
        </div>
      </Container>
    </section>
  );
}
