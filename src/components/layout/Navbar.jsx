"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import MegaMenu from "./MegaMenu";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

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
    <header className="navbar-wrapper px-20 py-6 sticky z-50 top-0 font-jakarta">
      <div className="bg-[#101323] px-6 rounded-[20px] flex justify-between items-center ">
        <Link onClick={() => setActiveMenu(null)} href="/">
          <Image
            src="/navbar/logo.svg"
            alt="Logo"
            width={128}
            height={40}
            priority
          />
        </Link>
        <nav className="flex">
          <Link
            onClick={() => setActiveMenu(null)}
            href="/"
            className="text-[14px] hover:text-white text-[#717BBC] font-medium h-20 px-4 py-2.5 flex items-center justify-between"
          >
            Home
          </Link>
          <Link
            onClick={() => setActiveMenu(null)}
            href="/about-us"
            className="text-[14px] hover:text-white text-[#717BBC] font-medium h-20  px-4 py-2.5 flex items-center justify-between"
          >
            About Us
          </Link>
          <div className="relative text-[14px] group gap-2 hover:text-white text-[#717BBC] font-medium h-20  px-4 py-2.5 flex items-center justify-between">
            <Link onClick={() => setActiveMenu(null)} href="/services">
              Our Services
            </Link>

            <Image
              src="/navbar/Arrow_Down.svg"
              width={24}
              height={24}
              className="group-hover:contrast-200 group-hover:brightness-200 cursor-pointer"
              alt="down arrow"
              onClick={() =>
                setActiveMenu((prev) =>
                  prev === "services" ? null : "services",
                )
              }
            />
            {activeMenu === "services" && (
              <MegaMenu
                columns={megaMenuData.services}
                setActiveMenu={setActiveMenu}
              />
            )}
          </div>
          <div className="relative text-[14px] group gap-2 hover:text-white text-[#717BBC] font-medium h-20  px-4 py-2.5 flex items-center justify-between">
            <Link onClick={() => setActiveMenu(null)} href="/solutions">
              Our Solutions
            </Link>

            <Image
              src="/navbar/Arrow_Down.svg"
              width={24}
              height={24}
              className="group-hover:contrast-200 group-hover:brightness-200 cursor-pointer"
              alt="down arrow"
              onClick={() =>
                setActiveMenu((prev) =>
                  prev === "solutions" ? null : "solutions",
                )
              }
            />
            {activeMenu === "solutions" && (
              <MegaMenu
                columns={megaMenuData.solutions}
                setActiveMenu={setActiveMenu}
              />
            )}
          </div>
          <div className="relative text-[14px] group gap-2 hover:text-white text-[#717BBC] font-medium h-20  px-4 py-2.5 flex items-center justify-between">
            <Link onClick={() => setActiveMenu(null)} href="/industries">
              Industries
            </Link>

            <Image
              src="/navbar/Arrow_Down.svg"
              width={24}
              height={24}
              className="group-hover:contrast-200 group-hover:brightness-200 cursor-pointer"
              alt="down arrow"
              onClick={() =>
                setActiveMenu((prev) =>
                  prev === "industries" ? null : "industries",
                )
              }
            />
            {activeMenu === "industries" && (
              <MegaMenu
                columns={megaMenuData.industries}
                setActiveMenu={setActiveMenu}
              />
            )}
          </div>
          <Link
            onClick={() => setActiveMenu(null)}
            href="/our-work"
            className="text-[14px] hover:text-white text-[#717BBC] font-medium h-20  px-4 py-2.5 flex items-center justify-between"
          >
            Our Work
          </Link>
          <Link
            onClick={() => setActiveMenu(null)}
            href="/news-insights"
            className="text-[14px] hover:text-white text-[#717BBC] font-medium h-20  px-4 py-2.5 flex items-center justify-between"
          >
            News & Insights
          </Link>
          <Link
            onClick={() => setActiveMenu(null)}
            href="/careers"
            className="text-[14px] hover:text-white text-[#717BBC] font-medium h-20  px-4 py-2.5 flex items-center justify-between"
          >
            Careers
          </Link>
        </nav>

        <Link
          href="/contact-us"
          className="bg-white h-14 font-bold text-[16px] px-6 py-2.5 rounded-xl text-[#101323] flex items-center"
          onClick={() => setActiveMenu(null)}
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
};

export default Navbar;

const megaMenuData = {
  services: {
    title: "Our Services",
    links: [
      {
        label: "Digital Transformation",
        href: "/services/digital-transformation",
      },
      {
        label: "Cloud Services",
        href: "/services/cloud-services",
      },
      {
        label: "Software Development",
        href: "/services/software-development",
      },
    ],
  },

  solutions: {
    title: "Our Solutions",
    links: [
      {
        label: "Data & Analytics",
        href: "/solutions/data-analytics",
      },
      {
        label: "Cybersecurity",
        href: "/solutions/cybersecurity",
      },
      {
        label: "IT Consulting",
        href: "/solutions/it-consulting",
      },
    ],
  },

  industries: {
    title: "Industries",
    links: [
      { label: "Education", href: "/industries/education" },
      { label: "Logistics", href: "/industries/logistics" },
      { label: "Retail", href: "/industries/retail" },
      { label: "Finance", href: "/industries/finance" },
      { label: "Healthcare", href: "/industries/healthcare" },
      {
        label: "Information Service",
        href: "/industries/information-service",
      },
    ],
  },
};
