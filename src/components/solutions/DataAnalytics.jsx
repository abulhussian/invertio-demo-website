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
      title: "Predictive Analytics",
      description:
        "Leverage machine learning models to forecast trends, identify risks, and enable proactive decision-making based on accurate data insights.",
      containerClass:
        "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg",
    },
    {
      title: "Data Visualization & Reporting",
      description:
        "Transform complex datasets into intuitive dashboards and interactive reports that provide clear, real-time visibility into business performance.",
      containerClass: "bg-gray-200 text-gray-900 shadow-sm",
    },
  ],
  right: {
    title: "Data Integration & Management",
    description:
      "Unify data from multiple systems into a centralized and scalable architecture that ensures consistency, accessibility, and governance.",
    containerClass: "bg-[#0B1120] text-white shadow-xl",
  },
};
const transformationData = {
  badge: "Driving Data Innovation",
  heading: "Building Intelligent, Scalable, and Insight-Driven Enterprises",
  subheading:
    "Invertio combines analytics expertise with cloud and AI technologies to help organizations modernize their data landscape. Our solutions enable real-time intelligence, automate analysis workflows, and support data-driven cultures that accelerate growth and innovation.",
  benefits: [
    "Centralized and governed data ecosystems",
    "Faster and more accurate business reporting",
    "Improved forecasting and risk analysis",
    "Real-time operational visibility",
    "Scalable analytics infrastructure",
  ],
  button: {
    text: "Contact Us",
    href: "/contact-us",
  },
};
const caseStudyData = {
  badge: "Case Study",
  heading: "Core Data Analytics Capabilities Powering Modern Businesses",
  subheading:
    "From enterprise reporting to AI-driven predictive insights, our analytics solutions help organizations uncover hidden opportunities while improving performance, efficiency, and strategic planning.",
  cards: [
    {
      title: "Enterprise Data Warehousing",
      description:
        "Design scalable data warehouses that consolidate business data into a single source of truth for accurate analytics and reporting.",
      variant: "secondary",
    },
    {
      title: "Advanced Analytics & Intelligence",
      description:
        "Apply AI and statistical models to uncover patterns, predict outcomes, and support smarter business strategies.",
      variant: "primary",
    },
    {
      title: "Real-Time Analytics & Monitoring",
      description:
        "Enable instant insights through live dashboards and streaming analytics that support faster operational decisions.",
      variant: "secondary",
    },
  ],
};

const DataAnalytics = () => {
  return (
    <>
      <div className="px-8 md:px-14 lg:px-20 py-4 pb-16 bg-[#F8F9FC] -mt-32 pt-34">
        <SectionHeader
          badge="Data Analytics Solutions"
          heading="Turning Data Into Actionable Business Intelligence"
          subheading={`Unlock the true value of your data with advanced analytics, AI-powered insights, and intelligent reporting solutions. Invertio helps organizations transform raw information into strategic advantages that drive smarter decisions, operational efficiency, and sustainable business growth.`}
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

export default DataAnalytics;
