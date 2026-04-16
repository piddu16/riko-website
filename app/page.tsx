import Hero from "@/components/hero";
import TrustStrip from "@/components/trust-strip";
import ProductTabs from "@/components/product-tabs";
import BeforeAfter from "@/components/before-after";
import FeaturesGrid from "@/components/features-grid";
import HowItWorks from "@/components/how-it-works";
import Outcomes from "@/components/outcomes";
import FaqAccordion from "@/components/faq-accordion";
import CtaSection from "@/components/cta-section";
import StickyCta from "@/components/sticky-cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <ProductTabs />
      <BeforeAfter />
      <FeaturesGrid />
      <HowItWorks />
      <Outcomes />
      <FaqAccordion />
      <CtaSection />
      <StickyCta />
    </main>
  );
}
