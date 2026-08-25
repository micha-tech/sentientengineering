import Image from "next/image";
import Link from "next/link";
import Container from "./Container";

export default function HeroSection() {
  return (
    <section className="relative isolate min-h-svh overflow-hidden bg-black text-white">
      <Image
        src="/images/sentient-hero-identity.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        quality={85}
        className="object-cover object-[58%_center] sm:object-center"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.42)_50%,rgba(0,0,0,0.12)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.18)_38%,rgba(0,0,0,0.92)_100%)]"
        aria-hidden="true"
      />

      <Container className="relative z-10 flex min-h-svh items-end pb-8 pt-28 sm:pb-10 lg:pb-12">
        <div className="w-full motion-safe:animate-[hero-reveal_700ms_ease-out_both]">
          <div className="flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white/55">
            <span className="h-px w-10 bg-[#83a8ff]" />
            Lagos · Nigeria · Africa
          </div>
          <p className="eyebrow mt-9 text-[#a9c0ff]">
            Applied AI Engineering
          </p>
          <h1 className="mt-6 max-w-5xl text-balance text-[2.7rem] font-medium leading-[0.96] tracking-[-0.06em] sm:text-6xl lg:text-[4.5rem] xl:text-[5rem]">
            Applied AI Engineering for Business, Science and Industry.
          </h1>
          <p className="mt-6 max-w-3xl text-sm leading-7 text-white/75 sm:text-lg sm:leading-8">
            Sentient Engineering builds complete intelligent systems—from AI
            customer operations and commerce platforms to computer vision,
            speech recognition, biometric identity, vibration analysis,
            acoustic intelligence and predictive maintenance.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-13 items-center justify-center bg-white px-6 text-sm font-bold text-black transition hover:bg-[#83a8ff]"
            >
              Discuss Your Engineering Problem
            </Link>
            <Link
              href="/services"
              className="inline-flex min-h-13 items-center justify-center border border-white/35 bg-black/20 px-6 text-sm font-bold text-white backdrop-blur-sm transition hover:border-white hover:bg-white/10"
            >
              Explore What We Build
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
