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
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
          scrolled
            ? "border-b border-white/[0.08] bg-black/90 backdrop-blur-xl"
            : "bg-black/70 backdrop-blur-md"
        }`}
      >
        <Container>
          <nav className="flex h-[4.5rem] items-center justify-between sm:h-20">
            <Link
              href="/"
              className="relative h-14 w-52 shrink-0 sm:h-16 sm:w-64"
              aria-label={`${COMPANY.name} home`}
              onClick={() => setOpen(false)}
            >
              <Image
                src="/sentientlogo-wordmark.png"
                alt="Sentient Engineering"
                fill
                sizes="(min-width: 640px) 256px, 208px"
                className="object-contain object-left"
                priority
              />
            </Link>

            <div className="hidden items-center gap-7 lg:flex">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#audit"
                className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-zinc-200"
              >
                Request an Operations Audit
              </a>
            </div>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/[0.12] bg-white/[0.04] text-white lg:hidden"
              aria-label="Toggle navigation"
              aria-expanded={open}
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
          <div className="border-t border-white/[0.08] bg-black/96 lg:hidden">
            <Container>
              <div className="grid gap-1 py-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-2 py-3 text-base text-zinc-300 transition hover:bg-white/[0.05] hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#audit"
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-black"
                >
                  Request an Operations Audit
                </a>
              </div>
            </Container>
          </div>
        ) : null}
      </header>

      <a
        href="#audit"
        className="fixed inset-x-4 bottom-4 z-50 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-black shadow-2xl shadow-black/50 sm:hidden"
      >
        Request an Operations Audit
      </a>
    </>
  );
}
