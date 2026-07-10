import Image from "next/image";
import Container from "./Container";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#071b20] pt-28 text-white sm:pt-32 lg:min-h-[760px]">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_78%_34%,rgba(143,211,191,0.16),transparent_34%),linear-gradient(135deg,#071b20_0%,#0b2932_54%,#102f38_100%)]" />

      <Container>
        <div className="grid gap-10 pb-16 sm:pb-20 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-8 lg:pb-24">
          <div className="order-2 max-w-3xl lg:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8fd3bf] sm:text-sm">
              Applied AI and intelligent systems engineering
            </p>
            <h1 className="mt-5 max-w-4xl text-balance text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
              Intelligent Systems for Business and Industry
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Sentient Engineering designs and deploys applied AI, machine
              learning, computer vision, robotics, automation, and decision
              systems for real business and industrial operations.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a className="primary-button px-6" href="#contact">
                Talk to an Engineer
              </a>
              <a className="ghost-button px-6" href="#capabilities">
                Explore Capabilities
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative aspect-[1.22] overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] sm:aspect-[1.55] lg:aspect-[1.2]">
              <Image
                src="/images/hero-artwork.png"
                alt="Sentient Engineering hero artwork showing connected intelligent systems"
                fill
                priority
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="hidden object-cover sm:block"
              />
              <Image
                src="/images/mobile-hero-artwork.png"
                alt="Mobile hero artwork showing layered AI and intelligent systems visuals"
                fill
                priority
                sizes="100vw"
                className="object-cover sm:hidden"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#071b20]/5 to-[#071b20]/28" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
