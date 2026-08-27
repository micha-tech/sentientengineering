import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { COMPANY } from "@/lib/constants";
import { industryLandingPages } from "@/lib/seo-landing-data";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";

type IndustryPageProps = {
  params: Promise<{ slug: string }>;
};

const relatedServicesByIndustry: Record<
  string,
  { href: string; label: string }[]
> = {
  "logistics-supply-chain": [
    {
      href: "/services/industrial-operations",
      label: "Industrial intelligence",
    },
    {
      href: "/services/business-systems-automation",
      label: "Process automation",
    },
  ],
  manufacturing: [
    { href: "/services/computer-vision", label: "Computer vision" },
    {
      href: "/services/predictive-maintenance",
      label: "Predictive maintenance",
    },
    { href: "/services/vibration-signal-analysis", label: "Vibration analysis" },
  ],
  "healthcare-medical-services": [
    { href: "/services/biometrics-identity", label: "Biometric systems" },
    {
      href: "/services/scientific-document-intelligence",
      label: "Scientific documents",
    },
  ],
  "scientific-laboratory-equipment": [
    { href: "/services/digital-commerce", label: "Digital commerce" },
    {
      href: "/services/scientific-document-intelligence",
      label: "Scientific document intelligence",
    },
    { href: "/services/scientific-engineering-ai", label: "Scientific AI" },
  ],
  "energy-utilities": [
    {
      href: "/services/predictive-maintenance",
      label: "Predictive maintenance",
    },
    { href: "/services/computer-vision", label: "Computer vision" },
    { href: "/services/scientific-engineering-ai", label: "Engineering AI" },
  ],
  "construction-infrastructure": [
    { href: "/services/computer-vision", label: "Computer vision" },
    {
      href: "/services/scientific-engineering-ai",
      label: "Engineering intelligence",
    },
  ],
  "retail-b2b-commerce": [
    { href: "/services/digital-commerce", label: "Digital commerce" },
    {
      href: "/services/ai-agents-integrations",
      label: "AI agents and integrations",
    },
  ],
  "professional-field-services": [
    {
      href: "/services/business-systems-automation",
      label: "Process automation",
    },
    { href: "/services/speech-audio-intelligence", label: "Speech intelligence" },
    { href: "/services/scientific-engineering-ai", label: "Field-engineer copilots" },
  ],
};

export function generateStaticParams() {
  return industryLandingPages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = industryLandingPages.find((item) => item.slug === slug);
  if (!industry) return {};

  return createPageMetadata({
    title: industry.title,
    description: industry.description,
    path: `/industries/${industry.slug}`,
  });
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = industryLandingPages.find((item) => item.slug === slug);
  if (!industry) notFound();
  const relatedServices = relatedServicesByIndustry[industry.slug] ?? [];

  const pageUrl = absoluteUrl(`/industries/${industry.slug}`);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": pageUrl,
        name: industry.title,
        description: industry.description,
        url: pageUrl,
        about: {
          "@type": "Thing",
          name: industry.name,
        },
        provider: {
          "@id": `${COMPANY.url}/#organization`,
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
            name: "Industries",
            item: `${COMPANY.url}/industries`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: industry.name,
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
          <Container>
            <div className="grid min-h-[calc(88svh-4.5rem)] gap-12 py-12 lg:grid-cols-2 lg:items-stretch lg:py-20">
              <div className="flex flex-col justify-between py-4">
                <nav
                  aria-label="Breadcrumb"
                  className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-[0.12em] text-white/45"
                >
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                  <span>/</span>
                  <Link href="/industries" className="hover:text-white">
                    Industries
                  </Link>
                </nav>
                <div className="mt-24">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/45">
                    {industry.name}
                  </p>
                  <h1 className="mt-7 max-w-4xl text-balance text-[3rem] font-medium leading-[0.98] tracking-[-0.055em] sm:text-7xl">
                    {industry.title}
                  </h1>
                  <p className="mt-7 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
                    {industry.description}
                  </p>
                  <a
                    href="#contact"
                    className="mt-9 inline-flex min-h-12 items-center justify-center bg-white px-6 text-sm font-bold text-black"
                  >
                    Discuss Your Operation
                  </a>
                </div>
              </div>
              <figure className="relative min-h-[30rem] bg-neutral-900">
                <Image
                  src={industry.image}
                  alt={industry.imageAlt}
                  fill
                  loading="eager"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />
              </figure>
            </div>
          </Container>
        </section>

        <section className="bg-[#f6f6f1] text-black">
          <Container className="py-20 sm:py-28">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/45">
                  The industry challenge
                </p>
                <h2 className="mt-7 text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl">
                  Technology must fit the operation.
                </h2>
              </div>
              <p className="max-w-3xl text-xl leading-9 text-black/60 sm:text-2xl sm:leading-10">
                {industry.challenge}
              </p>
            </div>
          </Container>
        </section>

        <section className="bg-white text-black">
          <Container className="py-20 sm:py-28">
            <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/45">
                  Systems we can implement
                </p>
                <h2 className="mt-7 text-4xl font-medium tracking-[-0.04em]">
                  Applied to the work that matters
                </h2>
                <ul className="mt-10 border-t border-black/15">
                  {industry.solutions.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 border-b border-black/15 py-5 text-sm font-semibold leading-6"
                    >
                      <span className="text-[#1f5eff]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-black/15 pt-10">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/45">
                  Commercial value
                </p>
                <h2 className="mt-7 text-4xl font-medium tracking-[-0.04em]">
                  Designed around measurable improvement
                </h2>
                <div className="mt-10 border-t border-black/15">
                  {industry.value.map((item) => (
                    <div
                      key={item}
                      className="flex gap-3 border-b border-black/15 py-6"
                    >
                      <span className="text-[#1f5eff]">•</span>
                      <p className="font-semibold">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-[#ededE7] text-black">
          <Container className="py-16">
            <div className="grid gap-8 border-y border-black/15 py-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-black/45">
                  Related services
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
                  Explore relevant engineering capabilities.
                </h2>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                {relatedServices.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="inline-flex min-h-11 items-center border border-black px-4 text-sm font-bold transition hover:bg-black hover:text-white"
                  >
                    Explore {service.label}
                  </Link>
                ))}
                <Link
                  href="/industries"
                  className="inline-flex min-h-11 items-center border border-black/20 px-4 text-sm font-bold"
                >
                  View all industries
                </Link>
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
