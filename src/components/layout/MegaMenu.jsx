// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { ChevronRight } from "lucide-react";

// const MegaMenu = ({ columns, setActiveMenu, open }) => {
//   const [activeTabIdx, setActiveTabIdx] = useState(0);
//   const [activeSubNav, setActiveSubNav] = useState(0);

//   if (!open) return null;

//   const categories = Array.isArray(columns) ? columns : [];
//   const currentCategory = categories[activeTabIdx];

//   const displayColumns = currentCategory?.subTabs
//     ? currentCategory.subTabs[activeSubNav]?.columns
//     : currentCategory?.columns;

//   return (
//     /* OUTER CONTAINER: Transparent and full width */
//     // <div
//     //   className={`font-jakarta fixed left-0 right-0 top-[80px] w-full z-[100]
//     //   pointer-events-none transition-all duration-300 ease-out mt-7
//     //   ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
//     // >
//     //   {/* INNER CONTAINER: Actual floating white box */}
//     //   <div className="max-w-[1440px] mx-auto px-6 lg:px-10 pointer-events-auto">
//     //     <div className="flex bg-white rounded-2xl border border-gray-200 shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden min-h-[500px]">

//     //       {/* LEFT SIDEBAR */}
//     //       <div className="w-[320px] border-r border-gray-100 py-10 bg-gray-50/50">
//     //         {categories.map((category, i) => (
//     //           <div
//     //             key={i}
//     //             onMouseEnter={() => {
//     //               setActiveTabIdx(i);
//     //               setActiveSubNav(0);
//     //             }}
//     //             className={`flex items-center justify-between gap-3 px-8 py-4 cursor-pointer transition-all border-l-4
//     //             ${activeTabIdx === i
//     //                 ? "border-blue-600 text-blue-600 bg-white"
//     //                 : "border-transparent text-gray-500 hover:text-black"
//     //               }`}
//     //           >
//     //             <span className="text-[15px] font-bold">{category.label}</span>
//     //             {activeTabIdx === i && <ChevronRight size={18} />}
//     //           </div>
//     //         ))}
//     //       </div>

//     //       {/* RIGHT CONTENT */}
//     //       <div className="flex-1 py-12 pl-16 pr-10 bg-white">
//     //         {/* SUB TABS - Orange indicator removed */}
//     //         {currentCategory?.subTabs && (
//     //           <div className="flex gap-12 border-b border-gray-100 mb-10">
//     //             {currentCategory.subTabs.map((sub, idx) => (
//     //               <button
//     //                 key={idx}
//     //                 onMouseEnter={() => setActiveSubNav(idx)}
//     //                 className={`pb-6 text-[15px] font-bold transition-all relative
//     //                 ${activeSubNav === idx ? "text-blue-600" : "text-gray-400"}`}
//     //               >
//     //                 {sub.tabLabel}
//     //               </button>
//     //             ))}
//     //           </div>
//     //         )}

//     //         {/* LINKS GRID */}
//     //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12">
//     //           {displayColumns?.map((col, idx) => (
//     //             <div key={idx} className="flex flex-col gap-6">
//     //               <h4 className="text-[12px] font-black tracking-widest text-gray-400 uppercase border-l-2 border-blue-900 pl-4">
//     //                 {col.title}
//     //               </h4>
//     //               <ul className="flex flex-col gap-4">
//     //                 {col.links.map((link, lIdx) => (
//     //                   <li key={lIdx}>
//     //                     <Link
//     //                       href={link.href}
//     //                       onClick={() => setActiveMenu(null)}
//     //                       className="text-[15px] text-gray-600 hover:text-blue-600 font-medium transition-colors border-blue-500"
//     //                     >
//     //                       {link.label}
//     //                     </Link>
//     //                   </li>
//     //                 ))}
//     //               </ul>
//     //             </div>
//     //           ))}
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>

//     <div
//       className={`font-jakarta fixed left-0 right-0 top-[72px] lg:top-[88px] w-full z-[100]
//   pointer-events-none transition-all duration-300 ease-out
//   ${open ? "opacity-100 translate-y-0 mt-4" : "opacity-0 -translate-y-4"}`}
//     >
//       {/* SAME WIDTH AS NAVBAR */}
//       <div className="max-w-[1330px] mx-auto px-4 lg:px-6 pointer-events-auto">

//         <div className="mt-3 flex flex-col lg:flex-row bg-white rounded-2xl border border-gray-200 shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden min-h-[400px] max-h-[80vh]">

//           {/* LEFT SIDEBAR */}
//           <div className="w-full lg:w-[300px] border-b lg:border-b-0 lg:border-r border-gray-100 py-6 lg:py-10 bg-gray-50/50 overflow-x-auto lg:overflow-visible">
//             {categories.map((category, i) => (
//               <div
//                 key={i}
//                 onMouseEnter={() => {
//                   setActiveTabIdx(i);
//                   setActiveSubNav(0);
//                 }}
//                 className={`flex items-center justify-between gap-3 px-5 lg:px-8 py-3 lg:py-4 cursor-pointer transition-all border-l-4 whitespace-nowrap
//             ${activeTabIdx === i
//                     ? "border-blue-600 text-blue-600 bg-white"
//                     : "border-transparent text-gray-500 hover:text-black"
//                   }`}
//               >
//                 <span className="text-[14px] lg:text-[15px] font-bold">
//                   {category.label}
//                 </span>
//                 {activeTabIdx === i && <ChevronRight size={18} />}
//               </div>
//             ))}
//           </div>

//           {/* RIGHT CONTENT */}
//           <div className="flex-1 py-6 lg:py-12 px-4 sm:px-6 lg:pl-16 lg:pr-10 bg-white overflow-y-auto">

//             {/* SUB TABS */}
//             {currentCategory?.subTabs && (
//               <div className="flex flex-wrap gap-6 sm:gap-10 border-b border-gray-100 mb-6 lg:mb-10">
//                 {currentCategory.subTabs.map((sub, idx) => (
//                   <button
//                     key={idx}
//                     onMouseEnter={() => setActiveSubNav(idx)}
//                     className={`pb-4 lg:pb-6 text-[14px] lg:text-[15px] font-bold transition-all
//                 ${activeSubNav === idx
//                         ? "text-blue-600"
//                         : "text-gray-400"
//                       }`}
//                   >
//                     {sub.tabLabel}
//                   </button>
//                 ))}
//               </div>
//             )}

//             {/* LINKS GRID */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-8 lg:gap-x-16 gap-y-8 lg:gap-y-12">
//               {displayColumns?.map((col, idx) => (
//                 <div key={idx} className="flex flex-col gap-5">
//                   <h4 className="text-[11px] lg:text-[12px] font-black tracking-widest text-gray-400 uppercase border-l-2 border-blue-900 pl-3">
//                     {col.title}
//                   </h4>

//                   <ul className="flex flex-col gap-3 lg:gap-4">
//                     {col.links.map((link, lIdx) => (
//                       <li key={lIdx}>
//                         <Link
//                           href={link.href}
//                           onClick={() => setActiveMenu(null)}
//                           className="text-[14px] lg:text-[15px] text-gray-600 hover:text-blue-600 font-medium transition-colors"
//                         >
//                           {link.label}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MegaMenu;


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
    <div
      className={`font-jakarta fixed left-0 right-0 top-[72px] lg:top-[88px] w-full z-[100]
      transition-all duration-300 ease-out
      ${open ? "opacity-100 translate-y-0 mt-4" : "opacity-0 -translate-y-4"}`}
    >
      <div className="max-w-[1330px] mx-auto px-4 lg:px-6">
        <div className="mt-3 flex flex-col lg:flex-row bg-white rounded-2xl border border-gray-200 shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden min-h-[400px] max-h-[80vh]">

          {/* LEFT SIDEBAR */}
          <div className="w-full lg:w-[300px] border-b lg:border-b-0 lg:border-r border-gray-200 py-6 lg:py-10 bg-[#f3f4f6] overflow-x-auto lg:overflow-visible">
            <div className="flex flex-col gap-2 px-3">
              {categories.map((category, i) => (
                <div
                  key={category.label}
                  onMouseEnter={() => {
                    setActiveTabIdx(i);
                    setActiveSubNav(0);
                  }}
                  className={`flex items-center justify-between px-4 py-3 cursor-pointer transition-all rounded-lg
        ${activeTabIdx === i
                      ? "bg-[#1f2937] text-white"
                      : "text-black hover:bg-gray-200"
                    }`}
                >
                  <span className="text-[14px] lg:text-[15px] font-medium">
                    {category.label}
                  </span>

                  {activeTabIdx === i && (
                    <ChevronRight size={16} className="text-white" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex-1 py-6 lg:py-12 px-4 sm:px-6 lg:pl-16 lg:pr-10 bg-white overflow-y-auto">

            {/* SUB TABS */}
            <div className="flex flex-wrap gap-6 sm:gap-10 border-b border-gray-200 mb-6 lg:mb-10">
              {currentCategory?.subTabs?.map((sub, idx) => (
                <button
                  key={sub.tabLabel}
                  onMouseEnter={() => setActiveSubNav(idx)}
                  className="relative pb-4 lg:pb-6 text-[14px] lg:text-[15px] font-semibold text-gray-500 transition-all"
                >
                  {/* TEXT */}
                  <span
                    className={`transition-colors duration-200 ${activeSubNav === idx ? "text-blue-600" : "hover:text-black"
                      }`}
                  >
                    {sub.tabLabel}
                  </span>

                  {/* BLUE UNDERLINE */}
                  <span
                    className={`absolute left-0 bottom-0 h-[2px] bg-blue-600 transition-all duration-300 ${activeSubNav === idx ? "w-full" : "w-0"
                      }`}
                  />
                </button>
              ))}
            </div>

            {/* LINKS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-16 gap-y-8 lg:gap-y-12">
              {displayColumns?.map((col, idx) => (
                <div key={col.title || idx} className="flex flex-col gap-5">
                  <h4 className="text-[11px] lg:text-[12px] font-black tracking-widest text-gray-400 uppercase border-l-2 border-blue-900 pl-3">
                    {col.title}
                  </h4>

                  <ul className="flex flex-col gap-3 lg:gap-4">
                    {col.links?.map((link, lIdx) => (
                      <li key={link.label || lIdx}>
                        <Link
                          href={link.href}
                          onClick={() => setActiveMenu(null)}
                          className="text-[14px] lg:text-[15px] text-black hover:text-blue-600 font-medium transition-colors"
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