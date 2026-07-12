import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#061f35]">
      <h1 className="sr-only">
        Transform your business with AI through Sentient Engineering.
      </h1>

      <div className="hidden md:block">
        <Image
          src="/images/sentient-hero-desktop.jfif"
          alt=""
          width={1440}
          height={850}
          priority
          sizes="100vw"
          className="h-auto w-full"
        />
      </div>

      <div className="md:hidden">
        <Image
          src="/images/sentient-hero-mobile.png"
          alt=""
          width={941}
          height={1672}
          priority
          sizes="100vw"
          className="h-auto w-full"
        />
      </div>
    </section>
  );
}
