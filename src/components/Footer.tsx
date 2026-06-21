import Image from "next/image";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy py-10 pb-24 sm:pb-10">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="relative h-16 w-64 sm:h-20 sm:w-80">
                <Image
                  src="/sentientlogo-wordmark.png"
                  alt="Sentient Engineering"
                  fill
                  sizes="(min-width: 640px) 320px, 256px"
                  className="object-contain object-left"
                />
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-6 text-slate-400">
              Operations Engineering for businesses that need stronger cash
              flow, better visibility, faster execution, and measurable
              performance improvement.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-3" aria-label="Footer">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 transition hover:text-cyan-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>(c) {new Date().getFullYear()} Sentient Engineering.</p>
          <a className="transition hover:text-cyan-300" href={`mailto:${COMPANY.email}`}>
            {COMPANY.email}
          </a>
        </div>
      </Container>
    </footer>
  );
}
