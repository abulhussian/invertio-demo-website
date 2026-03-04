import SectionHeader from "@/components/common/ui/SectionHeader";
import ChallengesSection from "@/components/services/components/ChallengesSection";
import ProjectOutcomeImpact from "@/components/services/components/ProjectOutcomeImpact ";
import ProjectShowcase from "@/components/services/components/ProjectShowcase";
import TransformationHero from "@/components/services/components/TransformationHero";
import SolutionImpactSection from "@/components/services/components/SolutionImpactSection";
import CSection from "@/components/services/components/CSection";
import TechStackSection from "@/components/services/components/TechStackSection";
const projects = {
      "qatar-moehe": {
            badge: "QATAR MOEHE – Education Digital Transformation",

            title: "Empowering National Education Through Unified Digital Innovation",

            description: `Invertio partnered with Qatar’s Ministry of Education and Higher Education (MOEHE) to build a centralized digital ecosystem that modernizes academic operations, streamlines data management, and enhances accessibility across schools, universities, and administrative departments.

The platform connects institutions, educators, and students through scalable cloud technologies, enabling smarter decision-making, improved collaboration, and a future-ready education infrastructure.`,

            about: `The Qatar MOEHE initiative focused on transforming fragmented education systems into a unified, intelligent digital platform. The objective was to simplify administration, improve transparency, and deliver seamless digital experiences for students, teachers, and government stakeholders.

Invertio designed and implemented secure, scalable web and cloud solutions that integrated enrollment systems, academic tracking, analytics dashboards, and communication workflows into a single ecosystem.

From centralized reporting to real-time performance insights, the solution enabled efficient coordination between educational institutions and ministry leadership while ensuring high data reliability and operational efficiency.`,

            image: "/ourwork/qatar.png",

            features: {
                  badge: "Product Features",

                  heading: "Powerful Features Built for Modern Education Ecosystems",

                  subheading:
                        "Our platform combines intelligent automation, centralized data management, and scalable cloud technologies to simplify education operations. Designed for institutions and governing bodies, these features enhance efficiency, collaboration, and digital learning experiences across the entire ecosystem.",

                  benefits: [
                        "Unified Education Management Platform",
                        "Real-Time Analytics & Reporting Dashboards",
                        "Automated Administrative Workflows",
                        "Student Engagement & Rewards System",
                        "Secure Cloud-Based Infrastructure",
                        "Cross-Institution Communication Tools"
                  ],

                  button: {
                        text: "Contact Us",
                        href: "/contact-us"
                  }
            },
            impactSection: {
                  outcome: {
                        title: "Outcome",
                        description: `Invertio successfully delivered a future-ready education ecosystem that supports digital learning, operational excellence, and long-term scalability — helping Qatar advance toward a smarter, technology-driven education landscape.`,
                        image: "/services/outcome-shape.png"
                  },

                  challenge: {
                        title: "Business Challenge",
                        description: `The Ministry faced multiple operational challenges caused by disconnected legacy systems, manual processes, and limited visibility into educational performance data.

Managing nationwide institutions required a scalable solution capable of handling large volumes of users while maintaining accuracy and transparency.`,
                        image: "/services/challenge-shape.png"
                  },

                  impact: {
                        title: "Project Impact",
                        description: `The Qatar MOEHE platform empowered leadership with real-time insights and streamlined collaboration across the education sector.

By replacing manual processes with intelligent automation, the transformation significantly improved operational efficiency while creating a modern digital learning environment.

The initiative established a strong foundation for future innovation, enabling continuous improvement in academic performance, governance, and student engagement.`,
                        image: "/services/impact-shape.png"
                  }
            },
            challengesSection: {
                  badge: "Challenges",

                  heading: "Overcoming Complex Challenges in Education Transformation",

                  description:
                        "Educational institutions faced fragmented systems, manual processes, and limited visibility into performance data. Our approach addressed these challenges by modernizing infrastructure, improving accessibility, and enabling seamless coordination across nationwide education networks.",

                  items: [
                        {
                              title: "Fragmented Legacy Systems Across Institutions",
                              description:
                                    "Multiple disconnected platforms created operational inefficiencies and data silos."
                        },
                        {
                              title: "Manual Administrative Processes",
                              description:
                                    "Paper-based workflows slowed decision-making and increased processing time."
                        },
                        {
                              title: "Limited Visibility into Education Performance Data",
                              description:
                                    "Lack of centralized reporting made strategic planning difficult."
                        },
                        {
                              title: "Scalability Issues for Nationwide Operations",
                              description:
                                    "Existing systems were unable to support growing digital adoption."
                        },
                        {
                              title: "Inconsistent Communication Between Stakeholders",
                              description:
                                    "Coordination between schools, universities, and ministry departments was inefficient."
                        },
                        {
                              title: "Accessibility Challenges for Students and Educators",
                              description:
                                    "Users struggled with outdated systems lacking modern digital experiences."
                        }
                  ]
            },
            showcaseImage: "/ourwork/nottu.png",
            solutionSection: {
                  badge: "Solution & Impact",

                  heading: "Solution & Impact",

                  description:
                        "Invertio implemented a cloud-enabled digital education ecosystem that automated workflows, centralized reporting, and enabled data-driven decision-making.",

                  points: [
                        "60% reduction in administrative processing time",
                        "Improved data accuracy and reporting transparency",
                        "Faster communication between institutions and ministry",
                        "Enhanced accessibility for students and educators",
                        "Scalable infrastructure supporting nationwide adoption"
                  ]
            },
            ctaSection: {
                  badge: "Let's Build Together",

                  heading: "Start Your Digital Transformation Journey Today",

                  description:
                        "Partner with Invertio to modernize your business, unlock innovation, and build scalable digital solutions that drive measurable growth.",

                  button: {
                        text: "Talk To Our Experts",
                        href: "/contact-us"
                  }
            },
            techStack: {
                  heading: "Tech Stack Used",

                  items: [
                        { name: "React.js", icon: "/tech/react.png" },
                        { name: "Tailwind CSS", icon: "/tech/tailwind.png" },
                        { name: "JavaScript", icon: "/tech/javascript.png" },
                        { name: "Node.js", icon: "/tech/nodejs.png" },
                        { name: "AWS Cloud", icon: "/tech/aws.png" },
                        { name: "SQL", icon: "/tech/sql.png" },
                        { name: "Express.js", icon: "/tech/express.png" },
                        { name: "MongoDB", icon: "/tech/mongodb.png" },
                        { name: "CSS3", icon: "/tech/css.png" },
                        { name: "HTML5", icon: "/tech/html.png" }
                  ]
            }
      },

      "ai-pilot": {
            badge: "AI-PILOT – Smart Health Analytics",
            title: "AI-Driven Child Height Measurement & Health Insights",
            description:
                  "An AI-powered child height measurement solution delivering highly accurate analytics and automated health insights using computer vision and smart data modeling.",
            about:
                  "AI-Pilot leverages computer vision and machine learning to measure and track child growth with high precision. The system provides automated health insights and predictive analytics, enabling healthcare professionals and parents to monitor development effectively.",
            image: "/ourwork/aipolit.png",
      },

      "baladi-express-mart": {
            badge: "Baladi Express Mart – Retail Innovation",
            title: "Unified Retail Ecosystem for Seamless Shopping",
            description:
                  "A unified retail ecosystem integrating online, mobile, and in-store experiences with real-time inventory management and intelligent order processing.",
            about:
                  "Baladi Express Mart delivers an integrated retail platform that connects physical stores with digital commerce. Customers enjoy seamless shopping experiences while retailers benefit from automated inventory tracking, real-time analytics, and streamlined order management.",
            image: "/ourwork/baladi.png",
      },

      "single-view": {
            badge: "Single View – Enterprise Intelligence",
            title: "Centralized Enterprise Visibility & Workflow Management",
            description:
                  "An integrated enterprise platform delivering centralized visibility, streamlined workflows, and enhanced operational decision-making for modern organizations.",
            about:
                  "Single View provides organizations with a comprehensive platform that aggregates operational data into a single dashboard. The solution enables leadership teams to monitor performance metrics, automate workflows, and improve decision-making through actionable insights.",
            image: "/ourwork/singleview.png",
      },

      "smsa-express": {
            badge: "SMSA Express – Logistics Transformation",
            title: "Modernizing Global Shipment Tracking & Logistics",
            description:
                  "A logistics transformation initiative enabling real-time shipment tracking, automated workflows, and improved delivery performance across global operations.",
            about:
                  "SMSA Express required a scalable digital platform to optimize logistics operations. The system integrates shipment tracking, operational dashboards, and automated workflows to improve delivery efficiency and provide customers with real-time shipment visibility.",
            image: "/ourwork/smsa.png",
      },

      "kpmg-digital-transformation": {
            badge: "KPMG – Digital Transformation Initiative",
            title: "Enterprise Modernization Through Data & Automation",
            description:
                  "A comprehensive digital advisory and implementation program supporting enterprise modernization through analytics, automation, and scalable technology platforms.",
            about:
                  "The KPMG digital transformation initiative focuses on helping enterprises adopt modern digital infrastructures. Through analytics platforms, automation tools, and scalable architecture, organizations can accelerate innovation and enhance operational efficiency.",
            image: "/ourwork/kpmg.png",
      },

      "studyfox-ai": {
            badge: "StudyFox AI – Intelligent Learning Platform",
            title: "AI-Powered Personalized Education Experience",
            description:
                  "An AI-driven learning assistant designed to personalize education experiences through intelligent recommendations, real-time assessments, and adaptive learning tools.",
            about:
                  "StudyFox AI enhances education through adaptive learning technologies. The platform analyzes student behavior and learning patterns to recommend personalized study paths, helping learners achieve better academic outcomes through data-driven insights.",
            image: "/ourwork/studyfox.png",
      },

      "taxi-dispatch-system": {
            badge: "360 Taxi Dispatch – Smart Mobility Platform",
            title: "Cloud-Based Taxi Dispatch & Fleet Management",
            description:
                  "A cloud-based taxi dispatch platform providing live vehicle tracking, automated booking management, and optimized fleet operations through smart mobility technology.",
            about:
                  "The 360 Taxi Dispatch System enables transportation companies to efficiently manage fleets through live GPS tracking, automated ride assignments, and intelligent route optimization. The platform improves operational efficiency while delivering better rider experiences.",
            image: "/ourwork/taxidispatch.png",
      },
};

export default async function Page({ params }) {
      const { slug } = await params;

      const project = projects[slug];

      if (!project) {
            return <h1 className="p-20 text-3xl">Project not found</h1>;
      }

      return (
            <>
                  <div className="px-8 md:px-14 lg:px-20 py-16 bg-[#F8F9FC]">

                        <SectionHeader
                              badge={project.badge}
                              heading={project.title}
                              subheading={project.description}
                        />

                        {/* About Section */}
                        <div className="bg-[#0B132B] text-white p-10 rounded-xl mt-12">
                              <h2 className="text-2xl font-semibold mb-4">About the Project</h2>
                              <p className="text-gray-300 leading-relaxed">
                                    {project.about}
                              </p>
                        </div>

                        {/* Image */}
                        <div className="mt-12">
                              <img
                                    src={project.image}
                                    alt={project.title}
                                    className="rounded-xl w-full"
                              />
                        </div>

                        <TransformationHero data={project.features} />
                        <ChallengesSection data={project.challengesSection} />
                  </div>
                  <ProjectShowcase
                        image={project.showcaseImage}
                        alt={project.title}
                  />
                  <div className="px-8 md:px-14 lg:px-20 py-16 bg-[#F8F9FC]">
                        <ProjectOutcomeImpact data={project.impactSection} />

                  </div>
                  <SolutionImpactSection data={project.solutionSection} />
                  <CSection data={project.ctaSection} />
                  <TechStackSection data={project.techStack} />

            </>
      );
}