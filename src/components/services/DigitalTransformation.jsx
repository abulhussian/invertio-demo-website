import Image from "next/image";
import SectionHeader from "../common/ui/SectionHeader";
import Section from "../common/ui/Section";
import AboutSection from "./components/AboutSection";
import CtaSection from "../common/components/CtaSection";
import InsightsSection from "../common/components/InsightsSection";
import TestimonialsSection from "../common/components/TestimonialsSection";
const data = {
  left: [
    {
      title: "Business Challenge",
      description:
        "Organizations often struggle with fragmented systems, outdated infrastructure, and limited data visibility. These challenges slow operations, increase costs, and restrict business growth in an increasingly digital marketplace.",
      containerClass:
        "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg",
    },
    {
      title: "Solution & Impact",
      description:
        "Invertio implements AI-powered automation, cloud integration, and real-time analytics to unify operations, enhance efficiency, and enable faster, data-driven decision-making across the enterprise.",
      containerClass: "bg-gray-200 text-gray-900 shadow-sm",
    },
  ],
  right: {
    title: "Transforming Operations Through Intelligent Technology",
    description:
      "Invertio partners with enterprises to design and execute scalable digital transformation strategies that combine AI, cloud platforms, and automation technologies to improve performance, agility, and long-term business resilience.",
    containerClass: "bg-[#0B1120] text-white shadow-xl",
  },
};

const DigitalTransformation = () => {
  return (
    <>
      <div className="px-8 md:px-14 lg:px-20 py-4 pb-16 bg-[#F8F9FC] -mt-32 pt-34">
        <SectionHeader
          badge="Digital Transformation"
          heading="Accelerate Innovation. Modernize Operations. Scale with Confidence."
          subheading={`Transform your business with Invertio’s end-to-end digital transformation services designed to modernize legacy systems, optimize workflows, and create future-ready digital ecosystems powered by AI, cloud, and automation technologies.`}
        />
      </div>

      <AboutSection leftCards={data.left} rightCard={data.right} />
      <CtaSection />
      <InsightsSection />
      <TestimonialsSection />
    </>
  );
};

export default DigitalTransformation;
