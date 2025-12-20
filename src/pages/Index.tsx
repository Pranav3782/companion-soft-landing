import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import WhySection from "@/components/WhySection";
import ImageStorySection from "@/components/ImageStorySection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ConnectionModesSection from "@/components/ConnectionModesSection";
import DifferenceSection from "@/components/DifferenceSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Companion - Meet People Who Feel Like Home</title>
        <meta
          name="description"
          content="Real connections. Real moments. No endless scrolling. Companion helps you find people nearby for simple shared activities."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://companion.app" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <StatsSection />
        <WhySection />
        <ImageStorySection />
        <HowItWorksSection />
        <ConnectionModesSection />
        <DifferenceSection />
        <PricingSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
