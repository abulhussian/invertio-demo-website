import SectionHeader from "../common/ui/SectionHeader";
import AboutSection from "./components/AboutSection";
import CtaSection from "../common/components/CtaSection";
import InsightsSection from "../common/components/InsightsSection";
import TestimonialsSection from "../common/components/TestimonialsSection";
const softwareSectionData = {
  left: [
    {
      title: "Custom Software Development",
      description:
        "Develop tailored enterprise applications that align with business workflows, automate processes, and improve operational productivity.",
      containerClass:
        "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg",
    },
    {
      title: "Software Maintenance & Support",
      description:
        "Ensure application stability and performance through continuous monitoring, updates, optimization, and long-term technical support.",
      containerClass: "bg-gray-200 text-gray-900 shadow-sm",
    },
  ],
  right: {
    title: "Web & Mobile Application Development",
    description:
      "Build responsive web platforms and scalable mobile applications that deliver seamless user experiences across all devices.",
    containerClass: "bg-[#0B1120] text-white shadow-xl",
  },
};

const SoftwareDevelopment = () => {
  return (
    <>
      <div className="px-8 md:px-14 lg:px-20 py-4 pb-16 bg-[#F8F9FC] -mt-32 pt-34">
        <SectionHeader
          badge="Software Development"
          heading="Build Smarter Software. Modernize Systems. Scale with Confidence."
          subheading={`Empower your organization with custom-built software solutions designed for scalability, performance, and innovation. Invertio delivers modern applications that streamline operations and accelerate digital growth.`}
        />
      </div>

      <AboutSection
        leftCards={softwareSectionData.left}
        rightCard={softwareSectionData.right}
      />
      <CtaSection />
      <InsightsSection />
      <TestimonialsSection />
    </>
  );
};

export default SoftwareDevelopment;
