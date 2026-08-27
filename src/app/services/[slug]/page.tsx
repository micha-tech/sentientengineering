import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TechnicalSystemDiagram from "@/components/TechnicalSystemDiagram";
import { COMPANY } from "@/lib/constants";
import { getServicePage, servicePages } from "@/lib/service-pages";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";

type ServicePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return servicePages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (!service) return {};
  return createPageMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (!service) notFound();

  const pageUrl = absoluteUrl(`/services/${service.slug}`);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": pageUrl,
        name: service.title,
        description: service.description,
        url: pageUrl,
        isPartOf: { "@id": `${COMPANY.url}/#website` },
        mainEntity: { "@id": `${pageUrl}#service` },
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: service.title,
        description: service.description,
        url: pageUrl,
        provider: { "@id": `${COMPANY.url}/#organization` },
        areaServed: ["Nigeria", "Africa"],
        serviceType: service.shortTitle,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: COMPANY.url },
          { "@type": "ListItem", position: 2, name: "Services", item: `${COMPANY.url}/services` },
          { "@type": "ListItem", position: 3, name: service.shortTitle, item: pageUrl },
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
            <div className="grid min-h-[42rem] gap-12 py-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch lg:py-20">
              <div className="flex flex-col justify-between py-4">
                <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-white/40">
                  <Link href="/" className="hover:text-white">Home</Link><span>/</span>
                  <Link href="/services" className="hover:text-white">Services</Link><span>/</span>
                  <span>{service.shortTitle}</span>
                </nav>
                <div className="mt-24">
                  <p className="eyebrow text-[#83a8ff]">{service.kicker}</p>
                  <h1 className="mt-7 max-w-5xl text-balance text-[2.8rem] font-medium leading-[0.97] tracking-[-0.058em] sm:text-6xl lg:text-[4.7rem]">{service.heading}</h1>
                  <p className="mt-7 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">{service.description}</p>
                  <Link href="/contact" className="mt-9 inline-flex min-h-12 items-center bg-white px-6 text-sm font-bold text-black transition hover:bg-[#83a8ff]">Discuss This Engineering Problem</Link>
                </div>
              </div>
              <figure className="relative min-h-[28rem] overflow-hidden bg-[#0a0a0a]">
                <Image src={service.image} alt={service.imageAlt} fill priority sizes="(min-width: 1024px) 46vw, 100vw" className="object-cover opacity-70" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18),rgba(0,0,0,0.82))]" />
                <figcaption className="absolute inset-x-6 bottom-6 border-t border-white/20 pt-4 text-xs leading-6 text-white/55 sm:inset-x-10 sm:bottom-10">{service.imageAlt}</figcaption>
              </figure>
            </div>
          </Container>
        </section>

        <section className="bg-[#f6f6f1] text-black">
          <Container className="py-24 sm:py-36">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
              <article>
                <p className="eyebrow text-[#1f5eff]">The operating challenge</p>
                <h2 className="mt-7 max-w-xl text-4xl font-medium leading-tight tracking-[-0.045em] sm:text-5xl">Where the current system loses evidence or control.</h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-black/60">{service.challenge}</p>
              </article>
              <article className="lg:pt-24">
                <p className="eyebrow text-[#1f5eff]">Our engineering approach</p>
                <h2 className="mt-7 max-w-xl text-4xl font-medium leading-tight tracking-[-0.045em] sm:text-5xl">The complete system—not an isolated model.</h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-black/60">{service.approach}</p>
              </article>
            </div>
          </Container>
        </section>

        <section className="bg-black text-white">
          <Container className="py-24 sm:py-36">
            <div className="grid gap-16 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
              <div>
                <p className="eyebrow text-[#83a8ff]">Engineering sequence</p>
                <h2 className="mt-7 text-4xl font-medium tracking-[-0.045em] sm:text-5xl">From raw evidence to an accountable decision.</h2>
                <ul className="mt-10 border-t border-white/20">
                  {service.pipeline.map((step) => (
                    <li key={step} className="flex gap-3 border-b border-white/20 py-5 text-sm font-semibold leading-6"><span className="text-[#83a8ff]">•</span>{step}</li>
                  ))}
                </ul>
              </div>
              <TechnicalSystemDiagram variant={service.slug === "vibration-signal-analysis" || service.slug === "speech-audio-intelligence" ? "signal" : "system"} />
            </div>
          </Container>
        </section>

        <section className="bg-white text-black">
          <Container className="py-24 sm:py-36">
            <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
              <div>
                <p className="eyebrow text-[#1f5eff]">Applications</p>
                <h2 className="mt-7 text-4xl font-medium leading-tight tracking-[-0.045em] sm:text-5xl">Where this capability becomes useful.</h2>
              </div>
              <ul className="grid gap-x-12 gap-y-7 border-t border-black/15 pt-8 sm:grid-cols-2">
                {service.useCases.map((item) => (
                  <li key={item} className="flex gap-3 text-sm font-semibold leading-6"><span className="text-[#1f5eff]">•</span><span>{item}</span></li>
                ))}
              </ul>
            </div>
          </Container>
        </section>

        {service.sections.map((section, index) => (
          <section key={section.title} className={index % 2 === 0 ? "bg-[#ededE7] text-black" : "bg-[#f6f6f1] text-black"}>
            <Container className="py-24 sm:py-32">
              <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr]">
                <div>
                  <p className="eyebrow text-[#1f5eff]">Capability focus</p>
                  <h2 className="mt-7 text-4xl font-medium leading-tight tracking-[-0.045em] sm:text-5xl">{section.title}</h2>
                  <p className="mt-6 max-w-2xl text-base leading-8 text-black/60">{section.copy}</p>
                </div>
                <ul className="grid content-start gap-x-12 gap-y-7 border-t border-black/15 pt-8 sm:grid-cols-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3"><span className="text-[#1f5eff]">•</span><span className="text-sm font-semibold leading-6">{item}</span></li>
                  ))}
                </ul>
              </div>
            </Container>
          </section>
        ))}

        <section className="bg-white text-black">
          <Container className="py-24 sm:py-32">
            {service.note ? (
              <div className="mb-16 grid gap-8 border-y border-black/15 py-8 lg:grid-cols-[0.65fr_1.35fr]">
                <p className="eyebrow text-[#1f5eff]">Responsible boundary</p>
                <p className="max-w-4xl text-xl font-medium leading-9 tracking-[-0.02em]">{service.note}</p>
              </div>
            ) : null}
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="eyebrow text-black/40">Connected environment</p>
                <h2 className="mt-6 text-4xl font-medium tracking-[-0.045em]">Built around existing systems.</h2>
                <ul className="mt-8 border-t border-black/15">
                  {service.integrations.map((item) => <li key={item} className="border-b border-black/15 py-4 text-sm font-semibold">{item}</li>)}
                </ul>
              </div>
              <div>
                <p className="eyebrow text-[#1f5eff]">Intended value</p>
                <div className="mt-8 border-t border-black/15">
                  {service.outcomes.map((item) => <div key={item} className="flex gap-3 border-b border-black/15 py-5"><span className="text-[#1f5eff]">•</span><p className="text-sm font-semibold leading-6">{item}</p></div>)}
                </div>
              </div>
            </div>
            <div className="mt-16 flex flex-wrap gap-3 border-t border-black/15 pt-8">
              {service.related.map((item) => <Link key={item.href} href={item.href} className="inline-flex min-h-11 items-center border border-black px-4 text-sm font-bold transition hover:bg-black hover:text-white">{item.label}</Link>)}
              <Link href="/services" className="inline-flex min-h-11 items-center border border-black/20 px-4 text-sm font-bold">All services</Link>
            </div>
          </Container>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
