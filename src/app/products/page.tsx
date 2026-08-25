import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TechnicalSystemDiagram from "@/components/TechnicalSystemDiagram";
import { COMPANY } from "@/lib/constants";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "AI Products and Solution Accelerators",
  description:
    "Explore Sentient Co-Lab and Gyptiq, plus configurable Sentient Engineering foundations for commerce, documents, industrial vision, maintenance and knowledge systems.",
  path: "/products",
});

const accelerators = [
  ["AI Revenue Operations", "Lead capture, qualification, quotation, follow-up and conversion visibility."],
  ["Intelligent Document Processing", "Extraction, validation, comparison and workflow routing for business documents."],
  ["AI Commerce Engine", "Intent-based search, technical matching, recommendations and RFQ assistance."],
  ["Industrial Vision", "Configurable inspection, detection, tracking and operator-review foundations."],
  ["Predictive Maintenance", "Condition, anomaly and maintenance-prioritisation workflows for equipment."],
  ["Enterprise Knowledge Assistant", "Controlled retrieval and source-grounded answers across approved knowledge."],
  ["Logistics Intelligence", "Dispatch, route planning, visibility and logistics-document workflows."],
] as const;

export default function ProductsPage() {
  const pageUrl = absoluteUrl("/products");
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": pageUrl,
        name: "Sentient Engineering Products",
        url: pageUrl,
        description: metadata.description,
        isPartOf: { "@id": `${COMPANY.url}/#website` },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${COMPANY.url}/products/sentient-co-lab#software`,
        name: "Sentient Co-Lab",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: `${COMPANY.url}/products/sentient-co-lab`,
        description: "A virtual collaboration platform with video, voice, shared work and speaker-aware AI knowledge capture.",
        creator: { "@id": `${COMPANY.url}/#organization` },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${COMPANY.url}/products/gyptiq#software`,
        name: "Gyptiq",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: `${COMPANY.url}/products/gyptiq`,
        description: "An AI-native business operations platform currently in development.",
        creator: { "@id": `${COMPANY.url}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: COMPANY.url },
          { "@type": "ListItem", position: 2, name: "Products", item: pageUrl },
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
          <Container>
            <div className="grid min-h-[38rem] gap-16 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:py-24">
              <div className="flex flex-col justify-end">
                <p className="eyebrow text-[#83a8ff]">Products and engineering foundations</p>
                <h1 className="mt-8 max-w-5xl text-balance text-[3rem] font-medium leading-[0.98] tracking-[-0.058em] sm:text-7xl lg:text-[5.2rem]">Built products. Honest maturity. Reusable engineering.</h1>
                <p className="mt-7 max-w-3xl text-base leading-8 text-white/60 sm:text-lg">Owned products are separated from configurable solution accelerators so product maturity and delivery scope remain clear.</p>
              </div>
              <div className="flex items-center"><TechnicalSystemDiagram variant="collaboration" /></div>
            </div>
          </Container>
        </section>

        <section className="bg-[#f6f6f1] text-black">
          <Container className="py-24 sm:py-36">
            <div>
              <p className="eyebrow text-[#1f5eff]">Owned products</p>
              <h2 className="mt-7 text-5xl font-medium tracking-[-0.05em] sm:text-6xl">Software we are building as products.</h2>
            </div>
            <div className="mt-20 border-t border-black/15">
              <article className="grid gap-12 border-b border-black/15 py-14 lg:grid-cols-[0.65fr_1.35fr] lg:py-20">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-4"><p className="eyebrow text-[#1f5eff]">Sentient Co-Lab</p><span className="border border-black/15 px-3 py-2 text-[0.62rem] font-bold uppercase tracking-[0.1em]">Active development</span></div>
                </div>
                <div>
                  <h3 className="text-4xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">Every conversation becomes shared intelligence.</h3>
                  <p className="mt-6 max-w-xl text-base leading-8 text-black/60">Video, voice, collaborative work and speaker-aware AI transcription for meetings, lectures and distributed teams.</p>
                  <Link href="/products/sentient-co-lab" className="mt-10 inline-flex border-b border-black pb-1 text-sm font-bold">Explore Sentient Co-Lab →</Link>
                </div>
              </article>
              <article className="grid gap-12 py-14 lg:grid-cols-[0.65fr_1.35fr] lg:py-20">
                <figure className="relative min-h-[24rem] overflow-hidden bg-neutral-200">
                  <Image src="/images/gyptiq-announcement.png" alt="Gyptiq product announcement artwork" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                </figure>
                <div className="lg:py-8">
                  <div className="flex flex-wrap items-center justify-between gap-4"><p className="eyebrow text-[#1f5eff]">Gyptiq</p><span className="border border-black/15 px-3 py-2 text-[0.62rem] font-bold uppercase tracking-[0.1em]">In development</span></div>
                  <h3 className="mt-6 text-3xl font-semibold tracking-[-0.04em]">AI-native customer and business operations.</h3>
                  <Link href="/products/gyptiq" className="mt-6 inline-flex border-b border-black pb-1 text-sm font-bold">Explore Gyptiq →</Link>
                </div>
              </article>
            </div>
          </Container>
        </section>

        <section className="bg-white text-black">
          <Container className="py-24 sm:py-36">
            <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr]">
              <p className="eyebrow text-[#1f5eff]">Solution accelerators</p>
              <div><h2 className="text-5xl font-medium tracking-[-0.05em] sm:text-6xl">Reusable foundations, configured for the operation.</h2><p className="mt-6 max-w-3xl text-base leading-8 text-black/55">These are engineering starting points—not claims of standalone shipped products. Each requires scoped implementation, integration and validation.</p></div>
            </div>
            <div className="mt-20 border-t border-black/15">
              {accelerators.map(([title, copy], index) => (
                <article key={title} className="grid gap-5 border-b border-black/15 py-8 sm:grid-cols-[3rem_0.9fr_1.1fr_auto] sm:items-center sm:py-10">
                  <span className="text-xs font-bold text-black/25">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="text-2xl font-semibold tracking-[-0.03em]">{title}</h3><p className="max-w-xl text-sm leading-7 text-black/55">{copy}</p><Link href="/contact" className="inline-flex w-fit border-b border-black pb-1 text-xs font-bold">Discuss →</Link>
                </article>
              ))}
            </div>
            <p className="mt-10 max-w-4xl border-l-2 border-[#1f5eff] pl-5 text-sm leading-7 text-black/55">Anywork365 and TrustPoint are not linked here because no verified public URLs or owner-approved platform details are present in the repository. They can be added as shipped platforms once those details are supplied and verified.</p>
          </Container>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
