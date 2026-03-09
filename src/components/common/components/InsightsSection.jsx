"use client";
import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";
import Section from "../ui/Section";
import Link from "next/link";
import { useEffect, useState } from "react";

const InsightsSection = () => {
  const [insights, setInsights] = useState([]);

  useEffect(() => {
    fetch("/news-insights/blogs.json")
      .then((res) => res.json())
      .then((data) => setInsights(data))
      .catch((err) => console.error("Error loading blogs:", err));
  }, []);

  return (
    <Section bg={"#F8F9FC"}>
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <SectionHeader
          badge="News & Insights"
          heading="Insights That Shape the Future of Digital Innovation"
          align="center"
          size="md"
        />

        {/* GRID */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
          {insights?.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer bg-white rounded-xl p-1 overflow-hidden border border-gray-200 flex flex-col transition-all duration-300 hover:shadow-2xl shadow-gray-200 hover:-translate-y-1"
            >
              {/* IMAGE */}
              <div className="relative w-full overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="p-4 flex flex-col flex-1 gap-2">

                {/* Meta */}
                <div className="flex flex-wrap gap-2">
                  <Badge data={item.date} />
                  <Badge data={item.category} />
                </div>

                {/* Title */}
                <h3 className="text-[16px] font-semibold font-jakarta text-gray-900 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[12px] text-gray-600 line-clamp-2">
                  {item.description}
                </p>

                {/* Button */}
                <div className="w-full flex justify-end mt-auto">
                  <Link
                    href={`/news-insights/${item.slug}.html`}
                    className="text-[12px] font-jakarta font-semibold text-gray-900 flex items-center gap-2"
                  >
                    Read More
                    <Image
                      className="brightness-0 contrast-200 transition-transform duration-300 group-hover:translate-x-1"
                      src="/arrows/rightFace.svg"
                      alt="arrow"
                      width={20}
                      height={20}
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* VIEW ALL BUTTON */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/news-insights"
            className="px-8 py-3 rounded-full bg-[#0F172A] text-white font-bold hover:bg-[#1E293B] transition shadow-md flex items-center gap-2 cursor-pointer w-fit"
          >
            View All Insights
            <Image
              src="/arrows/rightTopFace.svg"
              alt="arrow"
              width={20}
              height={20}
            />
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default InsightsSection;

function Badge({ data }) {
  return (
    <div className="p-1.5 bg-gray-100 rounded-md text-[10px] text-[#06030e] font-semibold">
      {data}
    </div>
  );
}