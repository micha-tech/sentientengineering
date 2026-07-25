import Image from "next/image";
import Link from "next/link";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#f6f6f1] text-black">
      <Container className="border-x border-black/10 px-0">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
          <div className="border-b border-black/10 p-6 sm:p-10 lg:border-b-0 lg:border-r">
            <Link
              href="/"
              className="relative block h-14 w-56"
              aria-label={`${COMPANY.name} home`}
            >
              <Image
                src="/sentientlogo-wordmark.png"
                alt="Sentient Engineering"
                fill
                sizes="224px"
                className="object-contain object-left invert"
              />
            </Link>
            <p className="mt-12 max-w-xl text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl">
              Applied AI. Engineered for reality.
            </p>
            <p className="mt-5 max-w-xl text-sm leading-7 text-black/55">
              Intelligent systems for businesses and industries that need real
              operational results.
            </p>
          </div>

          <nav aria-label="Footer">
            {NAV_LINKS.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between border-b border-black/10 px-6 py-5 text-sm font-semibold transition hover:bg-black hover:text-white sm:px-10"
              >
                {link.label}
                <span className="text-xs opacity-35">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-3 border-t border-black/10 px-6 py-5 text-xs text-black/45 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <p>Copyright {new Date().getFullYear()} Sentient Engineering.</p>
          <p>Applied AI · Automation · Computer vision · Decision intelligence</p>
        </div>
      </Container>
    </footer>
  );
}
