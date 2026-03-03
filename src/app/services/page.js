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
          badge="Our Services"
          heading="Technology Services Designed to Accelerate Digital Innovation"
          subheading={`We help businesses transform operations, build scalable platforms, and create meaningful digital experiences through modern technology solutions.
  Our services combine strategy, engineering, and design to deliver secure, scalable, and future-ready solutions. From digital transformation initiatives to cloud infrastructure and custom software development, we enable organizations to innovate faster and grow with confidence.`}
        />
      </div>
      {/* Section 1 */}
      <FeatureSection
        tag="Digital Transformation"
        title="Reimagining business processes using modern technologies to improve efficiency, agility, and customer experience."
        description=""
        buttonText="Read More"
        image="/services/Transformation.png"
        imagePosition="right"
        slug = "digital-transformation"
       
      />
       <FeatureSection
        tag="Cloud Services"
        title="Designing secure and scalable cloud environments that enhance performance, flexibility, and operational reliability."
        description=""
        buttonText="Read More"
        image="/services/cloud services.png"
        imagePosition="left"
        slug = "cloud-services"
       
      />
      <FeatureSection
        tag="Software Development"
        title="Building custom applications and enterprise platforms tailored to business needs with a focus on scalability and performance.."
        description=""
        buttonText="Read More"
        image="/services/Software-development.png"
        imagePosition="right"
        slug = "software-development"
       
      />
      <CtaSection />
      <InsightsSection />
      <TestimonialsSection />
    </>
  );
};

export default page;
