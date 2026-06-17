import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import OperationalPainSection from "@/components/OperationalPainSection";
import OutcomesSection from "@/components/OutcomesSection";
import SentientMethodSection from "@/components/SentientMethodSection";
import ServicesSection from "@/components/ServicesSection";
import MetricsSection from "@/components/MetricsSection";
import IndustriesSection from "@/components/IndustriesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ThoughtLeadershipSection from "@/components/ThoughtLeadershipSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <OperationalPainSection />
        <OutcomesSection />
        <SentientMethodSection />
        <ServicesSection />
        <MetricsSection />
        <IndustriesSection />
        <CaseStudiesSection />
        <ThoughtLeadershipSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
