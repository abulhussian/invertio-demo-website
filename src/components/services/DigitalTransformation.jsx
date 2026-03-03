import Image from "next/image";
import SectionHeader from "../common/ui/SectionHeader";
import Section from "../common/ui/Section";
import AboutSection from "./components/AboutSection";
import CtaSection from "../common/components/CtaSection";
import InsightsSection from "../common/components/InsightsSection";
import TestimonialsSection from "../common/components/TestimonialsSection";
import TransformationHero from "./components/TransformationHero";
import CaseStudy from "./components/CaseStudy";
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
const transformationData = {
  badge: "Driving Digital Transformation",
  heading: "Building Intelligent, Scalable, and Future-Ready Enterprises",
  subheading:
    "Invertio enables organizations to accelerate their digital journey by combining strategic consulting with advanced engineering capabilities. Our approach focuses on creating scalable solutions that improve efficiency, enhance decision-making, and unlock innovation.",
  benefits: [
    "Modernize legacy systems",
    "Automate operational workflows",
    "Leverage data-driven insights",
    "Improve customer engagement",
    "Enable scalable cloud infrastructure",
  ],
  button: {
    text: "Contact Us",
    href: "/contact-us",
  },
};
const caseStudyData = {
  badge: "Case Study",
  heading: "Core Technologies Powering Your Digital Transformation Journey",
  subheading:
    "We combine AI, cloud computing, advanced analytics, and innovation frameworks to help organizations modernize operations, improve agility, and build sustainable digital growth.",
  cards: [
    {
      title: "AI & Automation",
      description:
        "Implement intelligent automation solutions that reduce manual processes, increase productivity, and enhance operational efficiency through AI-driven decision systems.",
      variant: "secondary",
    },
    {
      title: "Cloud & Data Analytics",
      description:
        "Adopt secure cloud platforms and advanced analytics to gain real-time insights, improve agility, and enable smarter business strategies.",
      variant: "primary",
    },
    {
      title: "Digital Strategy & Innovation",
      description:
        "Design transformation roadmaps aligned with business objectives, helping organizations innovate faster and remain competitive in evolving digital markets.",
      variant: "secondary",
    },
  ],
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
      <TransformationHero data={transformationData} />
      <CaseStudy data={caseStudyData} />
      <CtaSection />
      <InsightsSection />
      <TestimonialsSection />
    </>
  );
};

export default DigitalTransformation;
