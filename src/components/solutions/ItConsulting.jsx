import Image from "next/image";
import SectionHeader from "../common/ui/SectionHeader";
import Section from "../common/ui/Section";
import CaseStudy from "../services/components/CaseStudy";
import AboutSection from "../services/components/AboutSection";
import TransformationHero from "../services/components/TransformationHero";
import CtaSection from "../common/components/CtaSection";
import InsightsSection from "../common/components/InsightsSection";
import TestimonialsSection from "../common/components/TestimonialsSection";
const data = {
  left: [
    {
      title: "IT Strategy & Planning",
      description:
        "Develop clear technology roadmaps aligned with organizational goals. Our consultants evaluate your current environment, identify opportunities, and create actionable strategies that maximize IT investments and business value.",
      containerClass:
        "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg",
    },
    {
      title: "Infrastructure & Cloud Consulting",
      description:
        "Design resilient and scalable IT infrastructures across on-premise, hybrid, and cloud environments. We ensure performance optimization, secure architecture, and seamless scalability for evolving business needs.",
      containerClass: "bg-gray-200 text-gray-900 shadow-sm",
    },
  ],
  right: {
    title: "Digital Transformation Consulting",
    description:
      "Modernize business operations through automation, cloud adoption, and emerging technologies. We guide organizations through transformation journeys that improve agility, collaboration, and customer experience.",
    containerClass: "bg-[#0B1120] text-white shadow-xl",
  },
};
const transformationData = {
  badge: "Driving IT Excellence",
  heading: "Building Scalable, Secure, and Future-Ready IT Ecosystems",
  subheading:
    "We combine technical expertise with strategic consulting to help organizations create adaptable IT environments. Our approach focuses on modernization, automation, and performance optimization, enabling businesses to innovate faster while maintaining stability and security across their technology landscape.",
  benefits: [
    "Improved IT efficiency and operational performance",
    "Reduced technology risks and downtime",
    "Optimized infrastructure and cloud utilization",
    "Faster adoption of modern digital tools",
    "Enhanced scalability for business growth",
    "Better alignment between IT and business strategy"
  ],
  button: {
    text: "Contact Us",
    href: "/contact-us",
  },
};
const caseStudyData = {
  badge: "Case Study",
  heading: "Driving Operational Efficiency Through Strategic IT Consulting",
  subheading:
    "Organizations facing rapid digital change require adaptable IT strategies to remain competitive. Our consulting approach helps enterprises optimize infrastructure, modernize operations, and improve system performance through structured transformation initiatives.",
  cards: [
    {
      title: "Technology Modernization & Optimization",
      description:
        "Implement intelligent automation solutions that reduce manual processes, increase productivity, and enhance operational efficiency through AI-driven decision systems.",
      variant: "secondary",
    },
    {
      title: "Enterprise IT Governance & Advisory",
      description:
        "Establish strong governance frameworks, technology standards, and risk management strategies to ensure sustainable IT operations and informed decision-making.",
      variant: "primary",
    },
    {
      title: "Innovation & Automation Enablement",
      description:
        "Leverage AI, automation, and digital platforms to reduce manual processes, enhance productivity, and accelerate innovation across departments..",
      variant: "secondary",
    },
  ],
};

const ItConsulting = () => {
  return (
    <>
      <div className="px-8 md:px-14 lg:px-20 py-4 pb-16 bg-[#F8F9FC] -mt-32 pt-34">
        <SectionHeader
          badge="IT Consulting"
          heading="Transforming Technology into Business Advantage"
          subheading={`Empower your organization with strategic IT consulting services designed to align technology with business objectives. We help companies modernize systems, optimize IT operations, and implement scalable solutions that drive efficiency, innovation, and long-term growth.`}
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

export default ItConsulting;
