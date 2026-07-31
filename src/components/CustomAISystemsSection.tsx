import Link from "next/link";
import Container from "./Container";

const projectSystems = [
  {
    id: "commerce",
    eyebrow: "Commerce intelligence",
    title: "AI-Powered Ecommerce and Product Discovery",
    description:
      "We built an intelligent ecommerce platform for businesses selling complex, technical and high-value products. It helps customers move from an initial requirement to the right product and a qualified sales opportunity.",
    problem:
      "Complex catalogues, slow product selection and unstructured customer requirements create friction before a sales conversation can begin.",
    capabilities: [
      "Natural-language product discovery",
      "Intelligent recommendations",
      "Product knowledge assistance",
      "RFQ and purchase-order workflows",
      "Automated sales follow-up",
      "Customer and sales data integration",
    ],
    value:
      "Faster product discovery, better inquiry routing and shorter quotation cycles for complex purchases.",
  },
  {
    id: "event-vision",
    eyebrow: "Computer vision",
    title: "Computer Vision for Event Registration and Check-In",
    description:
      "We built an event operations system that uses facial detection and recognition to support attendee registration, identity matching and event-day check-in, with human review and fallback processes.",
    problem:
      "Manual attendee lookup creates queues, weakens entry control and makes attendance records harder to reconcile.",
    capabilities: [
      "Attendee registration",
      "Secure facial-data enrolment",
      "Facial detection and identity matching",
      "Real-time attendee lookup",
      "Duplicate-entry prevention",
      "Attendance and operations reporting",
    ],
    value:
      "Shorter check-in queues, more reliable attendee verification and clearer event access data.",
  },
  {
    id: "sales",
    eyebrow: "Revenue operations",
    title: "Intelligent Sales Pipeline and Quotation Automation",
    description:
      "We built an intelligent workflow that moves customer inquiries through requirement extraction, business-rule evaluation, quotation and structured sales progression.",
    problem:
      "Sales teams lose response time to repetitive inquiry handling, inconsistent evaluation and manual quotation preparation.",
    capabilities: [
      "Inquiry acknowledgement and extraction",
      "Lead qualification",
      "Business-rule-based decisioning",
      "Quotation and approval workflows",
      "Follow-up and sales-stage progression",
      "Exception handling and activity tracking",
    ],
    value:
      "Faster response, more consistent quotations and more sales capacity focused on qualified opportunities.",
  },
  {
    id: "biometrics",
    eyebrow: "Identity infrastructure",
    title: "Custom Facial Biometrics for Digital Identity Verification",
    description:
      "We built facial biometric infrastructure for a KYC and AML technology company, supporting biometric comparison and identity-verification workflows within a broader compliance process.",
    problem:
      "Digital onboarding requires a dependable way to compare facial data, manage uncertain results and retain an auditable verification record.",
    capabilities: [
      "Facial detection and quality validation",
      "Biometric feature extraction",
      "Facial similarity comparison",
      "Configurable decision thresholds",
      "API integration",
      "Audit records and manual review",
    ],
    value:
      "A controlled biometric layer that identity providers can integrate into onboarding, risk and compliance operations.",
  },
  {
    id: "knowledge",
    eyebrow: "Enterprise intelligence",
    title: "Enterprise AI Knowledge and Information Retrieval",
    description:
      "We built an internal AI knowledge system that lets authorized users search, retrieve and interact with organizational information through a conversational interface grounded in approved sources.",
    problem:
      "Employees spend too much time searching fragmented documents, and important organizational knowledge is difficult to access consistently.",
    capabilities: [
      "Enterprise document ingestion",
      "Semantic search",
      "Retrieval-augmented generation",
      "Source-referenced answers",
      "Role-based information access",
      "Controlled knowledge updates",
    ],
    value:
      "Faster information retrieval, more consistent internal answers and better access to institutional knowledge.",
  },
] as const;

const systemScope = [
  "Internal business applications",
  "Customer-facing AI platforms",
  "Computer vision systems",
  "Biometric identity solutions",
  "Intelligent workflow automation",
  "Enterprise knowledge systems",
  "Sales and decision-support systems",
  "Industry-specific AI applications",
] as const;

const deploymentModes = ["Cloud", "On-premise", "Edge", "Hybrid"] as const;

export default function CustomAISystemsSection() {
  return (
    <section
      id="custom-ai-systems"
      className="scroll-mt-20 bg-black text-white"
    >
      <Container className="border-x border-white/15 px-0">
        <div className="grid border-b border-white/15 lg:grid-cols-[0.64fr_1.36fr]">
          <div className="border-b border-white/15 p-6 sm:p-10 lg:border-b-0 lg:border-r">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#83a8ff]">
              Systems we have engineered
            </p>
            <div className="mt-16 grid grid-cols-2 border-y border-white/15">
              {deploymentModes.map((mode, index) => (
                <p
                  key={mode}
                  className={`px-3 py-4 text-xs font-semibold text-white/60 ${
                    index % 2 === 0 ? "border-r border-white/15" : ""
                  } ${index < 2 ? "border-b border-white/15" : ""}`}
                >
                  {mode}
                </p>
              ))}
            </div>
            <p className="mt-5 text-xs leading-6 text-white/40">
              Deployment architecture is selected around security, privacy,
              performance, regulation and operating conditions.
            </p>
          </div>

          <div className="p-6 sm:p-10 lg:p-14">
            <p className="max-w-3xl text-sm font-semibold leading-7 text-white/55">
              Custom Applied AI engineering for ambitious businesses
            </p>
            <h2 className="mt-6 max-w-5xl text-balance text-4xl font-medium leading-[1.04] tracking-[-0.045em] sm:text-6xl">
              Custom AI Systems Built Around Real Business Problems
            </h2>
            <p className="mt-8 max-w-3xl text-base leading-8 text-white/60 sm:text-lg">
              Sentient Engineering designs and builds practical AI and
              automation applications around operational requirements,
              business rules, workflows and performance objectives - not
              technology trends.
            </p>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/45">
              From internal knowledge systems and intelligent sales operations
              to biometric identity infrastructure and computer-vision-powered
              event platforms, we build systems that become part of how a
              business operates.
            </p>
          </div>
        </div>

        <div className="grid border-b border-white/15 lg:grid-cols-2">
          <div className="border-b border-white/15 p-6 sm:p-10 lg:border-b-0 lg:border-r">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/35">
              Our specialty
            </p>
            <h3 className="mt-8 max-w-2xl text-2xl font-medium leading-tight tracking-[-0.03em] sm:text-3xl">
              We do not force businesses into generic AI products.
            </h3>
          </div>
          <div className="p-6 sm:p-10">
            <p className="max-w-2xl text-base leading-8 text-white/65">
              We engineer intelligent systems around the way each business
              actually works. Solutions can support internal operations,
              customer-facing platforms, enterprise workflows and
              industry-specific processes.
            </p>
          </div>
        </div>

        <div className="px-6 py-16 sm:px-10 sm:py-20">
          <div className="flex flex-col gap-6 border-b border-white/15 pb-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#83a8ff]">
                Project-backed capabilities
              </p>
              <h3 className="mt-5 text-3xl font-medium tracking-[-0.04em] sm:text-5xl">
                Designed, built and connected to operations.
              </h3>
            </div>
            <p className="max-w-xl text-sm leading-7 text-white/45">
              Each system below was developed around a specific process,
              approved operating logic and the business value it needed to
              create.
            </p>
          </div>

          <div className="grid border-l border-t border-white/15 lg:grid-cols-2">
            {projectSystems.map((project, index) => (
              <article
                key={project.id}
                className={`flex flex-col border-b border-r border-white/15 p-6 sm:p-8 ${
                  index === projectSystems.length - 1
                    ? "lg:col-span-2 lg:grid lg:grid-cols-2 lg:gap-12"
                    : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-5">
                    <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[#83a8ff]">
                      {project.eyebrow}
                    </p>
                    <span className="text-xs font-bold text-white/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h4 className="mt-8 text-2xl font-semibold leading-tight tracking-[-0.03em] sm:text-3xl">
                    {project.title}
                  </h4>
                  <p className="mt-5 text-sm leading-7 text-white/55">
                    {project.description}
                  </p>

                  <div className="mt-7 border-l-2 border-[#83a8ff] pl-4">
                    <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-white/30">
                      Operational problem
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/65">
                      {project.problem}
                    </p>
                  </div>
                </div>

                <div
                  className={
                    index === projectSystems.length - 1 ? "lg:pt-8" : ""
                  }
                >
                  <div className="mt-8">
                    <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-white/30">
                      Relevant capabilities
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {project.capabilities.map((capability) => (
                        <li
                          key={capability}
                          className="border border-white/15 px-3 py-2 text-[0.68rem] font-semibold leading-4 text-white/55"
                        >
                          {capability}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 border-t border-white/15 pt-5">
                    <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-white/30">
                      Business value
                    </p>
                    <p className="mt-3 text-sm font-semibold leading-6 text-white/80">
                      {project.value}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="border-t border-white/15 bg-[#f6f6f1] text-black">
          <div className="grid border-b border-black/10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="border-b border-black/10 p-6 sm:p-10 lg:border-b-0 lg:border-r">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/40">
                From internal intelligence to enterprise AI infrastructure
              </p>
              <h3 className="mt-8 max-w-3xl text-3xl font-medium leading-[1.1] tracking-[-0.04em] sm:text-5xl">
                Custom systems for requirements generic software cannot
                adequately solve.
              </h3>
              <p className="mt-7 max-w-2xl text-base leading-8 text-black/60">
                Every system is engineered around the client&apos;s objectives,
                workflows, data, operational constraints and growth
                requirements.
              </p>
            </div>

            <ul className="grid grid-cols-2">
              {systemScope.map((item, index) => (
                <li
                  key={item}
                  className={`flex min-h-24 items-start gap-3 p-4 text-sm font-semibold leading-6 ${
                    index % 2 === 0 ? "border-r border-black/10" : ""
                  } ${index < systemScope.length - 2 ? "border-b border-black/10" : ""}`}
                >
                  <span className="mt-1 text-[0.62rem] text-black/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="p-6 sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#1f5eff]">
                Start with the process
              </p>
              <h3 className="mt-6 max-w-3xl text-3xl font-medium leading-[1.1] tracking-[-0.04em] sm:text-5xl">
                Have a business process that needs more than generic software?
              </h3>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-black/60">
                Let us examine the process, identify where intelligence and
                automation can create measurable value, and engineer a system
                around your operational requirements.
              </p>
            </div>
            <div className="flex flex-col gap-3 border-t border-black/10 p-6 sm:flex-row sm:p-10 lg:border-l lg:border-t-0">
              <Link href="/contact" className="primary-button px-6">
                Discuss Your AI Project
              </Link>
              <Link href="/services" className="secondary-button px-6">
                Explore Our Capabilities
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
