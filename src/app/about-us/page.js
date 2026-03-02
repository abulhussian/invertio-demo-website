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
      <div className="px-8 md:px-14 lg:px-20 py-4 pb-16 bg-[#F8F9FC] -mt-32 pt-34">
        <SectionHeader
          badge="Our Services"
          heading="Engineering Technology That Powers Business Transformation"
          subheading={`From transforming business operations to designing user-focused experiences, our services combine strategy, technology, and engineering expertise.
We partner with startups, enterprises, and growing businesses to transform ideas into impactful digital platforms. By combining modern technologies with deep industry understanding, we deliver solutions that improve efficiency, enhance user experiences, and support sustainable business growth.`}
          size="xl"
          headingColor="#0F172A"
          subheadingColor="#475569"
        />
      </div>
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
