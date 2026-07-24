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

export default function IntelligentSystemsSections() {
  const gyptiq = products[0];

  return (
    <>
      <section className="border-b border-slate-200 bg-white py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <SectionHeading
              eyebrow="Sentient Engineering"
              title="We Build AI Systems That Perform Real Work"
              copy="Sentient Engineering is an Applied AI Engineering company. We combine artificial intelligence, software engineering, automation, data infrastructure, and domain knowledge to build systems that solve practical business and industrial problems."
            />
            <div>
              <p className="max-w-2xl text-base leading-8 text-slate-600">
                We do not stop at prototypes or isolated AI models. We engineer
                complete systems that integrate with existing workflows,
                applications, databases, communication channels, equipment, and
                operational processes.
              </p>
              <div className="mt-8 border-t border-slate-200">
                {positioningValues.map((item) => (
                  <article
                    key={item.title}
                    className="grid gap-3 border-b border-slate-200 py-6 sm:grid-cols-[10rem_1fr] sm:gap-8"
                  >
                    <h3 className="text-base font-semibold text-[#071b20]">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-7 text-slate-600">
                      {item.copy}
                    </p>
                  </article>
                ))}
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

          <div className="mt-12 grid border-t border-white/15 md:grid-cols-2 xl:grid-cols-4">
            {services.slice(0, 8).map((service, index) => (
              <article
                key={service.id}
                className={`border-b border-white/15 py-7 md:p-7 ${
                  index % 2 === 0 ? "md:border-r md:border-white/15" : ""
                } ${index % 4 !== 3 ? "xl:border-r xl:border-white/15" : ""}`}
              >
                <AutomationIcon
                  name={service.icon}
                  className="h-6 w-6 text-[#8fd3bf]"
                />
                <h3 className="mt-6 text-xl font-semibold leading-7 text-white">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {service.summary}
                </p>
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

      <section className="bg-white py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="How we work"
                title="From Business Problem to Production System"
                copy="We optimize the process before automating it. AI is applied where it creates measurable operational value."
              />
            </div>
            <ol className="border-t border-slate-300">
              {workSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="grid grid-cols-[3rem_1fr] gap-4 border-b border-slate-300 py-6 sm:grid-cols-[4rem_0.65fr_1.35fr] sm:gap-6"
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

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((industry, index) => (
              <article
                key={industry.name}
                className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] transition duration-300 hover:-translate-y-1 hover:border-[#8fd3bf]/40 hover:bg-white/[0.06]"
              >
                <figure className="relative aspect-[16/9] overflow-hidden bg-[#050d0f]">
                  <Image
                    src={industry.image}
                    alt={industry.imageAlt}
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,13,15,0.05)_25%,rgba(5,13,15,0.9)_100%)]" />
                  <p className="absolute left-5 top-5 rounded-full border border-white/20 bg-[#06191d]/70 px-3 py-1 text-xs font-bold text-[#8fd3bf] backdrop-blur-sm">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="absolute inset-x-5 bottom-5 text-xl font-semibold leading-7 text-white">
                    {industry.name}
                  </h3>
                </figure>
                <div className="p-5 sm:p-6">
                  <p className="text-sm leading-7 text-slate-300">
                    {industry.examples}
                  </p>
                  <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-4 text-xs font-semibold text-[#8fd3bf]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#8fd3bf]" />
                    Applied AI systems
                  </div>
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
