"use client";

const OurProcess = ({ data }) => {
      if (!data) return null;

      const { title, description, steps } = data;

      return (
            <section className="py-24 bg-white px-6 md:px-12 lg:px-24">
                  <div className="max-w-7xl mx-auto text-center">

                        {/* Title */}
                        <h2 className="text-4xl font-bold text-[#051139] mb-4">
                              {title}
                        </h2>

                        <p className="text-gray-500 max-w-2xl mx-auto mb-16">
                              {description}
                        </p>

                        {/* Steps */}
                        <div className="flex flex-col md:flex-row justify-center items-start gap-10 relative">

                              {steps?.map((step, index) => (
                                    <div key={index} className="relative">

                                          {/* Connector Line */}
                                          {index !== 0 && (
                                                <div className="hidden md:block absolute -left-16 top-3 w-32 border-t border-dashed border-gray-300"></div>
                                          )}

                                          {/* Arrow */}
                                          {index !== 0 && (
                                                <div className="hidden md:block absolute -left-6 top-0 text-yellow-500">
                                                      ▶
                                                </div>
                                          )}

                                          {/* Card */}
                                          <div className="relative bg-white border border-gray-200 rounded-2xl px-8 py-10 w-[230px] shadow-sm">

                                                {/* Yellow Dot */}
                                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-yellow-500 rounded-full"></div>

                                                <h3 className="text-lg font-semibold text-[#051139] mb-3">
                                                      {step.title}
                                                </h3>

                                                <p className="text-gray-500 text-sm">
                                                      {step.description}
                                                </p>

                                          </div>
                                    </div>
                              ))}

                        </div>
                  </div>
            </section>
      );
};

export default OurProcess;