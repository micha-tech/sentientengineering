import Image from "next/image";
import Link from "next/link";
import { industries } from "@/lib/site-data";
import { workEntries } from "@/lib/work-data";
import ContactSection from "./ContactSection";
import Container from "./Container";
import TechnicalSystemDiagram from "./TechnicalSystemDiagram";

const domains = [
  {
    number: "01",
    title: "Business AI Systems",
    copy: "Intelligent systems that improve customer response, revenue execution, internal coordination and management visibility.",
    capabilities: [
      "AI customer-service and voice agents",
      "Quotation and RFQ intelligence",
      "Recommendation and product-search systems",
      "Workflow automation",
      "Enterprise knowledge systems",
      "Meeting intelligence",
    ],
    links: [
      ["Explore AI agents", "/services/ai-agents-integrations"],
      ["Explore business systems", "/services/business-systems-automation"],
      ["Explore commerce intelligence", "/services/digital-commerce"],
    ],
  },
  {
    number: "02",
    title: "Scientific and Engineering AI Systems",
    copy: "Systems that interpret images, speech, sound, vibration, sensor measurements, technical documents and scientific data.",
    capabilities: [
      "Computer vision and biometrics",
      "Automatic speech recognition",
      "Acoustic intelligence",
      "FFT and STFT signal analysis",
      "Predictive maintenance",
      "Scientific modelling and document intelligence",
    ],
    links: [
      ["Explore computer vision", "/services/computer-vision"],
      ["Explore signal intelligence", "/services/vibration-signal-analysis"],
      ["Explore scientific AI", "/services/scientific-engineering-ai"],
    ],
  },
] as const;

const engineeringLayers = [
  "Data and sensor acquisition",
  "Signal and image processing",
  "Model selection and adaptation",
  "Model evaluation",
  "Software engineering",
  "APIs and integrations",
  "Real-time inference",
  "Edge and cloud deployment",
  "Security and access control",
  "Human review",
  "Monitoring and observability",
  "Continuous improvement",
] as const;

const coreCapabilities = [
  ["AI agents and business systems", "Customer operations, voice, knowledge, sales and governed workflow integration.", "/services/ai-agents-integrations"],
  ["Computer vision and visual inspection", "Image and video systems validated for the conditions where they must operate.", "/services/computer-vision"],
  ["Speech, audio and acoustic intelligence", "Speaker-aware transcription, meeting knowledge and acoustic event analysis.", "/services/speech-audio-intelligence"],
  ["Vibration and signal analysis", "FFT, STFT and time-series intelligence for measured physical condition.", "/services/vibration-signal-analysis"],
  ["Biometrics and facial recognition", "Responsible identity verification, matching and operational review workflows.", "/services/biometrics-identity"],
  ["Predictive maintenance", "Condition, health and risk intelligence for earlier maintenance intervention.", "/services/predictive-maintenance"],
  ["Scientific and engineering intelligence", "Systems for technical documents, forecasting, simulation and scientific data.", "/services/scientific-engineering-ai"],
  ["AI-powered commerce", "Intent-based product discovery, recommendations, compatibility and RFQ workflows.", "/services/digital-commerce"],
  ["Data engineering and MLOps", "Data pipelines, evaluation, observability and maintainable model operations.", "/services"],
  ["Cloud, on-premise, edge and hybrid", "Deployment selected around privacy, latency, connectivity and operating conditions.", "/services/industrial-operations"],
] as const;

const colabFeatures = [
  "Video and voice meetings",
  "Screen sharing and real-time chat",
  "Collaborative whiteboard and shared notes",
  "Speaker-aware live transcription",
  "Speaker diarisation",
  "Meeting and lecture summaries",
  "Decisions and action items",
  "Topic and chapter generation",
  "Searchable recordings and transcripts",
  "Exportable notes and summaries",
] as const;

const deploymentModes = [
  ["Cloud", "Elastic delivery for connected teams and centrally managed systems."],
  ["On-premise", "Controlled infrastructure where policy, data or integration requires it."],
  ["Edge", "Local inference for low latency, limited connectivity or physical operations."],
  ["Hybrid", "A deliberate split between local control and centrally managed intelligence."],
] as const;

export default function IntelligentSystemsSections() {
  return (
    <>
      <section className="bg-[#f6f6f1] text-black">
        <Container className="border-x border-black/10 px-0">
          <div className="border-b border-black/10 p-6 py-16 sm:p-10 sm:py-24">
            <p className="eyebrow text-[#1f5eff]">Two engineering domains</p>
            <h2 className="mt-7 max-w-5xl text-balance text-4xl font-medium leading-[1.02] tracking-[-0.05em] sm:text-6xl">
              Intelligence for the systems that run organisations—and the physical world around them.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2">
            {domains.map((domain, index) => (
              <article key={domain.title} className={`p-6 py-14 sm:p-10 sm:py-20 ${index === 0 ? "border-b border-black/10 lg:border-b-0 lg:border-r" : ""}`}>
                <div className="flex items-center justify-between">
                  <p className="eyebrow text-black/40">Engineering domain</p>
                  <span className="text-xs font-bold text-black/25">{domain.number}</span>
                </div>
                <h3 className="mt-10 max-w-xl text-4xl font-medium tracking-[-0.045em] sm:text-5xl">{domain.title}</h3>
                <p className="mt-6 max-w-2xl text-base leading-8 text-black/60">{domain.copy}</p>
                <ul className="mt-9 grid border-t border-black/15 sm:grid-cols-2">
                  {domain.capabilities.map((item) => (
                    <li key={item} className="border-b border-black/10 py-4 pr-4 text-sm font-semibold leading-6 sm:odd:border-r sm:even:pl-4">{item}</li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  {domain.links.map(([label, href]) => (
                    <Link key={href} href={href} className="inline-flex min-h-11 items-center border border-black px-4 text-xs font-bold transition hover:bg-black hover:text-white">{label}</Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-black text-white">
        <Container className="border-x border-white/15 px-0">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b border-white/15 p-6 py-16 sm:p-10 sm:py-24 lg:border-b-0 lg:border-r">
              <p className="eyebrow text-[#83a8ff]">Deep engineering</p>
              <h2 className="mt-7 max-w-3xl text-5xl font-medium leading-[0.98] tracking-[-0.055em] sm:text-7xl">Beyond the AI model.</h2>
              <p className="mt-7 max-w-2xl text-base leading-8 text-white/55">
                A model is not an operating system. We engineer every layer required to acquire evidence, interpret it responsibly and connect the result to real people, software and physical operations.
              </p>
              <TechnicalSystemDiagram className="mt-10" />
            </div>
            <ol className="grid sm:grid-cols-2">
              {engineeringLayers.map((layer, index) => (
                <li key={layer} className="flex min-h-32 flex-col justify-between border-b border-white/15 p-5 sm:border-r sm:p-6">
                  <span className="text-xs font-bold text-white/25">{String(index + 1).padStart(2, "0")}</span>
                  <span className="max-w-[15rem] text-sm font-semibold leading-6 text-white/75">{layer}</span>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section className="bg-white text-black">
        <Container className="border-x border-black/10 py-20 sm:py-28">
          <div className="grid gap-8 border-b border-black/15 pb-10 lg:grid-cols-[0.65fr_1.35fr]">
            <p className="eyebrow text-[#1f5eff]">Core engineering capabilities</p>
            <h2 className="max-w-5xl text-balance text-4xl font-medium leading-[1.04] tracking-[-0.05em] sm:text-6xl">One engineering partner across software, signals and physical systems.</h2>
          </div>
          <div className="grid md:grid-cols-2">
            {coreCapabilities.map(([title, copy, href], index) => (
              <Link key={title} href={href} className={`group grid min-h-52 grid-cols-[2.5rem_1fr] gap-4 border-b border-black/10 py-7 transition hover:bg-[#f6f6f1] sm:p-7 ${index % 2 === 0 ? "md:border-r" : ""}`}>
                <span className="text-xs font-bold text-black/25">{String(index + 1).padStart(2, "0")}</span>
                <span>
                  <span className="block text-2xl font-semibold leading-tight tracking-[-0.03em]">{title}</span>
                  <span className="mt-4 block max-w-xl text-sm leading-7 text-black/55">{copy}</span>
                  <span className="mt-5 inline-flex border-b border-black pb-1 text-xs font-bold">Explore capability</span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#0a0a0a] text-white">
        <Container className="border-x border-white/15 px-0">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div className="border-b border-white/15 p-6 py-16 sm:p-10 sm:py-24 lg:border-b-0 lg:border-r">
              <div className="flex items-center justify-between">
                <p className="eyebrow text-[#83a8ff]">Featured product · Active development</p>
                <span className="text-xs font-bold text-white/25">Co-Lab / 01</span>
              </div>
              <h2 className="mt-8 text-5xl font-medium tracking-[-0.055em] sm:text-7xl">Sentient Co-Lab</h2>
              <p className="mt-5 text-xl font-semibold leading-8 text-white/85">Intelligent collaboration for meetings, lectures and distributed teams.</p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/55">
                Sentient Co-Lab is a virtual voice, video and interactive collaboration platform that combines real-time communication, collaborative work and speaker-aware AI knowledge capture.
              </p>
              <Link href="/products/sentient-co-lab" className="mt-8 inline-flex min-h-12 items-center bg-white px-5 text-sm font-bold text-black transition hover:bg-[#83a8ff]">Explore Sentient Co-Lab</Link>
              <p className="mt-6 text-xs leading-6 text-white/35">No product screenshots were found in the repository, so this redesign uses an explanatory system diagram rather than an invented interface.</p>
            </div>
            <div className="p-6 py-12 sm:p-10 sm:py-16">
              <TechnicalSystemDiagram variant="collaboration" />
              <ul className="mt-8 grid border-l border-t border-white/15 sm:grid-cols-2">
                {colabFeatures.map((feature) => (
                  <li key={feature} className="border-b border-r border-white/15 p-4 text-xs font-semibold leading-5 text-white/65">{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f6f6f1] text-black">
        <Container className="border-x border-black/10 py-20 sm:py-28">
          <div className="flex flex-col gap-8 border-b border-black/15 pb-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow text-[#1f5eff]">Selected work</p>
              <h2 className="mt-6 text-5xl font-medium tracking-[-0.05em] sm:text-6xl">Systems, with their status stated plainly.</h2>
            </div>
            <Link href="/work" className="inline-flex min-h-12 items-center border border-black px-5 text-sm font-bold">View all selected work</Link>
          </div>
          <div className="grid lg:grid-cols-2">
            {workEntries.map((entry, index) => (
              <article key={entry.id} className={`border-b border-black/10 py-8 ${index % 2 === 0 ? "lg:border-r lg:pr-8" : "lg:pl-8"} ${index === workEntries.length - 1 ? "lg:col-span-2 lg:border-r-0 lg:pr-0" : ""}`}>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="eyebrow text-black/40">{entry.category}</p>
                  <span className="border border-black/15 px-2.5 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.08em]">{entry.status}</span>
                </div>
                <h3 className="mt-7 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.04em]">{entry.title}</h3>
                <div className="mt-6 grid gap-6 text-sm leading-7 text-black/60 sm:grid-cols-2">
                  <div><p className="text-xs font-bold uppercase tracking-[0.1em] text-black/35">Operational problem</p><p className="mt-2">{entry.problem}</p></div>
                  <div><p className="text-xs font-bold uppercase tracking-[0.1em] text-black/35">System engineered</p><p className="mt-2">{entry.system}</p></div>
                </div>
                <p className="mt-6 border-l-2 border-[#1f5eff] pl-4 text-sm font-semibold leading-6">{entry.value}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white text-black">
        <Container className="border-x border-black/10 py-20 sm:py-28">
          <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
            <p className="eyebrow text-[#1f5eff]">Industries</p>
            <h2 className="text-balance text-4xl font-medium leading-[1.04] tracking-[-0.05em] sm:text-6xl">Engineering shaped around operating conditions—not industry labels.</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2">
            {industries.map((industry, index) => (
              <Link key={industry.slug} href={`/industries/${industry.slug}`} className={`group grid grid-cols-[5.5rem_1fr] gap-5 border-b border-black/10 py-6 sm:grid-cols-[8rem_1fr] ${index % 2 === 0 ? "md:border-r md:pr-7" : "md:pl-7"}`}>
                <span className="relative aspect-square overflow-hidden bg-neutral-200">
                  <Image src={industry.image} alt={industry.imageAlt} fill sizes="128px" className="object-cover transition duration-500 group-hover:scale-105" />
                </span>
                <span>
                  <span className="text-xs font-bold text-black/25">{String(index + 1).padStart(2, "0")}</span>
                  <span className="mt-3 block text-xl font-semibold tracking-[-0.025em]">{industry.name}</span>
                  <span className="mt-2 line-clamp-2 block text-xs leading-6 text-black/50">{industry.examples}</span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#ededE7] text-black">
        <Container className="border-x border-black/10 px-0">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            <div className="border-b border-black/10 p-6 py-16 sm:p-10 sm:py-24 lg:border-b-0 lg:border-r">
              <p className="eyebrow text-[#1f5eff]">Deployment architecture</p>
              <h2 className="mt-7 text-5xl font-medium leading-none tracking-[-0.05em] sm:text-6xl">Built for where the work happens.</h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-black/60">Architecture is selected around privacy, latency, connectivity, security, regulation, performance and operating conditions.</p>
            </div>
            <div className="grid sm:grid-cols-2">
              {deploymentModes.map(([mode, copy], index) => (
                <article key={mode} className="flex min-h-56 flex-col justify-between border-b border-black/10 p-6 sm:border-r">
                  <span className="text-xs font-bold text-black/25">0{index + 1}</span>
                  <div><h3 className="text-3xl font-semibold tracking-[-0.04em]">{mode}</h3><p className="mt-3 text-sm leading-7 text-black/55">{copy}</p></div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <ContactSection />
    </>
  );
}
