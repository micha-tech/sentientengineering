"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solidHeader = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solidHeader
          ? "border-black/10 bg-[#f6f6f1] text-black"
          : "border-white/15 bg-transparent text-white"
      }`}
    >
      <nav
        className="flex h-[4.5rem] items-center justify-between px-5 sm:px-8"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="relative h-11 w-44 sm:w-52"
          aria-label={`${COMPANY.name} home`}
          onClick={() => setOpen(false)}
        >
          <Image
            src="/sentientlogo-wordmark.png"
            alt="Sentient Engineering"
            fill
            priority
            sizes="(min-width: 640px) 208px, 176px"
            className={`object-contain object-left transition ${
              solidHeader ? "invert" : ""
            }`}
          />
        </Link>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className={`grid h-11 w-11 place-items-center border transition-colors ${
            solidHeader
              ? "border-black bg-black text-white"
              : "border-white bg-white text-black"
          }`}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="site-navigation"
        >
          <span className="grid grid-cols-2 gap-1">
            {[0, 1, 2, 3].map((item) => (
              <span key={item} className="h-1.5 w-1.5 bg-current" />
            ))}
          </span>
        </button>
      </nav>

      {open ? (
        <div
          id="site-navigation"
          className="h-[calc(100svh-4.5rem)] overflow-y-auto border-t border-black/10 bg-[#f6f6f1] text-black"
        >
          <div className="grid min-h-full lg:grid-cols-[1fr_22rem]">
            <div className="border-r-black/10 lg:border-r">
              {NAV_LINKS.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between border-b border-black/10 px-6 py-5 transition hover:bg-black hover:text-white sm:px-10 sm:py-7"
                >
                  <span className="text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">
                    {link.label}
                  </span>
                  <span className="text-xs font-bold opacity-45">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </Link>
              ))}
            </div>
            <div className="flex flex-col justify-end gap-5 p-6 sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/45">
                Start with the problem
              </p>
              <p className="text-2xl font-semibold leading-tight tracking-[-0.03em]">
                Tell us where your business is losing time, visibility, or
                revenue.
              </p>
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex min-h-12 items-center justify-center bg-black px-5 text-sm font-bold text-white"
              >
                Discuss Your Project
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
