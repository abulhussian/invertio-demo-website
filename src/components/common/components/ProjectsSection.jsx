"use client";

import { useState } from "react";
import projects from "@/data/ourwork.json";
import Link from "next/link";
// import Link from "next/link";




const projectList = Object.values(projects);
console.log(projectList)
export default function ProjectsSection() {
  const [index, setIndex] = useState(0);
  const CARD_WIDTH = 360; 
  const visibleCards = 4; 
  const maxIndex = projectList.length - visibleCards;

  const next = () => {
    setIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prev = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="bg-[#f5f6f7] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-gray-500 text-sm mb-2">Our Work</p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Real Projects. Real Innovation. Real Business Impact.
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            We partner with organizations across industries to design and
            deliver scalable digital solutions that solve complex challenges.
          </p>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">

          <div
            className="flex gap-6 transition-transform duration-500"
            style={{
              transform: `translateX(-${index * CARD_WIDTH}px)`
            }}
          >
            {projectList.map((project, i) => (
              <div
                key={i}
                className="min-w-[320px] rounded-xl overflow-hidden bg-white shadow-md"
              >
                <div className="relative h-[560px] bg-gray-200">
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

          {/* Navigation Buttons */}
          <div className="flex justify-end gap-3 mt-6">
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