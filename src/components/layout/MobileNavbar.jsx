"use client";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const MobileNavbar = ({ mobileOpen, setMobileOpen, megaMenuData }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (key) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  // 🔒 Prevent background scrolling
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-500
  ${mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-[350px]
  bg-[#101323] text-white z-50 p-6 overflow-y-auto
  transform transition-transform duration-500 ease-in-out
  ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <div className="flex justify-end mb-6">
          <button onClick={() => setMobileOpen(false)}>
            <X />
          </button>
        </div>

        <nav className="flex flex-col gap-4 text-[16px]">
          <Link href="/" onClick={() => setMobileOpen(false)}>
            Home
          </Link>

          <Link href="/about-us" onClick={() => setMobileOpen(false)}>
            About Us
          </Link>

          {/* Services */}
          <div>
            <button
              onClick={() => toggleDropdown("services")}
              className="flex justify-between items-center w-full"
            >
              Our Services
              <span
                className={`transition-transform duration-300 ${openDropdown === "services" ? "rotate-45" : ""
                  }`}
              >
                +
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out
    ${openDropdown === "services"
                  ? "max-h-40 opacity-100 mt-2"
                  : "max-h-0 opacity-0"
                }`}
            >
              <div className="ml-4 flex flex-col gap-2 text-sm text-gray-300">
                {megaMenuData.services.links.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <button
              onClick={() => toggleDropdown("solutions")}
              className="flex justify-between items-center w-full"
            >
              Our Solutions
              <span
                className={`transition-transform duration-300 ${openDropdown === "solutions" ? "rotate-45" : ""
                  }`}
              >
                +
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out
    ${openDropdown === "solutions"
                  ? "max-h-40 opacity-100 mt-2"
                  : "max-h-0 opacity-0"
                }`}
            >
              <div className="ml-4 flex flex-col gap-2 text-sm text-gray-300">
                {megaMenuData.solutions.links.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Industries */}
          <div>
            <button
              onClick={() => toggleDropdown("industries")}
              className="flex justify-between items-center w-full"
            >
              Industries
              <span
                className={`transition-transform duration-300 ${openDropdown === "industries" ? "rotate-45" : ""
                  }`}
              >
                +
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out
    ${openDropdown === "industries"
                  ? "max-h-52 opacity-100 mt-2"
                  : "max-h-0 opacity-0"
                }`}
            >
              <div className="ml-4 flex flex-col gap-2 text-sm text-gray-300">
                {megaMenuData.industries.links.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/our-work" onClick={() => setMobileOpen(false)}>
            Our Work
          </Link>

          <Link href="/news-insights" onClick={() => setMobileOpen(false)}>
            News & Insights
          </Link>

          <Link href="/careers" onClick={() => setMobileOpen(false)}>
            Careers
          </Link>

          <Link
            href="/contact-us"
            onClick={() => setMobileOpen(false)}
            className="bg-white text-[#101323] px-4 py-3 rounded-xl font-bold mt-4 text-center"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </>
  );
};

export default MobileNavbar;
