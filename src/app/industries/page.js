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
          badge="Industries We Serve"
          heading="Industry Solutions Designed to Power Digital Transformation Across Every Sector"
          subheading={`We help organizations across industries embrace innovation, optimize operations, and deliver exceptional customer and user experiences through tailored technology solutions. By combining data intelligence, automation, and secure digital platforms, we enable businesses to adapt, scale, and lead in competitive markets.`}
        />
      </div>
      {/* Section 1 */}
      <FeatureSection
        tag="Education Industry"
        title="Empowering modern learning environments through intelligent digital education platforms."
        description=""
        buttonText="Read More"
        image="/services/Education.png"
        imagePosition="right"
        slug = "industries/education"
       
      />
       <FeatureSection
        tag="Logistics Industry"
        title="Optimizing supply chain operations with real-time visibility and intelligent automation."
        description=""
        buttonText="Read More"
        image="/services/logistics.png"
        imagePosition="left"
        slug = "industries/logistics"
       
      />
      <FeatureSection
        tag="Retail & E-Commerce Industry"
        title="Aligning technology strategy with business goals to enable innovation and operational excellence."
        description=""
        buttonText="Read More"
        image="/services/Retail.png"
        imagePosition="right"
        slug = "industries/retail-ecommerce"
       
      />
      <FeatureSection
        tag="Finance & Banking Industry"
        title="Enabling secure, data-driven financial services with scalable digital innovation."
        description=""
        buttonText="Read More"
        image="/services/finance.png"
        imagePosition="left"
        slug = "industries/finance-banking"
       
      />
      <FeatureSection
        tag="Healthcare Industry"
        title="Transforming healthcare delivery through connected systems and intelligent data solutions."
        description=""
        buttonText="Read More"
        image="/services/Health.png"
        imagePosition="right"
        slug = "industries/healthcare"
       
      />
      <FeatureSection
        tag="Information Industry"
        title="Delivering intelligent information ecosystems that turn data into strategic value."
        description=""
        buttonText="Read More"
        image="/services/information.png"
        imagePosition="left"
        slug = "industries/information"
       
      />
      <CtaSection />
      <InsightsSection />
      <TestimonialsSection />
    </>
  );
};

export default page;
