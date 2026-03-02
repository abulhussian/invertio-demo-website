import SectionHeader from "../common/ui/SectionHeader";
import AboutSection from "./components/AboutSection";
import CtaSection from "../common/components/CtaSection";
import InsightsSection from "../common/components/InsightsSection";
import TestimonialsSection from "../common/components/TestimonialsSection";
const cloudSectionData = {
  left: [
    {
      title: "Business Challenge",
      description:
        "Many organizations face rising infrastructure costs, limited scalability, security risks, and complex legacy environments that slow innovation and hinder business agility.",
      containerClass:
        "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg",
    },
    {
      title: "Solution & Impact",
      description:
        "Invertio helps businesses migrate, modernize, and optimize cloud ecosystems using proven multi-cloud strategies, automation, and continuous monitoring to improve performance, reduce costs, and strengthen security.",
      containerClass: "bg-gray-200 text-gray-900 shadow-sm",
    },
  ],
  right: {
    title: "Transforming Infrastructure Through Cloud Innovation",
    description:
      "Our cloud experts design and implement scalable architectures across AWS, Microsoft Azure, and Google Cloud, enabling organizations to achieve flexibility, resilience, and faster digital delivery.",
    containerClass: "bg-[#0B1120] text-white shadow-xl",
  },
};
const CloudService = () => {
  return (
    <>
      <div className="px-8 md:px-14 lg:px-20 py-4 pb-16 bg-[#F8F9FC] -mt-32 pt-34">
        <SectionHeader
          badge="Cloud Services"
          heading="Scale Faster. Optimize Infrastructure. Secure Your Cloud Future."
          subheading={`Empower your business with Invertio’s end-to-end cloud services designed to modernize infrastructure, enhance scalability, and improve operational efficiency through secure, high-performance cloud environments.`}
        />
      </div>
      <AboutSection
        leftCards={cloudSectionData.left}
        rightCard={cloudSectionData.right}
      />
      <CtaSection />
      <InsightsSection />
      <TestimonialsSection />
    </>
  );
};

export default CloudService;
