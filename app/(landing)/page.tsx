import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";
import Headers from "@/components/landing/Headers";
import HeroSection from "@/components/landing/HeroSection";
import HowItWork from "@/components/landing/HowItWorks";
import UseCasesSection from "@/components/landing/UseCasesSection";

export default function Home() {
  return (
    <div>
      <Headers />
      <HeroSection />
      <HowItWork />
      <UseCasesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
