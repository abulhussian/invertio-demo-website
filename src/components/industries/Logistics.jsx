import Image from "next/image";
import SectionHeader from "../common/ui/SectionHeader";
import Section from "../common/ui/Section";
import AboutSection from "../services/components/AboutSection";
import TransformationHero from "../services/components/TransformationHero";
import CaseStudy from "../services/components/CaseStudy";
import CtaSection from "../common/components/CtaSection";
import InsightsSection from "../common/components/InsightsSection";
import TestimonialsSection from "../common/components/TestimonialsSection";
const data = {
  left: [
    {
      title: "Fleet Management & Tracking",
      description:
        "Monitor vehicles in real time using GPS tracking, route optimization, and automated maintenance insights. Improve delivery timelines, fuel efficiency, and driver productivity while ensuring operational transparency..",
      containerClass:
        "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg",
    },
    {
      title: "Warehouse Automation",
      description:
        "Digitize warehouse operations through smart inventory systems, automated workflows, and real-time analytics. Increase fulfillment speed, reduce manual errors, and optimize storage utilization.",
    },
  ],
  right: {
    title: "Supply Chain Optimization",
    description:
      "Enhance operational performance with intelligent planning, demand forecasting, and centralized inventory visibility. Our solutions help organizations reduce delays, minimize costs, and improve coordination across suppliers and distribution networks.",
    containerClass: "bg-[#0B1120] text-white shadow-xl",
  },
};
const transformationData = {
  badge: "Driving Logistics Innovation",
  heading: "Building Connected, Agile, and Future-Ready Supply Chains",
  subheading:
    "We combine cloud technologies, IoT integration, and advanced analytics to help logistics organizations adapt to evolving market demands. Our platforms improve coordination between transportation, warehouses, and distribution partners while enabling smarter operational decisions.",
  benefits: [
    "Real-time shipment tracking and operational visibility",
    "Improved delivery accuracy and reduced transit delays",
    "Optimized inventory and warehouse efficiency",
    "Data-driven logistics planning and forecasting",
    "Enhanced customer experience and service reliability",
  ],
  button: {
    text: "Contact Us",
    href: "/contact-us",
  },
};
const caseStudyData = {
  badge: "Case Study",
  heading: "Optimizing Supply Chain Performance Through Intelligent Logistics Platforms",
  subheading:
    "Invertio partnered with a multinational logistics provider to digitize supply chain operations and improve delivery efficiency using automation and analytics.",
  cards: [
    {
      title: "Smart Transportation Management",
      description:
        "Optimize routes, manage deliveries efficiently, and monitor logistics performance through centralized dashboards and automation tools..",
      variant: "secondary",
    },
    {
      title: "Predictive Logistics Intelligence",
      description:
        "Use analytics and AI-driven forecasting to anticipate demand fluctuations, prevent disruptions, and improve planning accuracy.",
      variant: "primary",
    },
    {
      title: "Operational Visibility & Control",
      description:
        "Gain end-to-end insight into logistics operations with unified monitoring systems that support faster decision-making.",
      variant: "secondary",
    },
  ],
};

const Logistics = () => {
  return (
    <>
      <div className="px-8 md:px-14 lg:px-20 py-4 pb-16 bg-[#F8F9FC] -mt-32 pt-34">
        <SectionHeader
          badge="Logistics Industry"
          heading="Streamline Supply Chains with Intelligent Logistics Technology"
          subheading={`Transform logistics and transportation operations with smart, data-driven platforms designed to improve visibility, efficiency, and delivery performance. Invertio enables logistics providers and enterprises to optimize movement, automate workflows, and gain real-time operational control across the supply chain.`}
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

export default Logistics;
