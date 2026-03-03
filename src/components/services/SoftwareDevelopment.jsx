import SectionHeader from "../common/ui/SectionHeader";
import AboutSection from "./components/AboutSection";
import CtaSection from "../common/components/CtaSection";
import InsightsSection from "../common/components/InsightsSection";
import TestimonialsSection from "../common/components/TestimonialsSection";
import TransformationHero from "./components/TransformationHero";
import CaseStudy from "./components/CaseStudy";
const softwareSectionData = {
  left: [
    {
      title: "Custom Software Development",
      description:
        "Develop tailored enterprise applications that align with business workflows, automate processes, and improve operational productivity.",
      containerClass:
        "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg",
    },
    {
      title: "Software Maintenance & Support",
      description:
        "Ensure application stability and performance through continuous monitoring, updates, optimization, and long-term technical support.",
      containerClass: "bg-gray-200 text-gray-900 shadow-sm",
    },
  ],
  right: {
    title: "Web & Mobile Application Development",
    description:
      "Build responsive web platforms and scalable mobile applications that deliver seamless user experiences across all devices.",
    containerClass: "bg-[#0B1120] text-white shadow-xl",
  },
};
const transformationData = {
  badge: "Driving Software Innovation",
  heading: "Building Scalable, Secure, and High-Performance Software Solutions",
  subheading:
    "Invertio combines modern engineering practices, scalable architectures, and agile development methodologies to help organizations build reliable digital products. Our software solutions improve operational efficiency, accelerate innovation, and support long-term business growth.",
  benefits: [
    "Seamless modernization of legacy applications",
    "Scalable architecture designed for future growth",
    "Faster development cycles with agile delivery",
    "Enhanced application security and performance",
    "Reliable systems ensuring business continuity",
  ],
  button: {
    text: "Contact Us",
    href: "/contact-us",
  },
};
const caseStudyData = {
  badge: "Case Study",
  heading: "Core Software Capabilities Powering Modern Enterprises",
  subheading:
    "From product engineering and application modernization to ongoing optimization and support, our software development services help businesses build scalable digital solutions while ensuring performance, security, and long-term reliability.",
  cards: [
    {
      title: "Custom Software Development",
      description:
        "Design and develop tailored software applications aligned with your business workflows, enabling improved efficiency, scalability, and operational control.",
      variant: "secondary",
    },
    {
      title: "Application Development & Modernization",
      description:
        "Build modern web and mobile applications or transform legacy systems using cloud-ready architectures, APIs, and scalable frameworks.",
      variant: "primary",
    },
    {
      title: "Software Maintenance & Support",
      description:
        "Ensure continuous performance with proactive monitoring, upgrades, bug fixes, and enhancements that keep your applications secure and future-ready.",
      variant: "secondary",
    },
  ],
};

const SoftwareDevelopment = () => {
  return (
    <>
      <div className="px-8 md:px-14 lg:px-20 py-4 pb-16 bg-[#F8F9FC] -mt-32 pt-34">
        <SectionHeader
          badge="Software Development"
          heading="Build Smarter Software. Modernize Systems. Scale with Confidence."
          subheading={`Empower your organization with custom-built software solutions designed for scalability, performance, and innovation. Invertio delivers modern applications that streamline operations and accelerate digital growth.`}
        />
      </div>

      <AboutSection
        leftCards={softwareSectionData.left}
        rightCard={softwareSectionData.right}
      />
      <TransformationHero data={transformationData} />
      <CaseStudy data={caseStudyData} />
      <CtaSection />
      <InsightsSection />
      <TestimonialsSection />
    </>
  );
};

export default SoftwareDevelopment;
