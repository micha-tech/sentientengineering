import Image from "next/image";
import Link from "next/link";

const banner = (
  <Image
    src="/images/automation-hero-banner.png"
    alt="Sentient Engineering business automation banner showing connected AI and technology systems"
    width={1632}
    height={964}
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
          aria-label="Run an Automation Audit"
          className="absolute left-[4.9%] top-[63%] h-[6.5%] w-[21%] rounded-full focus-visible:outline-white"
        />
      </section>

      <section
        className="mobile-hero-banner relative overflow-clip bg-navy md:hidden"
        aria-labelledby="mobile-hero-title"
      >
        <h1 id="mobile-hero-title" className="sr-only">
          Automate the Work Slowing You Down
        </h1>
        <Link
          href="/diagnostic"
          aria-label="Book an Automation Audit"
          className="absolute left-[9%] top-[88.5%] h-[7%] w-[82%] rounded-full focus-visible:outline-white"
        />
      </section>
    </>
  );
}
