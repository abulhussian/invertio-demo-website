"use client";

const IndustryHiringModels = ({ data }) => {
      if (!data) return null;

      const { title, description, models = [] } = data;

      return (
            <section className="py-24 bg-white px-6">
                  <div className="max-w-7xl mx-auto">

                        {/* Header */}
                        <div className="text-center mb-16">
                              <h2 className="text-4xl font-bold text-[#0f2a44] mb-4">
                                    {title}
                              </h2>
                              <p className="text-gray-600 max-w-2xl mx-auto">
                                    {description}
                              </p>
                        </div>

                        {/* Cards */}
                        <div className="grid md:grid-cols-3 gap-8">

                              {models.map((model, index) => (
                                    <div
                                          key={index}
                                          className="border rounded-xl p-8 hover:shadow-lg transition"
                                    >

                                          {/* Title */}
                                          <h3 className="text-lg font-semibold text-[#0f2a44] mb-2">
                                                {model.title}
                                          </h3>

                                          <p className="text-sm text-gray-600 mb-4">
                                                {model.tagline}
                                          </p>

                                          <p className="text-gray-600 text-sm mb-6">
                                                {model.description}
                                          </p>

                                          {/* Points */}
                                          <div className="space-y-2 mb-6">
                                                {model.points?.map((point, i) => (
                                                      <div key={i} className="flex gap-2 text-sm text-gray-700">
                                                            <span className="text-orange-500">●</span>
                                                            {point}
                                                      </div>
                                                ))}
                                          </div>

                                          {/* Billing */}
                                          <p className="text-sm mb-2">
                                                <strong>Billing:</strong> {model.billing}
                                          </p>

                                          {/* Best For */}
                                          <p className="text-sm mb-2">
                                                <strong>Best for:</strong> {model.bestFor}
                                          </p>

                                          {/* How it works */}
                                          <p className="text-sm text-gray-600 mb-6">
                                                <strong>How it works:</strong> {model.howItWorks}
                                          </p>

                                          {/* CTA */}
                                          <button className="border border-[#0f2a44] text-[#0f2a44] px-5 py-2 rounded-full hover:bg-[#0f2a44] hover:text-white transition">
                                                {model.cta}
                                          </button>

                                    </div>
                              ))}

                        </div>

                  </div>
            </section>
      );
};

export default IndustryHiringModels;