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
      title: "Enterprise Data Management",
      description:
        "Centralize enterprise data across departments with secure, structured, and compliant data management platforms that improve accessibility, governance, and operational efficiency.",
      containerClass:
        "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg",
    },
    {
      title: "Analytics & Business Intelligence",
      description:
        "Leverage advanced analytics and real-time dashboards to uncover insights, monitor performance, and enable data-driven strategies that accelerate business growth.",
      containerClass: "bg-gray-200 text-gray-900 shadow-sm",
    },
  ],
  right: {
    title: "Intelligent, Secure, and Data-Driven Information Systems",
    description:
      "We design modern information platforms that enhance data visibility, automate workflows, and support intelligent decision-making through scalable and cloud-enabled technologies.",
    containerClass: "bg-[#0B1120] text-white shadow-xl",
  },
};
const transformationData = {
  badge: "Driving Information Innovation",
  heading: "Building Scalable, Intelligent, and Future-Ready Information Ecosystems",
  subheading:
    "Our information services combine data engineering, automation, analytics, and cloud technologies to help organizations unlock the full value of their data. We enable faster decision-making, operational transparency, and continuous innovation across digital environments.",
  benefits: [
    "Centralized and secure enterprise data management",
    "Improved operational visibility and reporting accuracy",
    "Enhanced collaboration across teams and departments",
    "Automated workflows to reduce manual effort",
    "Compliance-ready data governance and security standards",
  ],
  button: {
    text: "Contact Us",
    href: "/contact-us",
  },
};
const caseStudyData = {
  badge: "Case Study",
  heading: "Core Information Capabilities Powering Modern Enterprises",
  subheading:
    "From enterprise data platforms to AI-powered automation, our solutions help organizations improve efficiency, strengthen governance, and transform raw data into strategic business assets.",
  cards: [
    {
      title: "Enterprise Data Platforms",
      description:
        "Create unified data environments that integrate multiple systems, ensuring seamless data flow, governance, and accessibility across the organization.",
      variant: "secondary",
    },
    {
      title: "Process Automation & Workflow Intelligence",
      description:
        "Automate repetitive operational processes using intelligent automation and AI-driven workflows to improve productivity and reduce operational costs.",
      variant: "primary",
    },
    {
      title: "Data Analytics & Intelligence",
      description:
        "Utilize predictive analytics, reporting tools, and visualization dashboards to gain deeper insights, optimize performance, and support strategic planning..",
      variant: "secondary",
    },
  ],
};

const Information = () => {
  return (
    <>
      <div className="px-8 md:px-14 lg:px-20 py-4 pb-16 bg-[#F8F9FC] -mt-32 pt-34">
        <SectionHeader
          badge="Information Industry"
          heading="Empowering Organizations Through Intelligent Digital Information Platforms"
          subheading={`Transform how your organization manages, processes, and utilizes data with secure, scalable, and intelligent information systems. Our solutions enable enterprises to streamline operations, enhance collaboration, and convert complex data into actionable business intelligence for smarter decision-making.`}
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

export default Information;
