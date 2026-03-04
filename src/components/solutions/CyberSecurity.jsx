import Image from "next/image";
import SectionHeader from "../common/ui/SectionHeader";
import Section from "../common/ui/Section";
import AboutSection from "../services/components/AboutSection";
import TransformationHero from "../services/components/TransformationHero";
import CtaSection from "../common/components/CtaSection";
import InsightsSection from "../common/components/InsightsSection";
import TestimonialsSection from "../common/components/TestimonialsSection";
import CaseStudy from "../services/components/CaseStudy";
const data = {
  left: [
    {
      title: "Cloud Security",
      description:
        "Secure cloud workloads and data through encryption, identity management, secure configurations, and compliance-driven governance frameworks.",
      containerClass:
        "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg",
    },
    {
      title: "Threat Detection & Response",
      description:
        "Identify, analyze, and respond to cyber threats in real time using AI-driven monitoring, automated alerts, and rapid incident response strategies.",
      containerClass: "bg-gray-200 text-gray-900 shadow-sm",
    },
  ],
  right: {
    title: "Network Security",
    description:
      "Protect your IT infrastructure with advanced firewalls, intrusion detection systems, endpoint protection, and continuous network monitoring to prevent unauthorized access.",
    containerClass: "bg-[#0B1120] text-white shadow-xl",
  },
};
const transformationData = {
  badge: "Driving Cybersecurity Excellence",
  heading: "Building Secure, Resilient, and Future-Ready Digital Environments",
  subheading:
    "We combine cybersecurity strategy, advanced technologies, and proactive defense mechanisms to protect organizations from emerging threats. Our solutions enhance visibility, strengthen access control, and ensure continuous protection across hybrid infrastructures.",
  benefits: [
    "Real-time threat monitoring and detection",
    "Reduced risk of data breaches and cyberattacks",
    "Enhanced compliance with global security standards",
    "Secure cloud and application environments",
    "Improved business continuity and operational resilience",
  ],
  button: {
    text: "Contact Us",
    href: "/contact-us",
  },
};
const caseStudyData = {
  badge: "Case Study",
  heading: "Strengthening Digital Defense with Intelligent Cybersecurity",
  subheading:
    "As cyber threats continue to evolve, organizations must adopt proactive security strategies that protect critical assets while ensuring operational continuity. Our cybersecurity solutions combine advanced threat intelligence, automation, and continuous monitoring to safeguard infrastructure, applications, and sensitive data across modern digital environments.",
  cards: [
    {
      title: "Threat Prevention & Risk Management",
      description:
        "Identify vulnerabilities before attackers exploit them through continuous risk assessments, security audits, and proactive defense mechanisms that reduce exposure and strengthen organizational resilience.",
      variant: "secondary",
    },
    {
      title: "Advanced Security Operations & Response",
      description:
        "Leverage AI-driven monitoring, real-time threat detection, and rapid incident response frameworks to detect anomalies early, contain breaches quickly, and minimize business disruption.",
      variant: "primary",
    },
    {
      title: "Compliance, Governance & Data Protection",
      description:
        "Ensure regulatory compliance and data privacy through secure access controls, encryption strategies, and governance frameworks aligned with global cybersecurity standards and industry best practices.",
      variant: "secondary",
    },
  ],
};

const CyberSecurity = () => {
  return (
    <>
      <div className="px-8 md:px-14 lg:px-20 py-4 pb-16 bg-[#F8F9FC] -mt-32 pt-34">
        <SectionHeader
          badge="Cybersecurity"
          heading="Safeguarding Your Digital Future"
          subheading={`Protect your digital assets with advanced cybersecurity solutions designed to detect, prevent, and respond to evolving threats. We help organizations build resilient security infrastructures that safeguard data, applications, and business operations..`}
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

export default CyberSecurity;
