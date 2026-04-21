"use client";
import { X, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const MobileNavbar = ({ mobileOpen, setMobileOpen, megaMenuData }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDropdown = (key) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const renderDropdownSection = (dataArray) => {
    if (!Array.isArray(dataArray)) return null;

    return (
      <div className="mt-2 flex flex-col gap-5 bg-white/5 p-4 sm:p-5 rounded-2xl border border-white/5">
        {dataArray.map((category, catIdx) => (
          <div key={catIdx} className="flex flex-col gap-3">
            <p className="text-[#F7A600] font-black uppercase text-[10px] tracking-[0.2em] opacity-80">
              {category.label}
            </p>

            {/* ✅ Case 1: NEW structure (industries) */}
            {category.columns?.map((col, colIdx) => (
              <div key={colIdx} className="flex flex-col gap-3 border-l border-white/10 ml-1 pl-4">
                {col.title && (
                  <p className="text-[11px] text-gray-400 uppercase font-medium">{col.title}</p>
                )}
                {col.links.map((link, linkIdx) => (
                  <Link
                    key={linkIdx}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-gray-300 hover:text-white text-[15px] py-1 active:opacity-70"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}

            {/* ✅ Case 2: OLD structure (services/solutions) */}
            {category.subTabs?.[0]?.columns?.map((col, colIdx) => (
              <div key={colIdx} className="flex flex-col gap-3 border-l border-white/10 ml-1 pl-4">
                {col.links.map((link, linkIdx) => (
                  <Link
                    key={linkIdx}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-gray-300 hover:text-white text-[15px] py-1 active:opacity-70"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "top-0" : "top-0 sm:top-6"
          }`}
      >
        <div
          className={`fixed inset-0 bg-black/80 z-[60] transition-opacity duration-500 backdrop-blur-md ${mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Full-Width Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-full max-w-md bg-[#0B0E1A] text-white z-[70] shadow-2xl overflow-y-auto flex flex-col transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${mobileOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {/* Header Section */}
          <div className="flex justify-between items-center px-6 py-6 sm:py-8 border-b border-white/5 shrink-0">
            <div className="relative w-28 sm:w-32">
              <Image
                src="/logo/logo.svg"
                width={120}
                height={40}
                alt="Invertio Logo"
                className="w-full h-auto"
              />
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-full transition-all active:scale-90"
            >
              <X size={22} className="text-white" />
            </button>
          </div>

          <nav className="flex flex-col px-6 py-4 gap-1 text-[17px] sm:text-[18px] font-semibold flex-grow">
            <Link href="/" onClick={() => setMobileOpen(false)} className="py-4 border-b border-white/5 hover:text-[#F7A600] transition-colors active:opacity-70">
              Home
            </Link>

            <Link href="/about-us" onClick={() => setMobileOpen(false)} className="py-4 border-b border-white/5 hover:text-[#F7A600] transition-colors active:opacity-70">
              About Us
            </Link>

            {/* Our Services */}
            <div className="border-b border-white/10">
              <div className="flex justify-between items-center w-full py-4 sm:py-5">
                <Link
                  href="/services"
                  onClick={() => setMobileOpen(false)}
                  className={`flex-1 ${openDropdown === "services" ? "text-[#F7A600]" : "text-white"}`}
                >
                  Our Services
                </Link>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown("services");
                  }}
                  className="p-3 -mr-3"
                >
                  <ChevronRight
                    size={20}
                    className={`transition-transform duration-300 ${openDropdown === "services" ? "rotate-90 text-[#F7A600]" : "text-gray-500"
                      }`}
                  />
                </button>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ${openDropdown === "services" ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
              >
                <div className="pb-6">
                  {renderDropdownSection(megaMenuData.services)}
                </div>
              </div>
            </div>

            {/* Our Solutions */}
            <div className="border-b border-white/10">
              <div className="flex justify-between items-center w-full py-4 sm:py-5">
                <Link
                  href="/solutions"
                  onClick={() => setMobileOpen(false)}
                  className={`flex-1 ${openDropdown === "solutions" ? "text-[#F7A600]" : "text-white"}`}
                >
                  Our Solutions
                </Link>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown("solutions");
                  }}
                  className="p-3 -mr-3"
                >
                  <ChevronRight
                    size={20}
                    className={`transition-transform duration-300 ${openDropdown === "solutions" ? "rotate-90 text-[#F7A600]" : "text-gray-500"
                      }`}
                  />
                </button>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ${openDropdown === "solutions" ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
              >
                <div className="pb-6">
                  {renderDropdownSection(megaMenuData.solutions)}
                </div>
              </div>
            </div>

            {/* Industries */}
            <div className="border-b border-white/10">
              <div className="flex justify-between items-center w-full py-4 sm:py-5">
                <Link
                  href="/industries"
                  onClick={() => setMobileOpen(false)}
                  className={`flex-1 ${openDropdown === "industries" ? "text-[#F7A600]" : "text-white"}`}
                >
                  Industries
                </Link>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown("industries");
                  }}
                  className="p-3 -mr-3"
                >
                  <ChevronRight
                    size={20}
                    className={`transition-transform duration-300 ${openDropdown === "industries" ? "rotate-90 text-[#F7A600]" : "text-gray-500"
                      }`}
                  />
                </button>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ${openDropdown === "industries" ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
              >
                <div className="pb-6">
                  {renderDropdownSection(megaMenuData.industries)}
                </div>
              </div>
            </div>

            <Link href="/our-work" onClick={() => setMobileOpen(false)} className="py-5 border-b border-white/5 hover:text-[#F7A600] active:opacity-70">
              Our Work
            </Link>

            <Link href="/news-insights" onClick={() => setMobileOpen(false)} className="py-5 border-b border-white/5 hover:text-[#F7A600] active:opacity-70">
              News & Insights
            </Link>

            <Link href="/careers" onClick={() => setMobileOpen(false)} className="py-5 border-b border-white/5 hover:text-[#F7A600] active:opacity-70">
              Careers
            </Link>

            {/* Contact Button */}
            <div className="mt-8 mb-16 sm:mb-20">
              <Link
                href="/contact-us"
                onClick={() => setMobileOpen(false)}
                className="block w-full bg-[#F7A600] text-black px-4 py-4 sm:py-5 rounded-2xl font-bold text-center text-[17px] sm:text-[18px] shadow-xl hover:bg-[#ffb726] transition-all active:scale-[0.98]"
              >
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;