"use client"
const SolutionEmpowerSection = () => {
      return (
            <section className="bg-white py-20 px-6 lg:px-16 font-sans">
                  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

                        {/* Left Column: Content and Checklist */}
                        <div>
                              <h2 className="text-[40px] leading-tight font-bold text-[#001B44] mb-6">
                                    Empowering Organizations with AI Consulting Services
                              </h2>
                              <p className="text-gray-500 font-medium mb-6">
                                    Translate AI ambition into execution-ready initiatives that deliver measurable outcomes.
                              </p>
                              <p className="text-gray-500 mb-10 leading-relaxed">
                                    Align AI strategy with real business processes, technical constraints, and governance
                                    needs to support reliable adoption as systems and scale grow. Our AI consultants and
                                    development experts are committed to providing you with the AI consulting services
                                    tailored to your needs.
                              </p>

                              <ul className="space-y-4">
                                    {[
                                          "Proven AI Consulting Expertise",
                                          "Production-Ready AI Implementations",
                                          "Global Delivery, Aligned Execution",
                                          "Responsible & Secure AI Practices",
                                          "Predictable Delivery Outcomes",
                                          "IP-rights protection",
                                          "Experienced software developers",
                                          "Daily/weekly/monthly reporting"
                                    ].map((item, index) => (
                                          <li key={index} className="flex items-center gap-3 text-[#001B44] font-medium">
                                                <span className="text-orange-400">✔</span>
                                                {item}
                                          </li>
                                    ))}
                              </ul>
                        </div>

                        {/* Right Column: Logos and Awards */}
                        <div className="flex flex-col gap-10">

                              {/* Client Logos Grid */}
                              <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                                    {[...Array(15)].map((_, i) => (
                                          <div key={i} className="aspect-[2/1] bg-white border border-gray-100 shadow-sm rounded-md flex items-center justify-center p-2">
                                                <div className="w-full h-full bg-gray-50 animate-pulse rounded"></div>
                                                {/* Note: Replace divs with actual <img> tags as needed */}
                                          </div>
                                    ))}
                              </div>

                              <div>
                                    <h4 className="text-[#001B44] font-bold mb-6 flex items-center gap-2">
                                          Awards & Certifications <span className="w-8 h-[2px] bg-[#001B44]"></span>
                                    </h4>

                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                          {/* Clutch Card */}
                                          <div className="border border-gray-100 rounded-xl p-4 text-center shadow-sm">
                                                <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">Rate on</p>
                                                <p className="text-xl font-bold mb-1">Clutch <span className="text-sm font-normal">4.8</span></p>
                                                <div className="text-orange-500 text-xs">★★★★★</div>
                                          </div>

                                          {/* CMMI Card */}
                                          <div className="border border-gray-100 rounded-xl p-4 flex items-center justify-center shadow-sm">
                                                <span className="font-black italic text-2xl text-blue-900">CMMI</span>
                                          </div>

                                          {/* Top Developer Card */}
                                          <div className="border border-gray-100 rounded-xl p-4 flex items-center justify-center shadow-sm">
                                                <div className="w-12 h-12 rounded-full border-4 border-blue-900 flex items-center justify-center text-[8px] font-bold text-center">TOP DEV</div>
                                          </div>

                                          {/* Docker Card */}
                                          <div className="border border-gray-100 rounded-xl p-4 flex items-center justify-center shadow-sm">
                                                <div className="text-blue-400 font-bold">docker</div>
                                          </div>

                                          {/* AWS Card */}
                                          <div className="border border-gray-100 rounded-xl p-4 text-center shadow-sm">
                                                <p className="text-xs font-bold">aws <span className="font-normal text-gray-400">partner</span></p>
                                                <p className="text-[10px] text-gray-400">Select Technology Partner</p>
                                          </div>

                                          {/* Microsoft Card */}
                                          <div className="border border-gray-100 rounded-xl p-4 flex items-center justify-center shadow-sm">
                                                <div className="text-blue-700 font-bold border border-blue-700 px-2 py-1 text-xs">Microsoft</div>
                                          </div>
                                    </div>
                              </div>

                        </div>
                  </div>
            </section>
      );
};

export default SolutionEmpowerSection