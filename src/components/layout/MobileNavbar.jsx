"use client";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const MobileNavbar = ({ setMobileOpen, megaMenuData }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (key) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={() => setMobileOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-[80%] max-w-[350px] h-full bg-[#101323] text-white z-50 p-6 overflow-y-auto transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
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
              className="flex justify-between w-full"
            >
              Our Services
              <span>+</span>
            </button>

            {openDropdown === "services" && (
              <div className="ml-4 mt-2 flex flex-col gap-2 text-sm text-gray-300">
                {megaMenuData.services.links.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Solutions */}
          <div>
            <button
              onClick={() => toggleDropdown("solutions")}
              className="flex justify-between w-full"
            >
              Our Solutions
              <span>+</span>
            </button>

            {openDropdown === "solutions" && (
              <div className="ml-4 mt-2 flex flex-col gap-2 text-sm text-gray-300">
                {megaMenuData.solutions.links.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Industries */}
          <div>
            <button
              onClick={() => toggleDropdown("industries")}
              className="flex justify-between w-full"
            >
              Industries
              <span>+</span>
            </button>

            {openDropdown === "industries" && (
              <div className="ml-4 mt-2 flex flex-col gap-2 text-sm text-gray-300">
                {megaMenuData.industries.links.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
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
