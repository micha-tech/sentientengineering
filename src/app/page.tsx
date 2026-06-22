import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AutomationSections from "@/components/AutomationSections";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AutomationSections />
      </main>
      <Footer />
    </>
  );
}
