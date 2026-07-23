import Image from "next/image";
import { COMPANY } from "@/lib/constants";
import {
  differentiators,
  gyptiqCapabilities,
  industries,
  workSteps,
} from "@/lib/site-data";
import AutomationIcon from "./AutomationIcon";
import Container from "./Container";

const operatingOutcomes = [
  {
    title: "Accelerate revenue work",
    copy: "Qualify demand, prepare proposals, coordinate follow-up, and keep customer work moving.",
  },
  {
    title: "Reduce operational friction",
    copy: "Connect fragmented tools, remove repetitive handling, and route work with clear controls.",
  },
  {
    title: "Improve decision quality",
    copy: "Turn operational data into forecasts, alerts, recommendations, and accountable decisions.",
  },
  {
    title: "Extend physical visibility",
    copy: "Use cameras, sensors, and machine intelligence to inspect, monitor, and respond in real time.",
  },
] as const;

const capabilityGroups = [
  {
    number: "01",
    icon: "spark" as const,
    title: "Applied AI systems",
    copy: "Context-aware systems that work with enterprise knowledge, documents, conversations, and decisions.",
    services: [
      "AI assistants and agents",
      "Knowledge and enterprise search",
      "Document and voice intelligence",
    ],
  },
  {
    number: "02",
    icon: "workflow" as const,
    title: "Intelligent automation",
    copy: "Reliable workflows across teams, business applications, APIs, models, and approval paths.",
    services: [
      "Workflow orchestration",
      "Customer and revenue operations",
      "Finance and service automation",
    ],
  },
  {
    number: "03",
    icon: "pulse" as const,
    title: "Vision and physical intelligence",
    copy: "Computer vision and sensor-driven systems for inspection, safety, monitoring, and industrial work.",
    services: [
      "Visual quality inspection",
      "Operational monitoring",
      "Robotics and edge integration",
    ],
  },
  {
    number: "04",
    icon: "chart" as const,
    title: "Data and decision intelligence",
    copy: "Prediction, anomaly detection, optimization, and operational interfaces built around business decisions.",
    services: [
      "Forecasting and optimization",
      "Risk and anomaly detection",
      "Decision-support systems",
    ],
  },
] as const;

const engineeringControls = [
  "Human oversight and escalation",
  "Security and access boundaries",
  "Evaluation against real workflows",
  "Model and system observability",
  "Integration with existing technology",
  "Cost, latency, and reliability controls",
] as const;

function SectionIntro({
  eyebrow,
  title,
  copy,
  light = false,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p
        className={`text-xs font-bold uppercase tracking-[0.18em] ${
          light ? "text-[#8fd3bf]" : "text-[#2f7d44]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-balance text-3xl font-semibold leading-[1.08] sm:text-5xl ${
          light ? "text-white" : "text-[#071b20]"
        }`}
      >
        {title}
      </h2>
      {copy ? (
        <p
          className={`mt-5 max-w-2xl text-base leading-8 ${
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
      <section
        id="company"
        className="scroll-mt-20 border-b border-slate-200 bg-white py-16 sm:py-24"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:gap-20">
            <SectionIntro
              eyebrow="Applied intelligence"
              title="We turn operating problems into production-grade intelligent systems."
              copy="Sentient Engineering works from the business constraint outward. We combine AI, automation, software, data, and operational engineering to build systems that create measurable value inside real work."
            />

            <div className="grid border-y border-slate-200 sm:grid-cols-2">
              {operatingOutcomes.map((item, index) => (
                <article
                  key={item.title}
                  className={`py-6 sm:p-7 ${
                    index % 2 === 0 ? "sm:border-r sm:border-slate-200" : ""
                  } ${index < 2 ? "border-b border-slate-200" : ""}`}
                >
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2f7d44]">
                    Outcome {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-[#071b20]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.copy}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-6 border-t border-slate-200 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Business-first", "Start with the operating problem and desired result."],
              ["Technology-agnostic", "Select models and platforms around the system need."],
              ["Integrated", "Work with the tools, data, controls, and people already in place."],
              ["Accountable", "Measure adoption, reliability, accuracy, cost, and impact."],
            ].map(([title, copy]) => (
              <div key={title}>
                <p className="text-sm font-semibold text-[#071b20]">{title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section
        id="capabilities"
        className="scroll-mt-20 bg-[#f3f6f4] py-16 sm:py-24"
      >
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <SectionIntro
              eyebrow="Engineering capabilities"
              title="Applied AI and automation, built around the work."
            />
            <p className="max-w-2xl text-base leading-8 text-slate-600 lg:justify-self-end">
              We design the complete operating system around intelligence: data
              flows, models, software, integrations, human controls, deployment,
              and continuous evaluation.
            </p>
          </div>

          <div className="mt-12 border-t border-slate-300">
            {capabilityGroups.map((item) => (
              <article
                key={item.title}
                className="grid gap-6 border-b border-slate-300 py-8 md:grid-cols-[4rem_0.8fr_1.2fr] md:gap-10 md:py-10"
              >
                <div className="flex items-center gap-3 text-[#2f7d44] md:block">
                  <AutomationIcon name={item.icon} className="h-6 w-6" />
                  <span className="text-xs font-bold md:mt-5 md:block">
                    {item.number}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-[#071b20]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.copy}
                  </p>
                </div>
                <ul className="grid content-start gap-3 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
                  {item.services.map((service) => (
                    <li
                      key={service}
                      className="border-l-2 border-[#8fd3bf] pl-4 text-sm font-medium leading-6 text-slate-700"
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#071b20] py-16 text-white sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.06fr_0.94fr] lg:items-stretch">
            <figure className="relative min-h-[22rem] overflow-hidden rounded-md">
              <Image
                src="/images/ai-intelligence-portrait.webp"
                alt="Human and machine intelligence working together in an applied AI system"
                fill
                sizes="(min-width: 1024px) 54vw, 100vw"
                loading="lazy"
                className="object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-[#071b20]/88 px-6 py-5 text-xs font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                Human judgment. Machine intelligence. Operational control.
              </figcaption>
            </figure>

            <div className="flex flex-col justify-between py-2">
              <SectionIntro
                light
                eyebrow="Production discipline"
                title="An AI demonstration is not an operating system."
                copy="Enterprise deployment requires more than a model. We engineer the controls, integrations, monitoring, and ownership needed for intelligence to perform safely and reliably in production."
              />
              <div className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {engineeringControls.map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 border-t border-white/15 pt-4 text-sm leading-6 text-slate-300"
                  >
                    <AutomationIcon
                      name="check"
                      className="mt-1 h-4 w-4 shrink-0 text-[#8fd3bf]"
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section
        id="industries"
        className="scroll-mt-20 bg-white py-16 sm:py-24"
      >
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
            <SectionIntro
              eyebrow="Industry applications"
              title="Intelligence shaped around operating context."
            />
            <p className="max-w-2xl text-base leading-8 text-slate-600 lg:justify-self-end">
              The technology may be similar. The operating conditions are not.
              We adapt architecture, interfaces, controls, and deployment to the
              environment where the system must perform.
            </p>
          </div>

          <div className="mt-12 grid border-t border-slate-200 md:grid-cols-2">
            {industries.slice(0, 8).map((industry, index) => (
              <article
                key={industry.name}
                className={`border-b border-slate-200 py-7 md:p-8 ${
                  index % 2 === 0 ? "md:border-r" : ""
                }`}
              >
                <p className="text-xs font-bold text-[#2f7d44]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-[#071b20]">
                  {industry.name}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {industry.applications.slice(0, 4).join(" / ")}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section
        id="gyptiq"
        className="scroll-mt-20 bg-[#050d0f] py-16 text-white sm:py-24"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <SectionIntro
              light
              eyebrow="Sentient product"
              title="Gyptiq is coming to work."
              copy="Our AI-powered business companion helps teams handle customer conversations, sales work, quotes, payments, appointments, reminders, and follow-up."
            />
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a className="primary-button px-6" href="#contact">
                Explore Gyptiq
              </a>
              <a className="ghost-button px-6" href="#contact">
                Request a Demo
              </a>
            </div>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-[1.42fr_0.58fr]">
            <figure className="overflow-hidden rounded-md border border-white/10 bg-white/[0.03]">
              <div className="relative aspect-[1.1] sm:aspect-[3/2] lg:aspect-[16/10]">
                <Image
                  src="/images/gyptiq-announcement.png"
                  alt="Gyptiq connecting customer conversations, quotes, payments, appointments, and reminders"
                  fill
                  sizes="(min-width: 1024px) 70vw, 100vw"
                  loading="lazy"
                  className="object-cover"
                />
              </div>
            </figure>

            <div className="grid content-between gap-5">
              <figure className="overflow-hidden rounded-md border border-white/10 bg-white/[0.03]">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/images/gyptiq-in-hand.png"
                    alt="Gyptiq business automation activity on a mobile interface"
                    fill
                    sizes="(min-width: 1024px) 28vw, 100vw"
                    loading="lazy"
                    className="object-cover object-top"
                  />
                </div>
              </figure>
              <p className="border-l-2 border-[#8fd3bf] pl-5 text-lg font-semibold leading-8 text-white">
                Customer work keeps moving while the owner stays in control.
              </p>
            </div>
          </div>

          <div className="mt-8 grid border-y border-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {gyptiqCapabilities.slice(0, 8).map((item, index) => (
              <div
                key={item}
                className={`flex gap-3 py-5 text-sm leading-6 text-slate-300 sm:px-5 ${
                  index % 2 === 0 ? "sm:border-r sm:border-white/10" : ""
                } ${index < 4 ? "border-b border-white/10" : ""} ${
                  index % 4 !== 3 ? "lg:border-r lg:border-white/10" : ""
                }`}
              >
                <AutomationIcon
                  name="check"
                  className="mt-1 h-4 w-4 shrink-0 text-[#8fd3bf]"
                />
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="process" className="bg-[#f3f6f4] py-16 sm:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <SectionIntro
              eyebrow="Delivery model"
              title="From operating problem to deployed intelligence."
              copy="We move deliberately from discovery to production, keeping the business case, technical risk, and operating ownership visible at every stage."
            />

            <ol className="border-t border-slate-300">
              {workSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="grid grid-cols-[3rem_1fr] gap-4 border-b border-slate-300 py-6 sm:grid-cols-[4rem_0.7fr_1.3fr] sm:gap-6"
                >
                  <span className="text-xs font-bold text-[#2f7d44]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base font-semibold leading-6 text-[#071b20]">
                    {step.title}
                  </h3>
                  <p className="col-start-2 text-sm leading-6 text-slate-600 sm:col-start-auto">
                    {step.copy}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-16 border-t border-slate-300 pt-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2f7d44]">
              Why Sentient Engineering
            </p>
            <div className="mt-6 grid gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
              {differentiators.slice(0, 8).map((item) => (
                <div
                  key={item}
                  className="flex gap-3 text-sm font-medium leading-6 text-slate-700"
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

      <section
        id="contact"
        className="scroll-mt-20 bg-[#071b20] py-16 text-white sm:py-24"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8fd3bf]">
                Start with the problem
              </p>
              <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.08] sm:text-5xl">
                Where is your operation losing time, visibility, or capacity?
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
                Tell us what is happening today, what needs to change, and what
                success would look like. We will help define a practical system
                and path to deployment.
              </p>
              <div className="mt-10 border-t border-white/15 pt-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                  Direct enquiry
                </p>
                <a
                  className="mt-3 inline-flex text-base font-semibold text-[#8fd3bf] underline underline-offset-4"
                  href={`mailto:${COMPANY.email}`}
                >
                  {COMPANY.email}
                </a>
              </div>
            </div>

            <form
              action={`mailto:${COMPANY.email}`}
              method="post"
              encType="text/plain"
              className="grid gap-5 border-t border-white/15 pt-8 sm:grid-cols-2 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0"
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
                What operating problem are you trying to solve?
                <textarea name="problem" rows={5} required />
              </label>
              <button className="primary-button px-6 sm:col-span-2" type="submit">
                Talk to an Engineer
              </button>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}
