import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const MegaMenu = ({ columns, setActiveMenu }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className=" font-jakarta p-2 absolute left-0 top-full mt-2  bg-white text-black  rounded-lg border border-[#EAECF0] min-w-59">
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
              className={`
      absolute top-1/2 right-2 -translate-y-1/2
      ${activeIndex === i ? "animate-bounce-x" : ""}
    `}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MegaMenu;
