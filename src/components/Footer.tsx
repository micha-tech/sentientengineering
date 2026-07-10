import Image from "next/image";
import Link from "next/link";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#071b20] py-12 text-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Link
              href="/"
              className="relative block h-14 w-64"
              aria-label={`${COMPANY.name} home`}
            >
              <Image
                src="/sentientlogo-wordmark.png"
                alt="Sentient Engineering"
                fill
                sizes="256px"
                className="object-contain object-left"
              />
            </Link>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
              Sentient Engineering designs and deploys intelligent systems for
              businesses and industries.
            </p>
          </div>

          <nav
            className="grid grid-cols-2 gap-3 sm:grid-cols-5 lg:justify-items-end"
            aria-label="Footer"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-300 transition hover:text-[#8fd3bf]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} Sentient Engineering.</p>
          <p>Applied AI | Machine learning | Computer vision | Robotics</p>
        </div>
      </Container>
    </footer>
  );
}
