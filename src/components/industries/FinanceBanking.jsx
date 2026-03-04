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
      title: "Digital Banking Platforms",
      description:
        "Build next-generation banking systems with secure onboarding, omnichannel access, and personalized customer journeys designed for modern users.",
      containerClass:
        "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg",
    },
    {
      title: "Financial Analytics & Insights",
      description:
        "Transform financial data into actionable intelligence using predictive analytics, dashboards, and automated reporting for smarter decision-making.",
      containerClass: "bg-gray-200 text-gray-900 shadow-sm",
    },
  ],
  right: {
    title: "Fraud Detection & Risk Management",
    description:
      "Leverage AI-powered monitoring, behavioral analytics, and real-time risk scoring to detect fraud, protect transactions, and strengthen financial security.",
    containerClass: "bg-[#0B1120] text-white shadow-xl",
  },
};
const transformationData = {
  badge: "Driving Financial Transformation",
  heading: "Building Secure, Intelligent, and Customer-Centric Banking Experiences",
  subheading:
    "Invertio combines deep financial domain expertise with modern technology engineering to help institutions innovate confidently. Our solutions enhance operational efficiency, improve compliance readiness, and deliver superior digital banking experiences across channels..",
  benefits: [
    "Modernize legacy banking systems",
    "Enhance customer engagement & personalization",
    "Strengthen fraud prevention & cybersecurity",
    "Improve regulatory compliance & governance",
    "Enable scalable digital banking infrastructure",
  ],
  button: {
    text: "Contact Us",
    href: "/contact-us",
  },
};
const caseStudyData = {
  badge: "Case Study",
  heading: "Core Finance Capabilities Powering Modern Banks",
  subheading:
    "From digital platforms to AI-driven analytics, our finance solutions help organizations innovate while maintaining reliability, performance, and trust.",
  cards: [
    {
      title: "Digital Banking Platforms",
      description:
        "Create scalable banking ecosystems supporting mobile banking, payments, onboarding, and customer lifecycle management.",
      variant: "secondary",
    },
    {
      title: "Risk & Compliance Automation",
      description:
        "Automate compliance workflows, reporting, and regulatory monitoring to reduce operational risk and manual effort.",
      variant: "primary",
    },
    {
      title: "Data Analytics & Intelligence",
      description:
        "Gain deep financial insights through AI-powered analytics that improve forecasting, customer understanding, and operational planning.",
      variant: "secondary",
    },
  ],
};

const FinanceBanking = () => {
  return (
    <>
      <div className="px-8 md:px-14 lg:px-20 py-4 pb-16 bg-[#F8F9FC] -mt-32 pt-34">
        <SectionHeader
          badge="Finance & Banking Industry"
          heading="Accelerate Financial Innovation with Secure Digital Banking Solutions"
          subheading={`Empower financial institutions with intelligent, secure, and scalable digital banking technologies. Invertio helps banks and fintech companies modernize systems, enhance customer experiences, and ensure regulatory compliance through AI, cloud, and advanced analytics.`}
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

export default FinanceBanking;
