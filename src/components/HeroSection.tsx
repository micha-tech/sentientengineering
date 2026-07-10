import Image from "next/image";
import Container from "./Container";

export default function HeroSection() {
  return (
    <section className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden bg-[#071b20] text-white sm:min-h-[760px]">
      <Image
        src="/images/hero-cover.jpg"
        alt="Sentient Engineering hero artwork for applied AI and intelligent systems"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-[#071b20]/20" />
      <div className="absolute inset-y-0 left-0 -z-10 w-full bg-gradient-to-r from-[#071b20] via-[#071b20]/92 to-transparent sm:w-[58%]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-[#071b20]/90 to-transparent" />

      <Container>
        <div className="flex min-h-[calc(100svh-5rem)] items-center pb-8 pt-24 sm:min-h-[760px] sm:pb-20 sm:pt-28">
          <div className="max-w-3xl">
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
        </div>
      </Container>
    </section>
  );
}
