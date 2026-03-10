

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const MegaMenu = ({ columns, setActiveMenu, open }) => {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const [activeSubNav, setActiveSubNav] = useState(0);

  if (!open) return null;

  const isArrayData = Array.isArray(columns);
  const categories = isArrayData ? columns : [];
  const currentCategory = categories[activeTabIdx];
  const currentSubContent = currentCategory?.subTabs?.[activeSubNav];

  // useEffect(() => {
  //   if (open) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto";
  //   }

  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, [open]);

  return (
    <div
      className={`font-jakarta absolute left-[-300px] top-full mt-4 bg-white text-black rounded-2xl border border-gray-200 w-[1100px] flex overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-[100]
      transform-gpu transition-all duration-300 ease-[cubic-bezier(.16,1,.3,1)]
      ${open
          ? "opacity-100 translate-y-0 visible"
          : "opacity-0 -translate-y-4 invisible"
        }`}
    >
      {/* LEFT SIDEBAR */}
      <div className="w-[320px] border-r border-gray-200 py-6">
        {categories.map((category, i) => (
          <div
            key={i}
            onMouseEnter={() => {
              setActiveTabIdx(i);
              setActiveSubNav(0);
            }}
            className={`flex items-center justify-between gap-3 px-6 py-4 cursor-pointer transition-all border-r-2
            ${activeTabIdx === i
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-600 hover:text-[#F7A600]"
              }`}
          >
            <span className="text-[15px] font-semibold tracking-wide">
              {category.label}
            </span>

            {activeTabIdx === i && (
              <ChevronRight size={16} className="text-blue-600" />
            )}
          </div>
        ))}
      </div>

      {/* RIGHT CONTENT */}
      <div className="flex-1 p-10 bg-white min-h-[450px]">
        {/* SUB TABS */}
        <div className="flex gap-10 border-b border-gray-100 mb-10">
          {currentCategory?.subTabs?.map((sub, idx) => (
            <button
              key={idx}
              onMouseEnter={() => setActiveSubNav(idx)}
              className={`pb-5 text-[14px] font-bold tracking-tight transition-all relative
              ${activeSubNav === idx
                  ? "text-blue-500"
                  : "text-gray-400 hover:text-gray-600"
                }`}
            >
              {sub.tabLabel}

              {activeSubNav === idx && (
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#F7A600] rounded-t-full" />
              )}
            </button>
          ))}
        </div>

        {/* LINKS GRID */}
        <div className="grid grid-cols-3 gap-x-12 gap-y-10">
          {currentSubContent?.columns?.map((col, idx) => (
            <div key={idx} className="flex flex-col gap-5">
              <h4 className="text-[11px] font-black tracking-[0.2em] text-gray-400 uppercase border-l-2 border-blue-900 pl-3">
                {col.title}
              </h4>

              <ul className="flex flex-col gap-3.5">
                {col.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link
                      href={link.href}
                      onClick={() => setActiveMenu(null)}
                      className="text-[14px] text-gray-600 hover:text-black font-medium leading-snug block relative w-fit
                      after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
                      after:bg-[#F7A600] after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;