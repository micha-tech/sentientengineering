import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PositioningSection from "@/components/PositioningSection";
import OperationalPainSection from "@/components/OperationalPainSection";
import SentientMethodSection from "@/components/SentientMethodSection";
import ServicesSection from "@/components/ServicesSection";
import IndustriesSection from "@/components/IndustriesSection";
import OutcomesSection from "@/components/OutcomesSection";
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
        <PositioningSection />
        <OperationalPainSection />
        <SentientMethodSection />
        <ServicesSection />
        <OutcomesSection />
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
