import Image from "next/image";
import { COMPANY } from "@/lib/constants";
import {
  differentiators,
  gyptiqCapabilities,
  industries,
  systemImages,
  workSteps,
} from "@/lib/site-data";
import AutomationIcon from "./AutomationIcon";
import Container from "./Container";

const intelligenceLayers = [
  {
    title: "Sense",
    copy: "Capture signals from documents, cameras, workflows, machines, and customer conversations.",
  },
  {
    title: "Learn",
    copy: "Detect patterns, forecast demand, classify risk, spot anomalies, and improve from operational data.",
  },
  {
    title: "Act",
    copy: "Trigger workflows, assist teams, coordinate follow-up, route work, and connect business tools.",
  },
  {
    title: "Improve",
    copy: "Measure accuracy, adoption, throughput, reliability, cost, and business impact after deployment.",
  },
] as const;

const systemPillars = [
  "Applied AI",
  "Machine learning",
  "Computer vision",
  "Robotics",
  "Automation",
  "Data intelligence",
  "Operations engineering",
] as const;

function SectionIntro({
  eyebrow,
  title,
  copy,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.2em] ${
            light ? "text-[#8fd3bf]" : "text-[#2f7d44]"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-4 text-balance text-3xl font-semibold leading-tight sm:text-5xl ${
          light ? "text-white" : "text-[#071b20]"
        }`}
      >
        {title}
      </h2>
      {copy ? (
        <p
          className={`mt-5 text-base leading-8 ${
            light ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {copy}
        </p>
      ) : null}
    </div>
  );
}

export default function IntelligentSystemsSections() {
  return (
    <>
      <section id="company" className="scroll-mt-24 bg-[#f6f7f3] py-14 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionIntro
                eyebrow="Company"
                title="We engineer intelligence into real operations."
                copy="Sentient Engineering designs practical intelligent systems for businesses and industries: systems that sense, learn, act, and improve inside real workflows."
              />
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {intelligenceLayers.map((layer) => (
                  <article
                    key={layer.title}
                    className="rounded-lg border border-slate-200 bg-white p-5"
                  >
                    <h3 className="text-lg font-semibold text-[#071b20]">
                      {layer.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {layer.copy}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <figure className="overflow-hidden rounded-lg border border-slate-200 bg-[#071b20] shadow-[0_26px_80px_-60px_rgba(7,27,32,0.8)]">
              <div className="relative aspect-[16/11] sm:aspect-[16/9] lg:aspect-[4/3]">
                <Image
                  src="/images/ai-intelligence-portrait.webp"
                  alt="Abstract human and machine intelligence artwork representing applied AI engineering"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  loading="lazy"
                  className="object-cover object-center"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-[#071b20]/82 px-5 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                  Human judgment. Machine intelligence. Real operations.
                </figcaption>
              </div>
            </figure>
          </div>
        </Container>
      </section>

      <section id="capabilities" className="scroll-mt-24 bg-white py-14 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <SectionIntro
              eyebrow="Capabilities"
              title="AI engineering for digital and physical work."
              copy="We do not sell a long menu of services. We design the intelligence layer your operation needs, then build the software, models, integrations, and safeguards around it."
            />
            <div className="flex flex-wrap gap-2 lg:justify-end">
              {systemPillars.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-[#f6f7f3] px-3 py-2 text-xs font-semibold text-[#071b20]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-12">
            {systemImages.map((item, index) => (
              <figure
                key={item.src}
                className={`group overflow-hidden rounded-lg border border-slate-200 bg-slate-100 ${
                  index === 0 || index === 2 ? "lg:col-span-5" : "lg:col-span-4"
                } ${index === 1 ? "lg:col-span-7" : ""}`}
              >
                <div
                  className={`relative ${
                    index === 0 || index === 1 ? "aspect-[16/10]" : "aspect-[16/11]"
                  }`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 42vw, (min-width: 640px) 50vw, 100vw"
                    loading="lazy"
                    className="object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-[#071b20]/82 px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                    {item.label}
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <section id="industries" className="scroll-mt-24 bg-[#071b20] py-14 text-white sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionIntro
              light
              eyebrow="Industries"
              title="Built for operating environments, not demos."
              copy="Logistics routes, factory floors, clinics, warehouses, construction sites, retail operations, energy assets, farms, and professional teams all need different forms of intelligence."
            />
            <div className="grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-2">
              {industries.map((industry) => (
                <article key={industry.name} className="bg-[#071b20] p-5">
                  <h3 className="text-base font-semibold text-white">
                    {industry.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {industry.applications.slice(0, 3).join(" / ")}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="gyptiq" className="scroll-mt-24 bg-[#050d0f] py-14 text-white sm:py-20">
        <Container>
          <div className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionIntro
              light
              eyebrow="Product announcement"
              title="Gyptiq is coming to work."
              copy="Our flagship AI-powered business companion for customer conversations, sales work, payments, appointments, reminders, and follow-up."
            />
            <div className="flex flex-col gap-3 sm:flex-row">
              <a className="primary-button px-6" href="#contact">
                Explore Gyptiq
              </a>
              <a className="ghost-button px-6" href="#contact">
                Request a Demo
              </a>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
            <figure className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.04]">
              <div className="relative aspect-[1.15] sm:aspect-[3/2] lg:aspect-[16/10]">
                <Image
                  src="/images/gyptiq-announcement.png"
                  alt="Gyptiq product announcement showing an AI assistant connecting WhatsApp, Gmail, quotes, payments, appointments, and reminders"
                  fill
                  sizes="(min-width: 1024px) 68vw, 100vw"
                  loading="lazy"
                  className="object-cover"
                />
              </div>
            </figure>

            <div className="grid gap-4">
              <figure className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.04]">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/images/gyptiq-in-hand.png"
                    alt="Gyptiq mobile interface shown on a phone with business automation activity"
                    fill
                    sizes="(min-width: 1024px) 28vw, 100vw"
                    loading="lazy"
                    className="object-cover object-top"
                  />
                </div>
              </figure>
              <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8fd3bf]">
                  All in the background
                </p>
                <p className="mt-4 text-lg font-semibold leading-7 text-white">
                  Gyptiq helps a business respond, quote, collect, schedule, and
                  follow up without forcing the owner into another heavy system.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {gyptiqCapabilities.slice(0, 6).map((item) => (
              <div
                key={item}
                className="rounded-lg border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-slate-300"
              >
                <AutomationIcon
                  name="check"
                  className="mb-3 h-4 w-4 text-[#8fd3bf]"
                />
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="process" className="bg-white py-14 sm:py-20">
        <Container>
          <SectionIntro
            eyebrow="How we work"
            title="From problem to deployed intelligence."
          />
          <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {workSteps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-lg border border-slate-200 bg-white p-5"
              >
                <span className="text-sm font-semibold text-[#2f7d44]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-base font-semibold leading-7 text-[#071b20]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {step.copy}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-[#f6f7f3] py-14 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
            <SectionIntro
              eyebrow="Why Sentient Engineering"
              title="Practical intelligence. Engineered for reality."
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {differentiators.slice(0, 6).map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-lg border border-slate-200 bg-white p-4 text-sm font-medium leading-6 text-slate-700"
                >
                  <AutomationIcon
                    name="check"
                    className="mt-1 h-4 w-4 shrink-0 text-[#2f7d44]"
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="contact" className="scroll-mt-24 bg-white py-14 sm:py-20">
        <Container>
          <div className="grid gap-10 rounded-lg border border-slate-200 bg-[#071b20] p-6 text-white sm:p-10 lg:grid-cols-[0.92fr_1.08fr] lg:p-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8fd3bf]">
                Contact
              </p>
              <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight sm:text-5xl">
                What could an intelligent system change in your operation?
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                Tell us the operational problem. We will help define the system,
                architecture, and practical path to deployment.
              </p>
              <a
                className="mt-7 inline-flex text-sm font-semibold text-[#8fd3bf] underline underline-offset-4"
                href={`mailto:${COMPANY.email}`}
              >
                {COMPANY.email}
              </a>
            </div>

            <form
              action={`mailto:${COMPANY.email}`}
              method="post"
              encType="text/plain"
              className="grid gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-4 sm:grid-cols-2 sm:p-6"
            >
              <label className="grid gap-2 text-sm font-medium text-slate-200">
                Name
                <input name="name" autoComplete="name" required />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-200">
                Company
                <input name="company" autoComplete="organization" required />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-200">
                Work email
                <input name="email" type="email" autoComplete="email" required />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-200">
                Phone number
                <input name="phone" type="tel" autoComplete="tel" />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-200 sm:col-span-2">
                Industry
                <input name="industry" autoComplete="organization-title" />
              </label>
              <label className="grid gap-2 text-sm font-medium text-slate-200 sm:col-span-2">
                What problem are you trying to solve?
                <textarea name="problem" rows={4} required />
              </label>
              <button className="primary-button px-6 sm:col-span-2" type="submit">
                Start a Conversation
              </button>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}
