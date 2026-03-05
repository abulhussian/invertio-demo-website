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
      title: "Customer Analytics & Personalization",
      description:
        "Leverage advanced analytics and AI insights to understand customer behavior, deliver personalized recommendations, and create targeted marketing strategies that improve conversion rates..",
      containerClass:
        "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg",
    },
    {
      title: "Order Fulfillment Automation",
      description:
        "Optimize order processing with automated workflows, smart inventory updates, warehouse coordination, and real-time delivery tracking to ensure faster and more accurate fulfillment..",
      containerClass: "bg-gray-200 text-gray-900 shadow-sm",
    },
  ],
  right: {
    title: "Omnichannel Retail Integration",
    description:
      "Unify online stores, mobile apps, and physical retail locations through integrated commerce platforms that synchronize inventory, pricing, and customer data in real time.",
    containerClass: "bg-[#0B1120] text-white shadow-xl",
  },
};
const transformationData = {
  badge: "Driving Smart Retail Excellence",
  heading: "Building Connected, Data-Driven Shopping Experiences",
  subheading:
    "We combine automation, analytics, and scalable commerce technologies to help retailers respond quickly to market demands. Our solutions improve operational visibility, enhance decision-making, and enable seamless experiences across every customer touchpoint.",
  benefits: [
    "Real-time inventory visibility across channels",
    "Improved customer engagement and retention",
    "Faster order processing and delivery cycles",
    "Data-driven merchandising decisions",
    "Scalable infrastructure for growing businesses",
  ],
  button: {
    text: "Contact Us",
    href: "/contact-us",
  },
};
const caseStudyData = {
  badge: "Case Study",
  heading: "Revolutionizing Retail Operations",
  subheading:
    "Invertio partnered with a global retail brand to modernize its digital commerce ecosystem, improving customer engagement and operational efficiency through intelligent automation and analytics.",
  cards: [
    {
      title: "Digital Commerce Platforms",
      description:
        "Design scalable e-commerce ecosystems with secure payments, mobile optimization, and flexible product management capabilities.",
      variant: "secondary",
    },
    {
      title: "AI-Driven Retail Intelligence",
      description:
        "Use predictive analytics and automation to forecast demand, optimize pricing strategies, and enhance operational efficiency.",
      variant: "primary",
    },
    {
      title: "Customer Experience Optimization",
      description:
        "Deliver consistent, personalized shopping journeys through integrated CRM, loyalty programs, and behavioral analytics.",
      variant: "secondary",
    },
  ],
};

const RetailECommerce = () => {
  return (
    <>
      <div className="px-8 md:px-14 lg:px-20 py-4 pb-16 bg-[#F8F9FC] -mt-32 pt-34">
        <SectionHeader
          badge="Retail & E-Commerce Industry"
          heading="Transforming Retail Through Digital Innovation"
          subheading={`Empower your retail and online business with intelligent digital solutions designed to enhance customer experiences, streamline operations, and drive sustainable growth. From storefront innovation to data-driven commerce, we help brands succeed in the modern retail landscape.`}
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

export default RetailECommerce;
