"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import MegaMenu from "./MegaMenu";
import MobileNavbar from "./MobileNavbar";
import { usePathname } from "next/navigation";

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
              setActiveMenu((prev) =>
                prev === "solutions" ? null : "solutions",
              )
            }
          />
          <MegaMenu
            columns={megaMenuData.solutions}
            setActiveMenu={setActiveMenu}
            open={activeMenu === "solutions"}
          />
        </div>

        <div
          className={`relative text-[14px] font-semibold h-20 px-4 py-2.5 flex items-center gap-2
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
              setActiveMenu((prev) =>
                prev === "industries" ? null : "industries",
              )
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

const megaMenuData = {
  services: [
    {
      id: "ai",
      label: "AI, Data & Automation",
      subTabs: [
        {
          tabLabel: "Strategy & Development",
          columns: [
            {
              title: "STRATEGY & GOVERNANCE",
              links: [
                { label: "AI Strategy Consulting", href: "/services/ai-strategy" },
                { label: "N8n Consulting & Automation Services", href: "/services/n8n" },
              ],
            },
            {
              title: "CUSTOM AI DEVELOPMENT",
              links: [
                { label: "AI Software Development", href: "/services/ai-software" },
                { label: "AI Mobile App Development", href: "/services/ai-mobile" },
              ],
            },
            {
              title: "ENTERPRISE AI PLATFORMS",
              links: [
                { label: "Salesforce AI Services", href: "/services/salesforce-ai" },
                { label: "ServiceNow AI Services", href: "/services/servicenow-ai" },
              ],
            },
          ],
        },
        { tabLabel: "Generative AI & Automation", columns: [] },
        { tabLabel: "Data & ML Engineering", columns: [] },
      ],
    },
    {
      id: "product",
      label: "Product Engineering",
      subTabs: [
        {
          tabLabel: "By Service",
          columns: [
            {
              title: "DISCOVERY & DESIGN",
              links: [
                { label: "Product Discovery & Roadmapping", href: "#" },
                { label: "UI/UX Design Services", href: "#" },
              ],
            },
            {
              title: "FULL-CYCLE DEVELOPMENT",
              links: [
                { label: "Software Product Development", href: "#" },
                { label: "Mobile App Development", href: "#" },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "strategic",
      label: "Strategic Advisory",
      subTabs: [
        {
          tabLabel: "Strategy",
          columns: [
            {
              title: "TECHNOLOGY STRATEGY",
              links: [{ label: "Technology Strategy & Roadmap", href: "#" }],
            },
          ],
        },
      ],
    },
  ],

  solutions: [
    {
      id: "startups",
      label: "For Startups",
      subTabs: [
        {
          tabLabel: "Startup Solutions",
          columns: [
            {
              title: "STARTUP SOLUTIONS",
              links: [
                { label: "Product Feasibility Studies", href: "/solutions/startups/feasibility" },
                { label: "Rapid MVP in 90 Days", href: "/solutions/startups/mvp" },
                { label: "Product Strategy & Validation", href: "/solutions/startups/strategy" },
                { label: "On-Demand CTO", href: "/solutions/startups/cto" },
                { label: "Build Investor-Ready Products", href: "/solutions/startups/investor" },
                { label: "Validate Ideas Before Big Spend", href: "/solutions/startups/validate" },
                { label: "AI Pilot Program", href: "/solutions/startups/ai-pilot" },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "scaleups",
      label: "For Scale-ups",
      subTabs: [
        {
          tabLabel: "Scale-up Solutions",
          columns: [
            {
              title: "SCALE-UP SOLUTIONS",
              links: [
                { label: "Technology Strategy & Roadmap", href: "/solutions/scaleups/roadmap" },
                { label: "Cloud & DevOps Acceleration", href: "/solutions/scaleups/devops" },
                { label: "Scale Teams Fast", href: "/solutions/scaleups/scale" },
                { label: "Technology Modernization Planning", href: "/solutions/scaleups/modernization" },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "enterprises",
      label: "For Enterprises",
      subTabs: [
        {
          tabLabel: "Enterprise Solutions",
          columns: [
            {
              title: "ENTERPRISE SOLUTIONS",
              links: [
                { label: "Global Compliance Management", href: "/solutions/enterprises/compliance" },
                { label: "Digital Transformation", href: "/solutions/enterprises/digital" },
              ],
            },
          ],
        },
      ],
    },
  ],

  industries: [
    {
      id: "all-industries",
      label: "Industries We Serve",
      subTabs: [
        {
          tabLabel: "By Sector",
          columns: [
            {
              title: "CORE INDUSTRIES",
              links: [
                { label: "Education", href: "/industries/education" },
                { label: "Logistics", href: "/industries/logistics" },
                { label: "Retail & E-commerce", href: "/industries/retail-ecommerce" },
              ],
            },
            {
              title: "SPECIALIZED",
              links: [
                { label: "Finance & Banking", href: "/industries/finance-banking" },
                { label: "Healthcare", href: "/industries/healthcare" },
                { label: "Information Services", href: "/industries/information" },
              ],
            },
          ],
        },
      ],
    },
  ],
};
