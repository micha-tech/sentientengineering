import { getImageProps } from "next/image";
import Link from "next/link";
import Container from "./Container";

export default function HeroSection() {
  const common = {
    alt: "Applied AI engineering artwork representing intelligent digital and industrial systems",
    sizes: "(min-width: 768px) 62vw, 100vw",
  };
  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({
    ...common,
    src: "/images/hero-artwork.png",
    width: 760,
    height: 690,
  });
  const { props: mobileImageProps } = getImageProps({
    ...common,
    src: "/images/mobile-hero-artwork.png",
    width: 941,
    height: 790,
  });

  return (
    <section className="relative isolate overflow-hidden bg-[#06191d] pt-20 text-white">
      <div className="absolute inset-x-0 top-20 h-44 sm:h-72 md:inset-y-20 md:left-[42%] md:h-auto">
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet={desktopSrcSet}
            sizes="62vw"
          />
          <img
            {...mobileImageProps}
            alt={common.alt}
            fetchPriority="high"
            className="h-full w-full object-cover object-center md:object-contain md:object-right"
          />
        </picture>
      </div>

      <div className="absolute inset-0 top-20 bg-[linear-gradient(180deg,rgba(6,25,29,0.04)_0%,#06191d_27%)] sm:bg-[linear-gradient(180deg,rgba(6,25,29,0.08)_0%,#06191d_36%)] md:bg-[linear-gradient(90deg,#06191d_0%,#06191d_43%,rgba(6,25,29,0.72)_62%,rgba(6,25,29,0.08)_100%)]" />

      <Container className="relative z-10">
        <div className="flex min-h-[calc(100svh-8rem)] items-end pb-8 pt-44 sm:pb-12 sm:pt-72 md:items-center md:py-20">
          <div className="max-w-3xl motion-safe:animate-[hero-reveal_700ms_ease-out_both]">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8fd3bf]">
              Applied AI Engineering
            </p>
            <h1 className="mt-3 max-w-3xl text-balance text-[2rem] font-semibold leading-[1.04] sm:mt-5 sm:text-5xl lg:text-7xl">
              Engineering Intelligent Systems for Business and Industry
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8">
              Sentient Engineering designs, builds, deploys, and manages applied
              AI systems that improve business performance, operational
              efficiency, decision-making, reliability, and growth.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-2 sm:mt-8 sm:flex sm:gap-3">
              <a
                className="primary-button px-2 text-xs sm:px-6 sm:text-sm"
                href="#contact"
              >
                Discuss Your Project
              </a>
              <Link
                className="ghost-button px-2 text-xs sm:px-6 sm:text-sm"
                href="/services"
              >
                Explore Our Capabilities
              </Link>
            </div>
            <p className="mt-5 max-w-2xl border-t border-white/15 pt-4 text-xs leading-5 text-slate-400 sm:mt-8 sm:pt-5 sm:text-sm sm:leading-7">
              From intelligent automation and enterprise AI to computer vision,
              predictive systems, and AI-powered business platforms.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
