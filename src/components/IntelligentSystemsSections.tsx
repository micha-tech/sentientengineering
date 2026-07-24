import Image from "next/image";
import Link from "next/link";
import {
  businessOutcomes,
  engineeringCapabilities,
  industries,
  managedAiCapabilities,
  products,
  services,
  workSteps,
} from "@/lib/site-data";
import AutomationIcon from "./AutomationIcon";
import ContactSection from "./ContactSection";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

const positioningValues = [
  {
    title: "Integrated",
    copy: "Our systems connect with the tools, data, teams, and processes already used by the organisation.",
  },
  {
    title: "Production-Ready",
    copy: "We engineer for reliability, security, maintainability, observability, and real-world deployment.",
  },
  {
    title: "Outcome-Driven",
    copy: "Every system is tied to measurable improvements in revenue, efficiency, decision-making, safety, reliability, or operational performance.",
  },
] as const;

const serviceVisuals = [
  "/images/ai-assistant.jpg",
  "/images/automation-hero-banner.png",
  "/images/computer-vision-hud.webp",
] as const;

const industryVisuals = [
  "/images/automation-hero-banner.png",
  "/images/robotics-arm.webp",
  "/images/ai-intelligence-portrait.webp",
  "/images/computer-vision-eye.jpg",
] as const;

export default function IntelligentSystemsSections() {
  const gyptiq = products[0];

  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200 bg-white py-16 sm:py-28">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Built for the real world"
                title="AI that leaves the lab and enters the workflow."
                copy="We combine artificial intelligence, software engineering, automation, data infrastructure, and domain knowledge into complete operational systems."
              />
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
                From the first data connection to the final user experience, we
                design every layer to work reliably inside the organisation.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {positioningValues.map((item, index) => (
                  <article key={item.title} className="rounded-2xl border border-slate-200 bg-[#f6f9f7] p-5">
                    <p className="text-xs font-bold text-[#2f7d44]">0{index + 1}</p>
                    <h3 className="mt-5 text-base font-semibold text-[#071b20]">{item.title}</h3>
                    <p className="mt-2 text-xs leading-5 text-slate-600">{item.copy}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-[#071b20] shadow-[0_24px_80px_rgba(7,27,32,0.18)]">
                <Image
                  src="/images/automation-hero-banner.png"
                  alt="Connected automation and AI systems working across business operations"
                  fill
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(4,22,25,0.9)_100%)]" />
                <div className="absolute inset-x-6 bottom-6 sm:inset-x-8 sm:bottom-8">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8fd3bf]">One connected system</p>
                  <p className="mt-2 max-w-md text-xl font-semibold leading-7 text-white sm:text-2xl">
                    Data, models, workflows, interfaces, and infrastructure—engineered together.
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:block">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#2f7d44]">From prototype</p>
                <p className="mt-1 text-sm font-semibold text-[#071b20]">to dependable production</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section
        id="services"
        className="scroll-mt-20 bg-[#071b20] py-16 text-white sm:py-24"
      >
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <SectionHeading
              light
              eyebrow="Services"
              title="Applied AI Engineering Services"
            />
            <p className="max-w-2xl text-base leading-8 text-slate-300 lg:justify-self-end">
              We design and deploy intelligent systems across digital business
              operations, enterprise workflows, physical environments, and
              industrial processes.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {services.slice(0, 8).map((service, index) => (
              <article
                key={service.id}
                className={`group relative min-h-[19rem] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#8fd3bf]/40 hover:bg-white/[0.07] ${
                  index < 2 ? "md:min-h-[22rem] xl:col-span-2" : ""
                }`}
              >
                {index < 3 ? (
                  <>
                    <Image
                      src={serviceVisuals[index]}
                      alt=""
                      fill
                      sizes={index < 2 ? "(min-width: 1280px) 50vw, 100vw" : "(min-width: 1280px) 25vw, 50vw"}
                      className="object-cover opacity-35 transition duration-500 group-hover:scale-105 group-hover:opacity-45"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,27,32,0.05)_0%,#071b20_88%)]" />
                  </>
                ) : null}
                <div className="relative flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#8fd3bf]/12">
                      <AutomationIcon name={service.icon} className="h-5 w-5 text-[#8fd3bf]" />
                    </span>
                    <span className="text-xs text-slate-500">0{index + 1}</span>
                  </div>
                  <div className="mt-auto pt-12">
                    <h3 className="text-xl font-semibold leading-7 text-white">{service.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-400">{service.summary}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <Link className="primary-button px-6" href="/services">
              View All Services
            </Link>
          </div>
        </Container>
      </section>

      <section
        id="products"
        className="scroll-mt-20 bg-[#050d0f] py-16 text-white sm:py-24"
      >
        <Container>
          <SectionHeading
            light
            eyebrow="Products"
            title="AI Products Built for Real Operations"
            copy="Our products convert recurring business and operational challenges into scalable intelligent platforms."
          />

          <article className="mt-12 grid overflow-hidden rounded-md border border-white/10 lg:grid-cols-[1.15fr_0.85fr]">
            <figure className="relative min-h-[22rem] bg-black sm:min-h-[30rem]">
              <Image
                src="/images/gyptiq-announcement.png"
                alt="Gyptiq connecting customer conversations, sales workflows, quotations, payments, appointments, and reminders"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                loading="lazy"
                className="object-cover"
              />
            </figure>
            <div className="flex flex-col justify-center bg-white/[0.03] p-6 sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8fd3bf]">
                {gyptiq.label}
              </p>
              <h3 className="mt-4 text-3xl font-semibold text-white">
                {gyptiq.name}
              </h3>
              <p className="mt-5 text-sm leading-7 text-slate-300">
                {gyptiq.description}
              </p>
              <p className="mt-5 border-l-2 border-[#8fd3bf] pl-4 text-sm leading-7 text-slate-300">
                Gyptiq helps businesses respond faster, follow up consistently,
                reduce manual work, and manage customer-facing operations
                through one intelligent system.
              </p>
              <div className="mt-7">
                <a className="primary-button px-6" href="#gyptiq-details">
                  Explore Gyptiq
                </a>
              </div>
            </div>
          </article>

          <div
            id="gyptiq-details"
            className="mt-6 grid scroll-mt-28 border-t border-white/15 md:grid-cols-2 xl:grid-cols-5"
          >
            {products.slice(1, 6).map((product, index) => (
              <article
                key={product.id}
                className={`border-b border-white/15 py-7 md:p-7 ${
                  index % 2 === 0 ? "md:border-r md:border-white/15" : ""
                } ${index < 4 ? "xl:border-r xl:border-white/15" : ""}`}
              >
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#8fd3bf]">
                  {product.label}
                </p>
                <h3 className="mt-4 text-lg font-semibold leading-7 text-white">
                  {product.name}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {product.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <Link className="ghost-button px-6" href="/products">
              Explore All Products
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <SectionHeading
                eyebrow="How we work"
                title="From Business Problem to Production System"
                copy="We optimize the process before automating it. AI is applied where it creates measurable operational value."
              />
              <div className="relative mt-8 hidden aspect-[5/3] overflow-hidden rounded-2xl lg:block">
                <Image
                  src="/images/ai-assistant.jpg"
                  alt="AI engineering team translating an operational challenge into a working system"
                  fill
                  sizes="36vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#071b20]/25" />
              </div>
            </div>
            <ol className="relative">
              <span className="absolute bottom-8 left-[1.45rem] top-8 w-px bg-gradient-to-b from-[#8fd3bf] via-[#2f7d44] to-slate-200 sm:left-[1.7rem]" />
              {workSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="relative grid grid-cols-[3rem_1fr] gap-4 py-4 sm:grid-cols-[3.5rem_0.62fr_1.38fr] sm:gap-6"
                >
                  <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#8fd3bf]/60 bg-white text-xs font-bold text-[#2f7d44] shadow-sm sm:h-14 sm:w-14">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="pt-3 text-lg font-semibold leading-7 text-[#071b20] sm:pt-4">
                    {step.title}
                  </h3>
                  <p className="col-start-2 rounded-xl bg-[#f3f6f4] p-5 text-sm leading-7 text-slate-600 sm:col-start-auto">
                    {step.copy}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section
        id="industries"
        className="scroll-mt-20 bg-[#071b20] py-16 text-white sm:py-24"
      >
        <Container>
          <SectionHeading
            light
            eyebrow="Industries"
            title="Industries We Engineer For"
            copy="Applied AI must reflect the workflows, constraints, risk, and operating conditions of the environment where it will perform."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {industries.map((industry, index) => (
              <article
                key={industry.name}
                className="group relative min-h-64 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7"
              >
                {index < 4 ? (
                  <>
                    <Image
                      src={industryVisuals[index]}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover opacity-25 transition duration-500 group-hover:scale-105 group-hover:opacity-35"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,27,32,0.12),#071b20_90%)]" />
                  </>
                ) : null}
                <div className="relative flex h-full flex-col justify-end">
                  <p className="text-xs font-bold text-[#8fd3bf]">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-3 text-xl font-semibold text-white">{industry.name}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">{industry.examples}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f3f6f4] py-16 sm:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <SectionHeading
              eyebrow="Engineering capabilities"
              title="Built Across the Complete AI System"
            />
            <p className="max-w-2xl text-base leading-8 text-slate-600 lg:justify-self-end">
              We select technologies around the operating requirement, then
              engineer the software, data, infrastructure, integrations, and
              controls required for the complete system.
            </p>
          </div>
          <div className="mt-12 grid border-t border-slate-300 sm:grid-cols-2 lg:grid-cols-4">
            {engineeringCapabilities.map((capability, index) => (
              <div
                key={capability}
                className={`flex min-h-20 items-center border-b border-slate-300 py-5 text-sm font-semibold text-[#071b20] sm:px-5 ${
                  index % 2 === 0 ? "sm:border-r" : ""
                } ${index % 4 !== 3 ? "lg:border-r" : ""}`}
              >
                <span className="mr-3 text-xs text-[#2f7d44]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {capability}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#050d0f] py-16 text-white sm:py-24">
        <Container>
          <SectionHeading
            light
            eyebrow="Business outcomes"
            title="Engineering for Measurable Results"
            copy="The purpose of applied AI is not simply to generate content or produce impressive demonstrations. It is to improve how the organisation sells, operates, decides, delivers, and grows."
          />
          <div className="mt-12 grid border-t border-white/15 sm:grid-cols-2 lg:grid-cols-3">
            {businessOutcomes.map((outcome, index) => (
              <div
                key={outcome}
                className={`flex gap-4 border-b border-white/15 py-6 text-sm font-medium leading-6 text-slate-300 sm:px-6 ${
                  index % 2 === 0 ? "sm:border-r sm:border-white/15" : ""
                } ${index % 3 !== 2 ? "lg:border-r lg:border-white/15" : ""}`}
              >
                <AutomationIcon
                  name="check"
                  className="mt-1 h-4 w-4 shrink-0 text-[#8fd3bf]"
                />
                <span>{outcome}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:gap-20">
            <SectionHeading
              eyebrow="Managed AI"
              title="AI Systems Require More Than Deployment"
              copy="Sentient Engineering can operate and improve deployed systems as an ongoing managed service. This allows clients to benefit from AI capabilities without building and maintaining an internal AI engineering team."
            />
            <div className="grid border-t border-slate-200 sm:grid-cols-2">
              {managedAiCapabilities.map((item, index) => (
                <div
                  key={item}
                  className={`flex gap-3 border-b border-slate-200 py-5 text-sm font-medium text-slate-700 sm:px-5 ${
                    index % 2 === 0 ? "sm:border-r" : ""
                  }`}
                >
                  <AutomationIcon
                    name="check"
                    className="h-4 w-4 shrink-0 text-[#2f7d44]"
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section
        id="about"
        className="scroll-mt-20 bg-[#06191d] py-16 text-white sm:py-24"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
            <SectionHeading
              light
              eyebrow="About Sentient Engineering"
              title="Applied AI. Engineered for Reality."
              copy="Sentient Engineering is an engineering company focused on building intelligent systems for businesses and industries. We combine software engineering, artificial intelligence, automation, data, cloud infrastructure, and operational thinking to solve practical problems."
            />
            <div className="border-l-2 border-[#8fd3bf] pl-6 sm:pl-8">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#8fd3bf]">
                Our principle
              </p>
              <p className="mt-5 text-balance text-2xl font-semibold leading-10 text-white sm:text-3xl">
                Technology is the tool. Better business and operational
                performance is the product.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <ContactSection />
    </>
  );
}
