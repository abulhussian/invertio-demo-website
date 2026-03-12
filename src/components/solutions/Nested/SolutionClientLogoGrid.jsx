"use client";

const SolutionClientLogoGrid = ({ data }) => {

      if (!data) return null;

      const { title, highlight, logos } = data;

      return (
            <section className="bg-gray-100 py-16 px-6">
                  <div className="max-w-7xl mx-auto text-center">

                        {/* Heading */}
                        <div className="flex items-center justify-center gap-6 mb-12">
                              <div className="h-px bg-gray-300 flex-1 max-w-xs"></div>

                              <p className="text-gray-600 text-lg">
                                    {title}{" "}
                                    <span className="text-yellow-500 font-semibold">
                                          {highlight}
                                    </span>{" "}
                                    companies
                              </p>

                              <div className="h-px bg-gray-300 flex-1 max-w-xs"></div>
                        </div>

                        {/* Logos */}
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 items-center justify-items-center">
                              {logos?.map((logo, index) => (
                                    <img
                                          key={index}
                                          src={logo.src}
                                          alt={logo.name}
                                          className="h-10 object-contain"
                                    />
                              ))}
                        </div>

                  </div>
            </section>
      );
};

export default SolutionClientLogoGrid;