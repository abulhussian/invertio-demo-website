"use client";

import { useState } from "react";
import projects from "@/data/ourwork.json";
import Link from "next/link";
import { useEffect } from "react";
// import Link from "next/link";




const projectList = Object.values(projects);
console.log(projectList)
export default function ProjectsSection() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);


  const CARD_WIDTH = 360;
  const visibleCards = 4;
  const maxIndex = projectList.length - visibleCards;
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev >= maxIndex) {
          return 0; // loop back to start
        }
        return prev + 1;
      });
    }, 3000); // ⏱️ change every 3 seconds

    return () => clearInterval(interval);
  }, [maxIndex]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => {
    setIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prev = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="bg-[#f5f6f7] py-10">
      <div className="max-w-[1380px] mx-auto px-6 lg:px-3">

        {/* Header */}
        <div className=" mb-14">
          <p className="text-black text-md font-bold mb-2 text-center">Our Work</p>

          <h2 className="text-lg md:text-4xl font-bold text-gray-900 text-center">
            Real Projects. Real Innovation. Real Business Impact.
          </h2>

          <p className="text-gray-500 text-[8px] lg:text-md mt-4 max-w-4xl text-center  ">
            We partner with organizations across industries to design and
            deliver scalable digital solutions that solve complex challenges.
          </p>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">

          <div
            className={`flex gap-4 md:gap-6 ${isMobile
              ? "overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4"
              : "transition-transform duration-500"
              }`}
            style={
              !isMobile
                ? { transform: `translateX(-${index * CARD_WIDTH}px)` }
                : {}
            }
          >
            {projectList.map((project, i) => (
              <div
                key={i}
                className={`rounded-xl overflow-hidden bg-white shadow-md ${isMobile
                  ? "min-w-[85%] snap-start"
                  : "min-w-[320px]"
                  }`}
              >
                <div className="relative h-[500px] bg-gray-200">
                  <Link href={project.path}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover cursor-pointer"
                    />
                  </Link>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50  text-white">

                    <h3 className="font-semibold text-md">
                      {project.badge}
                    </h3>

                    <p className="text-xs mt-1 line-clamp-3 text-gray-200">
                      {project.title}
                    </p>

                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Mobile Dots */}
          <div className="flex md:hidden justify-center items-center gap-2 mt-6">
            {Array.from({ length: projectList.length - visibleCards + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`transition-all duration-300 rounded-full
      ${index === i
                    ? "w-10 h-1.5 bg-black"
                    : "w-1.5 h-1.5 bg-gray-300"
                  }`}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="hidden md:flex justify-end gap-3 mt-6">
            <button
              onClick={prev}
              disabled={index === 0}
              className="w-10 h-10 rounded-full border flex items-center justify-center bg-white shadow hover:bg-gray-100 disabled:opacity-40"
            >
              ←
            </button>

            <button
              onClick={next}
              disabled={index >= maxIndex}
              className="w-10 h-10 rounded-full border flex items-center justify-center bg-white shadow hover:bg-gray-100 disabled:opacity-40"
            >
              →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}