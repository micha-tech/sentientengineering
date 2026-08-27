import type { Metadata } from "next";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TechnicalSystemDiagram from "@/components/TechnicalSystemDiagram";
import { COMPANY } from "@/lib/constants";
import { businessServicePages, engineeringServicePages } from "@/lib/service-pages";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Applied AI Engineering Services for Business, Science and Industry",
  description:
    "Intelligent systems for customer operations, commerce, computer vision, speech, vibration, predictive maintenance, biometrics and scientific engineering.",
  path: "/services",
});

const businessCapabilities = [
  ["AI customer-service agents", "Respond across websites, WhatsApp and email; retrieve approved information; qualify, route and escalate enquiries."],
  ["Voice agents", "Support calls, appointments, order-status questions, follow-up, summaries, CRM updates and human handoff."],
  ["Quotation and RFQ systems", "Extract requirements, match products, apply rules, prepare drafts, route approval and track follow-up."],
  ["Recommendation and product intelligence", "Intent-based discovery, technical matching, compatible products, bundles and B2B purchasing assistance."],
  ["Meeting and collaboration intelligence", "Speaker-aware transcription, decisions, action items, chapters, shared notes and searchable recordings."],
] as const;

export default function ServicesPage() {
  const pageUrl = absoluteUrl("/services");
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": pageUrl,
        name: "Applied AI Engineering Services",
        url: pageUrl,
        description: metadata.description,
        isPartOf: { "@id": `${COMPANY.url}/#website` },
      },
      ...[...businessServicePages, ...engineeringServicePages].map((service) => ({
        "@type": "Service",
        name: service.title,
        description: service.description,
        url: `${COMPANY.url}/services/${service.slug}`,
        provider: { "@id": `${COMPANY.url}/#organization` },
      })),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: COMPANY.url },
          { "@type": "ListItem", position: 2, name: "Services", item: pageUrl },
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
            <div className="grid min-h-[44rem] gap-16 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:py-24">
              <div className="flex flex-col justify-end">
                <p className="eyebrow text-[#83a8ff]">Applied AI Engineering Services</p>
                <h1 className="mt-8 max-w-5xl text-balance text-[3rem] font-medium leading-[0.97] tracking-[-0.06em] sm:text-7xl lg:text-[5.1rem]">
                  Intelligent systems for digital and physical operations.
                </h1>
                <p className="mt-7 max-w-3xl text-base leading-8 text-white/60 sm:text-lg">
                  From customer enquiries and commercial workflows to machine vibration, visual inspection, scientific documents and acoustic signals, we engineer AI systems around the work and decisions that matter.
                </p>
              </div>
              <div className="flex items-center">
                <TechnicalSystemDiagram />
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-[#f6f6f1] text-black">
          <Container className="py-24 sm:py-36">
            <div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr]">
              <div>
                <p className="eyebrow text-[#1f5eff]">Business systems</p>
                <h2 className="mt-7 text-5xl font-medium tracking-[-0.05em] sm:text-6xl">Business AI Systems</h2>
                <p className="mt-6 max-w-xl text-base leading-8 text-black/60">
                  Intelligent systems that improve customer response, revenue execution, internal coordination and management visibility—with explicit rules, audit trails and human approval.
                </p>
              </div>
              <div className="border-t border-black/15">
                {businessCapabilities.map(([title, copy]) => (
                  <article key={title} className="grid gap-5 border-b border-black/15 py-8 sm:grid-cols-[0.75fr_1.25fr] sm:py-10">
                    <h3 className="text-xl font-semibold leading-7 tracking-[-0.025em]">{title}</h3>
                    <p className="text-sm leading-7 text-black/55">{copy}</p>
                  </article>
                ))}
                <div className="mt-12 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
                  {businessServicePages.map((service) => (
                    <Link key={service.slug} href={`/services/${service.slug}`} className="group border-t border-black/20 pt-5">
                      <span className="text-lg font-semibold leading-6 transition group-hover:text-[#1f5eff]">{service.shortTitle}</span>
                      <span className="mt-3 block text-xs font-bold">Explore →</span>
                    </Link>
                  ))}
                </div>
                <div className="mt-16 border-t border-black/15 pt-9">
                  <p className="eyebrow text-[#1f5eff]">Working product expression</p>
                  <div className="mt-5 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                    <div><h3 className="text-3xl font-semibold tracking-[-0.04em]">Sentient Co-Lab</h3><p className="mt-3 max-w-2xl text-sm leading-7 text-black/55">Real-time collaboration, speaker-aware transcription, shared notes and searchable meeting knowledge.</p></div>
                    <Link href="/products/sentient-co-lab" className="shrink-0 border-b border-black pb-1 text-sm font-bold">Explore Co-Lab →</Link>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-black text-white">
          <Container className="py-24 sm:py-36">
            <div className="grid gap-16 lg:grid-cols-[0.72fr_1.28fr]">
              <div>
                <p className="eyebrow text-[#83a8ff]">Engineering systems</p>
                <h2 className="mt-7 text-5xl font-medium leading-none tracking-[-0.05em] sm:text-6xl">Scientific and Engineering AI Systems</h2>
                <p className="mt-6 max-w-xl text-base leading-8 text-white/55">
                  Systems that acquire and interpret images, speech, sound, vibration, sensor measurements, technical documents and scientific data under real operating constraints.
                </p>
                <TechnicalSystemDiagram variant="signal" className="mt-10" />
              </div>
              <div className="border-t border-white/20">
                {engineeringServicePages.map((service) => (
                  <Link key={service.slug} href={`/services/${service.slug}`} className="group grid gap-6 border-b border-white/20 py-8 sm:grid-cols-[0.8fr_1.2fr] sm:py-10">
                    <h3 className="text-xl font-semibold leading-7 tracking-[-0.025em]">{service.shortTitle}</h3>
                    <span>
                      <span className="block text-sm leading-7 opacity-55">{service.description}</span>
                      <span className="mt-4 inline-flex border-b border-current pb-1 text-xs font-bold transition group-hover:text-[#83a8ff]">Explore service →</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
