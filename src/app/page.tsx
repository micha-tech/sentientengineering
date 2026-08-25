import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntelligentSystemsSections from "@/components/IntelligentSystemsSections";
import Footer from "@/components/Footer";
import { COMPANY, META } from "@/lib/constants";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: META.title,
  description: META.description,
  path: "/",
});

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": absoluteUrl("/"),
    name: META.title,
    description: META.description,
    url: COMPANY.url,
    isPartOf: { "@id": `${COMPANY.url}/#website` },
    about: { "@id": `${COMPANY.url}/#organization` },
  };

  return (
    <>
      <Navbar />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <HeroSection />
        <IntelligentSystemsSections />
      </main>
      <Footer />
    </>
  );
}
