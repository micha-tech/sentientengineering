import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#061f35]">
      <h1 className="sr-only">
        Transform your business with AI through Sentient Engineering.
      </h1>

      <div className="relative hidden aspect-[1440/850] w-full md:block">
        <Image
          src="/images/sentient-hero-desktop.jfif"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
      </div>

      <div className="relative aspect-[941/1672] w-full md:hidden">
        <Image
          src="/images/sentient-hero-mobile.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
      </div>
    </section>
  );
}
