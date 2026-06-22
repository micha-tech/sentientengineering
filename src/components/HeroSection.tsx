import Image from "next/image";
import Link from "next/link";

const banner = (
  <Image
    src="/images/automation-hero-banner.png"
    alt="Sentient Engineering business automation banner showing connected AI and technology systems"
    width={1664}
    height={960}
    sizes="100vw"
    priority
  />
);

export default function HeroSection() {
  return (
    <>
      <section
        className="relative hidden overflow-hidden bg-navy md:block"
        aria-labelledby="desktop-hero-title"
      >
        <h1 id="desktop-hero-title" className="sr-only">
          Automate the Work Slowing You Down
        </h1>
        <div className="[&>img]:h-auto [&>img]:w-full">{banner}</div>
        <Link
          href="/diagnostic"
          aria-label="Book an Automation Audit"
          className="absolute left-[4.6%] top-[61.5%] h-[7%] w-[16%] rounded-full focus-visible:outline-white"
        />
      </section>

      <section
        className="relative overflow-hidden bg-navy md:hidden"
        aria-labelledby="mobile-hero-title"
      >
        <h1 id="mobile-hero-title" className="sr-only">
          Automate the Work Slowing You Down
        </h1>
        <div className="[&>img]:h-auto [&>img]:w-[820px] [&>img]:max-w-none sm:[&>img]:w-full">
          {banner}
        </div>
        <Link
          href="/diagnostic"
          aria-label="Book an Automation Audit"
          className="absolute left-[5%] top-[61%] h-[10%] w-[38%] rounded-full focus-visible:outline-white sm:h-[8%] sm:w-[24%]"
        />
      </section>
    </>
  );
}
