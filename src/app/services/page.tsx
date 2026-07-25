import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { createPageMetadata } from "@/lib/seo";
import { industryLandingPages } from "@/lib/seo-landing-data";

export const metadata: Metadata = createPageMetadata({
  title: "AI-Powered Business Systems and Automation Services",
  description:
    "Sentient Engineering builds AI-powered business systems, automated workflows, AI agents, computer vision, biometric systems, digital commerce intelligence, and industrial operations solutions.",
  path: "/services",
});

const serviceAreas = [
  {
    id: "business-systems-automation",
    kicker: "Sales · Operations · Administration",
    title: "AI-Powered Business Systems and Automation",
    summary:
      "We turn slow, repetitive and disconnected business processes into coordinated systems that move work forward automatically.",
    image: "/images/ai-assistant.jpg",
    imageAlt:
      "AI assistant supporting connected sales and business operations",
    applications: [
      "Lead capture, qualification and follow-up",
      "Quotations, invoicing and payment workflows",
      "Administrative and approval automation",
      "Inventory, purchasing and procurement workflows",
      "Customer service and appointment operations",
      "Reporting, alerts and management visibility",
    ],
    outcomes: [
      "Faster sales cycles",
      "Lower administrative cost",
      "Fewer missed handoffs",
      "More operating capacity",
    ],
  },
  {
    id: "ai-agents-integrations",
    kicker: "Agents · Orchestration · Integration",
    title: "AI Agents That Work Across Your Existing Tools",
    summary:
      "We design and orchestrate specialised AI agents that communicate, reason, retrieve information and take approved actions across the software your teams already use.",
    image: "/images/service-ai-agent-integrations.jpg",
    imageAlt:
      "AI agent connected to Gmail, WhatsApp, websites and business analytics",
    applications: [
      "Sales, support and operations agents",
      "WhatsApp and email enquiry handling",
      "Gmail inbox monitoring and response support",
      "Website and internal application assistants",
      "CRM, ERP and database workflows",
      "Multi-agent coordination and escalation",
    ],
    outcomes: [
      "24/7 responsiveness",
      "Consistent execution",
      "Connected business data",
      "Human control where it matters",
    ],
  },
  {
    id: "computer-vision",
    kicker: "Manufacturing · Construction · Agriculture · Security",
    title: "Practical Computer Vision Systems",
    summary:
      "We implement powerful vision models inside complete operational systems—combining cameras, edge devices, software, alerts and human review.",
    image: "/images/service-computer-vision-agriculture.jpg",
    imageAlt:
      "Computer vision monitoring crops with a smartphone, drone and farm analytics",
    applications: [
      "Quality inspection and defect detection",
      "Construction progress and safety monitoring",
      "Agricultural crop, livestock and field observation",
      "Intrusion, perimeter and asset monitoring",
      "Object counting, tracking and classification",
      "Equipment and site-condition inspection",
    ],
    outcomes: [
      "Continuous visibility",
      "Earlier risk detection",
      "More consistent inspection",
      "Reduced manual exposure",
    ],
  },
  {
    id: "biometrics-identity",
    kicker: "Identity · Access · Verification",
    title: "AI-Powered Biometric and Facial Recognition Systems",
    summary:
      "We design identity systems for controlled access, verification, attendance and secure workflows, with privacy, auditability and operating context built into the architecture.",
    image: "/images/service-facial-recognition.png",
    imageAlt:
      "Facial recognition system processing biometric landmarks",
    applications: [
      "Facial verification and recognition",
      "Workforce attendance and access control",
      "Visitor and contractor management",
      "Identity matching and duplicate detection",
      "Secure customer or patient verification",
      "Audit trails and exception review",
    ],
    outcomes: [
      "Faster verification",
      "Stronger access control",
      "Reliable attendance records",
      "Reduced identity fraud",
    ],
  },
  {
    id: "digital-commerce",
    kicker: "Commerce · Personalisation · Revenue",
    title: "AI-Powered Digital Commerce Systems",
    summary:
      "We make digital buying experiences more relevant and commercially effective by learning from product data, customer intent and shopping behaviour.",
    image: "/images/industry-commerce.png",
    imageAlt:
      "Modern commerce and intelligent delivery operations",
    applications: [
      "Personalised product recommendations",
      "Complementary and bundle recommendations",
      "Natural-language and technical product search",
      "Customer behaviour tracking and learning",
      "Dynamic merchandising and conversion support",
      "B2B quotation and purchasing intelligence",
    ],
    outcomes: [
      "Higher conversion",
      "Larger basket value",
      "Better product discovery",
      "More repeat revenue",
    ],
  },
  {
    id: "industrial-operations",
    kicker: "Manufacturing · Procurement · Logistics · Supply Chain",
    title: "Industrial and Operations Intelligence",
    summary:
      "We connect operational data, AI and optimisation to improve how organisations plan, move, maintain and allocate resources.",
    image: "/images/industry-logistics.png",
    imageAlt:
      "Connected logistics network with cargo, trucks, aircraft and port operations",
    applications: [
      "Demand, inventory and production planning",
      "Procurement and supplier intelligence",
      "Route, dispatch and fleet optimisation",
      "Warehouse and supply-chain visibility",
      "Predictive maintenance and anomaly detection",
      "Operational dashboards and decision support",
    ],
    outcomes: [
      "Lower operating cost",
      "Better asset utilisation",
      "Less downtime and waste",
      "More reliable fulfilment",
    ],
  },
] as const;

const integrations = [
  "WhatsApp",
  "Gmail",
  "Business email",
  "Websites",
  "CRM platforms",
  "ERP systems",
  "Internal tools",
  "Databases",
  "Inventory software",
  "Payment systems",
  "Cloud applications",
  "Custom APIs",
] as const;

const deliverySteps = [
  {
    title: "Start with the operating problem",
    copy: "We identify where revenue, time, visibility, quality or reliability is being lost—and define how success will be measured.",
  },
  {
    title: "Design the complete system",
    copy: "We map the workflow, agents, models, integrations, data, interfaces, controls and human decision points required.",
  },
  {
    title: "Build and integrate",
    copy: "We engineer the software and connect it to the channels, tools and infrastructure already running the business.",
  },
  {
    title: "Deploy into real operations",
    copy: "We test with real users and operating conditions, then prepare the system for secure, reliable production use.",
  },
  {
    title: "Operate and improve",
    copy: "We monitor performance, update knowledge, refine workflows and keep the system producing value as the business changes.",
  },
] as const;

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-black pt-[4.5rem] text-white">
          <Container className="border-x border-white/15 px-0">
            <div className="grid min-h-[calc(92svh-4.5rem)] lg:grid-cols-[1.08fr_0.92fr]">
              <div className="flex flex-col justify-end border-b border-white/15 p-6 pb-10 sm:p-10 sm:pb-14 lg:border-b-0 lg:border-r lg:p-12">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">
                  AI-powered systems for real business
                </p>
                <h1 className="mt-8 max-w-5xl text-balance text-[2.8rem] font-medium leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-[4.8rem]">
                  We build the systems that move work and business forward.
                </h1>
                <p className="mt-7 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
                  From sales and administration to inventory, procurement,
                  manufacturing and supply chains, we engineer AI and
                  automation around the work your organisation needs done.
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#service-portfolio"
                    className="inline-flex min-h-12 items-center justify-center bg-white px-6 text-sm font-bold text-black"
                  >
                    Explore What We Build
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex min-h-12 items-center justify-center border border-white/30 px-6 text-sm font-bold text-white transition hover:bg-white hover:text-black"
                  >
                    Discuss Your Business Problem
                  </a>
                </div>
              </div>

              <figure className="relative min-h-[29rem] bg-[#07100e]">
                <Image
                  src="/images/industry-field-services.png"
                  alt="Field operations professional using intelligent systems in a real business environment"
                  fill
                  preload
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.62))]" />
                <figcaption className="absolute bottom-0 left-0 right-0 grid grid-cols-3 border-t border-white/25 bg-black/55 text-center backdrop-blur-sm">
                  {["Build", "Integrate", "Operate"].map((item, index) => (
                    <span
                      key={item}
                      className="border-r border-white/20 px-2 py-5 text-[0.65rem] font-bold uppercase tracking-[0.14em] last:border-r-0"
                    >
                      {String(index + 1).padStart(2, "0")} · {item}
                    </span>
                  ))}
                </figcaption>
              </figure>
            </div>
          </Container>
        </section>

        <section className="bg-[#f6f6f1] text-black">
          <Container className="border-x border-black/10 py-20 sm:py-28">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/45">
              Our difference
            </p>
            <h2 className="mt-8 max-w-6xl text-balance text-3xl font-medium leading-[1.12] tracking-[-0.04em] sm:text-5xl lg:text-[4rem]">
              We do not sell abstract AI. We engineer systems that perform real
              work inside real businesses.
            </h2>
            <div className="mt-14 grid border-t border-black/15 md:grid-cols-3">
              {[
                [
                  "Problem-led",
                  "The workflow and commercial objective determine the technology—not the other way around.",
                ],
                [
                  "Connected",
                  "Our systems work across the channels, software, data and teams already running the organisation.",
                ],
                [
                  "Production-owned",
                  "We build, deploy, monitor and improve complete systems instead of stopping at a prototype.",
                ],
              ].map(([title, copy], index) => (
                <article
                  key={title}
                  className="min-h-60 border-b border-black/15 p-6 md:border-r md:p-8 md:last:border-r-0"
                >
                  <span className="text-xs font-bold text-black/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-12 text-2xl font-semibold tracking-[-0.03em]">
                    {title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-black/55">{copy}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section
          id="service-portfolio"
          className="scroll-mt-20 bg-white text-black"
        >
          <Container className="border-x border-black/10 px-0">
            <div className="border-b border-black/10 px-6 py-20 sm:px-10 sm:py-28">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/45">
                What we build
              </p>
              <h2 className="mt-7 max-w-5xl text-balance text-4xl font-medium leading-[1.08] tracking-[-0.04em] sm:text-6xl">
                Intelligent systems across the complete business.
              </h2>
            </div>

            {serviceAreas.map((service, index) => (
              <article
                id={service.id}
                key={service.id}
                className="scroll-mt-24 border-b border-black/10"
              >
                <div className="border-b border-black/10 px-6 py-5 sm:px-10">
                  <div className="flex items-center justify-between gap-5">
                    <p className="text-xs font-bold uppercase tracking-[0.13em] text-black/45">
                      {service.kicker}
                    </p>
                    <span className="text-xs font-bold text-black/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2">
                  <div
                    className={`flex min-h-[35rem] flex-col justify-between p-6 sm:p-10 ${
                      index % 2 === 1
                        ? "lg:order-2 lg:border-l"
                        : "lg:border-r"
                    } border-black/10`}
                  >
                    <div>
                      <h2 className="max-w-xl text-3xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-5xl">
                        {service.title}
                      </h2>
                      <p className="mt-6 max-w-xl text-base leading-8 text-black/60">
                        {service.summary}
                      </p>
                      <Link
                        href={`/services/${service.id}`}
                        className="mt-7 inline-flex border-b border-black pb-1 text-sm font-bold"
                      >
                        View service details
                      </Link>
                    </div>

                    <div className="mt-14">
                      <p className="text-xs font-bold uppercase tracking-[0.13em] text-black/40">
                        What we implement
                      </p>
                      <div className="mt-5 grid border-t border-black/10 sm:grid-cols-2">
                        {service.applications.map((application) => (
                          <p
                            key={application}
                            className="border-b border-black/10 py-3 pr-4 text-sm font-medium leading-6 sm:border-r sm:odd:pr-4 sm:even:border-r-0 sm:even:pl-4"
                          >
                            {application}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div
                    className={`grid min-h-[35rem] grid-rows-[1fr_auto] ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <figure className="relative min-h-[25rem] bg-neutral-200">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </figure>
                    <div className="grid grid-cols-2 bg-black text-white">
                      {service.outcomes.map((outcome) => (
                        <p
                          key={outcome}
                          className="border-b border-r border-white/15 px-4 py-4 text-xs font-bold uppercase leading-5 tracking-[0.08em]"
                        >
                          {outcome}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </Container>
        </section>

        <section className="bg-black text-white">
          <Container className="border-x border-white/15 py-20 sm:py-28">
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">
                  Integration is the advantage
                </p>
                <h2 className="mt-7 max-w-xl text-4xl font-medium leading-[1.08] tracking-[-0.04em] sm:text-5xl">
                  AI agents that work where your business already works.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-8 text-white/55">
                  We connect intelligence to the communication channels,
                  applications and data sources already used by your customers,
                  teams and operations.
                </p>
              </div>

              <div className="grid grid-cols-2 border-t border-l border-white/15 sm:grid-cols-3">
                {integrations.map((integration, index) => (
                  <div
                    key={integration}
                    className="flex min-h-28 flex-col justify-between border-b border-r border-white/15 p-4 sm:p-5"
                  >
                    <span className="text-[0.65rem] font-bold text-white/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-semibold">{integration}</span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-[#ededE7] text-black">
          <Container className="border-x border-black/10 py-20 sm:py-28">
            <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr]">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/45">
                Cross-industry systems
              </p>
              <div>
                <h2 className="max-w-5xl text-balance text-4xl font-medium leading-[1.08] tracking-[-0.04em] sm:text-6xl">
                  One engineering capability. Many operating environments.
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-black/55">
                  The technology adapts to the workflow, constraints and risk
                  profile of the industry where it must perform.
                </p>
              </div>
            </div>

            <div className="mt-14 grid border-t border-l border-black/15 sm:grid-cols-2 lg:grid-cols-4">
              {industryLandingPages.map((industry, index) => (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="flex min-h-40 flex-col justify-between border-b border-r border-black/15 p-5"
                >
                  <span className="text-xs font-bold text-black/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-lg font-semibold tracking-[-0.02em]">
                    {industry.name}
                  </p>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-white text-black">
          <Container className="border-x border-black/10 py-20 sm:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/45">
                  How we deliver
                </p>
                <h2 className="mt-7 text-4xl font-medium leading-[1.08] tracking-[-0.04em] sm:text-5xl">
                  From business problem to operating system.
                </h2>
              </div>

              <ol className="border-t border-black/15">
                {deliverySteps.map((step, index) => (
                  <li
                    key={step.title}
                    className="grid gap-4 border-b border-black/15 py-6 sm:grid-cols-[3rem_0.72fr_1.28fr]"
                  >
                    <span className="text-xs font-bold text-black/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-semibold leading-6">{step.title}</h3>
                    <p className="text-sm leading-7 text-black/55">
                      {step.copy}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-16 flex flex-col gap-6 border-y border-black/15 py-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-2xl text-2xl font-semibold leading-tight tracking-[-0.03em]">
                Have a workflow, operation or customer experience that should
                perform better?
              </p>
              <a
                href="#contact"
                className="inline-flex min-h-12 shrink-0 items-center justify-center bg-black px-6 text-sm font-bold text-white"
              >
                Start the Conversation
              </a>
            </div>
          </Container>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
