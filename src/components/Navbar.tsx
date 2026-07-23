"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import Container from "./Container";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#06191d] transition-shadow duration-200 ${
        scrolled
          ? "shadow-[0_12px_30px_rgba(0,0,0,0.18)]"
          : "shadow-none"
      }`}
    >
      <Container>
        <nav className="flex h-20 items-center justify-between" aria-label="Primary">
          <Link
            href="/"
            className="relative h-12 w-48 shrink-0 sm:w-56"
            aria-label={`${COMPANY.name} home`}
            onClick={() => setOpen(false)}
          >
            <Image
              src="/sentientlogo-wordmark.png"
              alt="Sentient Engineering"
              fill
              sizes="(min-width: 640px) 224px, 192px"
              className="object-contain object-left"
              priority
            />
          </Link>

          <div className="hidden items-center gap-5 xl:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[0.8125rem] font-semibold text-slate-300 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              className="primary-button min-h-11 px-5 shadow-sm"
              href="/#contact"
            >
              Discuss Your Project
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-md border border-white/15 bg-white/[0.04] text-white xl:hidden"
            aria-label="Toggle navigation"
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            <span className="grid gap-1.5">
              <span
                className={`h-px w-5 bg-white transition ${
                  open ? "translate-y-[3px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-px w-5 bg-white transition ${
                  open ? "-translate-y-[4px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </nav>
      </Container>

      {open ? (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-[#06191d] xl:hidden"
        >
          <Container>
            <div className="grid gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-3 text-base text-slate-200 transition hover:bg-white/[0.06] hover:text-[#8fd3bf]"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="primary-button mt-2 px-5"
              >
                Discuss Your Project
              </Link>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
