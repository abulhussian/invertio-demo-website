"use client"

const ResultsFocusedAI = () => {
      return (
            <section className="bg-white py-20 px-6 lg:px-16 font-sans">
                  <div className="max-w-7xl mx-auto">
                        {/* Header Section */}
                        <div className="mb-16">
                              <h2 className="text-[36px] md:text-[42px] font-bold text-[#001B44] mb-6">
                                    Results-focused AI Consulting Services
                              </h2>
                              <p className="text-[#546272] text-lg max-w-5xl leading-relaxed">
                                    Combining our deep industry knowledge with cutting-edge AI technologies, we offer a comprehensive range of AI consulting services to guide businesses in using the full potential of artificial intelligence.
                              </p>
                        </div>

                        {/* Services Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                              {/* AI Strategy Development */}
                              <div className="border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col">
                                    <h3 className="text-xl font-bold text-[#001B44] mb-4">AI Strategy Development</h3>
                                    <div className="w-full h-[1px] bg-orange-200 mb-6"></div>
                                    <p className="text-gray-500 mb-6 min-h-[50px]">
                                          Help businesses define clear AI goals, roadmap, and strategies aligned with objectives.
                                    </p>
                                    <ul className="space-y-4 flex-grow mb-8">
                                          <li className="flex items-center gap-3 text-gray-700">
                                                <span className="text-orange-400 font-bold">✔</span> Tailored AI adoption roadmap
                                          </li>
                                          <li className="flex items-center gap-3 text-gray-700">
                                                <span className="text-orange-400 font-bold">✔</span> Business-driven AI initiatives
                                          </li>
                                          <li className="flex items-center gap-3 text-gray-700">
                                                <span className="text-orange-400 font-bold">✔</span> Future-ready innovation planning
                                          </li>
                                    </ul>
                              </div>

                              {/* AI Integration */}
                              <div className="border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col">
                                    <h3 className="text-xl font-bold text-[#001B44] mb-4">AI Integration</h3>
                                    <div className="w-full h-[1px] bg-orange-200 mb-6"></div>
                                    <p className="text-gray-500 mb-6 min-h-[50px]">
                                          Seamlessly embeds AI solutions into existing systems for efficiency and scalability.
                                    </p>
                                    <ul className="space-y-4 flex-grow mb-8">
                                          <li className="flex items-center gap-3 text-gray-700">
                                                <span className="text-orange-400 font-bold">✔</span> Smooth AI system deployment
                                          </li>
                                          <li className="flex items-center gap-3 text-gray-700">
                                                <span className="text-orange-400 font-bold">✔</span> Integration with legacy software
                                          </li>
                                          <li className="flex items-center gap-3 text-gray-700">
                                                <span className="text-orange-400 font-bold">✔</span> Process automation and optimization
                                          </li>
                                    </ul>
                              </div>

                              {/* AI Solution Development */}
                              <div className="border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col">
                                    <h3 className="text-xl font-bold text-[#001B44] mb-4">AI Solution Development</h3>
                                    <div className="w-full h-[1px] bg-orange-200 mb-6"></div>
                                    <p className="text-gray-500 mb-6 min-h-[50px]">
                                          Custom AI-powered solutions designed to solve industry-specific business challenges effectively.
                                    </p>
                                    <ul className="space-y-4 flex-grow mb-8">
                                          <li className="flex items-center gap-3 text-gray-700">
                                                <span className="text-orange-400 font-bold">✔</span> End-to-end AI applications
                                          </li>
                                          <li className="flex items-center gap-3 text-gray-700">
                                                <span className="text-orange-400 font-bold">✔</span> Industry-specific AI models
                                          </li>
                                          <li className="flex items-center gap-3 text-gray-700">
                                                <span className="text-orange-400 font-bold">✔</span> Scalable, reliable AI solutions
                                          </li>
                                    </ul>
                                    <a href="#" className="text-[#001B44] font-bold flex items-center gap-2 self-end hover:underline">
                                          Know More <span className="text-lg">→</span>
                                    </a>
                              </div>

                              {/* Generative AI Consulting */}
                              <div className="border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col">
                                    <h3 className="text-xl font-bold text-[#001B44] mb-4">Generative AI Consulting</h3>
                                    <div className="w-full h-[1px] bg-orange-200 mb-6"></div>
                                    <p className="text-gray-500 mb-6 min-h-[50px]">
                                          Guide businesses in leveraging Generative AI for automation, content creation, and productivity.
                                    </p>
                                    <ul className="space-y-4 flex-grow mb-8">
                                          <li className="flex items-center gap-3 text-gray-700">
                                                <span className="text-orange-400 font-bold">✔</span> Use-case identification
                                          </li>
                                          <li className="flex items-center gap-3 text-gray-700">
                                                <span className="text-orange-400 font-bold">✔</span> Generative AI implementation
                                          </li>
                                          <li className="flex items-center gap-3 text-gray-700">
                                                <span className="text-orange-400 font-bold">✔</span> Creative AI-driven solutions
                                          </li>
                                    </ul>
                                    <a href="#" className="text-[#001B44] font-bold flex items-center gap-2 self-end hover:underline">
                                          Know More <span className="text-lg">→</span>
                                    </a>
                              </div>

                        </div>
                  </div>
            </section>
      );
};

export default ResultsFocusedAI;