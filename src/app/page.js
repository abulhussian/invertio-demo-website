import CtaSection from "@/components/common/components/CtaSection";
import InsightsSection from "@/components/common/components/InsightsSection";
import TestimonialsSection from "@/components/common/components/TestimonialsSection";
import HeroSection from "@/components/HeroSection";
import HomeSection from "@/components/HomeSection";

const page = () => {
  return (
    <>
    
        <HeroSection/>
        <HomeSection/>
      <CtaSection />
      <InsightsSection />
      <TestimonialsSection />
    </>
  );
};

export default page;
