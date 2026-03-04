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
      title: "Patient Management Systems",
      description:
        "Centralize patient records, appointments, treatment histories, and workflows into a unified platform that improves coordination and reduces administrative complexity.",
      containerClass:
        "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg",
    },
    {
      title: "Telemedicine & Remote Care",
      description:
        "Enable secure virtual consultations, remote monitoring, and digital communication channels that expand access to care while improving patient convenience.",
      containerClass: "bg-gray-200 text-gray-900 shadow-sm",
    },
  ],
  right: {
    title: "Innovative, Secure, and Patient-Focused Healthcare Technologies",
    description:
      "We design healthcare solutions that enhance clinical efficiency, improve patient engagement, and support data-driven medical decision-making.",
    containerClass: "bg-[#0B1120] text-white shadow-xl",
  },
};
const transformationData = {
  badge: "Driving Healthcare Innovation",
  heading: "Building Secure, Scalable, and Future-Ready Healthcare Ecosystems",
  subheading:
    "Invertio combines healthcare expertise with modern technologies such as AI, cloud computing, and automation to help providers deliver efficient and patient-centric services. Our solutions improve operational visibility, reduce manual processes, and enable continuous innovation across healthcare systems.",
  benefits: [
    "Centralized and secure patient data management",
    "Improved clinical workflows and operational efficiency",
    "Enhanced patient engagement and experience",
    "Data-driven treatment and decision support",
    "Compliance with healthcare regulations and standards",
  ],
  button: {
    text: "Contact Us",
    href: "/contact-us",
  },
};
const caseStudyData = {
  badge: "Case Study",
  heading: "Core Healthcare Capabilities Powering Modern Care",
  subheading:
    "From connected patient platforms to AI-driven clinical insights, our healthcare solutions help providers deliver efficient, secure, and patient-centric care while improving operational performance and medical outcomes.",
  cards: [
    {
      title: "Patient Management Systems",
      description:
        "Centralize patient records, appointments, treatment histories, and care coordination into a unified digital platform that improves workflow efficiency and reduces administrative complexity.",
      variant: "secondary",
    },
    {
      title: "Clinical Workflow & Compliance Automation",
      description:
        "Automate clinical documentation, regulatory compliance, reporting, and operational workflows to reduce manual effort, improve accuracy, and ensure healthcare standards compliance.",
      variant: "primary",
    },
    {
      title: "Healthcare Data Analytics & Intelligence",
      description:
        "Leverage AI-powered analytics and real-time dashboards to gain actionable insights, enhance diagnosis support, optimize hospital resources, and improve patient outcomes.",
      variant: "secondary",
    },
  ],
};

const HealthCare = () => {
  return (
    <>
      <div className="px-8 md:px-14 lg:px-20 py-4 pb-16 bg-[#F8F9FC] -mt-32 pt-34">
        <SectionHeader
          badge="Healthcare Industry"
          heading="Enhancing Patient Care Through Intelligent Digital Healthcare Platforms"
          subheading={`Transform healthcare delivery with secure, scalable, and data-driven technology solutions. Invertio empowers hospitals, clinics, and healthcare providers with modern digital systems that improve patient outcomes, streamline operations, and enable smarter clinical decisions.`}
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

export default HealthCare;
