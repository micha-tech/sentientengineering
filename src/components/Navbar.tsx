"use client";

import { AnimatePresence, motion } from "framer-motion";
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/[0.08] bg-black/78 shadow-2xl shadow-black/40 backdrop-blur-xl"
          : "bg-black/20 backdrop-blur-sm"
      }`}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between md:h-20">
          <Link
            href="/"
            className="group flex min-w-0 items-center gap-3"
            aria-label={`${COMPANY.name} home`}
          >
            <span className="relative h-12 w-48 shrink-0 sm:w-56 md:w-64">
              <Image
                src="/sentientlogo.png"
                alt="Sentient Engineering"
                fill
                sizes="(min-width: 768px) 256px, (min-width: 640px) 224px, 192px"
                className="object-contain"
                priority
              />
            </span>
            <span className="sr-only">
              {COMPANY.name}
            </span>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
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
              className="rounded-full border border-white/10 bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-zinc-200"
            >
              Book an Audit
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            <span className="relative h-4 w-5">
              <motion.span
                animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="absolute left-0 top-0 h-px w-5 bg-white"
              />
              <motion.span
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                className="absolute left-0 top-[7px] h-px w-5 bg-white"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="absolute bottom-0 left-0 h-px w-5 bg-white"
              />
            </span>
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/[0.08] bg-black/94 backdrop-blur-xl md:hidden"
          >
            <Container>
              <div className="grid gap-1 py-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-2 py-3 text-base text-zinc-300 transition hover:bg-white/[0.04] hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#audit"
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-full bg-white px-5 py-3 text-center text-sm font-medium text-black"
                >
                  Book an Operations Audit
                </a>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
