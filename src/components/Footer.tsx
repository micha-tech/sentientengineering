import Image from "next/image";
import Link from "next/link";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050d0f] py-12 text-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Link
              href="/"
              className="relative block h-12 w-56"
              aria-label={`${COMPANY.name} home`}
            >
              <Image
                src="/sentientlogo-wordmark.png"
                alt="Sentient Engineering"
                fill
                sizes="224px"
                className="object-contain object-left"
              />
            </Link>
            <p className="mt-6 max-w-xl text-base font-medium leading-7 text-white">
              Applied AI. Engineered for reality.
            </p>
            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
              We design, build, deploy, and manage intelligent systems for
              business and industry.
            </p>
          </div>

          <nav
            className="grid grid-cols-2 content-start gap-x-8 gap-y-4 sm:grid-cols-3 lg:justify-items-end"
            aria-label="Footer"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 transition hover:text-[#8fd3bf]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} Sentient Engineering.</p>
          <p>Applied AI | Automation | Computer vision | Decision intelligence</p>
        </div>
      </Container>
    </footer>
  );
}
