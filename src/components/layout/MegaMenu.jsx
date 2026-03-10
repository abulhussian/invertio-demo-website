"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const MegaMenu = ({ columns, setActiveMenu, open }) => {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const [activeSubNav, setActiveSubNav] = useState(0);

  if (!open) return null;

  const categories = Array.isArray(columns) ? columns : [];
  const currentCategory = categories[activeTabIdx];

  const displayColumns = currentCategory?.subTabs
    ? currentCategory.subTabs[activeSubNav]?.columns
    : currentCategory?.columns;

  return (
    /* OUTER CONTAINER: Transparent and full width */
    <div
      className={`font-jakarta fixed left-0 right-0 top-[80px] w-full z-[100] 
      pointer-events-none transition-all duration-300 ease-out mt-7
      ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
    >
      {/* INNER CONTAINER: Actual floating white box */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 pointer-events-auto">
        <div className="flex bg-white rounded-2xl border border-gray-200 shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden min-h-[500px]">

          {/* LEFT SIDEBAR */}
          <div className="w-[320px] border-r border-gray-100 py-10 bg-gray-50/50">
            {categories.map((category, i) => (
              <div
                key={i}
                onMouseEnter={() => {
                  setActiveTabIdx(i);
                  setActiveSubNav(0);
                }}
                className={`flex items-center justify-between gap-3 px-8 py-4 cursor-pointer transition-all border-l-4
                ${activeTabIdx === i
                    ? "border-blue-600 text-blue-600 bg-white"
                    : "border-transparent text-gray-500 hover:text-black"
                  }`}
              >
                <span className="text-[15px] font-bold">{category.label}</span>
                {activeTabIdx === i && <ChevronRight size={18} />}
              </div>
            ))}
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex-1 py-12 pl-16 pr-10 bg-white">
            {/* SUB TABS - Orange indicator removed */}
            {currentCategory?.subTabs && (
              <div className="flex gap-12 border-b border-gray-100 mb-10">
                {currentCategory.subTabs.map((sub, idx) => (
                  <button
                    key={idx}
                    onMouseEnter={() => setActiveSubNav(idx)}
                    className={`pb-6 text-[15px] font-bold transition-all relative
                    ${activeSubNav === idx ? "text-blue-600" : "text-gray-400"}`}
                  >
                    {sub.tabLabel}
                  </button>
                ))}
              </div>
            )}

            {/* LINKS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12">
              {displayColumns?.map((col, idx) => (
                <div key={idx} className="flex flex-col gap-6">
                  <h4 className="text-[12px] font-black tracking-widest text-gray-400 uppercase border-l-2 border-blue-900 pl-4">
                    {col.title}
                  </h4>
                  <ul className="flex flex-col gap-4">
                    {col.links.map((link, lIdx) => (
                      <li key={lIdx}>
                        <Link
                          href={link.href}
                          onClick={() => setActiveMenu(null)}
                          className="text-[15px] text-gray-600 hover:text-blue-600 font-medium transition-colors border-blue-500"
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
      </div>
    </div>
  );
};

export default MegaMenu;