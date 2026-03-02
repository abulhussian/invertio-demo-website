import CtaSection from "@/components/common/components/CtaSection";
import InsightsSection from "@/components/common/components/InsightsSection";
import TestimonialsSection from "@/components/common/components/TestimonialsSection";

const page = () => {
  return (
    <>
      <div className="text-5xl h-screen">HOME </div>
      <CtaSection />
      <InsightsSection />
      <TestimonialsSection />
    </>
  );
};

export default page;
