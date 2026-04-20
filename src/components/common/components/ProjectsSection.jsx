"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import projects from "@/data/ourwork.json";
import Link from "next/link";

const projectList = Object.values(projects);

export default function ProjectsSection() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef(null);

  // Configuration
  const CARD_WIDTH = 360;
  const GAP = 24;
  // On a 1380px wide container, you can fit roughly 3.5 cards. 
  // We calculate maxIndex so the last card perfectly aligns with the right wall.
  const visibleCards = isMobile ? 1 : 3.5;
  const maxIndex = Math.max(0, projectList.length - Math.floor(visibleCards));

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToIndex = useCallback((nextIndex) => {
    if (isMobile && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      // In mobile, we scroll based on the full width of the card + gap
      const itemWidth = container.querySelector('.project-card')?.offsetWidth || 0;
      container.scrollTo({
        left: nextIndex * (itemWidth + GAP),
        behavior: "smooth",
      });
    }
  }, [isMobile]);

  const next = useCallback(() => {
    setIndex((prev) => {
      const nextIdx = prev >= maxIndex ? 0 : prev + 1;
      if (isMobile) scrollToIndex(nextIdx);
      return nextIdx;
    });
  }, [maxIndex, isMobile, scrollToIndex]);

  const prev = useCallback(() => {
    setIndex((prev) => {
      const nextIdx = prev <= 0 ? maxIndex : prev - 1;
      if (isMobile) scrollToIndex(nextIdx);
      return nextIdx;
    });
  }, [maxIndex, isMobile, scrollToIndex]);

  useEffect(() => {
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="bg-[#f5f6f7] py-16 overflow-hidden">
      <div className="max-w-[1380px] mx-auto px-6">

        <div className="mb-12 text-center">
          <p className="text-gray-900 text-xs md:text-sm font-black uppercase tracking-widest mb-3">
            Our Work
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-[#111827]">
            Real Projects. Real Innovation.
          </h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              ref={scrollContainerRef}
              className={`flex gap-6 ${isMobile
                ? "overflow-x-auto snap-x snap-mandatory scrollbar-hide"
                : "transition-transform duration-500 ease-in-out"
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
                  className={`project-card rounded-xl overflow-hidden bg-white shadow-md flex-shrink-0 ${isMobile ? "min-w-[85vw] snap-center" : "w-[360px]"
                    }`}
                >
                  <div className="relative h-[500px] bg-gray-200">
                    <Link href={project.path}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </Link>
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent text-white">
                      <h3 className="font-bold text-lg">{project.badge}</h3>
                      <p className="text-sm mt-1 opacity-90 line-clamp-2">{project.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-end gap-3 mt-8">
            <button onClick={prev} className="w-12 h-12 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-black hover:text-white transition-all">
              ←
            </button>
            <button onClick={next} className="w-12 h-12 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-black hover:text-white transition-all">
              →
            </button>
          </div>

          {/* Mobile Dots */}
          <div className="flex md:hidden justify-center items-center gap-2 mt-8">
            {projectList.map((_, i) => (
              <button
                key={i}
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