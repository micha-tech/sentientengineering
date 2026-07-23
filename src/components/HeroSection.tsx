import { getImageProps } from "next/image";

export default function HeroSection() {
  const common = {
    alt: "",
    sizes: "100vw",
  };
  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({
    ...common,
    src: "/images/sentient-hero-desktop.jpg",
    width: 1440,
    height: 850,
  });
  const { props: mobileImageProps } = getImageProps({
    ...common,
    src: "/images/sentient-hero-mobile.png",
    width: 941,
    height: 1672,
  });

  return (
    <section className="relative isolate overflow-hidden bg-[#061f35] pt-20">
      <h1 className="sr-only">
        Enterprise AI engineering and intelligent automation for real business
        operations.
      </h1>

      <div className="relative aspect-[941/1514] w-full overflow-hidden md:aspect-[1440/765]">
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet={desktopSrcSet}
            sizes="100vw"
          />
          <img
            {...mobileImageProps}
            alt=""
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-bottom"
          />
        </picture>

        <a
          href="#contact"
          aria-label="Start a conversation with Sentient Engineering"
          className="absolute left-[5%] top-[58.5%] hidden h-[7%] w-[14.5%] rounded-full focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#8fd3bf] md:block"
        >
          <span className="sr-only">Get Started</span>
        </a>

        <a
          href="#contact"
          aria-label="Start a conversation with Sentient Engineering"
          className="absolute left-[9.5%] top-[84.4%] h-[7.2%] w-[81%] rounded-full focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-white md:hidden"
        >
          <span className="sr-only">Get Started</span>
        </a>
      </div>
    </section>
  );
}
