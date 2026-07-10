import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntelligentSystemsSections from "@/components/IntelligentSystemsSections";
import Footer from "@/components/Footer";

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
