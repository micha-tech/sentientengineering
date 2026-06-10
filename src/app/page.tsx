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
import ContactSection from "@/components/ContactSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PositioningSection />
      <OperationalPainSection />
      <SentientMethodSection />
      <ServicesSection />
      <IndustriesSection />
      <OutcomesSection />
      <CaseStudiesSection />
      <ThoughtLeadershipSection />
      <FAQSection />
      <FinalCTASection />
      <ContactSection />
      <NewsletterSignup />
      <Footer />
    </>
  );
}
