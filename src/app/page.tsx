import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntelligentSystemsSections from "@/components/IntelligentSystemsSections";
import Footer from "@/components/Footer";
import { META } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: META.title,
  description: META.description,
  path: "/",
});

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <IntelligentSystemsSections />
      </main>
      <Footer />
    </>
  );
}
