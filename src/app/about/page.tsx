import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { COMPANY } from "@/lib/constants";
import { industryLandingPages } from "@/lib/seo-landing-data";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";

const aboutMetadata = createPageMetadata({
  title: "About Sentient Engineering | Applied AI Engineering Company",
  description:
    "Learn about Sentient Engineering, an Applied AI engineering company in Lagos building complete intelligent systems for business, science and industry.",
  path: "/about",
});

export const metadata: Metadata = {
  ...aboutMetadata,
  title: {
    absolute: "About Sentient Engineering | Applied AI Engineering Company",
  },
};

const principles = [
  {
    title: "Problem before technology",
    copy: "We begin with the business constraint, not a preferred tool or model. The right answer may combine AI, conventional software, workflow design and systems integration.",
  },
  {
    title: "Complete systems over isolated features",
    copy: "A model alone is rarely a business solution. We engineer the data flows, interfaces, integrations, human controls, infrastructure and monitoring around it.",
  },
  {
    title: "Measurable business value",
    copy: "Every project should improve an outcome that matters: response time, administrative effort, lead time, accuracy, reliability, risk or process visibility.",
  },
  {
    title: "Human control where it matters",
    copy: "Sensitive work retains clear accountability through approval paths, escalation rules, audit trails and human review.",
  },
  {
    title: "Ownership beyond deployment",
    copy: "We design for security, observability, maintenance and dependable use under actual business conditions—not only for a successful demonstration.",
  },
] as const;

const capabilities = [
  {
    title: "AI agents and integrations",
    copy: "Governed agents that respond to enquiries, retrieve information, prepare documents, update records and coordinate work across WhatsApp, email, websites, CRM platforms and internal software.",
    href: "/services/ai-agents-integrations",
    linkLabel: "Explore AI agent engineering",
  },
  {
    title: "Business systems and process automation",
    copy: "Integrated systems that connect applications, automate repetitive processes, route approvals, generate business documents and improve coordination between teams.",
    href: "/services/business-systems-automation",
    linkLabel: "Explore business process automation",
  },
  {
    title: "Computer vision",
    copy: "Image and video intelligence for inspection, defect detection, object recognition, safety monitoring, environmental observation and image-based analysis.",
    href: "/services/computer-vision",
    linkLabel: "Explore computer vision capabilities",
  },
  {
    title: "Biometrics and identity systems",
    copy: "Privacy-conscious verification, attendance, visitor management and access-control systems with secure data handling, auditability and human oversight.",
    href: "/services/biometrics-identity",
    linkLabel: "Explore biometric identity systems",
  },
  {
    title: "Industrial intelligence",
    copy: "Monitoring, anomaly detection and predictive systems that identify emerging equipment or process risks before they create avoidable disruption.",
    href: "/services/industrial-operations",
    linkLabel: "Explore industrial intelligence",
  },
  {
    title: "Data and decision intelligence",
    copy: "Platforms that consolidate business information, track performance, identify patterns and give decision-makers clearer, more timely visibility.",
    href: "/services/industrial-operations",
    linkLabel: "Explore decision-intelligence systems",
  },
  {
    title: "Cloud and AI operations",
    copy: "Infrastructure, monitoring, security, integrations and support controls that keep AI and software systems reliable after deployment.",
    href: "/services",
    linkLabel: "Explore our engineering services",
  },
] as const;

const deliverySteps = [
  {
    title: "Understand the business problem",
    copy: "We examine the current process, people, existing systems, delays, risks, data and desired outcome.",
  },
  {
    title: "Define the system",
    copy: "We determine what should be automated, what requires human judgement, which tools must connect and how success will be measured.",
  },
  {
    title: "Engineer and integrate",
    copy: "We design the application, AI components, workflows, data structures, APIs, interfaces and infrastructure.",
  },
  {
    title: "Validate in the real workflow",
    copy: "We test against representative business scenarios and exceptions, not only a controlled technical demonstration.",
  },
  {
    title: "Deploy and operate",
    copy: "We deploy with appropriate security, monitoring, logging, documentation and working controls.",
  },
  {
    title: "Improve continuously",
    copy: "Where appropriate, we monitor performance, identify bottlenecks and refine the system as requirements evolve.",
  },
] as const;

const businessMeasures = [
  "Customer response time",
  "Enquiry-to-quotation time",
  "Process lead time",
  "Administrative workload",
  "Business visibility",
  "Data accuracy",
  "Equipment reliability",
  "Risk and accountability",
  "System maintainability",
  "Capacity to scale",
] as const;

const responsibleControls = [
  "Role-based access",
  "Secure data handling",
  "Human approval",
  "Audit trails",
  "Data minimisation",
  "Monitoring and logging",
  "Exception escalation",
  "Retention controls",
  "System documentation",
  "Clear accountability",
] as const;

export default function AboutPage() {
  const pageUrl = absoluteUrl("/about");
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": pageUrl,
        name: "About Sentient Engineering",
        url: pageUrl,
        description:
          "Sentient Engineering is an Applied AI engineering company that designs and deploys complete intelligent systems for business, science and industry.",
        about: {
          "@id": `${COMPANY.url}/#organization`,
        },
        mainEntity: {
          "@id": `${COMPANY.url}/#organization`,
        },
      },
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": `${COMPANY.url}/#organization`,
        name: COMPANY.name,
        url: COMPANY.url,
        logo: absoluteUrl("/sentientlogo-wordmark.png"),
        email: COMPANY.email,
        telephone: "+2347073512305",
        description:
          "Sentient Engineering is an Applied AI engineering company that designs and deploys complete intelligent systems for business, science and industry.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lagos",
          addressCountry: "NG",
        },
        areaServed: ["Nigeria", "Africa"],
        founder: {
          "@type": "Person",
          name: "Michael Johnson",
          jobTitle: "Founder and Head of Engineering and AI",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: COMPANY.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "About",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <Navbar />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <section className="bg-black pt-[4.5rem] text-white">
          <Container className="border-x border-white/15 px-0">
            <div className="grid lg:grid-cols-[1.18fr_0.82fr]">
              <div className="flex min-h-[42rem] flex-col justify-end border-b border-white/15 p-6 py-14 sm:p-10 sm:py-20 lg:border-b-0 lg:border-r lg:p-12">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">
                  About Sentient Engineering
                </p>
                <h1 className="mt-8 max-w-5xl text-balance text-[3rem] font-medium leading-[0.98] tracking-[-0.055em] sm:text-7xl lg:text-[5rem]">
                  We engineer intelligent systems around real business,
                  scientific and industrial problems.
                </h1>
                <p className="mt-7 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
                  Sentient Engineering is an Applied AI engineering company
                  based in Lagos, Nigeria. We design and deploy complete systems
                  for business operations, scientific applications and
                  engineering environments.
                </p>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/45">
                  Our work combines artificial intelligence, software
                  engineering, process automation, data infrastructure, systems
                  integration and cloud operations. Technology is the tool; the
                  objective is dependable improvement in business performance.
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex min-h-12 items-center justify-center bg-white px-6 text-sm font-bold text-black"
                  >
                    Discuss your project
                  </Link>
                  <a
                    href={COMPANY.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/30 px-6 text-sm font-bold text-white"
                  >
                    <FaWhatsapp aria-hidden="true" className="h-5 w-5" />
                    Chat with us on WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex min-h-[24rem] flex-col justify-between bg-[#101010] p-6 sm:p-10 lg:p-12">
                <div className="relative h-20 w-72 max-w-full">
                  <Image
                    src="/sentientlogo-wordmark.png"
                    alt="Sentient Engineering logo"
                    fill
                    priority
                    sizes="288px"
                    className="object-contain object-left"
                  />
                </div>
                <blockquote className="mt-20 max-w-md border-t border-white/15 pt-8 text-3xl font-medium leading-tight tracking-[-0.04em]">
                  Technology is a tool. The real product is better business
                  performance.
                </blockquote>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-[#f6f6f1] text-black">
          <Container className="border-x border-black/10 py-20 sm:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.68fr_1.32fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/45">
                  Who we are
                </p>
                <h2 className="mt-7 text-4xl font-medium leading-[1.06] tracking-[-0.04em] sm:text-5xl">
                  An engineering company built around operating performance.
                </h2>
              </div>
              <div className="max-w-3xl space-y-6 text-base leading-8 text-black/60">
                <p>
                  We work at the intersection of artificial intelligence,
                  software systems and business operations. Our starting point
                  is where delays, repetitive work, fragmented information,
                  limited visibility or unreliable processes are constraining
                  performance.
                </p>
                <p>
                  The response may be an AI agent coordinating enquiries, a
                  computer vision system improving inspection, speaker-aware
                  transcription, signal analysis revealing machine condition
                  or a scientific system connecting technical evidence.
                </p>
                <p>
                  Our role extends beyond an isolated application. We account
                  for the workflow, data, people, integrations, infrastructure,
                  controls and responsibilities required for dependable use.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-white text-black">
          <Container className="border-x border-black/10 py-20 sm:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.68fr_1.32fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/45">
                  Why we exist
                </p>
                <h2 className="mt-7 text-4xl font-medium leading-[1.06] tracking-[-0.04em] sm:text-5xl">
                  Close the gap between technical capability and working
                  reality.
                </h2>
              </div>
              <div className="max-w-3xl space-y-6 text-base leading-8 text-black/60">
                <p>
                  Many businesses do not lack software. They lack systems that
                  work together around how the organisation actually operates.
                  Enquiries remain unanswered across channels, quotations wait
                  on manual steps and important information sits in
                  disconnected applications.
                </p>
                <p>
                  We apply AI and software engineering to remove unnecessary
                  work, shorten process lead times, improve visibility and
                  create systems that can evolve with the organisation.
                </p>
                <p className="text-xl font-semibold leading-8 text-black">
                  The result should not merely be a new application. It should
                  be a better way for the business to operate.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-black text-white">
          <Container className="border-x border-white/15 py-20 sm:py-28">
            <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">
                  What we believe
                </p>
                <h2 className="mt-7 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
                  Our engineering principles.
                </h2>
              </div>
              <div className="border-t border-white/15">
                {principles.map((principle, index) => (
                  <article
                    key={principle.title}
                    className="grid gap-4 border-b border-white/15 py-7 sm:grid-cols-[3rem_0.72fr_1.28fr]"
                  >
                    <span className="text-xs font-bold text-white/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-semibold leading-6">
                      {principle.title}
                    </h3>
                    <p className="text-sm leading-7 text-white/55">
                      {principle.copy}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-[#f6f6f1] text-black">
          <Container className="border-x border-black/10 py-20 sm:py-28">
            <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr] lg:items-end">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/45">
                What we engineer
              </p>
              <div>
                <h2 className="text-4xl font-medium tracking-[-0.04em] sm:text-6xl">
                  The systems we build.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-black/55">
                  Complete intelligent systems shaped around the business
                  process, physical environment and decisions they must
                  support.
                </p>
              </div>
            </div>

            <div className="mt-14 border-t border-black/15">
              {capabilities.map((capability, index) => (
                <article
                  key={capability.title}
                  className="grid gap-5 border-b border-black/15 py-7 lg:grid-cols-[3rem_0.48fr_1fr_auto] lg:items-start"
                >
                  <span className="text-xs font-bold text-black/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-semibold tracking-[-0.025em]">
                    {capability.title}
                  </h3>
                  <p className="max-w-2xl text-sm leading-7 text-black/55">
                    {capability.copy}
                  </p>
                  <Link
                    href={capability.href}
                    className="inline-flex border-b border-black pb-1 text-sm font-bold"
                  >
                    {capability.linkLabel}
                  </Link>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-white text-black">
          <Container className="border-x border-black/10 py-20 sm:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.68fr_1.32fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/45">
                  How we approach projects
                </p>
                <h2 className="mt-7 text-4xl font-medium leading-[1.06] tracking-[-0.04em] sm:text-5xl">
                  From business problem to dependable system.
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
          </Container>
        </section>

        <section className="bg-[#ededE7] text-black">
          <Container className="border-x border-black/10 py-20 sm:py-28">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/45">
                  What makes us different
                </p>
                <h2 className="mt-7 text-4xl font-medium leading-[1.06] tracking-[-0.04em] sm:text-5xl">
                  Engineering beyond the application.
                </h2>
                <div className="mt-7 max-w-xl space-y-5 text-base leading-8 text-black/60">
                  <p>
                    A system creates value only when it fits the workflow,
                    connects to the tools people use, handles exceptions,
                    protects information and remains observable and
                    maintainable.
                  </p>
                  <p>
                    We treat AI as one component of a larger working system,
                    connecting technical implementation to the result the
                    business needs to improve.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 border-l border-t border-black/15">
                {businessMeasures.map((measure, index) => (
                  <div
                    key={measure}
                    className="flex min-h-28 flex-col justify-between border-b border-r border-black/15 p-4 sm:p-5"
                  >
                    <span className="text-xs font-bold text-black/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm font-semibold leading-6">{measure}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-white text-black">
          <Container className="border-x border-black/10 py-20 sm:py-28">
            <div className="flex flex-col gap-8 border-b border-black/15 pb-10 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/45">
                  Who we work with
                </p>
                <h2 className="mt-7 max-w-4xl text-4xl font-medium leading-[1.06] tracking-[-0.04em] sm:text-6xl">
                  Built for organisations with meaningful complexity.
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-black/55">
                We work with businesses whose customer interactions, data,
                workflows or physical processes can be improved through
                intelligent systems.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4">
              {industryLandingPages.map((industry, index) => (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="flex min-h-40 flex-col justify-between border-b border-black/15 p-5 sm:border-r"
                >
                  <span className="text-xs font-bold text-black/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg font-semibold">{industry.name}</span>
                </Link>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-5 border-y border-black/15 py-7 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-2xl text-lg font-semibold">
                Serving businesses in Nigeria and across Africa, with remote
                delivery available for suitable projects.
              </p>
              <Link
                href="/industries"
                className="inline-flex min-h-12 items-center justify-center border border-black px-5 text-sm font-bold"
              >
                Explore industries we serve
              </Link>
            </div>
          </Container>
        </section>

        <section className="bg-black text-white">
          <Container className="border-x border-white/15 py-20 sm:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.68fr_1.32fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">
                  Nigeria and Africa
                </p>
                <h2 className="mt-7 text-4xl font-medium leading-[1.06] tracking-[-0.04em] sm:text-5xl">
                  Engineering from Lagos for businesses across Africa.
                </h2>
              </div>
              <div className="max-w-3xl space-y-6 text-base leading-8 text-white/55">
                <p>
                  Many organisations in the region work across a mixture of
                  WhatsApp, email, spreadsheets, manual processes, legacy
                  software and disconnected cloud applications. Effective
                  systems must work within that reality.
                </p>
                <p>
                  Our approach emphasises practical integration, efficient
                  infrastructure, maintainability, mobile accessibility and
                  clear commercial value. We design systems appropriate for the
                  environments in which they will be used.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-[#f6f6f1] text-black">
          <Container className="border-x border-black/10 py-20 sm:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.68fr_1.32fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/45">
                  Engineering leadership
                </p>
                <h2 className="mt-7 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
                  Michael Johnson
                </h2>
                <p className="mt-4 font-semibold text-black/55">
                  Founder and Head of Engineering and AI
                </p>
              </div>
              <div className="border-t border-black/15 pt-8">
                <p className="max-w-3xl text-lg leading-8 text-black/65">
                  Michael Johnson leads the engineering direction of Sentient
                  Engineering across artificial intelligence, software
                  development, systems integration, cloud infrastructure and
                  business automation.
                </p>
                <p className="mt-6 max-w-3xl text-base leading-8 text-black/55">
                  His work centres on understanding how organisations operate
                  and engineering systems that reduce friction, improve
                  visibility and create measurable value. Sentient Engineering
                  brings together AI, software, data, cloud systems and
                  process understanding through a multidisciplinary engineering
                  approach.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-white text-black">
          <Container className="border-x border-black/10 px-0">
            <div className="grid lg:grid-cols-2">
              <figure className="relative min-h-[28rem] border-b border-black/10 bg-neutral-200 sm:min-h-[38rem] lg:border-b-0 lg:border-r">
                <Image
                  src="/images/gyptiq-in-hand.png"
                  alt="Gyptiq intelligent business operations platform"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-top"
                />
              </figure>
              <div className="flex flex-col justify-center p-6 py-16 sm:p-10 sm:py-20 lg:p-12">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/45">
                  Building our own systems
                </p>
                <h2 className="mt-7 text-4xl font-medium leading-[1.05] tracking-[-0.04em] sm:text-5xl">
                  Gyptiq applies our engineering philosophy to customer
                  operations.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-8 text-black/60">
                  Gyptiq is an AI-powered business operations platform being
                  developed to help businesses manage enquiries, follow-ups,
                  customer communication and routine sales work across
                  WhatsApp, email and websites.
                </p>
                <p className="mt-5 max-w-xl text-sm leading-7 text-black/50">
                  It reflects a simple principle: software should reduce the
                  burden on the business rather than become another system the
                  business must constantly manage.
                </p>
                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                  <Link
                    href="/products/gyptiq"
                    className="inline-flex border-b border-black pb-1 text-sm font-bold"
                  >
                    Explore Gyptiq
                  </Link>
                  <Link
                    href="/products"
                    className="inline-flex border-b border-black/35 pb-1 text-sm font-bold text-black/60"
                  >
                    View all intelligent products
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-[#ededE7] text-black">
          <Container className="border-x border-black/10 py-20 sm:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.68fr_1.32fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/45">
                  Trust and responsibility
                </p>
                <h2 className="mt-7 text-4xl font-medium leading-[1.06] tracking-[-0.04em] sm:text-5xl">
                  Responsible systems by design.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-8 text-black/60">
                  Intelligent systems may interact with customer information,
                  business records, identity data and consequential decisions.
                  Appropriate controls must be part of the engineering—not an
                  afterthought.
                </p>
                <Link
                  href="/privacy"
                  className="mt-7 inline-flex border-b border-black pb-1 text-sm font-bold"
                >
                  Read our privacy policy
                </Link>
              </div>
              <div className="grid grid-cols-2 border-l border-t border-black/15">
                {responsibleControls.map((control, index) => (
                  <div
                    key={control}
                    className="flex min-h-28 flex-col justify-between border-b border-r border-black/15 p-4 sm:p-5"
                  >
                    <span className="text-xs font-bold text-black/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-sm font-semibold leading-6">
                      {control}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-black text-white">
          <Container className="border-x border-white/15 py-20 sm:py-28">
            <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">
                  Start a conversation
                </p>
                <h2 className="mt-7 max-w-4xl text-balance text-4xl font-medium leading-[1.03] tracking-[-0.045em] sm:text-6xl">
                  Have an operational problem worth engineering?
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/55">
                  Tell us where your business is losing time, visibility,
                  reliability or customer opportunities. We will help determine
                  whether AI, automation, systems integration or purpose-built
                  software is the appropriate response.
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="inline-flex min-h-12 items-center justify-center bg-white px-6 text-sm font-bold text-black"
                  >
                    Discuss your project
                  </Link>
                  <a
                    href={COMPANY.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/30 px-6 text-sm font-bold"
                  >
                    <FaWhatsapp aria-hidden="true" className="h-5 w-5" />
                    Chat with us on WhatsApp
                  </a>
                </div>
              </div>
              <address className="not-italic lg:justify-self-end">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/35">
                  Sentient Engineering
                </p>
                <a
                  href={COMPANY.emailHref}
                  className="mt-4 block font-semibold underline underline-offset-4"
                >
                  {COMPANY.email}
                </a>
                <a
                  href={COMPANY.phoneHref}
                  className="mt-3 block font-semibold underline underline-offset-4"
                >
                  {COMPANY.phone}
                </a>
                <p className="mt-3 text-white/55">{COMPANY.location}</p>
              </address>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
