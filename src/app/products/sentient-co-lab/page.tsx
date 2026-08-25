import type { Metadata } from "next";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TechnicalSystemDiagram from "@/components/TechnicalSystemDiagram";
import { COMPANY } from "@/lib/constants";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Sentient Co-Lab | Intelligent Meetings and Collaboration",
  description:
    "Sentient Co-Lab combines video, voice, collaborative work, speaker-aware transcription, summaries and searchable meeting knowledge for teams and learning environments.",
  path: "/products/sentient-co-lab",
});

const capabilities = [
  "Video and voice rooms",
  "Screen sharing",
  "Real-time chat",
  "Collaborative whiteboard",
  "Shared notes and multi-user editing",
  "Speaker-aware live transcription",
  "Speaker diarisation",
  "Meeting and lecture summaries",
  "Decisions and action items",
  "Topic chapters",
  "Searchable meeting history",
  "Recording review",
  "Exportable transcripts and notes",
] as const;

const useCases = [
  "Business meetings",
  "Remote teamwork",
  "Lectures and classrooms",
  "Conferences and seminars",
  "Sermons and teaching sessions",
  "Workshops and training",
  "Technical reviews",
  "Project coordination",
] as const;

const architecture = [
  ["Real-time communications", "Voice, video, screen sharing and live room interaction."],
  ["Collaborative synchronisation", "Shared notes, whiteboards and multi-user work remain coordinated."],
  ["Speech and speaker intelligence", "Recognition and diarisation connect language to the people who spoke."],
  ["Knowledge layer", "Summaries, decisions, chapters and search remain grounded in the session record."],
  ["Secure application infrastructure", "Access, storage and application operations are managed as part of the product system."],
] as const;

export default function SentientCoLabPage() {
  const pageUrl = absoluteUrl("/products/sentient-co-lab");
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": pageUrl,
        name: "Sentient Co-Lab",
        url: pageUrl,
        description: metadata.description,
        mainEntity: { "@id": `${pageUrl}#software` },
        isPartOf: { "@id": `${COMPANY.url}/#website` },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${pageUrl}#software`,
        name: "Sentient Co-Lab",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: pageUrl,
        description: metadata.description,
        applicationSubCategory: "Collaboration software",
        creator: { "@id": `${COMPANY.url}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: COMPANY.url },
          { "@type": "ListItem", position: 2, name: "Products", item: `${COMPANY.url}/products` },
          { "@type": "ListItem", position: 3, name: "Sentient Co-Lab", item: pageUrl },
        ],
      },
    ],
  };

  return (
    <>
      <Navbar />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <section className="bg-black pt-[4.5rem] text-white">
          <Container className="border-x border-white/15 px-0">
            <div className="grid min-h-[calc(100svh-4.5rem)] lg:grid-cols-[1.06fr_0.94fr]">
              <div className="flex flex-col justify-between border-b border-white/15 p-6 py-10 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
                <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-white/40"><Link href="/">Home</Link><span>/</span><Link href="/products">Products</Link><span>/</span><span>Sentient Co-Lab</span></nav>
                <div className="mt-24">
                  <div className="flex flex-wrap items-center gap-4"><p className="eyebrow text-[#83a8ff]">Sentient Co-Lab</p><span className="border border-white/20 px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.1em] text-white/60">Active development</span></div>
                  <h1 className="mt-8 max-w-5xl text-balance text-[3rem] font-medium leading-[0.96] tracking-[-0.06em] sm:text-7xl lg:text-[5.2rem]">Every conversation becomes shared intelligence.</h1>
                  <p className="mt-7 max-w-3xl text-base leading-8 text-white/60 sm:text-lg">Sentient Co-Lab combines secure video, voice, collaborative work and speaker-aware AI transcription in one interactive environment for meetings, lectures and distributed teams.</p>
                  <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Link href="/contact" className="inline-flex min-h-12 items-center justify-center bg-white px-6 text-sm font-bold text-black">Discuss Co-Lab</Link><a href="#capabilities" className="inline-flex min-h-12 items-center justify-center border border-white/25 px-6 text-sm font-bold">Explore capabilities</a></div>
                </div>
              </div>
              <div className="flex flex-col justify-center bg-[#080808] p-5 sm:p-10">
                <TechnicalSystemDiagram variant="collaboration" />
                <p className="mt-5 text-xs leading-6 text-white/35">Product screenshots were not available in the repository. This architecture view explains the system without inventing a product interface.</p>
              </div>
            </div>
          </Container>
        </section>

        <section id="capabilities" className="scroll-mt-20 bg-[#f6f6f1] text-black">
          <Container className="border-x border-black/10 py-20 sm:py-28">
            <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr]"><p className="eyebrow text-[#1f5eff]">Product capabilities</p><h2 className="max-w-5xl text-5xl font-medium leading-[1.02] tracking-[-0.05em] sm:text-6xl">Meet, think and retain knowledge in the same environment.</h2></div>
            <ol className="mt-12 grid border-l border-t border-black/15 sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((item, index) => <li key={item} className="flex min-h-36 flex-col justify-between border-b border-r border-black/15 p-5"><span className="text-xs font-bold text-black/25">{String(index + 1).padStart(2, "0")}</span><span className="text-sm font-semibold leading-6">{item}</span></li>)}
            </ol>
          </Container>
        </section>

        <section className="bg-black text-white">
          <Container className="border-x border-white/15 px-0">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
              <div className="border-b border-white/15 p-6 py-16 sm:p-10 sm:py-24 lg:border-b-0 lg:border-r"><p className="eyebrow text-[#83a8ff]">How the product fits together</p><h2 className="mt-7 text-5xl font-medium leading-none tracking-[-0.05em] sm:text-6xl">Real-time interaction. Durable knowledge.</h2><p className="mt-6 max-w-xl text-base leading-8 text-white/55">Co-Lab treats communication, collaborative work and AI knowledge capture as connected product layers rather than separate tools.</p></div>
              <ol>{architecture.map(([title, copy], index) => <li key={title} className="grid gap-5 border-b border-white/15 p-6 py-8 sm:grid-cols-[3rem_0.75fr_1.25fr] sm:p-10"><span className="text-xs font-bold text-white/25">0{index + 1}</span><h3 className="text-xl font-semibold">{title}</h3><p className="text-sm leading-7 text-white/50">{copy}</p></li>)}</ol>
            </div>
          </Container>
        </section>

        <section className="bg-white text-black">
          <Container className="border-x border-black/10 py-20 sm:py-28">
            <div className="grid gap-8 border-b border-black/15 pb-10 lg:grid-cols-[0.65fr_1.35fr]"><p className="eyebrow text-[#1f5eff]">Use cases</p><h2 className="text-5xl font-medium tracking-[-0.05em] sm:text-6xl">One shared space across work, learning and technical review.</h2></div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4">{useCases.map((item, index) => <div key={item} className="flex min-h-40 flex-col justify-between border-b border-r border-black/10 p-5"><span className="text-xs font-bold text-black/25">0{index + 1}</span><p className="text-sm font-semibold leading-6">{item}</p></div>)}</div>
            <div className="mt-16 grid gap-6 border-y border-black/15 py-8 lg:grid-cols-[0.65fr_1.35fr]"><p className="eyebrow text-[#1f5eff]">Maturity</p><p className="max-w-4xl text-xl font-medium leading-9">Sentient Co-Lab is an owned product in active development. This page does not claim production adoption, customer volume, uptime or enterprise deployment.</p></div>
          </Container>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
