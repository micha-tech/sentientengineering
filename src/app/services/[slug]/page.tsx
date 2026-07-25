import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { COMPANY } from "@/lib/constants";
import { serviceLandingPages } from "@/lib/seo-landing-data";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return serviceLandingPages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceLandingPages.find((item) => item.slug === slug);
  if (!service) return {};

  return createPageMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = serviceLandingPages.find((item) => item.slug === slug);
  if (!service) notFound();

  const pageUrl = absoluteUrl(`/services/${service.slug}`);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: service.title,
        description: service.description,
        url: pageUrl,
        serviceType: service.title,
        areaServed: ["Nigeria", "Africa", "Worldwide"],
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
            name: "Services",
            item: `${COMPANY.url}/services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.title,
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
            <div className="grid min-h-[calc(88svh-4.5rem)] lg:grid-cols-[1.05fr_0.95fr]">
              <div className="flex flex-col justify-between border-b border-white/15 p-6 py-10 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
                <nav
                  aria-label="Breadcrumb"
                  className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-white/45"
                >
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                  <span>/</span>
                  <Link href="/services" className="hover:text-white">
                    Services
                  </Link>
                </nav>
                <div className="mt-24">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/45">
                    {service.kicker}
                  </p>
                  <h1 className="mt-7 max-w-4xl text-balance text-[2.8rem] font-medium leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-[4.6rem]">
                    {service.heading}
                  </h1>
                  <p className="mt-7 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
                    {service.description}
                  </p>
                  <a
                    href="#contact"
                    className="mt-9 inline-flex min-h-12 items-center justify-center bg-white px-6 text-sm font-bold text-black"
                  >
                    Discuss This System
                  </a>
                </div>
              </div>

              <figure className="relative min-h-[30rem] bg-neutral-900">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  loading="eager"
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />
              </figure>
            </div>
          </Container>
        </section>

        <section className="bg-[#f6f6f1] text-black">
          <Container className="border-x border-black/10 py-20 sm:py-28">
            <div className="grid gap-14 lg:grid-cols-2">
              <article>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/45">
                  The operating challenge
                </p>
                <h2 className="mt-7 text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl">
                  Where value is being lost
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-black/60">
                  {service.challenge}
                </p>
              </article>
              <article className="border-t border-black/15 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/45">
                  Our engineering approach
                </p>
                <h2 className="mt-7 text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl">
                  A complete operating system
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-black/60">
                  {service.approach}
                </p>
              </article>
            </div>
          </Container>
        </section>

        <section className="bg-white text-black">
          <Container className="border-x border-black/10 px-0">
            <div className="grid lg:grid-cols-2">
              <div className="border-b border-black/10 p-6 py-16 sm:p-10 sm:py-20 lg:border-b-0 lg:border-r">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/45">
                  What we implement
                </p>
                <h2 className="mt-7 text-4xl font-medium tracking-[-0.04em]">
                  Practical use cases
                </h2>
                <ol className="mt-10 border-t border-black/15">
                  {service.useCases.map((item, index) => (
                    <li
                      key={item}
                      className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-black/15 py-5 text-sm font-semibold leading-6"
                    >
                      <span className="text-black/30">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {item}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-black p-6 py-16 text-white sm:p-10 sm:py-20">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/40">
                  Business value
                </p>
                <h2 className="mt-7 text-4xl font-medium tracking-[-0.04em]">
                  Outcomes the system is designed to improve
                </h2>
                <div className="mt-10 grid border-l border-t border-white/15 sm:grid-cols-2">
                  {service.outcomes.map((item, index) => (
                    <div
                      key={item}
                      className="flex min-h-40 flex-col justify-between border-b border-r border-white/15 p-5"
                    >
                      <span className="text-xs font-bold text-white/25">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="font-semibold leading-6">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-[#ededE7] text-black">
          <Container className="border-x border-black/10 py-20 sm:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/45">
                  Connected by design
                </p>
                <h2 className="mt-7 text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl">
                  Built around your existing environment.
                </h2>
              </div>
              <div className="grid border-l border-t border-black/15 sm:grid-cols-2">
                {service.integrations.map((item, index) => (
                  <div
                    key={item}
                    className="flex min-h-36 flex-col justify-between border-b border-r border-black/15 p-5"
                  >
                    <span className="text-xs font-bold text-black/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="font-semibold">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-white text-black">
          <Container className="border-x border-black/10 py-16">
            <div className="flex flex-col gap-6 border-y border-black/15 py-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-2xl text-2xl font-semibold tracking-[-0.03em]">
                Explore the complete Sentient Engineering service portfolio.
              </p>
              <Link
                href="/services"
                className="inline-flex min-h-12 items-center justify-center border border-black px-6 text-sm font-bold transition hover:bg-black hover:text-white"
              >
                View All Services
              </Link>
            </div>
          </Container>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
