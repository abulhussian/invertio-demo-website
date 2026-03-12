import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TechStack = () => {
      const stacks = [
            {
                  title: "AI & Machine Learning",
                  tags: ["Python", "TensorFlow", "PyTorch", "Scikit-learn"],
            },
            {
                  title: "Generative AI & LLMs",
                  tags: ["OpenAI", "Hugging Face", "LangChain", "Vector Databases"],
            },
            {
                  title: "Data Engineering & Analytics",
                  tags: ["Apache Spark", "Pandas", "NumPy", "Apache Airflow"],
            },
      ];

      return (
            <section className="bg-[#f8faff] py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
                  <div className="max-w-7xl mx-auto">

                        {/* Header Section */}
                        <div className="text-center mb-16">
                              <h2 className="text-[#051139] text-4xl md:text-5xl font-bold mb-6">
                                    Tech Stacks We Use
                              </h2>
                              <p className="text-gray-500 text-lg max-w-4xl mx-auto leading-relaxed">
                                    The cost of software development depends on various factors such as service scope,
                                    sourcing model, technical design pattern, and software complexity.
                              </p>
                        </div>

                        {/* Carousel/Grid Container */}
                        <div className="relative group">

                              {/* Navigation Arrows (Visual only, as per image) */}
                              <button className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg text-gray-400 hover:text-[#051139] transition-all hidden lg:block border border-gray-100">
                                    <ChevronLeft size={24} />
                              </button>

                              <button className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg text-gray-400 hover:text-[#051139] transition-all hidden lg:block border border-gray-100">
                                    <ChevronRight size={24} />
                              </button>

                              {/* Cards Grid */}
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {stacks.map((stack, index) => (
                                          <div
                                                key={index}
                                                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-50 hover:shadow-xl transition-shadow duration-300 min-h-[320px] flex flex-col"
                                          >
                                                <h3 className="text-[#051139] text-xl font-bold mb-8">
                                                      {stack.title}
                                                </h3>

                                                <div className="flex flex-wrap gap-3">
                                                      {stack.tags.map((tag, tagIndex) => (
                                                            <div
                                                                  key={tagIndex}
                                                                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50 transition-colors"
                                                            >
                                                                  {/* Decorative Dot */}
                                                                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                                                                  {tag}
                                                            </div>
                                                      ))}
                                                </div>
                                          </div>
                                    ))}
                              </div>
                        </div>
                  </div>
            </section>
      );
};

export default TechStack;