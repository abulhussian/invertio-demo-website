"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import projects from "@/data/ourwork.json";
import Link from "next/link";

const originalList = Object.values(projects);
// Double the list to handle seamless looping
const projectList = [...originalList, ...originalList];

export default function ProjectsSection() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef(null);

  const CARD_WIDTH = 360;
  const GAP = 24;

  // Mobile: 80% width for a "peek" effect; Desktop: 3.5 cards visible
  const visibleCards = isMobile ? 1 : 3.5;
  const maxIndex = originalList.length;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = useCallback(() => {
    setIndex((prev) => {
      const nextIdx = prev + 1;
      // If we reach the end of the first set, jump back to start after the transition
      if (nextIdx >= maxIndex) {
        return 0;
      }
      return nextIdx;
    });
  }, [maxIndex]);

  const prev = useCallback(() => {
    setIndex((prev) => (prev <= 0 ? maxIndex - 1 : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="bg-[#f5f6f7] py-16 overflow-hidden">
      <div className="max-w-[1380px] mx-auto px-6">

        <div className="mb-12 text-center">
          <p className="text-gray-900 text-xs md:text-sm font-black uppercase tracking-widest mb-3">Our Work</p>
          <h2 className="text-2xl md:text-3xl font-black text-[#111827]">Real Projects. Real Innovation.</h2>
        </div>

        <div className="relative">
          <div className={`${isMobile ? "overflow-x-auto" : "overflow-hidden"}`}>
            <div
              ref={scrollContainerRef}
              className={`flex gap-6 ${isMobile
                ? "snap-x snap-mandatory scrollbar-hide px-[10%]"
                : "transition-transform duration-700 ease-in-out"
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
                  className={`project-card rounded-2xl overflow-hidden bg-white shadow-lg flex-shrink-0 ${isMobile ? "w-[80vw] snap-center" : "w-[360px]"
                    }`}
                >
                  {/* Mobile height increased to 600px for a taller, sleeker look */}
                  <div className="relative h-[600px] md:h-[500px] bg-gray-200">
                    <Link href={project.path}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </Link>
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/100 via-black/40 to-transparent text-white">
                      <h3 className="font-bold text-xl">{project.badge}</h3>
                      <p className="text-sm mt-2 opacity-90 leading-relaxed">{project.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-end gap-3 mt-8">
            <button onClick={prev} className="w-12 h-12 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-black hover:text-white transition-all">←</button>
            <button onClick={next} className="w-12 h-12 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-black hover:text-white transition-all">→</button>
          </div>

          {/* Mobile Dots (Mapped only to original list) */}
          <div className="flex md:hidden justify-center items-center gap-2 mt-8">
            {originalList.map((_, i) => (
              <button
                key={i}
                className={`transition-all duration-300 rounded-full h-1.5 ${(index % maxIndex) === i ? "w-8 bg-black" : "w-1.5 bg-gray-300"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}