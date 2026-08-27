import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { COMPANY } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Our AI Engineering Team in Lagos",
  description:
    "Contact Sentient Engineering to discuss AI agents, business automation, intelligent systems, computer vision and Applied AI engineering projects in Nigeria and across Africa.",
  path: "/contact",
});

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Sentient Engineering",
    url: `${COMPANY.url}/contact`,
    description:
      "Contact Sentient Engineering about an Applied AI engineering project.",
    mainEntity: {
      "@id": `${COMPANY.url}/#organization`,
    },
  };

  return (
    <>
      <Navbar />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <section className="bg-[#f6f6f1] pt-[4.5rem] text-black">
          <Container className="py-16 sm:py-20">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/45">
              Contact · {COMPANY.location}
            </p>
            <h1 className="mt-6 max-w-5xl text-balance text-4xl font-medium leading-[1.02] tracking-[-0.045em] sm:text-6xl">
              Discuss an AI engineering project with our team.
            </h1>
          </Container>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
