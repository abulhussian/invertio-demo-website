import CompanyOverviewSection from "@/components/about/CompanyOverviewSection";
import SectionHeader from "@/components/common/ui/SectionHeader";
import Section from "@/components/common/ui/Section";
import CoreValuesSection from "@/components/about/CoreValuesSection";
import TechImpactSection from "@/components/about/TechImpactSection";
import SisterCompaniesSection from "@/components/about/SisterCompaniesSection";
import InsightsSection from "@/components/common/components/InsightsSection";
import CtaSection from "@/components/common/components/CtaSection";
import TestimonialsSection from "@/components/common/components/TestimonialsSection";

const page = () => {
  return (
    <>

      <section className="w-full bg-[#F8F9FC] py-10 sm:py-12 md:py-14">
        <div className="max-w-[1380px] mx-auto px-4 lg:px-6 flex flex-col gap-3 sm:gap-4 md:gap-5">

          {/* Badge */}
          <div className="text-[10px] sm:text-[12px] md:text-[14px] font-bold font-jakarta text-[#06030E]">
            About Invertio
          </div>

          {/* Heading */}
          <h2 className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] font-bold font-jakarta leading-tight text-[#0F172A] w-full">
            Engineering Technology That Powers Business Transformation
          </h2>

          {/* Subheading */}
          <p className="text-[13px] sm:text-[15px] md:text-[16px] font-inter font-medium text-[#475569] leading-relaxed whitespace-pre-line w-full">
            Invertio is a technology-driven company helping organizations build scalable digital solutions through innovation, strategy, and engineering excellence.
            {"\n"}
            We partner with startups, enterprises, and growing businesses to transform ideas into impactful digital platforms. By combining modern technologies with deep industry understanding, we deliver solutions that improve efficiency, enhance user experiences, and support sustainable business growth.
          </p>

        </div>
      </section>

      <CompanyOverviewSection />
      <CoreValuesSection />
      <TechImpactSection />
      <SisterCompaniesSection />
      <CtaSection />
      <InsightsSection />
      <TestimonialsSection />
    </>
  );
};

export default page;
