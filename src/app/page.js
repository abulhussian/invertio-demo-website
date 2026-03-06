import CtaSection from "@/components/common/components/CtaSection";
import IndustriesSection from "@/components/common/components/IndustriesSection";
import InsightsSection from "@/components/common/components/InsightsSection";
import ProjectsSection from "@/components/common/components/ProjectsSection";
import SolutionsSection from "@/components/common/components/SolutionSection";
import TestimonialsSection from "@/components/common/components/TestimonialsSection";
import HeroSection from "@/components/HeroSection";
import HomeSection from "@/components/HomeSection";

const page = () => {
  return (
    <>
    
        <HeroSection/>
        <HomeSection/>
        <SolutionsSection/>
        <IndustriesSection/>
        <ProjectsSection/>
      <CtaSection />
      <InsightsSection />
      <TestimonialsSection />
    </>
  );
};

export default page;
