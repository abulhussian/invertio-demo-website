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
      <div className="max-w-[1380px] mx-auto">
        {/* HEADER */}
        <SectionHeader
          badge="News & Insights"
          heading="Insights That Shape the Future of Digital Innovation"
          align="center"
          size="md"
        />

        {/* GRID */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {insights?.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer bg-white rounded-2xl p-2 overflow-hidden border border-gray-100 flex flex-col transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-2"
            >
              {/* IMAGE */}
              <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>

              {/* CONTENT */}
              <div className="p-4 flex flex-col flex-1 gap-3">
                {/* Meta */}
                <div className="flex items-center gap-2">
                  <Badge data={item.date} />
                  <Badge data={item.category} />
                </div>

                {/* Title */}
                <h3 className="text-[18px] font-bold font-jakarta text-gray-900 leading-tight group-hover:text-[#0F172A] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[13px] text-gray-500 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>

                {/* Button */}
                <div className="w-full flex justify-between items-center mt-auto pt-4 border-t border-gray-50">
                  <Link
                    href={`/news-insights/${item.slug}.html`}
                    className="text-[13px] font-jakarta font-bold text-gray-900 flex items-center gap-2 group/link"
                  >
                    <span>Read More</span>
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center group-hover/link:bg-[#0F172A] group-hover/link:text-white transition-all duration-300">
                      <Image
                        className="brightness-0 transition-all duration-300 group-hover/link:invert group-hover/link:translate-x-0.5"
                        src="/arrows/rightFace.svg"
                        alt="arrow"
                        width={14}
                        height={14}
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* VIEW ALL BUTTON */}
        <div className="mt-12 md:mt-16 flex justify-center">
          <Link
            href="/news-insights"
            className="px-10 py-4 rounded-full bg-[#0F172A] text-white font-bold hover:bg-[#1E293B] hover:shadow-lg transition-all active:scale-[0.98] flex items-center gap-3 cursor-pointer w-fit"
          >
            <span className="text-[15px]">View All Insights</span>
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
    <div className="px-2.5 py-1 bg-gray-100 rounded-lg text-[11px] text-[#0F172A] font-bold">
      {data}
    </div>
  );
}