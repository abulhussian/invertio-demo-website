"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const MegaMenu = ({ columns, setActiveMenu, open }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div
      className={`font-jakarta p-2 absolute left-0 top-full mt-2 bg-white text-black rounded-lg border border-[#EAECF0] min-w-[220px]
      transform-gpu transition-all duration-300 ease-[cubic-bezier(.16,1,.3,1)]
      ${open ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"}`}
    >
      <ul className="flex flex-col gap-1">
        {columns?.links?.map((link, i) => (
          <li key={i} className="relative">
            <Link
              href={link.href}
              onMouseEnter={() => setActiveIndex(i)}
              onClick={() => setActiveMenu(null)}
              className="block py-3 px-6 rounded-lg hover:bg-[#101323] hover:text-white transition-colors duration-300"
            >
              {link.label}
            </Link>

            <Image
              src="/arrows/rightFace.svg"
              width={20}
              height={20}
              alt="right arrow"
              className={`absolute top-1/2 right-2 -translate-y-1/2 transition-transform duration-200
              ${activeIndex === i ? "translate-x-1" : ""}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MegaMenu;