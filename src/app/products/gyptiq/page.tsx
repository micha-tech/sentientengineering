import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { COMPANY } from "@/lib/constants";
import { products } from "@/lib/site-data";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";

const gyptiq = products[0];

export const metadata: Metadata = createPageMetadata({
  title: "Gyptiq | AI-Powered Customer and Business Operations",
  description:
    "Gyptiq connects customer conversations, lead follow-up, quotations, payments, appointments and business records in one intelligent workspace.",
  path: "/products/gyptiq",
  image: "/images/gyptiq-announcement.png",
});

export default function GyptiqPage() {
  const pageUrl = absoluteUrl("/products/gyptiq");
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": `${pageUrl}#software`,
        name: "Gyptiq",
        url: pageUrl,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: gyptiq.description,
        image: absoluteUrl("/images/gyptiq-announcement.png"),
        publisher: {
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
            name: "Products",
            item: `${COMPANY.url}/products`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Gyptiq",
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
            <div className="grid gap-12 py-12 lg:grid-cols-2 lg:items-stretch lg:py-20">
              <div className="flex min-h-[34rem] flex-col justify-between py-4 lg:min-h-[42rem]">
                <nav
                  aria-label="Breadcrumb"
                  className="flex gap-2 text-xs font-bold uppercase tracking-[0.12em] text-white/45"
                >
                  <Link href="/">Home</Link>
                  <span>/</span>
                  <Link href="/products">Products</Link>
                </nav>
                <div className="mt-24">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/45">
                    Sentient Engineering product · In development
                  </p>
                  <h1 className="mt-7 text-[4rem] font-medium leading-none tracking-[-0.055em] sm:text-8xl">
                    Gyptiq
                  </h1>
                  <p className="mt-7 max-w-xl text-lg leading-8 text-white/60">
                    An intelligent workspace for customer conversations, sales
                    follow-up and the business processes around them.
                  </p>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/40">
                    Gyptiq is currently in development. This page does not
                    claim production adoption or large-scale deployment.
                  </p>
                  <a
                    href="#contact"
                    className="mt-9 inline-flex min-h-12 items-center bg-white px-6 text-sm font-bold text-black"
                  >
                    Discuss Gyptiq
                  </a>
                </div>
              </div>
              <figure className="relative min-h-[32rem] bg-[#101413]">
                <Image
                  src="/images/gyptiq-announcement.png"
                  alt="Gyptiq AI-powered customer and business operations platform"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </figure>
            </div>
          </Container>
        </section>

        <section className="bg-[#f6f6f1] text-black">
          <Container className="py-20 sm:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/45">
                  Where it fits
                </p>
                <h2 className="mt-7 text-4xl font-medium leading-[1.06] tracking-[-0.04em] sm:text-5xl">
                  Turn fragmented enquiries into coordinated customer work.
                </h2>
              </div>
              <div>
                <p className="max-w-2xl text-lg leading-8 text-black/60">
                  {gyptiq.description}
                </p>
                <div className="mt-10 grid gap-x-10 gap-y-6 border-t border-black/15 pt-8 sm:grid-cols-2">
                  {gyptiq.capabilities.map((item) => (
                    <div
                      key={item}
                      className="flex gap-3 text-sm font-semibold leading-6"
                    >
                      <span className="text-[#1f5eff]">•</span><h3>{item}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-white text-black">
          <Container className="py-16">
            <div className="flex flex-col gap-6 border-y border-black/15 py-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-2xl text-2xl font-semibold tracking-[-0.03em]">
                Need connected AI agents or workflow automation beyond Gyptiq?
              </p>
              <Link
                href="/services/ai-agents-integrations"
                className="inline-flex min-h-12 items-center justify-center border border-black px-6 text-sm font-bold transition hover:bg-black hover:text-white"
              >
                Explore AI agent engineering
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
