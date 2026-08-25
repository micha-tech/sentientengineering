import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import Container from "./Container";

const footerLinks = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Products", href: "/products" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#f6f6f1] text-black">
      <Container className="border-x border-black/10 px-0">
        <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
          <div className="border-b border-black/10 p-6 sm:p-10 lg:border-b-0 lg:border-r">
            <Link
              href="/"
              className="relative block h-14 w-56"
              aria-label={`${COMPANY.name} home`}
            >
              <Image
                src="/sentientlogo-wordmark.png"
                alt="Sentient Engineering logo"
                fill
                sizes="224px"
                className="object-contain object-left invert"
              />
            </Link>
            <p className="mt-10 text-sm font-bold uppercase tracking-[0.13em] text-black/45">
              {COMPANY.businessType}
            </p>
            <p className="mt-3 font-semibold">{COMPANY.location}</p>
            <p className="mt-6 max-w-xl text-sm leading-7 text-black/55">
              Applied AI Engineering for Business, Science and Industry. We
              build complete intelligent systems for digital and physical
              operations.
            </p>

            <div className="mt-8 grid gap-3 text-sm">
              <a
                href={COMPANY.emailHref}
                className="inline-flex min-h-6 w-fit items-center font-semibold underline underline-offset-4"
              >
                {COMPANY.email}
              </a>
              <a
                href={COMPANY.phoneHref}
                className="inline-flex min-h-6 w-fit items-center font-semibold underline underline-offset-4"
              >
                {COMPANY.phone}
              </a>
              <a
                href={COMPANY.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-6 w-fit items-center font-semibold underline underline-offset-4"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <nav
            aria-label="Footer"
            className="grid content-start sm:grid-cols-2"
          >
            {footerLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex min-h-16 items-center justify-between border-b border-black/10 px-6 text-sm font-semibold transition hover:bg-black hover:text-white sm:px-8"
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
          <p>Applied AI · Business systems · Scientific and engineering intelligence</p>
        </div>
      </Container>
    </footer>
  );
}
