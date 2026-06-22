import Image from "next/image";
import Link from "next/link";
import AutomationIcon from "./AutomationIcon";
import Container from "./Container";

const flow = [
  { icon: "message" as const, title: "Lead captured", meta: "Website form" },
  { icon: "database" as const, title: "CRM updated", meta: "Contact enriched" },
  { icon: "bell" as const, title: "Rep notified", meta: "Assigned instantly" },
  { icon: "mail" as const, title: "Follow-up sent", meta: "Personalised" },
  { icon: "briefcase" as const, title: "Quote generated", meta: "Ready to review" },
  { icon: "chart" as const, title: "Dashboard updated", meta: "Pipeline visible" },
];

const metrics = [
  ["Response time", "Minutes, not hours", "clock" as const],
  ["Manual work", "Reduced every week", "spark" as const],
  ["Lead follow-up", "Consistent by default", "target" as const],
] as const;

export default function HeroSection() {
  return (
    <>
      <section className="relative hidden overflow-hidden bg-navy md:block" aria-labelledby="desktop-hero-title">
        <h1 id="desktop-hero-title" className="sr-only">Automate the Work Slowing You Down</h1>
        <Image
          src="/images/automation-hero-banner.png"
          alt="Sentient Engineering business automation banner showing connected AI and technology systems"
          width={1664}
          height={960}
          className="h-auto w-full"
          sizes="100vw"
          priority
        />
        <Link
          href="/diagnostic"
          aria-label="Book an Automation Audit"
          className="absolute left-[4.6%] top-[61.5%] h-[7%] w-[16%] rounded-full focus-visible:outline-white"
        />
      </section>

      <section className="hero-section relative isolate overflow-hidden bg-navy pb-20 pt-28 md:hidden">
      <div className="hero-grid absolute inset-0 -z-20" />
      <div className="hero-glow absolute -right-40 top-8 -z-10 h-[620px] w-[620px] rounded-full" />
      <div className="absolute -left-40 top-40 -z-10 h-96 w-96 rounded-full bg-cyan/10 blur-[120px]" />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[0.94fr_1.06fr] lg:gap-12 xl:gap-20">
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/[0.08] px-3.5 py-2 text-xs font-semibold tracking-wide text-cyan-100">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
              </span>
              Business process automation, without the chaos
            </div>

            <h1 className="text-balance text-[3.35rem] font-semibold leading-[0.95] tracking-[-0.055em] text-white sm:text-7xl lg:text-[4.1rem] xl:text-[4.75rem]">
              Automate the work slowing your business down.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              We streamline sales, customer support, finance, HR, and operations with connected workflows, AI assistants, and managed automation systems.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/diagnostic" className="primary-button group px-7">
                Book an Automation Audit
                <AutomationIcon name="arrow" className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href="#use-cases" className="ghost-button px-7">
                Explore use cases
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-sm text-slate-400">
              {[
                "Built around your process",
                "Works with your current tools",
                "Managed after launch",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="grid h-4 w-4 place-items-center rounded-full bg-emerald/15 text-emerald">
                    <AutomationIcon name="check" className="h-3 w-3" />
                  </span>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-2xl lg:mx-0">
            <div className="automation-window relative overflow-hidden rounded-[1.75rem] border border-white/[0.13] bg-[#111d32]/90 p-3 shadow-2xl shadow-black/25 backdrop-blur-xl sm:p-5">
              <div className="flex items-center justify-between border-b border-white/[0.08] px-1 pb-4 sm:px-2">
                <div className="flex items-center gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-xl bg-cyan text-navy shadow-lg shadow-cyan/20">
                    <AutomationIcon name="workflow" className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Lead-to-revenue workflow</p>
                    <p className="mt-0.5 text-[0.68rem] text-slate-500">Runs automatically · 6 connected steps</p>
                  </div>
                </div>
                <span className="flex items-center gap-1.5 rounded-full border border-emerald/20 bg-emerald/10 px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald" /> Live
                </span>
              </div>

              <div className="relative mt-5 grid gap-3 sm:grid-cols-2">
                <div className="flow-line absolute bottom-8 left-5 top-8 hidden w-px sm:block" />
                {flow.map((item, index) => (
                  <div
                    key={item.title}
                    className="workflow-node group relative flex items-center gap-3 rounded-xl border border-white/[0.09] bg-white/[0.045] p-3.5 transition duration-300 hover:-translate-y-0.5 hover:border-cyan/30 hover:bg-white/[0.07]"
                    style={{ animationDelay: `${index * 110}ms` }}
                  >
                    <span className={`relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-xl ${index === flow.length - 1 ? "bg-emerald/15 text-emerald" : "bg-cyan/10 text-cyan"}`}>
                      <AutomationIcon name={item.icon} className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-xs font-semibold text-white sm:text-sm">{item.title}</span>
                      <span className="mt-1 block text-[0.65rem] text-slate-500">{item.meta}</span>
                    </span>
                    <span className="ml-auto h-2 w-2 shrink-0 rounded-full bg-emerald shadow-[0_0_10px_#10b981]" />
                  </div>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
                {[
                  ["24", "Leads routed"],
                  ["2.4m", "Avg. response"],
                  ["100%", "CRM synced"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-xl border border-white/[0.07] bg-navy/50 p-3 text-center">
                    <p className="text-base font-semibold tracking-tight text-white sm:text-lg">{value}</p>
                    <p className="mt-0.5 text-[0.58rem] uppercase tracking-[0.08em] text-slate-500 sm:text-[0.62rem]">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="metric-float metric-float-one hidden items-center gap-3 rounded-xl border border-white/10 bg-[#16243b]/95 p-3.5 shadow-2xl backdrop-blur-xl 2xl:flex">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-emerald/15 text-emerald"><AutomationIcon name={metrics[0][2]} /></span>
              <span><span className="block text-[0.62rem] uppercase tracking-[0.12em] text-slate-500">{metrics[0][0]}</span><span className="mt-1 block text-xs font-semibold text-white">{metrics[0][1]}</span></span>
            </div>
            <div className="metric-float metric-float-two hidden items-center gap-3 rounded-xl border border-white/10 bg-[#16243b]/95 p-3.5 shadow-2xl backdrop-blur-xl 2xl:flex">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-cyan/15 text-cyan"><AutomationIcon name={metrics[2][2]} /></span>
              <span><span className="block text-[0.62rem] uppercase tracking-[0.12em] text-slate-500">{metrics[2][0]}</span><span className="mt-1 block text-xs font-semibold text-white">{metrics[2][1]}</span></span>
            </div>
          </div>
        </div>

        <div className="mt-16 grid border-y border-white/[0.08] py-7 sm:grid-cols-4 lg:mt-24">
          {[
            ["Sales", "Capture, route & follow up"],
            ["Support", "Respond, assign & escalate"],
            ["Operations", "Track, approve & report"],
            ["Back office", "Sync, remind & reconcile"],
          ].map(([title, copy], index) => (
            <div key={title} className={`py-3 sm:px-5 sm:py-0 ${index ? "sm:border-l sm:border-white/[0.08]" : ""}`}>
              <p className="text-sm font-semibold text-white">{title}</p>
              <p className="mt-1 text-xs text-slate-500">{copy}</p>
            </div>
          ))}
        </div>
      </Container>
      </section>
    </>
  );
}
