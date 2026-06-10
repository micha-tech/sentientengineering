"use client";

import Link from "next/link";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] border-t border-white/5">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-[#F8FAFC]">
                {COMPANY.name}
              </span>
            </Link>
            <p className="text-sm text-[#64748B] max-w-md leading-relaxed">
              {COMPANY.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-[#F8FAFC] uppercase tracking-widest mb-4">
              Navigate
            </h4>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm text-[#64748B] hover:text-[#CBD5E1] transition-colors py-1.5"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div>
            <h4 className="text-xs font-semibold text-[#F8FAFC] uppercase tracking-widest mb-4">
              Contact
            </h4>
            <p className="text-sm text-[#64748B] leading-relaxed">
              {COMPANY.address}
            </p>
            <a
              href={`mailto:${COMPANY.email}`}
              className="block text-sm text-[#64748B] hover:text-[#CBD5E1] transition-colors mt-2"
            >
              {COMPANY.email}
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#475569]">
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <p className="text-xs text-[#475569]">
            Technology is not the goal. Operational performance is.
          </p>
        </div>
      </Container>
    </footer>
  );
}
