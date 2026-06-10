import Image from "next/image";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-black py-10">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="relative h-[clamp(4rem,8vw,5.5rem)] w-[clamp(17rem,44vw,28rem)]">
                <Image
                  src="/sentientlogo-wordmark.png"
                  alt="Sentient Engineering"
                  fill
                  sizes="(min-width: 1024px) 448px, 44vw"
                  className="object-contain"
                />
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-6 text-zinc-500">
              Operations engineering for businesses that need less friction,
              better visibility, and systems built for scale.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-3" aria-label="Footer">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-500 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-white/[0.08] pt-6 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Sentient Engineering.</p>
          <a className="transition hover:text-zinc-300" href={`mailto:${COMPANY.email}`}>
            {COMPANY.email}
          </a>
        </div>
      </Container>
    </footer>
  );
}
