"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { COMPANY } from "@/lib/constants";

const businessLinks = [
  ["AI agents and integrations", "/services/ai-agents-integrations"],
  ["Business systems and automation", "/services/business-systems-automation"],
  ["AI commerce and revenue intelligence", "/services/digital-commerce"],
  ["Meeting and collaboration intelligence", "/products/sentient-co-lab"],
  ["Enterprise and scientific documents", "/services/scientific-document-intelligence"],
] as const;

const engineeringLinks = [
  ["Computer vision and visual inspection", "/services/computer-vision"],
  ["Speech, audio and acoustic intelligence", "/services/speech-audio-intelligence"],
  ["Vibration and signal analysis", "/services/vibration-signal-analysis"],
  ["Biometrics and facial recognition", "/services/biometrics-identity"],
  ["Predictive maintenance and reliability", "/services/predictive-maintenance"],
  ["Scientific and engineering intelligence", "/services/scientific-engineering-ai"],
] as const;

const primaryLinks = [
  ["Industries", "/industries"],
  ["Products", "/products"],
  ["Work", "/work"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

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

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        setServicesOpen(false);
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  const solidHeader = scrolled || open;
  const closeMobile = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solidHeader
          ? "border-black/10 bg-[#f6f6f1]/95 text-black backdrop-blur-md"
          : "border-white/15 bg-black/10 text-white backdrop-blur-[2px]"
      }`}
    >
      <nav
        className="mx-auto flex h-[4.5rem] max-w-[1440px] items-center justify-between px-5 sm:px-8"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="relative h-10 w-40 shrink-0 sm:w-44"
          aria-label={`${COMPANY.name} home`}
          onClick={closeMobile}
        >
          <Image
            src="/sentientlogo-wordmark.png"
            alt="Sentient Engineering"
            fill
            loading="eager"
            sizes="176px"
            className={`object-contain object-left transition ${solidHeader ? "invert" : ""}`}
          />
        </Link>

        <div className="hidden h-full items-center lg:flex">
          <div className="group relative flex h-full items-center">
            <Link
              href="/services"
              className="inline-flex h-full items-center gap-2 px-4 text-sm font-semibold"
              aria-haspopup="true"
            >
              Services
              <span aria-hidden="true" className="text-[0.65rem] opacity-55">⌄</span>
            </Link>
            <div className="invisible fixed inset-x-0 top-[4.5rem] translate-y-2 border-y border-black/10 bg-[#f6f6f1] text-black opacity-0 shadow-[0_18px_50px_rgba(0,0,0,0.12)] transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <div className="mx-auto grid max-w-[1440px] grid-cols-[0.8fr_1fr_1fr] border-x border-black/10">
                <div className="flex flex-col justify-between border-r border-black/10 p-8">
                  <div>
                    <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[#1f5eff]">Engineering domains</p>
                    <p className="mt-5 max-w-xs text-2xl font-semibold leading-tight tracking-[-0.03em]">
                      Complete intelligent systems for digital and physical operations.
                    </p>
                  </div>
                  <Link href="/services" className="mt-10 inline-flex w-fit border-b border-black pb-1 text-sm font-bold">
                    View all services
                  </Link>
                </div>
                <ServiceMenuGroup title="Business AI Systems" links={businessLinks} />
                <ServiceMenuGroup title="Scientific & Engineering AI" links={engineeringLinks} />
              </div>
            </div>
          </div>

          {primaryLinks.map(([label, href]) => (
            <Link key={href} href={href} className="inline-flex h-full items-center px-4 text-sm font-semibold">
              {label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className={`hidden min-h-10 items-center px-4 text-sm font-bold xl:inline-flex ${solidHeader ? "bg-black text-white" : "bg-white text-black"}`}
        >
          Discuss a problem
        </Link>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className={`grid h-11 w-11 place-items-center border transition-colors lg:hidden ${
            solidHeader ? "border-black bg-black text-white" : "border-white bg-white text-black"
          }`}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-site-navigation"
        >
          <span className="grid gap-1" aria-hidden="true">
            <span className="h-0.5 w-5 bg-current" />
            <span className="h-0.5 w-5 bg-current" />
            <span className="h-0.5 w-5 bg-current" />
          </span>
        </button>
      </nav>

      {open ? (
        <div
          id="mobile-site-navigation"
          className="h-[calc(100svh-4.5rem)] overflow-y-auto border-t border-black/10 bg-[#f6f6f1] text-black lg:hidden"
        >
          <div className="px-5 py-4 sm:px-8">
            <button
              type="button"
              className="flex min-h-14 w-full items-center justify-between border-b border-black/10 text-left text-2xl font-semibold"
              aria-expanded={servicesOpen}
              aria-controls="mobile-services"
              onClick={() => setServicesOpen((value) => !value)}
            >
              Services
              <span aria-hidden="true" className="text-lg">{servicesOpen ? "−" : "+"}</span>
            </button>
            {servicesOpen ? (
              <div id="mobile-services" className="border-b border-black/10 py-5">
                <MobileServiceGroup title="Business AI Systems" links={businessLinks} onNavigate={closeMobile} />
                <MobileServiceGroup title="Scientific & Engineering AI" links={engineeringLinks} onNavigate={closeMobile} />
                <Link href="/services" onClick={closeMobile} className="mt-4 inline-flex min-h-11 items-center border border-black px-4 text-sm font-bold">
                  View all services
                </Link>
              </div>
            ) : null}

            {primaryLinks.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={closeMobile}
                className="flex min-h-14 items-center justify-between border-b border-black/10 text-2xl font-semibold"
              >
                {label}<span aria-hidden="true" className="text-sm text-black/35">→</span>
              </Link>
            ))}
          </div>

          <div className="m-5 border border-black/10 bg-white p-5 sm:m-8">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-black/40">Start with the problem</p>
            <p className="mt-3 max-w-md text-xl font-semibold leading-tight">Business, scientific or engineering—we will define the complete system required.</p>
            <a href={COMPANY.whatsappHref} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-12 items-center bg-black px-5 text-sm font-bold text-white">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function ServiceMenuGroup({ title, links }: { title: string; links: readonly (readonly [string, string])[] }) {
  return (
    <div className="border-r border-black/10 p-8 last:border-r-0">
      <p className="text-[0.68rem] font-bold uppercase tracking-[0.15em] text-black/40">{title}</p>
      <div className="mt-5 grid">
        {links.map(([label, href]) => (
          <Link key={href} href={href} className="border-t border-black/10 py-3 text-sm font-semibold leading-5 transition hover:pl-2 hover:text-[#1f5eff]">
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function MobileServiceGroup({ title, links, onNavigate }: { title: string; links: readonly (readonly [string, string])[]; onNavigate: () => void }) {
  return (
    <div className="mb-6 last:mb-0">
      <p className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[#1f5eff]">{title}</p>
      <div className="mt-2 grid">
        {links.map(([label, href]) => (
          <Link key={href} href={href} onClick={onNavigate} className="border-b border-black/10 py-3 text-sm font-semibold leading-5">
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
