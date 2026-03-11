"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import MegaMenu from "./MegaMenu";
import MobileNavbar from "./MobileNavbar";
import { usePathname } from "next/navigation";
import { megaMenuData } from "@/data/megaMenuData";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.closest(".navbar-wrapper")) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
  return (
    <header className="navbar-wrapper fixed top-0 left-0 w-full px-4 sm:px-6 md:px-10 lg:px-20 py-4 sm:py-5 md:py-6 z-50 font-jakarta">      <div className="bg-[#101323] py-4 lg:py-0  px-4 sm:px-6 md:px-8 rounded-2xl md:rounded-[20px] flex justify-between items-center">
      <Link onClick={() => setActiveMenu(null)} href="/">
        <Image
          src="/logo/logo.svg"
          alt="Logo"
          width={128}
          height={40}
          priority
        />
      </Link>

      <nav className="hidden lg:flex">
        <Link
          onClick={() => setActiveMenu(null)}
          href="/"
          className={`text-[14px] font-semibold h-20 px-4 py-2.5 flex items-center
  ${pathname === "/" ? "text-white" : "text-[#717BBC] hover:text-white"}`}
        >
          Home
        </Link>

        <Link
          onClick={() => setActiveMenu(null)}
          href="/about-us"
          className={`text-[14px] font-semibold h-20 px-4 py-2.5 flex items-center
  ${pathname === "/about-us" ? "text-white" : "text-[#717BBC] hover:text-white"
            }`}
        >
          About Us
        </Link>
        {/* our servies */}
        <div
          className={`relative text-[14px] font-semibold h-20 px-4 py-2.5 flex items-center gap-2
  ${pathname.startsWith("/services")
              ? "text-white"
              : "text-[#717BBC] hover:text-white"
            }`}
        >
          <Link onClick={() => setActiveMenu(null)} href="/services">
            Our Services
          </Link>

          <Image
            src="/navbar/Arrow_Down.svg"
            width={24}
            height={24}
            className={`group-hover:contrast-200 group-hover:brightness-200 cursor-pointer transition ${activeMenu === "services" && "rotate-180"}`}
            alt="down arrow"
            onClick={() =>
              setActiveMenu((prev) =>
                prev === "services" ? null : "services",
              )
            }
          />
          <MegaMenu
            columns={megaMenuData.services}
            setActiveMenu={setActiveMenu}
            open={activeMenu === "services"}
          />
        </div>

        {/* Our Solutions */}
        <div
          className={`relative text-[14px] font-semibold h-20 px-4 py-2.5 flex items-center gap-2
  ${pathname.startsWith("/solutions")
              ? "text-white"
              : "text-[#717BBC] hover:text-white"
            }`}
        >
          <Link onClick={() => setActiveMenu(null)} href="/solutions">
            Our Solutions
          </Link>

          <Image
            src="/navbar/Arrow_Down.svg"
            width={24}
            height={24}
            className={`group-hover:contrast-200 group-hover:brightness-200 cursor-pointer transition ${activeMenu === "solutions" && "rotate-180"}`}
            alt="down arrow"
            onClick={() =>
              setActiveMenu((prev) => (prev === "solutions" ? null : "solutions"))
            }
          />
          <MegaMenu
            columns={megaMenuData.solutions}
            setActiveMenu={setActiveMenu}
            open={activeMenu === "solutions"}
          />
        </div>

        {/* Industries */}
        <div className={`relative text-[14px] font-semibold h-20 px-4 py-2.5 flex items-center gap-2
  ${pathname.startsWith("/industries")
            ? "text-white"
            : "text-[#717BBC] hover:text-white"
          }`}
        >
          <Link onClick={() => setActiveMenu(null)} href="/industries">
            Industries
          </Link>

          <Image
            src="/navbar/Arrow_Down.svg"
            width={24}
            height={24}
            className={`group-hover:contrast-200 group-hover:brightness-200 cursor-pointer transition ${activeMenu === "industries" && "rotate-180"}`}
            alt="down arrow"
            onClick={() =>
              setActiveMenu((prev) => (prev === "industries" ? null : "industries"))
            }
          />
          <MegaMenu
            columns={megaMenuData.industries}
            setActiveMenu={setActiveMenu}
            open={activeMenu === "industries"}
          />
        </div>



        <Link
          onClick={() => setActiveMenu(null)}
          href="/our-work"
          className={`text-[14px] font-semibold h-20 px-4 py-2.5 flex items-center
  ${pathname === "/our-work" ? "text-white" : "text-[#717BBC] hover:text-white"
            }`}
        >
          Our Work
        </Link>

        <Link
          onClick={() => setActiveMenu(null)}
          href="/news-insights"
          className={`text-[14px] font-semibold h-20 px-4 py-2.5 flex items-center
  ${pathname.startsWith("/news-insights")
              ? "text-white"
              : "text-[#717BBC] hover:text-white"
            }`}



        >
          News & Insights
        </Link>

        <Link
          onClick={() => setActiveMenu(null)}
          href="/careers"
          className={`text-[14px] font-semibold h-20 px-4 py-2.5 flex items-center
  ${pathname === "/careers" ? "text-white" : "text-[#717BBC] hover:text-white"}`}
        >
          Careers
        </Link>
      </nav>

      <Link
        href="/contact-us"
        className="bg-white h-14 font-bold text-[16px] px-6 py-2.5 rounded-xl text-[#101323] hidden lg:flex items-center"
        onClick={() => setActiveMenu(null)}
      >
        Contact Us
      </Link>


      <div className="lg:hidden">
        <button onClick={() => setMobileOpen(true)}>
          <Image src="/navbar/menu.svg" alt="menu" width={28} height={28} />
        </button>
      </div>

      <MobileNavbar
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        megaMenuData={megaMenuData}
      />
    </div>
    </header>
  );
};

export default Navbar;

// const megaMenuData = {
//   services: [
//     {
//       id: "ai-data",
//       label: "AI, Data & Automation",
//       subTabs: [
//         {
//           tabLabel: "Strategy & Development",
//           columns: [
//             {
//               title: "STRATEGY & GOVERNANCE",
//               links: [
//                 { label: "AI Strategy Consulting", href: "/services/ai-strategy" },
//                 { label: "N8n Consulting & Automation Services", href: "/services/n8n-automation" },
//               ],
//             },
//             {
//               title: "CUSTOM AI DEVELOPMENT",
//               links: [
//                 { label: "AI Software Development", href: "/services/ai-software-dev" },
//                 { label: "AI Mobile App Development", href: "/services/ai-mobile-dev" },
//               ],
//             },
//             {
//               title: "ENTERPRISE AI PLATFORMS",
//               links: [
//                 { label: "Salesforce AI Services", href: "/services/salesforce-ai" },
//                 { label: "ServiceNow AI Services", href: "/services/servicenow-ai" },
//               ],
//             },
//           ],
//         },
//         {
//           tabLabel: "Generative AI & Automation",
//           columns: [
//             {
//               title: "GENERATIVE AI SOLUTIONS",
//               links: [
//                 { label: "Generative AI Consulting", href: "/services/gen-ai-consulting" },
//                 { label: "Large Language Model (LLM)", href: "/services/llm" },
//                 { label: "Adaptive AI Development", href: "/services/adaptive-ai" },
//                 { label: "Custom AI Agent Development", href: "/services/ai-agents" },
//               ],
//             },
//             {
//               title: "AI INTEGRATION",
//               links: [
//                 { label: "OpenAI Integration Services", href: "/services/openai-integration" },
//                 { label: "Azure OpenAI Services", href: "/services/azure-openai" },
//                 { label: "Claude AI Integration", href: "/services/claude-ai" },
//               ],
//             },
//             {
//               title: "AUTOMATION SERVICES",
//               links: [
//                 { label: "Cognitive Process Automation", href: "/services/cognitive-automation" },
//                 { label: "Robotic Process Automation", href: "/services/rpa" },
//                 { label: "Workflow Automation", href: "/services/workflow-automation" },
//               ],
//             },
//           ],
//         },
//         {
//           tabLabel: "Data & ML Engineering",
//           columns: [
//             {
//               title: "DATA ENGINEERING",
//               links: [
//                 { label: "Data Engineering Services", href: "/services/data-engineering" },
//                 { label: "Data Warehousing", href: "/services/data-warehousing" },
//                 { label: "Data Pipeline (ETL) Solutions", href: "/services/data-pipelines" },
//                 { label: "Big Data Solutions", href: "/services/big-data" },
//               ],
//             },
//             {
//               title: "MACHINE LEARNING",
//               links: [
//                 { label: "Machine Learning Development", href: "/services/ml-development" },
//                 { label: "MLOps Services", href: "/services/mlops" },
//                 { label: "Deep Learning Services", href: "/services/deep-learning" },
//                 { label: "Computer Vision Services", href: "/services/computer-vision" },
//               ],
//             },
//             {
//               title: "ANALYTICS & BI",
//               links: [
//                 { label: "Data Analytics Services", href: "/services/data-analytics" },
//                 { label: "Predictive Analytics", href: "/services/predictive-analytics" },
//                 { label: "Business Intelligence (BI)", href: "/services/bi-solutions" },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//     {
//       id: "product-engineering",
//       label: "Product Engineering",
//       subTabs: [
//         {
//           tabLabel: "By Service",
//           columns: [
//             {
//               title: "DISCOVERY & DESIGN",
//               links: [
//                 { label: "Product Discovery & Roadmapping", href: "/services/product-discovery" },
//                 { label: "UI/UX Design Services", href: "/services/ui-ux-design" },
//                 { label: "Solution Architecture & Design", href: "/services/architecture-design" },
//                 { label: "Product Engineering Process", href: "/services/engineering-process" },
//               ],
//             },
//             {
//               title: "FULL-CYCLE DEVELOPMENT",
//               links: [
//                 { label: "Software Product Development", href: "/services/software-product-dev" },
//                 { label: "Software Development", href: "/services/software-dev" },
//                 { label: "Custom Software Development", href: "/services/custom-software" },
//                 { label: "AI Product Development", href: "/services/ai-product-dev" },
//                 { label: "MVP Development", href: "/services/mvp-development" },
//                 { label: "Product Lifecycle Governance", href: "/services/product-lifecycle" },
//               ],
//             },
//             {
//               title: "PLATFORM ENGINEERING",
//               links: [
//                 { label: "Web Application Development", href: "/services/web-app-dev" },
//                 { label: "Mobile App Development", href: "/services/mobile-app-dev" },
//                 { label: "Enterprise Application Development", href: "/services/enterprise-app-dev" },
//               ],
//             },

//           ],
//         },
//         {
//           tabLabel: "By Role/ICP",
//           columns: [
//             {
//               title: "FOR STARTUPS",
//               links: [
//                 { label: "MVP Development", href: "/solutions/startups/mvp" },
//                 { label: "Product Discovery", href: "/solutions/startups/discovery" },
//                 { label: "UI/UX Design Services", href: "/solutions/startups/design" },
//               ],
//             },
//             {
//               title: "FOR SCALE-UPS",
//               links: [
//                 { label: "Custom Software Development", href: "/solutions/scaleups/software" },
//                 { label: "Microservices Architecture", href: "/solutions/scaleups/microservices" },
//                 { label: "API Development", href: "/solutions/scaleups/api" },
//               ],
//             },
//             {
//               title: "FOR ENTERPRISES",
//               links: [
//                 { label: "Enterprise Application Development", href: "/solutions/enterprises/app-dev" },
//                 { label: "Software Architecture", href: "/solutions/enterprises/architecture" },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//     {
//       id: "strategic-advisory",
//       label: "Strategic Advisory",
//       subTabs: [
//         {
//           tabLabel: "Advisory Services",
//           columns: [
//             {
//               title: "TECHNOLOGY STRATEGY",
//               links: [
//                 { label: "Technology Strategy & Roadmap", href: "/services/tech-strategy" },
//                 { label: "Solution Architecture Consulting", href: "/services/architecture-consulting" },
//                 { label: "CTO-as-a-Service", href: "/services/cto-service" },
//                 { label: "Product Feasibility Studies", href: "/services/feasibility-studies" },
//               ],
//             },
//             {
//               title: "MODERNIZATION & TRANSFORMATION",
//               links: [
//                 { label: "Digital Transformation", href: "/services/digital-transformation" },
//                 { label: "Legacy Modernization", href: "/services/legacy-modernization" },
//                 { label: "Application Modernization", href: "/services/app-modernization" },
//                 { label: "DevOps Transformation", href: "/services/devops-transformation" },
//               ],
//             },
//             {
//               title: "PROCESS & QA ADVISORY",
//               links: [
//                 { label: "QA Strategy Consulting", href: "/services/qa-strategy" },
//                 { label: "Process Automation Strategy", href: "/services/automation-strategy" },
//                 { label: "Agile Transformation Consulting", href: "/services/agile-consulting" },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//     {
//       id: "cloud-platforms",
//       label: "Cloud & Enterprise Platforms",
//       subTabs: [
//         {
//           tabLabel: "Cloud Engineering",
//           columns: [
//             {
//               title: "CLOUD SERVICES",
//               links: [
//                 { label: "Cloud & DevOps Services", href: "/services/cloud-devops" },
//                 { label: "DevSecOps Services", href: "/services/devsecops" },
//                 { label: "Cloud Migration", href: "/services/cloud-migration" },
//                 { label: "FinOps Services", href: "/services/finops" },
//                 { label: "Containerization & Kubernetes", href: "/services/kubernetes" },
//                 { label: "Cloud Infrastructure Services", href: "/services/cloud-infra" },
//               ],
//             },
//             {
//               title: "SALESFORCE PLATFORM",
//               links: [
//                 { label: "Salesforce Development", href: "/services/salesforce-dev" },
//                 { label: "Salesforce AI Services", href: "/services/salesforce-ai" },
//                 { label: "Salesforce Integration", href: "/services/salesforce-integration" },
//                 { label: "Salesforce Consulting", href: "/services/salesforce-consulting" },
//               ],
//             },
//             {
//               title: "SERVICENOW PLATFORM",
//               links: [
//                 { label: "ServiceNow Development", href: "/services/servicenow-dev" },
//                 { label: "ServiceNow AI Services", href: "/services/servicenow-ai" },
//                 { label: "ServiceNow Integration", href: "/services/servicenow-integration" },
//                 { label: "ServiceNow Consulting", href: "/services/servicenow-consulting" },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//     {
//       id: "cybersecurity-compliance",
//       label: "Cybersecurity & Compliance",
//       subTabs: [
//         {
//           tabLabel: "Security Services",
//           columns: [
//             {
//               title: "AUDITS & TESTING",
//               links: [{ label: "Security Testing", href: "/services/security-testing" }],
//             },
//           ],
//         },
//         {
//           tabLabel: "Compliance Services",
//           columns: [
//             {
//               title: "COMPLIANCE & GOVERNANCE",
//               links: [
//                 { label: "IT Compliance", href: "/services/it-compliance" },
//                 { label: "Risk Audit", href: "/services/risk-audit" },
//                 { label: "Quality Governance", href: "/services/quality-governance" },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//     {
//       id: "dedicated-teams",
//       label: "Dedicated Teams",
//       subTabs: [
//         {
//           tabLabel: "Engagement Models",
//           columns: [
//             {
//               title: "DEDICATED PRODUCT & ENGINEERING TEAMS",
//               links: [
//                 { label: "Staff Augmentation", href: "/services/staff-augmentation" },
//                 { label: "Product Pods", href: "/services/product-pods" },
//                 { label: "Development Centers (ODC)", href: "/services/odc" },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//     {
//       id: "quality-engineering",
//       label: "Quality Engineering",
//       subTabs: [
//         {
//           tabLabel: "Testing Services",
//           columns: [
//             {
//               title: "FUNCTIONAL TESTING",
//               links: [{ label: "Regression Testing", href: "/services/regression-testing" }],
//             },
//             {
//               title: "NON-FUNCTIONAL TESTING",
//               links: [
//                 { label: "Performance Testing", href: "/services/performance-testing" },
//                 { label: "Load & Stress Testing", href: "/services/load-stress-testing" },
//                 { label: "Security Testing", href: "/services/security-testing-qe" },
//                 { label: "Penetration Testing", href: "/services/penetration-testing" },
//               ],
//             },
//             {
//               title: "TEST AUTOMATION",
//               links: [
//                 { label: "Automated Testing Services", href: "/services/automated-testing" },
//                 { label: "CI/CD Integration", href: "/services/ci-cd-integration" },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//   ],

//   solutions: [
//     {
//       id: "startups",
//       label: "For Startups",
//       icon: "Rocket", // Use your Lucide icon name or SVG path
//       subTabs: [
//         {
//           tabLabel: "Startup Solutions",
//           columns: [
//             {
//               title: "STARTUP SOLUTIONS",
//               links: [
//                 { label: "Product Feasibility Studies", href: "/solutions/feasibility" },
//                 { label: "Rapid MVP in 90 Days", href: "/solutions/mvp" },
//                 { label: "Product Strategy & Validation", href: "/solutions/strategy" },
//                 { label: "On-Demand CTO", href: "/solutions/cto" },
//                 { label: "Build Investor-Ready Products", href: "/solutions/investor-ready" },
//                 { label: "Validate Ideas Before Big Spend", href: "/solutions/validate" },
//                 { label: "AI Pilot Program", href: "/solutions/ai-pilot" }
//               ]
//             }
//           ]
//         }
//       ]
//     },
//     {
//       id: "scale-ups",
//       label: "For Scale-ups",
//       icon: "TrendingUp",
//       subTabs: [
//         {
//           tabLabel: "Scale-up Solutions",
//           columns: [
//             {
//               title: "SCALE-UP SOLUTIONS",
//               links: [
//                 { label: "Technology Strategy & Roadmap", href: "/solutions/roadmap" },
//                 { label: "Cloud & DevOps Acceleration", href: "/solutions/devops" },
//                 { label: "Scale Teams Fast", href: "/solutions/scale-teams" },
//                 { label: "Technology Modernization Planning", href: "/solutions/modernization" }
//               ]
//             }
//           ]
//         }
//       ]
//     },
//     {
//       id: "enterprises",
//       label: "For Enterprises",
//       icon: "Building2",
//       subTabs: [
//         {
//           tabLabel: "Enterprise Solutions",
//           columns: [
//             {
//               title: "ENTERPRISE SOLUTIONS",
//               links: [
//                 { label: "Global Compliance Management", href: "/solutions/compliance" },
//                 { label: "Digital Transformation", href: "/solutions/digital-transformation" }
//               ]
//             }
//           ]
//         }
//       ]
//     },
//     {
//       id: "regulated",
//       label: "For Regulated Industries",
//       icon: "Scale",
//       subTabs: [
//         {
//           tabLabel: "Regulatory Solutions",
//           columns: [
//             {
//               title: "REGULATORY SOLUTIONS",
//               links: [
//                 { label: "Compliance Management", href: "/solutions/reg-compliance" },
//                 { label: "Enterprise Security", href: "/solutions/enterprise-security" },
//                 { label: "Transform Without Risk", href: "/solutions/risk-management" }
//               ]
//             }
//           ]
//         }
//       ]
//     },
//     {
//       id: "specialized",
//       label: "Specialized Solutions",
//       icon: "Cpu",
//       subTabs: [
//         {
//           tabLabel: "Specialized Content",
//           columns: [
//             {
//               title: "FOR ISVS (PRODUCT COMPANIES)",
//               links: [
//                 { label: "Product Development Acceleration", href: "/solutions/acceleration" },
//                 { label: "API & Integration Strategy", href: "/solutions/api-strategy" }
//               ]
//             },
//             {
//               title: "FOR DIGITAL AGENCIES",
//               links: [
//                 { label: "White-Label Development", href: "/solutions/white-label" }
//               ]
//             }
//           ]
//         }
//       ]
//     }
//   ],


//   industries: [
//     {
//       id: "technology-media",
//       label: "Technology & Media",
//       icon: "ChipIcon", // Based on the chip/circuit icon
//       columns: [
//         {
//           title: "TECHNOLOGY & MEDIA INDUSTRIES",
//           links: [
//             { label: "Media & Entertainment", href: "/industries/media-entertainment" },
//             { label: "Education & EdTech", href: "/industries/education-edtech" },
//           ],
//         },
//         {
//           title: "AI SOLUTIONS",
//           links: [
//             { label: "AI in Education", href: "/solutions/ai-education" },
//             { label: "AI in Marketing", href: "/solutions/ai-marketing" },
//           ],
//         },
//       ],
//     },
//     {
//       id: "finance-regulated",
//       label: "Finance & Regulated",
//       icon: "BankIcon", // Based on the pillar/bank icon
//       columns: [
//         {
//           title: "FINANCE & REGULATED INDUSTRIES",
//           links: [
//             { label: "FinTech & Financial Services", href: "/industries/fintech" },
//             { label: "Healthcare & MedTech", href: "/industries/healthcare" },
//             { label: "Legal & LegalTech", href: "/industries/legaltech" },
//             { label: "Insurance & InsurTech", href: "/industries/insurtech" },
//           ],
//         },
//         {
//           title: "AI SOLUTIONS",
//           links: [
//             { label: "AI in FinTech", href: "/solutions/ai-fintech" },
//             { label: "AI in Healthcare", href: "/solutions/ai-healthcare" },
//             { label: "AI in Legal", href: "/solutions/ai-legal" },
//           ],
//         },
//       ],
//     },
//     {
//       id: "goods-logistics",
//       label: "Goods & Logistics",
//       icon: "TruckIcon", // Based on the delivery truck icon
//       columns: [
//         {
//           title: "GOODS & LOGISTICS INDUSTRIES",
//           links: [
//             { label: "Manufacturing & Industrial IoT", href: "/industries/manufacturing" },
//             { label: "E-Commerce & Retail", href: "/industries/ecommerce" },
//             { label: "Logistics & Transportation", href: "/industries/logistics" },
//           ],
//         },
//         {
//           title: "AI SOLUTIONS",
//           links: [
//             { label: "AI in Manufacturing", href: "/solutions/ai-manufacturing" },
//             { label: "AI in Logistics", href: "/solutions/ai-logistics" },
//             { label: "AI in Automotive", href: "/solutions/ai-automotive" },
//           ],
//         },
//       ],
//     },
//     {
//       id: "services-utilities",
//       label: "Services & Utilities",
//       icon: "BellIcon", // Based on the service bell icon
//       columns: [
//         {
//           title: "SERVICES & UTILITIES INDUSTRIES",
//           links: [
//             { label: "HR & Recruitment", href: "/industries/hr-recruitment" },
//             { label: "Hospitality & Travel", href: "/industries/hospitality-travel" },
//           ],
//         },
//         {
//           title: "AI SOLUTIONS",
//           links: [
//             { label: "AI in HR & Recruitment", href: "/solutions/ai-hr" },
//             { label: "AI in Hospitality", href: "/solutions/ai-hospitality" },
//           ],
//         },
//       ],
//     },
//   ]
// };
