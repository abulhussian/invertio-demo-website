"use client";

import { useState, useEffect, useRef } from "react";
import projects from "@/data/ourwork.json";
import Link from "next/link";

const projectList = Object.values(projects);

export default function ProjectsSection() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef(null);

  const CARD_WIDTH = 360;
  const GAP = 24; // This matches md:gap-6 (6 * 4px)
  const visibleCards = 4;
  const maxIndex = projectList.length - visibleCards;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [maxIndex]);

  const next = () => setIndex((prev) => Math.min(prev + 1, maxIndex));
  const prev = () => setIndex((prev) => Math.max(prev - 1, 0));

  return (
    <section className="bg-[#f5f6f7] py-16 overflow-hidden">
      {/* Everything is wrapped in this 1380px container. 
         This ensures the Header and the Slider start and end at the exact same vertical line.
      */}
      <div className="max-w-[1380px] mx-auto px-6">

        {/* Header Section */}
        <div className="mb-12 text-center">
          <p className="text-gray-900 text-xs md:text-sm font-black uppercase tracking-widest mb-3">
            Our Work
          </p>
          <h2 className="text-2xl md:text-2xl lg:text-3xl font-black text-[#111827] tracking-tight leading-tight">
            Real Projects. Real Innovation. Real Business Impact.
          </h2>
          {/* !text-base ensures it overrides any 8px issues, and mx-auto centers it within the 1380px limit */}
          <p className="text-gray-500 !text-sm md:!text-lg mt-6 max-w-3xl mx-auto leading-relaxed">
            We partner with organizations across industries to design and deliver
            <span className="hidden md:inline"> scalable</span> digital solutions that solve complex challenges.
          </p>
        </div>

        {/* Slider Section */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className={`flex gap-6 ${isMobile ? "overflow-x-auto snap-x snap-mandatory scrollbar-hide" : "transition-transform duration-500 ease-in-out"
                }`}
              style={
                !isMobile
                  ? { transform: `translateX(-${index * (CARD_WIDTH + GAP)}px)` }
                  : {}
              }
            >
              {projectList.map((project, i) => (
                <div
                  key={i}
                  className={`rounded-xl overflow-hidden bg-white shadow-md flex-shrink-0 ${isMobile ? "min-w-[85vw] snap-start" : `w-[360px]`
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
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                      <h3 className="font-bold text-lg">{project.badge}</h3>
                      <p className="text-sm mt-1 opacity-90 line-clamp-2">{project.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Navigation - Positioned at the bottom of the 1380px container */}
          <div className="hidden md:flex justify-end gap-3 mt-8">
            <button
              onClick={prev}
              disabled={index === 0}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center bg-white shadow-sm hover:bg-gray-50 disabled:opacity-30 transition-all"
            >
              ←
            </button>
            <button
              onClick={next}
              disabled={index >= maxIndex}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center bg-white shadow-sm hover:bg-gray-50 disabled:opacity-30 transition-all"
            >
              →
            </button>
          </div>

          {/* Mobile Dots */}
          <div className="flex md:hidden justify-center items-center gap-2 mt-8">
            {projectList.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`transition-all duration-300 rounded-full h-1.5 ${index === i ? "w-8 bg-black" : "w-1.5 bg-gray-300"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}