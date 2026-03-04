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
      title: "E-Learning Platforms",
      description:
        "Create interactive digital learning environments with multimedia content, assessment tools, and performance tracking that support flexible and remote education models..",
      containerClass:
        "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg",
    },
    {
      title: "Virtual Classrooms & Collaboration",
      description:
        "Enable real-time online learning with integrated video conferencing, digital whiteboards, collaboration tools, and seamless communication between students and faculty..",
      containerClass: "bg-gray-200 text-gray-900 shadow-sm",
    },
  ],
  right: {
    title: "School & University Management Systems",
    description:
      "Automate admissions, attendance, grading, scheduling, and student lifecycle management through centralized academic administration platforms.",
    containerClass: "bg-[#0B1120] text-white shadow-xl",
  },
};
const transformationData = {
  badge: "Driving Educational Excellence",
  heading: "Building Scalable, Connected, and Future-Ready Learning Ecosystems",
  subheading:
    "We combine cloud technology, analytics, and user-centric design to help institutions improve operational efficiency and academic outcomes. Our platforms enhance visibility into student performance, reduce administrative workload, and support continuous innovation in education delivery.",
  benefits: [
    "Improved student engagement and learning outcomes",
    "Streamlined academic and administrative workflows",
    "Centralized and secure student data management",
    "Enhanced remote and hybrid learning capabilities",
    "Scalable platforms for growing institutions",
  ],
  button: {
    text: "Contact Us",
    href: "/contact-us",
  },
};
const caseStudyData = {
  badge: "Case Study",
  heading: "Core Education Capabilities Powering Modern Learning",
  subheading:
    "From digital learning platforms to AI-driven academic insights, our education solutions help institutions enhance teaching efficiency, improve student engagement, and build scalable, future-ready learning ecosystems.",
  cards: [
    {
      title: "Smart Learning Platforms",
      description:
        "Develop unified digital learning environments that connect students, educators, and administrators through centralized content delivery, collaboration tools, and performance tracking..",
      variant: "secondary",
    },
    {
      title: "Academic Automation & Intelligent Workflows",
      description:
        "Automate admissions, attendance, grading, scheduling, and administrative workflows using intelligent systems that reduce manual effort and improve institutional productivity.",
      variant: "primary",
    },
    {
      title: "Education Analytics & Student Insights",
      description:
        "Leverage data analytics and real-time dashboards to monitor student progress, predict outcomes, and support data-driven academic planning and decision-making.",
      variant: "secondary",
    },
  ],
};

const Education = () => {
  return (
    <>
      <div className="px-8 md:px-14 lg:px-20 py-4 pb-16 bg-[#F8F9FC] -mt-32 pt-34">
        <SectionHeader
          badge="Education Industry"
          heading="Empowering Modern Learning Through Digital Innovation"
          subheading={`Transform education with intelligent technology platforms designed to enhance teaching, simplify administration, and create engaging learning experiences. Invertio enables schools, universities, and training institutions to deliver scalable, accessible, and future-ready education ecosystems.`}
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

export default Education;
