"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Section from "../common/ui/Section";

const TechImpactSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const rings = [
    {
      icons: ["/icons/react.svg", "/icons/github.svg", "/icons/aws.svg"],
      radius: { base: 60, sm: 80, md: 100 },
      speed: 25,
      direction: "normal",
    },
    {
      icons: ["/icons/angular.svg", "/icons/node.svg", "/icons/html.svg", "/icons/css.svg"],
      radius: { base: 100, sm: 140, md: 180 },
      speed: 35,
      direction: "reverse",
    },
    {
      icons: ["/icons/figma.svg", "/icons/azure.svg", "/icons/mongodb.svg", "/icons/gitlab.svg", "/icons/docker.svg", "/icons/js.svg"],
      radius: { base: 140, sm: 200, md: 260 },
      speed: 50,
      direction: "normal",
    },
  ];

  if (!mounted) return null;

  return (
    <Section>
      <div className="max-w-[1380px] mx-auto px-6 md:px-14 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center overflow-hidden">
        
        {/* ORBIT SECTION */}
        <div className="relative flex items-center justify-center min-h-[400px] sm:min-h-[500px] md:min-h-[600px]">
          {/* Main Container */}
          <div className="relative w-full aspect-square flex items-center justify-center">
            
            {/* Center Logo */}
            <div className="relative w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-[#0B1120] rounded-full flex items-center justify-center z-10 shadow-[0_0_50px_rgba(0,0,0,0.3)] border border-white/10">
              <Image
                src="/logo/logo.svg"
                alt="logo"
                width={80}
                height={80}
                className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
              />
            </div>

            {/* Rings & Icons */}
            {rings.map((ring, rIdx) => (
              <div key={rIdx} className="absolute inset-0 flex items-center justify-center">
                
                {/* Visual Ring (Circle) */}
                <div 
                  className="absolute rounded-full border border-gray-200/50"
                  style={{
                    width: `calc(var(--radius-${rIdx}) * 2)`,
                    height: `calc(var(--radius-${rIdx}) * 2)`,
                  }}
                />

                {/* Rotating Icons Container */}
                <div 
                  className="absolute inset-0"
                  style={{
                    animation: `orbit-spin-${rIdx} ${ring.speed}s linear infinite ${ring.direction === "reverse" ? "reverse" : "normal"}`,
                  }}
                >
                  {ring.icons.map((icon, iIdx) => {
                    const angle = (360 / ring.icons.length) * iIdx;
                    return (
                      <div
                        key={iIdx}
                        className="absolute top-1/2 left-1/2"
                        style={{
                          transform: `translate(-50%, -50%) rotate(${angle}deg) translate(var(--radius-${rIdx}))`,
                        }}
                      >
                        <div 
                          className="bg-white p-1.5 sm:p-2.5 md:p-3.5 rounded-full shadow-lg border border-gray-100 transition-transform hover:scale-125 cursor-pointer"
                          style={{
                            transform: `rotate(-${angle}deg)`,
                            animation: `counter-spin-${rIdx} ${ring.speed}s linear infinite ${ring.direction === "reverse" ? "normal" : "reverse"}`,
                          }}
                        >
                          <Image
                            src={icon}
                            alt="tech"
                            width={28}
                            height={28}
                            className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Dynamic Radius variables via CSS */}
          <style jsx>{`
            .relative {
              --radius-0: 60px;
              --radius-1: 100px;
              --radius-2: 145px;
            }
            @media (min-width: 640px) {
              .relative {
                --radius-0: 80px;
                --radius-1: 140px;
                --radius-2: 200px;
              }
            }
            @media (min-width: 768px) {
              .relative {
                --radius-0: 100px;
                --radius-1: 180px;
                --radius-2: 260px;
              }
            }

            @keyframes orbit-spin-0 { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
            @keyframes orbit-spin-1 { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
            @keyframes orbit-spin-2 { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
            
            @keyframes counter-spin-0 { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
            @keyframes counter-spin-1 { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
            @keyframes counter-spin-2 { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          `}</style>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col justify-center text-center lg:text-left space-y-6">
          <div className="space-y-2">
            <p className="text-[12px] font-bold text-blue-600 uppercase tracking-[0.2em]">
              Tech Impact
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight font-jakarta">
              Helping Businesses Grow Through Technology
            </h2>
          </div>

          <div className="space-y-4">
            <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Our solutions have supported organizations across industries and regions in achieving digital success. 
              We don't just build software; we build technology ecosystems that empower growth.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="space-y-1">
                <p className="text-2xl md:text-3xl font-bold text-[#0F172A]">95%</p>
                <p className="text-sm text-slate-500 font-medium">Efficiency Boost</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl md:text-3xl font-bold text-[#0F172A]">24/7</p>
                <p className="text-sm text-slate-500 font-medium">Global Support</p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-xl mx-auto lg:mx-0 pt-2">
              From enterprise modernization to AI-driven innovation, we help businesses adapt to changing markets and build future-ready platforms.
            </p>
          </div>
        </div>

      </div>
    </Section>
  );
};

export default TechImpactSection;