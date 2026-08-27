import Image from "next/image";
import Link from "next/link";
import { industries } from "@/lib/site-data";
import { workEntries } from "@/lib/work-data";
import ContactSection from "./ContactSection";
import Container from "./Container";
import TechnicalSystemDiagram from "./TechnicalSystemDiagram";

const domains = [
  {
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
        <Container className="py-24 sm:py-36">
          <div className="grid gap-8 lg:grid-cols-[0.6fr_1.4fr]">
            <p className="eyebrow text-[#1f5eff]">Two engineering domains</p>
            <h2 className="max-w-5xl text-balance text-4xl font-medium leading-[1.02] tracking-[-0.05em] sm:text-6xl">
              Intelligence for the systems that run organisations—and the physical world around them.
            </h2>
          </div>

          <div className="mt-24 sm:mt-36">
            {domains.map((domain) => (
              <article key={domain.title} className="grid gap-10 border-t border-black/15 py-14 sm:py-20 lg:grid-cols-[0.42fr_1.58fr]">
                <div className="flex items-start gap-4">
                  <p className="eyebrow text-black/40">Engineering domain</p>
                </div>
                <div>
                  <h3 className="max-w-4xl text-4xl font-medium leading-[1.04] tracking-[-0.045em] sm:text-6xl">{domain.title}</h3>
                  <div className="mt-9 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
                    <p className="max-w-xl text-base leading-8 text-black/60">{domain.copy}</p>
                    <ul className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
                      {domain.capabilities.map((item) => (
                        <li key={item} className="flex gap-3 text-sm font-semibold leading-6"><span className="text-[#1f5eff]">↗</span>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-10 flex flex-wrap gap-x-7 gap-y-4">
                    {domain.links.map(([label, href]) => (
                      <Link key={href} href={href} className="border-b border-black/40 pb-1 text-xs font-bold transition hover:border-[#1f5eff] hover:text-[#1f5eff]">{label} →</Link>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-black text-white">
        <Container className="py-24 sm:py-36">
          <div className="grid gap-16 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="eyebrow text-[#83a8ff]">Deep engineering</p>
              <h2 className="mt-7 max-w-3xl text-5xl font-medium leading-[0.98] tracking-[-0.055em] sm:text-7xl">Beyond the AI model.</h2>
              <p className="mt-7 max-w-2xl text-base leading-8 text-white/55">
                A model is not an operating system. We engineer every layer required to acquire evidence, interpret it responsibly and connect the result to real people, software and physical operations.
              </p>
            </div>
            <TechnicalSystemDiagram />
          </div>
          <ul className="mt-24 grid gap-x-10 gap-y-8 border-t border-white/20 pt-10 sm:grid-cols-2 lg:grid-cols-3">
            {engineeringLayers.map((layer) => (
              <li key={layer} className="flex gap-3 text-sm font-semibold leading-6 text-white/70">
                <span className="text-[#83a8ff]">•</span>{layer}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-white text-black">
        <Container className="py-24 sm:py-36">
          <div className="grid gap-8 lg:grid-cols-[0.6fr_1.4fr]">
            <p className="eyebrow text-[#1f5eff]">Core engineering capabilities</p>
            <h2 className="max-w-5xl text-balance text-4xl font-medium leading-[1.04] tracking-[-0.05em] sm:text-6xl">One engineering partner across software, signals and physical systems.</h2>
          </div>
          <div className="mt-20 border-t border-black/15">
            {coreCapabilities.map(([title, copy, href]) => (
              <Link key={title} href={href} className="group grid gap-5 border-b border-black/15 py-7 sm:grid-cols-[0.9fr_1.1fr_auto] sm:items-center sm:py-9">
                <span className="text-xl font-semibold tracking-[-0.025em] transition group-hover:text-[#1f5eff] sm:text-2xl">{title}</span>
                <span className="max-w-xl text-sm leading-7 text-black/50">{copy}</span>
                <span className="text-xl transition group-hover:translate-x-1">→</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#0a0a0a] text-white">
        <Container className="py-24 sm:py-36">
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="flex items-center gap-4"><p className="eyebrow text-[#83a8ff]">Featured product</p><span className="text-xs font-bold text-white/25">Active development</span></div>
              <h2 className="mt-8 text-5xl font-medium tracking-[-0.055em] sm:text-7xl">Sentient Co-Lab</h2>
              <p className="mt-6 max-w-2xl text-xl font-semibold leading-8 text-white/85">Intelligent collaboration for meetings, lectures and distributed teams.</p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/55">A virtual voice, video and interactive collaboration platform combining real-time communication, collaborative work and speaker-aware AI knowledge capture.</p>
              <Link href="/products/sentient-co-lab" className="mt-9 inline-flex border-b border-white/50 pb-2 text-sm font-bold transition hover:border-[#83a8ff] hover:text-[#83a8ff]">Explore Sentient Co-Lab →</Link>
            </div>
            <TechnicalSystemDiagram variant="collaboration" />
          </div>
          <ul className="mt-20 grid gap-x-12 gap-y-5 border-t border-white/20 pt-10 sm:grid-cols-2 lg:grid-cols-3">
            {colabFeatures.map((feature) => <li key={feature} className="flex gap-3 text-sm font-semibold leading-6 text-white/65"><span className="text-[#83a8ff]">•</span>{feature}</li>)}
          </ul>
        </Container>
      </section>

      <section className="bg-[#f6f6f1] text-black">
        <Container className="py-24 sm:py-36">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div><p className="eyebrow text-[#1f5eff]">Selected work</p><h2 className="mt-6 max-w-4xl text-5xl font-medium tracking-[-0.05em] sm:text-6xl">Systems, with their status stated plainly.</h2></div>
            <Link href="/work" className="w-fit border-b border-black pb-1 text-sm font-bold">View all selected work →</Link>
          </div>
          <div className="mt-20 border-t border-black/15">
            {workEntries.map((entry) => (
              <article key={entry.id} className="grid gap-7 border-b border-black/15 py-10 lg:grid-cols-[0.3fr_0.75fr_0.95fr] lg:py-14">
                <div><p className="eyebrow text-[#1f5eff]">{entry.category}</p><p className="mt-3 text-xs font-bold uppercase tracking-[0.08em] text-black/45">{entry.status}</p></div>
                <h3 className="max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">{entry.title}</h3>
                <div className="grid gap-6 sm:grid-cols-2"><p className="text-sm leading-7 text-black/55">{entry.system}</p><p className="border-l-2 border-[#1f5eff] pl-4 text-sm font-semibold leading-7">{entry.value}</p></div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white text-black">
        <Container className="py-24 sm:py-36">
          <div className="grid gap-8 lg:grid-cols-[0.6fr_1.4fr] lg:items-end"><p className="eyebrow text-[#1f5eff]">Industries</p><h2 className="text-balance text-4xl font-medium leading-[1.04] tracking-[-0.05em] sm:text-6xl">Engineering shaped around operating conditions—not industry labels.</h2></div>
          <div className="mt-20 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <Link key={industry.slug} href={`/industries/${industry.slug}`} className="group">
                <span className="relative block aspect-[4/5] overflow-hidden bg-neutral-200"><Image src={industry.image} alt={industry.imageAlt} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" /></span>
                <span className="mt-5 block"><span className="block text-lg font-semibold tracking-[-0.025em]">{industry.name}</span><span className="mt-2 block text-xs leading-6 text-black/50">{industry.examples}</span></span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#ededE7] text-black">
        <Container className="py-24 sm:py-36">
          <div className="grid gap-8 lg:grid-cols-[0.6fr_1.4fr]"><p className="eyebrow text-[#1f5eff]">Deployment architecture</p><div><h2 className="max-w-4xl text-5xl font-medium leading-none tracking-[-0.05em] sm:text-7xl">Built for where the work happens.</h2><p className="mt-7 max-w-2xl text-base leading-8 text-black/60">Architecture is selected around privacy, latency, connectivity, security, regulation, performance and operating conditions.</p></div></div>
          <div className="mt-20 grid gap-10 border-t border-black/20 pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {deploymentModes.map(([mode, copy]) => <article key={mode}><h3 className="text-3xl font-semibold tracking-[-0.04em]">{mode}</h3><p className="mt-4 text-sm leading-7 text-black/55">{copy}</p></article>)}
          </div>
        </Container>
      </section>

      <ContactSection />
    </>
  );
}
