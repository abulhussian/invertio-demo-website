import SectionHeader from "@/components/common/ui/SectionHeader";
import ContactSection from "@/components/contactus/ContactSection";
import CTASection from "@/components/contactus/CTASection";

const page = () => {
  return (
    <>
      <div className="px-8 md:px-14 lg:px-20 py-4 pb-16 bg-[#F8F9FC] -mt-32 pt-34">
        <SectionHeader
          badge="Let’s Start Your Digital Journey"
          heading="Ready to transform your business with innovative technology solutions?"
          subheading={`Whether you’re planning a new project, exploring digital transformation, or looking for expert consultation, connect with our team today and take the first step toward innovation.`}
          size="md"
          headingColor="#0F172A"
          subheadingColor="#475569"
        />
        <ContactSection />
      </div>
      <CTASection />
    </>
  )
};

export default page;
