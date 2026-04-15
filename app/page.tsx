import Hero from "@/components/hero";
import FeaturesGrid from "@/components/features-grid";
import ChatMockup from "@/components/chat-mockup";
import DashboardMockup from "@/components/dashboard-mockup";
import HowItWorks from "@/components/how-it-works";
import Outcomes from "@/components/outcomes";
import FaqAccordion from "@/components/faq-accordion";
import CtaSection from "@/components/cta-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturesGrid />
      <ChatMockup />
      <DashboardMockup />
      <HowItWorks />
      <Outcomes />
      <FaqAccordion />
      <CtaSection />
    </main>
  );
}
