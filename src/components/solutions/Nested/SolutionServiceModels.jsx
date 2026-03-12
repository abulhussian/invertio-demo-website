"use client"

import { Settings, Users, Globe, CheckCircle2 } from 'lucide-react';
const SolutionServiceModels = () => {

      const models = [
            {
                  title: "Staff Augmentation/Team Extension",
                  tagline: "Expand your team. Maintain control",
                  description: "Add engineering capacity without changing how you deliver.",
                  icon: <Settings className="text-[#F7A600]" size={32} />,
                  points: [
                        "Individual engineers or groups (1-3)",
                        "Integrate into your existing team",
                        "You manage priorities, we handle employment"
                  ],
                  billing: "Time & Material, Retainer",
                  bestFor: "Specific skill gaps, capacity crunches",
                  howItWorks: "You interview & select. Scale up/down with 30 days notice.",
                  cta: "Request Profiles"
            },
            {
                  title: "Dedicated Teams/Delivery Pods",
                  tagline: "Cross-Functional Teams That Own Delivery",
                  description: "Dedicated teams accountable for predictable sprint outcomes.",
                  icon: <Users className="text-[#F7A600]" size={32} />,
                  points: [
                        "Dedicated squad (4-10 people)",
                        "Tech Lead + Engineers + QA",
                        "Shared accountability for predictable sprint delivery"
                  ],
                  billing: "Milestone-based, T&M with commitments, or Fixed-Cost",
                  bestFor: "Products needing speed, cross-team coordination",
                  howItWorks: "We own sprint delivery metrics. Weekly demos.",
                  cta: "Get a Pod Proposal"
            },
            {
                  title: "Development Centers",
                  tagline: "Your Dedicated Engineering Excellence Hub",
                  description: "Build your secure, scalable engineering hub, operated by us, owned by you.",
                  icon: <Globe className="text-[#F7A600]" size={32} />,
                  points: [
                        "Long-term, scaled teams (10-100+)",
                        "Your branding, culture, processes",
                        "Full infrastructure, HR, security & compliance"
                  ],
                  billing: "Long-term retainer, BOT (Build-Operate-Transfer)",
                  bestFor: "Enterprises needing sustained large-scale capacity, cost optimization",
                  howItWorks: "Multi-year partnerships. BOT (Build-Operate-Transfer) options.",
                  cta: "Book a Consultation"
            }
      ];

      return (
            <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-24">

                  <div className="max-w-7xl mx-auto text-center px-4 py-12">
                        <h2 className="text-[40px] leading-tight font-bold text-[#001B44] mb-6">
                              Our Hiring Models
                        </h2>
                        <p className="max-w-[1000px] mx-auto text-[18px] leading-relaxed text-[#546272] font-normal">
                              Choose how you want work to move – added hands, owned delivery, or your dedicated engineering hub.
                              Each model is designed to remove friction, speed up progress, and keep accountability clear.
                        </p>
                  </div>
                  <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                              {models.map((item, index) => (
                                    <div
                                          key={index}
                                          className="bg-white border border-gray-200 rounded-[2rem] p-8 md:p-10 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow duration-300"
                                    >
                                          {/* Icon & Title */}
                                          <div className="mb-6">{item.icon}</div>
                                          <h3 className="text-[#051139] text-2xl font-bold mb-4 leading-tight">
                                                {item.title}
                                          </h3>

                                          <div className="space-y-4 mb-8 flex-grow">
                                                <p className="text-gray-600 font-medium">{item.tagline}</p>
                                                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>

                                                <div className="pt-4">
                                                      <p className="font-bold text-[#051139] text-sm mb-4">What it is:</p>
                                                      <ul className="space-y-3">
                                                            {item.points.map((point, i) => (
                                                                  <li key={i} className="flex gap-3 text-sm text-gray-600 leading-snug">
                                                                        <CheckCircle2 className="text-[#F7A600] shrink-0" size={18} />
                                                                        {point}
                                                                  </li>
                                                            ))}
                                                      </ul>
                                                </div>

                                                <div className="space-y-4 pt-4 text-sm">
                                                      <p className="text-gray-500"><span className="font-bold text-[#051139]">Billing:</span> {item.billing}</p>
                                                      <p className="text-gray-500"><span className="font-bold text-[#051139]">Best for:</span> {item.bestFor}</p>
                                                      <div>
                                                            <p className="font-bold text-[#051139] mb-1">How it works:</p>
                                                            <p className="text-gray-500">{item.howItWorks}</p>
                                                      </div>
                                                </div>
                                          </div>

                                          {/* Action Button */}
                                          <div className="pt-6">
                                                <button className="w-full py-4 px-6 border border-[#051139] text-[#051139] rounded-full font-bold hover:bg-[#051139] hover:text-white transition-all duration-300">
                                                      {item.cta}
                                                </button>
                                          </div>
                                    </div>
                              ))}
                        </div>
                  </div>
            </section>
      );
};


export default SolutionServiceModels