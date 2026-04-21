"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Khaled Alkhoury",
      role: "Program Manager",
      company: "Qatar MOEHE",
      image: "/logo/slack.png",
      content: `We wanted a better way to keep students engaged in daily activities and make rewards more immediate and meaningful. Invertio helped us build a rewards portal where students could earn points through daily tasks and redeem them in real time. The platform made participation more active and much easier to manage at scale.`,
    },
    {
      id: 2,
      name: "Sachin",
      role: "founder of mediwaves",
      company: "AI Pilot – Public Health Initiative",
      image: "/logo/aipolit.png",
      content: `We needed a better way for the government team to monitor Anganwadi children and assign the right tasks based on BMI and health indicators. Invertio helped us build an application that made this process structured and easier to manage. The image-based height measurement feature was especially useful for accurate field data.`,
    },
    {
      id: 3,
      name: "Mohammed Othman Al Maliki",
      role: "general manager",
      company: "BaladiExpress Mart",
      image: "/logo/Baladi.png",
      content: `Invertio helped us build multiple portals across our e-commerce operations based on different workflow needs. As the business grew, managing inventory and operations became complex. Their team simplified these processes and built systems that were much easier for our teams to use.`,
    },
    {
      id: 4,
      name: "Iftikhar Khan",
      role: "Senior Consultant",
      company: "KPMG",
      image: "/logo/disney.png",
      content: `Invertio supported us in building and improving solutions across multiple systems with changing requirements. Their team remained dependable and execution-focused, avoiding unnecessary complexity while delivering practical solutions.`,
    },
    {
      id: 5,
      name: "Mohammed Osama",
      role: "Operations Head",
      company: "360 Taxi",
      image: "/logo/beefree.png",
      content: `Invertio helped us build a structured ride management system when manual dispatch and tracking became difficult. The improvements in tracking, routing, and coordination made the platform much more usable for daily operations.`,
    },
    {
      id: 6,
      name: "Hamdan Al Harbi",
      role: "Project Lead",
      company: "GreenLoop",
      image: "/logo/Greenloop.png",
      content: `A lot of usable industrial material was going to waste due to lack of proper systems. Invertio helped us build a platform where sellers can list surplus materials and buyers can discover and purchase them efficiently, turning a fragmented process into a scalable marketplace.`,
    },
    {
      id: 7,
      name: "Abdullah Aldusaimany",
      role: "Program Coordinator",
      company: "Green Vision",
      image: "/logo/GreenVison.png",
      content: `Plantation activities were happening, but tracking and engagement were manual. Invertio helped us build a platform where users can record activities, track progress, and stay engaged, bringing much-needed structure to the initiative.`,
    },
    {
      id: 8,
      name: "Team Representative",
      role: "Development Lead",
      company: "Bus Booking Platform",
      image: "/logo/bus.png",
      content: `We needed a reliable MERN stack team to accelerate development. Invertio provided developers who quickly adapted and contributed without much ramp-up. The collaboration has been smooth and progress has been steady.`,
    },
    {
      id: 9,
      name: "Shanaf Ahmed",
      role: "Technology Director",
      company: "SingleView",
      image: "/logo/elastic.png",
      content: `We’ve been working with Invertio for quite some time, and the experience has been consistently reliable. Their team has been responsive and supportive, especially for ongoing integrations and long-term support.`,
    },
    {
      id: 10,
      name: "Arshad Ahmed",
      role: "Operations Manager",
      company: "SMSA Express",
      image: "/logo/airbnb.png",
      content: `Our challenge was lack of visibility across operations. Invertio helped improve workflows and tracking step by step, reducing delays and making operations much smoother.`,
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-[#F8F9FC]">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-16 relative">

        {/* 1. SECTION HEADER (Center Aligned as per image) */}
        <div className="mb-6 text-center">
          <SectionHeader
            badge="Client Testimonials"
            heading="Trusted by Businesses That Value Innovation and Results"
            subheading="Our clients partner with us to build reliable, scalable, and impactful digital solutions."
            align="center"
            size="md"
          />
        </div>

        {/* 2. NAVIGATION ARROWS (In-between Header and Slides) */}
        <div className="flex justify-end items-center w-full px-2 mb-8">
          <button className="swiper-button-prev-custom bg-white rounded-full group cursor-pointer transition-transform active:scale-90">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="hover:stroke-black transition-colors"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button className="swiper-button-next-custom group cursor-pointer bg-white rounded-full transition-transform active:scale-90">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="hover:stroke-black transition-colors"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* 3. TESTIMONIAL SLIDES */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{
              el: ".custom-pagination",
              clickable: true,
            }}
            className="!pb-12"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id} className="!h-auto flex">
                <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm h-full flex flex-col w-full">
                  {/* Profile Section */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={48}    // Using fixed width for maximum clarity
                        height={48}   // Matching height
                        className="object-contain p-1" // 'contain' is better for logos to prevent cropping
                      />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-[15px] font-bold text-gray-900">{item.name}</h3>
                      <p className="text-[12px] text-gray-600 font-medium">{item.company}</p>
                      <p className="text-[11px] text-gray-400">{item.role}</p>
                    </div>
                  </div>

                  <div className="w-full h-px bg-gray-100 mb-6" />

                  {/* Content */}
                  <p className="text-[14px] leading-relaxed text-gray-700 flex-grow">
                    {item.content}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination dots if needed at the very bottom */}
          <div className="custom-pagination mt-4 flex justify-center gap-2"></div>
        </div>
      </div>

      <style jsx global>{`
    .custom-pagination .swiper-pagination-bullet {
      width: 8px;
      height: 8px;
      background: #cbd5e1;
      opacity: 0.5;
    }
    .custom-pagination .swiper-pagination-bullet-active {
      width: 20px;
      border-radius: 4px;
      background: #3b82f6;
      opacity: 1;
    }
  `}</style>
    </section>
  );
}