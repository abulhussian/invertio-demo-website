

const AIUseCases = () => {
      return (
            <section className="bg-white py-16 px-6 lg:px-16 font-sans">
                  <div className="max-w-7xl mx-auto">
                        {/* Title Section */}
                        <h2 className="text-[36px] md:text-[42px] font-bold text-[#001B44] mb-4">
                              50+ AI Use Cases Evaluated Across Consulting
                        </h2>
                        <p className="text-[#546272] text-lg mb-12 max-w-5xl">
                              Enable organizations to identify, prioritize, and scale AI initiatives that deliver measurable business value across diverse use cases.
                        </p>

                        <h3 className="text-2xl font-bold text-[#001B44] mb-8">By Business Function</h3>

                        {/* Use Case Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                              {/* Leadership & Strategy */}
                              <div className="border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                                    <h4 className="text-xl font-bold text-[#001B44] mb-2">Leadership & Strategy</h4>
                                    <p className="text-gray-500 mb-6">Support informed AI investment decisions.</p>
                                    <ul className="space-y-3">
                                          <li className="flex items-center gap-3 text-gray-700">
                                                <span className="text-orange-400">✔</span> AI roadmap and prioritization
                                          </li>
                                          <li className="flex items-center gap-3 text-gray-700">
                                                <span className="text-orange-400">✔</span> Risk-aware planning
                                          </li>
                                    </ul>
                              </div>

                              {/* IT & Engineering */}
                              <div className="border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                                    <h4 className="text-xl font-bold text-[#001B44] mb-2">IT & Engineering</h4>
                                    <p className="text-gray-500 mb-6">Ensure technical feasibility and integration readiness.</p>
                                    <ul className="space-y-3">
                                          <li className="flex items-center gap-3 text-gray-700">
                                                <span className="text-orange-400">✔</span> Architecture alignment
                                          </li>
                                          <li className="flex items-center gap-3 text-gray-700">
                                                <span className="text-orange-400">✔</span> Platform and data readiness
                                          </li>
                                    </ul>
                              </div>

                              {/* Product & Innovation */}
                              <div className="border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                                    <h4 className="text-xl font-bold text-[#001B44] mb-2">Product & Innovation</h4>
                                    <p className="text-gray-500 mb-6">Embed intelligence into products.</p>
                                    <ul className="space-y-3">
                                          <li className="flex items-center gap-3 text-gray-700">
                                                <span className="text-orange-400">✔</span> AI-powered features
                                          </li>
                                          <li className="flex items-center gap-3 text-gray-700">
                                                <span className="text-orange-400">✔</span> Differentiation opportunities
                                          </li>
                                    </ul>
                              </div>

                              {/* Operations */}
                              <div className="border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                                    <h4 className="text-xl font-bold text-[#001B44] mb-2">Operations</h4>
                                    <p className="text-gray-500 mb-6">Improve efficiency and predictability.</p>
                                    <ul className="space-y-3">
                                          <li className="flex items-center gap-3 text-gray-700">
                                                <span className="text-orange-400">✔</span> Process optimization
                                          </li>
                                          <li className="flex items-center gap-3 text-gray-700">
                                                <span className="text-orange-400">✔</span> Intelligent decision support
                                          </li>
                                    </ul>
                              </div>

                        </div>
                  </div>
            </section>
      );
};

export default AIUseCases;