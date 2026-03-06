import JobCard from "@/components/careers/JobCard";
import Image from "next/image";
import SectionHeader from "@/components/common/ui/SectionHeader";
import TransformationHero from "@/components/services/components/TransformationHero";
import CaseStudy from "@/components/services/components/CaseStudy";
import Link from "next/link";
import JoinCTA from "@/components/careers/JoinCTA";

const Page = () => {

  const caseStudyData = {
    badge: "Diversity & Inclusion",
    heading: "Everyone Belongs at Invertio",
    subheading:
      "We believe diversity drives innovation. Our workplace values different perspectives, backgrounds, and experiences, creating an environment where everyone can contribute and succeed.",
    cards: [
      {
        title: "Driven by Innovation, Powered by People",
        description:
          "We believe great ideas come from diverse perspectives and collaborative environments.",
        variant: "secondary",
      },
      {
        title: "A Workplace Where Innovation Meets Opportunity",
        description:
          "We foster a culture that values creativity, collaboration, and continuous learning.",
        variant: "primary",
      },
      {
        title: "Start Your Career Journey",
        description:
          "We provide internship opportunities for students and fresh graduates.",
        variant: "secondary",
      },
    ],
  };

  const benefitsData = {
    badge: "Employee Benefits",
    heading: "We Support Your Growth and Well-being",
    subheading:
      "We invest in our people by providing benefits that support both professional success and personal well-being.",
    benefits: [
      "Competitive salary packages",
      "Professional development programs",
      "Flexible working arrangements",
      "Health and wellness support",
      "Career growth opportunities",
      "Collaborative team culture",
    ],
    button: {
      text: "Contact Us",
      href: "/contact-us",
    },
  };

  const jobs = [
    {
      slug: "ui-ux-designer",
      date: "Mar 10, 2026",
      title: "UI/UX Designer",
      company: "Invertio",
      logo: "/logo/logo.png",
      skills: ["Figma", "Wireframing", "User Research", "Prototyping"],
      pay: "₹40,000 – ₹90,000 / month",
    },
    {
      slug: "frontend-developer",
      date: "Mar 10, 2026",
      title: "Frontend Developer (React.js)",
      company: "Invertio",
      logo: "/logo/logo.png",
      skills: ["React.js", "JavaScript", "HTML5", "Tailwind CSS"],
      pay: "₹50,000 – ₹1,20,000 / month",
    },
    {
      slug: "backend-developer",
      date: "Mar 10, 2026",
      title: "Backend Developer (Node.js)",
      company: "Invertio",
      logo: "/logo/logo.png",
      skills: ["Node.js", "Express.js", "REST APIs", "MongoDB"],
      pay: "₹60,000 – ₹1,40,000 / month",
    },
    {
      slug: "data-analyst",
      date: "Mar 10, 2026",
      title: "Data Analyst",
      company: "Invertio",
      logo: "/logo/logo.png",
      skills: ["Data Visualization", "SQL", "Power BI", "Python"],
      pay: "₹45,000 – ₹1,10,000 / month",
    },
    {
      slug: "cybersecurity-analyst",
      date: "Mar 10, 2026",
      title: "Cybersecurity Analyst",
      company: "Invertio",
      logo: "/logo/logo.png",
      skills: ["Network Security", "Vulnerability Assessment", "SIEM Tools", "Ethical Hacking"],
      pay: "₹70,000 – ₹1,60,000 / month",
    },
    {
      slug: "cloud-engineer",
      date: "Mar 10, 2026",
      title: "Cloud Engineer (AWS)",
      company: "Invertio",
      logo: "/logo/logo.png",
      skills: ["AWS Cloud", "DevOps", "Docker", "Kubernetes"],
      pay: "₹80,000 – ₹1,80,000 / month",
    },
  ];

  return (
    <>
      <div className="px-8 md:px-14 lg:px-20 py-4 pb-16 bg-[#F8F9FC] -mt-32 pt-34">

        <SectionHeader
          badge="Join Us"
          heading="Build the Future of Technology With Us"
          subheading="Join a team of innovators passionate about building impactful digital solutions."
          size="md"
          headingColor="#0F172A"
          subheadingColor="#475569"
        />

        <h2 className="text-center text-3xl font-extrabold my-6 py-5">
          Open Jobs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobCard key={job.slug} {...job} />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/careers/jobs"
            className="px-8 py-3 rounded-full bg-[#0F172A] text-white font-bold hover:bg-[#1E293B] transition shadow-md flex gap-2"
          >
            View All Jobs
            <Image
              src="/arrows/rightTopFace.svg"
              alt="arrow"
              width={20}
              height={20}
            />
          </Link>
        </div>

        <TransformationHero data={benefitsData} />
        <CaseStudy data={caseStudyData} />

      </div>

      <JoinCTA />
    </>
  );
};

export default Page;