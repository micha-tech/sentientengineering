import Image from "next/image";
import Link from "next/link";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import AutomationIcon from "./AutomationIcon";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-navy pb-28 pt-14 sm:pb-10 sm:pt-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.25fr_.75fr]">
          <div>
            <Link href="/" className="relative block h-16 w-64" aria-label={`${COMPANY.name} home`}>
              <Image src="/sentientlogo-wordmark.png" alt="Sentient Engineering" fill sizes="256px" className="object-contain object-left" />
            </Link>
            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-400">Automation that helps growing businesses respond faster, reduce manual work, and run with better visibility.</p>
            <a href={`mailto:${COMPANY.email}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-cyan"><AutomationIcon name="mail" className="h-4 w-4 text-cyan" />{COMPANY.email}</a>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Explore</p>
              <nav className="mt-5 grid gap-3" aria-label="Footer">
                {NAV_LINKS.map((link) => <a key={link.href} href={link.href} className="text-sm text-slate-300 transition hover:text-cyan">{link.label}</a>)}
              </nav>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Start here</p>
              <div className="mt-5 grid gap-3">
                <Link href="/diagnostic" className="text-sm text-slate-300 transition hover:text-cyan">Automation Audit</Link>
                <a href="#automation-audit" className="text-sm text-slate-300 transition hover:text-cyan">Opportunity Finder</a>
                <Link href="/blog" className="text-sm text-slate-300 transition hover:text-cyan">Insights</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/[0.08] pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Sentient Engineering. Built for better business.</p>
          <p>Business process automation · AI workflows · Managed systems</p>
        </div>
      </Container>
    </footer>
  );
}
