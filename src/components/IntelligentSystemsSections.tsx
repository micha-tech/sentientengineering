import Image from "next/image";
import { COMPANY } from "@/lib/constants";
import {
  capabilities,
  differentiators,
  gyptiqCapabilities,
  industries,
  workSteps,
} from "@/lib/site-data";
import AutomationIcon from "./AutomationIcon";
import Container from "./Container";

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
          className={`text-sm font-semibold uppercase tracking-[0.16em] ${
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
          className={`mt-5 text-base leading-8 sm:text-lg ${
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
      <section id="company" className="scroll-mt-24 bg-[#f6f7f3] py-16 sm:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionIntro
              eyebrow="Company"
              title="We engineer intelligence into real operations."
            />
            <div className="space-y-6 text-lg leading-9 text-slate-700">
              <p>
                Sentient Engineering combines artificial intelligence, machine
                learning, software engineering, automation, data systems,
                robotics, and operations thinking to solve practical business
                and industrial problems.
              </p>
              <p className="border-l-4 border-[#2f7d44] pl-5 text-[#071b20]">
                We do not build AI demonstrations. We design systems that work
                inside real businesses, physical environments, operational
                workflows, and industry constraints.
              </p>
              <p className="text-base leading-8 text-slate-600">
                As an applied AI company in Nigeria serving organizations
                across Africa and beyond, we focus on systems that improve
                visibility, throughput, reliability, and decisions.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section id="capabilities" className="scroll-mt-24 bg-white py-16 sm:py-24">
        <Container>
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionIntro
              eyebrow="Capabilities"
              title="What We Engineer"
              copy="We apply AI, machine learning, computer vision, robotics, automation, data engineering, and operations engineering to practical business and industrial systems."
            />
            <a className="secondary-button px-5" href="#contact">
              Build an Intelligent System
            </a>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {capabilities.map((capability, index) => (
              <article
                key={capability.title}
                className={`overflow-hidden rounded-lg border border-slate-200 bg-white ${
                  index === 0 || index === 2 || index === 3
                    ? "lg:grid lg:grid-cols-[0.9fr_1.1fr]"
                    : ""
                }`}
              >
                {"image" in capability ? (
                  <div className="relative min-h-64 border-b border-slate-200 bg-slate-100 lg:min-h-full lg:border-b-0 lg:border-r">
                    <Image
                      src={capability.image.src}
                      alt={capability.image.alt}
                      fill
                      sizes="(min-width: 1024px) 38vw, 100vw"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                ) : null}
                <div className="p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-semibold leading-tight text-[#071b20]">
                      {capability.title}
                    </h3>
                    <span className="text-sm font-semibold text-slate-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {capability.summary}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {capability.applications.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-slate-200 bg-[#f6f7f3] px-3 py-1.5 text-xs font-medium text-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="industries" className="scroll-mt-24 bg-[#071b20] py-16 text-white sm:py-24">
        <Container>
          <SectionIntro
            light
            eyebrow="Industries"
            title="Intelligent Systems Across Industries"
            copy="We help organizations apply intelligent systems where better data, automation, prediction, sensing, and coordination can improve real work."
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <article key={industry.name} className="bg-[#071b20] p-6 sm:p-7">
                <h3 className="text-xl font-semibold text-white">
                  {industry.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  We design systems for:
                </p>
                <ul className="mt-5 grid gap-3">
                  {industry.applications.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-6 text-slate-300"
                    >
                      <AutomationIcon
                        name="check"
                        className="mt-1 h-4 w-4 shrink-0 text-[#8fd3bf]"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="gyptiq" className="scroll-mt-24 bg-[#f6f7f3] py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="relative h-20 w-64">
                <Image
                  src="/images/gyptiq-wordmark-light.png"
                  alt="Gyptiq wordmark"
                  fill
                  sizes="256px"
                  className="object-contain object-left"
                  loading="lazy"
                />
              </div>
              <SectionIntro
                eyebrow="Flagship product"
                title="Meet Gyptiq"
                copy="Our flagship AI-powered business companion for modern businesses."
              />
              <p className="mt-6 text-base leading-8 text-slate-700">
                Gyptiq connects WhatsApp, Gmail, customer conversations, sales
                workflows, payments, appointments, and business operations into
                one intelligent system.
              </p>
              <p className="mt-5 text-base leading-8 text-slate-700">
                It is not another complex CRM, ERP, or dashboard that business
                owners must constantly manage. Gyptiq is designed to carry out
                operational work through familiar communication channels.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a className="primary-button px-6" href="#contact">
                  Explore Gyptiq
                </a>
                <a className="secondary-button px-6" href="#contact">
                  Request a Demo
                </a>
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-[0_24px_70px_-55px_rgba(7,27,32,0.55)] sm:p-8">
              <div className="flex items-center gap-4 border-b border-slate-200 pb-6">
                <Image
                  src="/images/gyptiq-icon-light.png"
                  alt="Gyptiq app icon"
                  width={64}
                  height={64}
                  loading="lazy"
                  className="h-16 w-16 rounded-lg"
                />
                <div>
                  <h3 className="text-xl font-semibold text-[#071b20]">
                    AI-powered business companion
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Customer, sales, payment, and appointment workflows.
                  </p>
                </div>
              </div>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {gyptiqCapabilities.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-slate-700"
                  >
                    <AutomationIcon
                      name="check"
                      className="mt-1 h-4 w-4 shrink-0 text-[#2f7d44]"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section id="process" className="bg-white py-16 sm:py-24">
        <Container>
          <SectionIntro
            eyebrow="How we work"
            title="From Problem to Intelligent System"
            copy="A practical path from operational problem to deployed system, with architecture, testing, safeguards, and measurement built into the work."
          />
          <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {workSteps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-lg border border-slate-200 bg-white p-6"
              >
                <span className="text-sm font-semibold text-[#2f7d44]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-lg font-semibold leading-7 text-[#071b20]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.copy}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-[#f6f7f3] py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
            <SectionIntro
              eyebrow="Why Sentient Engineering"
              title="Practical Intelligence. Engineered for Reality."
              copy="We design around operational constraints, existing tools, people, data quality, risk, security, and measurable business outcomes."
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {differentiators.map((item) => (
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

      <section id="contact" className="scroll-mt-24 bg-white py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 rounded-lg border border-slate-200 bg-[#071b20] p-6 text-white sm:p-10 lg:grid-cols-[0.92fr_1.08fr] lg:p-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8fd3bf]">
                Contact
              </p>
              <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight sm:text-5xl">
                What could an intelligent system change in your operation?
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
                Talk to Sentient Engineering about applied AI, machine learning,
                computer vision, robotics, automation, data intelligence, or
                operational systems for your business or industry.
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
                <textarea name="problem" rows={5} required />
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
