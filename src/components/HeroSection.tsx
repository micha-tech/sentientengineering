import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import TypingValueLine from "./TypingValueLine";
import HeroVideo from "./HeroVideo";

export default function HeroSection() {
  return (
    <section className="relative isolate min-h-svh overflow-hidden bg-black text-white">
      <Image
        src="/images/sentient-hero-poster.webp"
        alt=""
        fill
        preload
        sizes="100vw"
        quality={70}
        className="object-cover"
      />
      <HeroVideo />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,8,30,0.12)_0%,rgba(2,7,24,0.2)_38%,rgba(1,5,18,0.82)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(59,130,246,0.08),transparent_45%)]" />

      <Container className="relative z-10 flex min-h-svh items-end pb-7 pt-28 sm:pb-10">
        <div className="grid w-full items-end gap-8 lg:grid-cols-[1fr_23rem]">
          <div className="motion-safe:animate-[hero-reveal_700ms_ease-out_both]">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
              Applied AI Engineering
            </p>
            <h1 className="mt-5 max-w-5xl text-balance text-[2.8rem] font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-[5.25rem]">
              AI systems that move real businesses forward.
            </h1>
            <TypingValueLine />
          </div>

          <Link
            href="/#contact"
            className="group grid grid-cols-[6.5rem_1fr_2.75rem] items-center gap-3 bg-white p-1.5 text-black transition hover:-translate-y-1"
          >
            <span className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
              <Image
                src="/images/industry-manufacturing.png"
                alt=""
                fill
                sizes="104px"
                loading="eager"
                className="object-cover"
              />
            </span>
            <span>
              <span className="block text-[0.62rem] font-bold uppercase tracking-[0.13em] text-black/45">
                Build for value
              </span>
              <span className="mt-1 block text-sm font-semibold leading-5">
                Start with your business problem
              </span>
            </span>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-black text-white transition group-hover:rotate-[-45deg]">
              →
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
