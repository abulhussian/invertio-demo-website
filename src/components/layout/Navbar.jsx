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
    // <header className="navbar-wrapper fixed top-0 left-0 w-full px-4 sm:px-6 md:px-10 lg:px-20 py-4 sm:py-5 md:py-6 z-50 font-jakarta"> 
    <header className="navbar-wrapper fixed top-0 left-0 w-full py-4 lg:py-6 z-50 font-jakarta">
      <div className="w-full lg:max-w-[1380px] mx-auto bg-[#101323] px-4 lg:px-6 py-3 rounded-[20px] flex justify-between items-center">

        <Link onClick={() => setActiveMenu(null)} href="/">
          <Image
            src="/logo/image.png"
            alt="Logo"
            width={128}
            height={40}
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          <Link
            onClick={() => setActiveMenu(null)}
            href="/"
            className={`text-[14px] font-semibold h-16 px-4 py-2.5 flex items-center
  ${pathname === "/" ? "text-white" : "text-[#717BBC] hover:text-white"}`}
          >
            Home
          </Link>

          <Link
            onClick={() => setActiveMenu(null)}
            href="/about-us"
            className={`text-[14px] font-semibold h-16 px-4 py-2.5 flex items-center
  ${pathname === "/about-us" ? "text-white" : "text-[#717BBC] hover:text-white"
              }`}
          >
            About Us
          </Link>
          {/* our servies */}
          <div
            className={`relative text-[14px] font-semibold h-16 px-4 py-2.5 flex items-center gap-2
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
            className={`relative text-[14px] font-semibold h-16 px-4 py-2.5 flex items-center gap-2
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
          <div className={`relative text-[14px] font-semibold h-16 px-4 py-2.5 flex items-center gap-2
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
            className={`text-[14px] font-semibold h-16 px-4 py-2.5 flex items-center
  ${pathname === "/our-work" ? "text-white" : "text-[#717BBC] hover:text-white"
              }`}
          >
            Our Work
          </Link>

          <Link
            onClick={() => setActiveMenu(null)}
            href="/news-insights"
            className={`text-[14px] font-semibold h-16 px-4 py-2.5 flex items-center
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
            className={`text-[14px] font-semibold h-16 px-4 py-2.5 flex items-center
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

