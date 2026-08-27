import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { COMPANY } from "@/lib/constants";
import { industryLandingPages } from "@/lib/seo-landing-data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "AI Solutions for Industries in Nigeria and Africa",
  description:
    "Applied AI, automation and computer vision solutions for logistics, manufacturing, healthcare, energy, construction, commerce and field services.",
  path: "/industries",
});

export default function IndustriesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Industries We Serve",
    url: `${COMPANY.url}/industries`,
    description:
      "Industry-specific applied AI and automation systems by Sentient Engineering.",
    hasPart: industryLandingPages.map((industry) => ({
      "@type": "WebPage",
      name: industry.name,
      url: `${COMPANY.url}/industries/${industry.slug}`,
    })),
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
          <Container className="py-20 sm:py-28">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">
              Industries
            </p>
            <h1 className="mt-8 max-w-6xl text-balance text-[3.2rem] font-medium leading-[0.98] tracking-[-0.055em] sm:text-7xl lg:text-[5.5rem]">
              Intelligent systems shaped around how each industry works.
            </h1>
            <p className="mt-8 max-w-3xl text-base leading-8 text-white/60 sm:text-lg">
              We combine AI, automation, computer vision and integration with
              the workflows, constraints and operating risks of the environment
              where the system must produce value.
            </p>
          </Container>
        </section>

        <section className="bg-white text-black">
          <Container className="py-20 sm:py-28">
            <div className="grid gap-x-10 gap-y-16 md:grid-cols-2">
              {industryLandingPages.map((industry) => (
                <article
                  key={industry.slug}
                  className="border-t border-black/15 pt-8"
                >
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="group block"
                  >
                    <figure className="relative aspect-[16/10] overflow-hidden bg-neutral-200">
                      <Image
                        src={industry.image}
                        alt={industry.imageAlt}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover transition duration-700 group-hover:scale-[1.025]"
                      />
                    </figure>
                    <h2 className="mt-7 text-3xl font-semibold tracking-[-0.04em]">
                      {industry.name}
                    </h2>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-black/55">
                      {industry.description}
                    </p>
                    <span className="mt-7 inline-flex border-b border-black pb-1 text-sm font-bold">
                      Explore industry solutions
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
