import CtaSection from "@/components/common/components/CtaSection";
import InsightsSection from "@/components/common/components/InsightsSection";
import TestimonialsSection from "@/components/common/components/TestimonialsSection";
import SectionHeader from "@/components/common/ui/SectionHeader";
import FeatureSection from "@/components/services/components/FeatureSection";


const page = () => {


  return (
    <>
      <div className="px-8 md:px-14 lg:px-20 py-4 pb-16 bg-[#F8F9FC] -mt-32 pt-34">
        <SectionHeader
          badge="Our Solution"
          heading="Technology Solutions Designed to Accelerate Digital Growth"
          subheading={`We help organizations modernize operations, unlock data value, and build secure, scalable digital ecosystems through innovative technology solutions. Our expertise combines strategy, engineering, and advanced technologies to deliver measurable business outcomes and long-term transformation From intelligent analytics and cybersecurity protection to strategic IT consulting, our solutions empower businesses to innovate faster, operate securely, and scale with confidence in a rapidly evolving digital landscape.`}
        />
      </div>
      {/* Section 1 */}
      <FeatureSection
        tag="Data & Analytics"
        title="Turning data into actionable intelligence that drives smarter decisions and business growth."
        description=""
        buttonText="Read More"
        image="/services/data-analytics.png"
        imagePosition="right"
        slug="solutions/data-analytics"

      />
      <FeatureSection
        tag="Cyber Security"
        title="Protecting digital assets with proactive security strategies and resilient defense frameworks."
        description=""
        buttonText="Read More"
        image="/services/cyberSecurity.png"
        imagePosition="left"
        slug="solutions/cybersecurity"

      />
      <FeatureSection
        tag="IT Consulting"
        title="Aligning technology strategy with business goals to enable innovation and operational excellence."
        description=""
        buttonText="Read More"
        image="/services/it-consulting.png"
        imagePosition="right"
        slug="solutions/It-consulting"

      />
      <CtaSection />
      <InsightsSection />
      <TestimonialsSection />
    </>
  );
};

export default page;
