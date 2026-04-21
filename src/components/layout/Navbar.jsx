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
    <header className="navbar-wrapper fixed top-0 left-0 w-full py-3 lg:py-6 z-50 font-jakarta px-3 md:px-6">
      <div className="w-full lg:max-w-[1380px] mx-auto bg-[#101323] px-4 lg:px-6 py-2.5 lg:py-3 rounded-[16px] lg:rounded-[20px] flex justify-between items-center transition-all">

        <Link onClick={() => setActiveMenu(null)} href="/">
          <Image
            src="/logo/image.png"
            alt="Logo"
            width={110}
            height={36}
            className="lg:w-[128px] lg:h-[40px] w-auto h-8"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-0 xl:gap-1">
          <Link
            onClick={() => setActiveMenu(null)}
            href="/"
            className={`text-[13px] xl:text-[14px] font-semibold h-16 px-2.5 xl:px-4 py-2.5 flex items-center transition-colors ${pathname === "/" ? "text-white" : "text-[#717BBC] hover:text-white"}`}
          >
            Home
          </Link>

          <Link
            onClick={() => setActiveMenu(null)}
            href="/about-us"
            className={`text-[13px] xl:text-[14px] font-semibold h-16 px-2.5 xl:px-4 py-2.5 flex items-center transition-colors ${pathname === "/about-us" ? "text-white" : "text-[#717BBC] hover:text-white"}`}
          >
            About Us
          </Link>

          {/* Our Services */}
          <div
            className={`relative text-[13px] xl:text-[14px] font-semibold h-16 px-2.5 xl:px-4 py-2.5 flex items-center gap-1 xl:gap-2 cursor-pointer group ${pathname.startsWith("/services") ? "text-white" : "text-[#717BBC] hover:text-white"}`}
          >
            <Link onClick={() => setActiveMenu(null)} href="/services">Our Services</Link>
            <Image
              src="/navbar/Arrow_Down.svg"
              width={18}
              height={18}
              className={`brightness-75 group-hover:brightness-100 transition-transform duration-300 ${activeMenu === "services" ? "rotate-180" : ""}`}
              alt="down arrow"
              onClick={(e) => {
                e.stopPropagation();
                setActiveMenu((prev) => (prev === "services" ? null : "services"));
              }}
            />
            <MegaMenu columns={megaMenuData.services} setActiveMenu={setActiveMenu} open={activeMenu === "services"} />
          </div>

          {/* Our Solutions */}
          <div
            className={`relative text-[13px] xl:text-[14px] font-semibold h-16 px-2.5 xl:px-4 py-2.5 flex items-center gap-1 xl:gap-2 cursor-pointer group ${pathname.startsWith("/solutions") ? "text-white" : "text-[#717BBC] hover:text-white"}`}
          >
            <Link onClick={() => setActiveMenu(null)} href="/solutions">Our Solutions</Link>
            <Image
              src="/navbar/Arrow_Down.svg"
              width={18}
              height={18}
              className={`brightness-75 group-hover:brightness-100 transition-transform duration-300 ${activeMenu === "solutions" ? "rotate-180" : ""}`}
              alt="down arrow"
              onClick={(e) => {
                e.stopPropagation();
                setActiveMenu((prev) => (prev === "solutions" ? null : "solutions"));
              }}
            />
            <MegaMenu columns={megaMenuData.solutions} setActiveMenu={setActiveMenu} open={activeMenu === "solutions"} />
          </div>

          {/* Industries */}
          <div className={`relative text-[13px] xl:text-[14px] font-semibold h-16 px-2.5 xl:px-4 py-2.5 flex items-center gap-1 xl:gap-2 cursor-pointer group ${pathname.startsWith("/industries") ? "text-white" : "text-[#717BBC] hover:text-white"}`}>
            <Link onClick={() => setActiveMenu(null)} href="/industries">Industries</Link>
            <Image
              src="/navbar/Arrow_Down.svg"
              width={18}
              height={18}
              className={`brightness-75 group-hover:brightness-100 transition-transform duration-300 ${activeMenu === "industries" ? "rotate-180" : ""}`}
              alt="down arrow"
              onClick={(e) => {
                e.stopPropagation();
                setActiveMenu((prev) => (prev === "industries" ? null : "industries"));
              }}
            />
            <MegaMenu columns={megaMenuData.industries} setActiveMenu={setActiveMenu} open={activeMenu === "industries"} />
          </div>

          <Link
            onClick={() => setActiveMenu(null)}
            href="/our-work"
            className={`text-[13px] xl:text-[14px] font-semibold h-16 px-2.5 xl:px-4 py-2.5 flex items-center transition-colors ${pathname === "/our-work" ? "text-white" : "text-[#717BBC] hover:text-white"}`}
          >
            Our Work
          </Link>

          <Link
            onClick={() => setActiveMenu(null)}
            href="/news-insights"
            className={`text-[13px] xl:text-[14px] font-semibold h-16 px-2.5 xl:px-4 py-2.5 flex items-center transition-colors ${pathname.startsWith("/news-insights") ? "text-white" : "text-[#717BBC] hover:text-white"}`}
          >
            Insights
          </Link>

          <Link
            onClick={() => setActiveMenu(null)}
            href="/careers"
            className={`text-[13px] xl:text-[14px] font-semibold h-16 px-2.5 xl:px-4 py-2.5 flex items-center transition-colors ${pathname === "/careers" ? "text-white" : "text-[#717BBC] hover:text-white"}`}
          >
            Careers
          </Link>
        </nav>

        <Link
          href="/contact-us"
          className="bg-white h-10 xl:h-12 font-bold text-[13px] xl:text-[14px] px-4 xl:px-6 py-2 rounded-xl text-[#101323] hidden lg:flex items-center hover:bg-gray-100 transition-colors"
          onClick={() => setActiveMenu(null)}
        >
          Contact Us
        </Link>

        <div className="lg:hidden flex items-center">
          <button onClick={() => setMobileOpen(true)} className="p-1">
            <Image src="/navbar/menu.svg" alt="menu" width={24} height={24} />
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