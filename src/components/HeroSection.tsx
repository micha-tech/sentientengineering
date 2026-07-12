import Image from "next/image";
import Container from "./Container";

export default function HeroSection() {
  return (
    <>
      <section className="relative isolate hidden min-h-[760px] overflow-hidden bg-[#071b20] text-white md:block">
        <Image
          src="/images/automation-hero-banner.png"
          alt="Sentient Engineering intelligent systems hero artwork"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-30 object-cover object-top"
        />
        <div className="absolute inset-y-0 left-0 -z-10 w-[55%] bg-[#041b2f]" />
        <div className="absolute inset-y-0 left-[55%] -z-10 w-[18%] bg-gradient-to-r from-[#041b2f] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-[#041b2f]/92 to-transparent" />

        <Container>
          <div className="flex min-h-[760px] items-center pb-12 pt-28">
            <div className="max-w-[760px]">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#67dfff]">
                Applied AI and intelligent systems engineering
              </p>
              <h1 className="mt-5 max-w-4xl text-balance text-[4.65rem] font-semibold leading-[1.06]">
                Intelligent Systems for Business and Industry
              </h1>
              <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-200">
                Sentient Engineering designs and deploys applied AI, machine
                learning, computer vision, robotics, automation, and decision
                systems for real business and industrial operations.
              </p>
              <div className="mt-8 flex gap-3">
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

      <section className="relative isolate overflow-hidden bg-[#041b2f] pt-20 text-white md:hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_18%,rgba(103,223,255,0.18),transparent_26%),linear-gradient(180deg,#061d35_0%,#041b2f_62%,#031426_100%)]" />
        <Container>
          <div className="pb-12 pt-5">
            <div className="-mx-5">
              <div className="relative aspect-[941/790] w-full">
                <Image
                  src="/images/mobile-hero-artwork.png"
                  alt="Mobile hero artwork showing layered AI and intelligent systems visuals"
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover object-top"
                />
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#67dfff]">
                Applied AI and intelligent systems engineering
              </p>
              <h1 className="mt-5 text-balance text-5xl font-semibold leading-[1.04]">
                Intelligent Systems for Business and Industry
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-200">
                Applied AI, machine learning, computer vision, robotics,
                automation, and decision systems for real operations.
              </p>
              <div className="mt-8 grid gap-3">
                <a
                  className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#67dfff] px-8 text-sm font-bold text-[#041b2f] shadow-[0_0_28px_rgba(103,223,255,0.35)]"
                  href="#contact"
                >
                  Talk to an Engineer
                </a>
                <a
                  className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/20 bg-white/[0.05] px-8 text-sm font-bold text-white"
                  href="#capabilities"
                >
                  Explore Capabilities
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
