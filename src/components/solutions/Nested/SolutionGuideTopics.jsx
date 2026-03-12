"use client";

import React, { useState, useEffect } from 'react';

const SolutionGuideTopics = () => {
      const [activeSection, setActiveSection] = useState("when-is-the-time");

      const topics = [
            { id: "when-is-the-time", title: "When is the Right Time for Digital Transformation?" },
            { id: "critical-challenges", title: "Critical Challenges Enterprises Face During Digital Transformation and How to Tackle Them" },
            { id: "partnering-experts", title: "How Partnering with Digital Transformation Experts Accelerates ROI" },
      ];

      // Logic to update active state based on scroll position
      useEffect(() => {
            const handleScroll = () => {
                  const scrollPosition = window.scrollY + 200;
                  topics.forEach((topic) => {
                        const element = document.getElementById(topic.id);
                        if (element && element.offsetTop <= scrollPosition) {
                              setActiveSection(topic.id);
                        }
                  });
            };
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      const scrollToSection = (id) => {
            const element = document.getElementById(id);
            if (element) {
                  window.scrollTo({
                        top: element.offsetTop - 100,
                        behavior: 'smooth',
                  });
            }
      };

      return (
            <>
                  <div className="max-w-4xl mx-auto text-center py-16 px-4 font-sans">
                        <h3 className="text-[#051139] text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
                              A Practical Guide to Digital Transformation for Enterprises
                        </h3>

                        <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                              Learn how to initiate digital transformation, the challenges businesses face, and why
                              expert partnerships drive ROI with measurable, sustainable success.
                        </p>
                  </div>
                  <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row gap-12 font-sans">

                        {/* LEFT: Sticky Sidebar Navigation */}
                        <aside className="lg:w-1/4">
                              <div className="sticky top-24">
                                    <h3 className="text-gray-400 uppercase text-xs tracking-widest font-bold mb-6">Guide Topics</h3>
                                    <nav className="flex flex-col border-l border-gray-100">
                                          {topics.map((topic) => (
                                                <button
                                                      key={topic.id}
                                                      onClick={() => scrollToSection(topic.id)}
                                                      className={`text-left py-4 px-6 text-sm transition-all relative ${activeSection === topic.id
                                                            ? 'text-[#051139] font-bold border-l-4 border-amber-500 bg-amber-50/50 -ml-[2px]'
                                                            : 'text-gray-500 hover:text-[#051139]'
                                                            }`}
                                                >
                                                      {topic.title}
                                                </button>
                                          ))}
                                    </nav>
                              </div>
                        </aside>

                        {/* RIGHT: Content Area */}
                        <main className="lg:w-3/4 space-y-24">

                              {/* Section 1 */}
                              <div id="when-is-the-time" className="scroll-mt-24">
                                    <h2 className="text-3xl font-bold text-[#051139] mb-6">When is the Right Time for Digital Transformation?</h2>
                                    <p className="text-gray-600 mb-8">Digital transformation delivers measurable results when the timing aligns with business needs and operational readiness.</p>

                                    <div className="grid md:grid-cols-2 gap-8">
                                          <div className="space-y-4">
                                                <h4 className="font-bold text-amber-600">Persistent Inefficiencies</h4>
                                                <ul className="space-y-3">
                                                      {['Processes that are slow or repetitive', 'Frequent manual errors', 'Tasks that create bottlenecks'].map((item, i) => (
                                                            <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                                                                  <span className="text-amber-500 mt-1">•</span> {item}
                                                            </li>
                                                      ))}
                                                </ul>
                                          </div>
                                          <div className="space-y-4">
                                                <h4 className="font-bold text-amber-600">Rising Customer Expectations</h4>
                                                <ul className="space-y-3">
                                                      {['Growing demand for faster delivery', 'Need for personalized experience', 'Competitive pressures'].map((item, i) => (
                                                            <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                                                                  <span className="text-amber-500 mt-1">•</span> {item}
                                                            </li>
                                                      ))}
                                                </ul>
                                          </div>
                                    </div>
                              </div>

                              {/* Section 2 (Image from Video) */}
                              <div id="critical-challenges" className="scroll-mt-24">
                                    <h2 className="text-3xl font-bold text-[#051139] mb-8">Critical Challenges Enterprises Face</h2>
                                    <div className="rounded-3xl overflow-hidden relative h-[400px] mb-8">
                                          <img
                                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200"
                                                alt="Team Strategy"
                                                className="w-full h-full object-cover"
                                          />
                                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                                <p className="text-white max-w-lg">Enterprises often face hurdles during digital transformation, but knowing them upfront ensures smoother adoption.</p>
                                          </div>
                                    </div>

                                    <div className="space-y-6">
                                          <div className="p-6 bg-gray-50 rounded-2xl">
                                                <h4 className="font-bold text-[#051139] mb-2">Resistance to Change</h4>
                                                <p className="text-sm text-gray-500">Employees are hesitant to adopt new workflows due to fear of job disruption or increased complexity.</p>
                                          </div>
                                    </div>
                              </div>

                              {/* Section 3 (Value Section) */}
                              <div id="partnering-experts" className="scroll-mt-24 bg-[#051139] rounded-[40px] p-12 text-white">
                                    <h2 className="text-3xl font-bold mb-8">How Partnering with Experts Accelerates ROI</h2>
                                    <div className="grid md:grid-cols-2 gap-12">
                                          {[
                                                { t: 'Faster Implementation', d: 'Use of proven frameworks to streamline deployment.' },
                                                { t: 'Tailored Strategies', d: 'Custom solutions aligned with specific business objectives.' },
                                                { t: 'Access to Tech', d: 'Guidance on selecting the most effective modern platforms.' },
                                                { t: 'Risk Mitigation', d: 'Avoid common adoption and integration pitfalls.' }
                                          ].map((item, i) => (
                                                <div key={i}>
                                                      <h4 className="font-bold text-amber-500 mb-2">{item.t}</h4>
                                                      <p className="text-gray-300 text-sm">{item.d}</p>
                                                </div>
                                          ))}
                                    </div>
                              </div>

                        </main>
                  </section>
            </>
      );
};

export default SolutionGuideTopics;