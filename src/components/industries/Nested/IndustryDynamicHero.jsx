"use client";

const IndustryDynamicHero = ({ data }) => {
      return (
            <section
                  className="pt-40 pb-28 px-10 text-white bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${data?.backgroundImage})` }}
            >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/70"></div>

                  <div className="relative max-w-7xl mx-auto">

                        {/* Breadcrumb */}
                        <p className="text-sm text-gray-300 mb-6">
                              {data?.breadcrumb}
                        </p>

                        {/* Title */}
                        <h1 className="text-5xl md:text-6xl font-bold text-yellow-500 max-w-4xl leading-tight">
                              {data?.title}
                        </h1>

                        {/* Partner Logos */}
                        <div className="flex flex-wrap gap-6 mt-12">
                              {data?.partners?.map((logo, index) => (
                                    <div
                                          key={index}
                                          className="bg-black/40 border border-gray-700 px-5 py-3 rounded-md"
                                    >
                                          <img
                                                src={logo}
                                                alt="partner"
                                                className="h-8 object-contain"
                                          />
                                    </div>
                              ))}
                        </div>

                  </div>
            </section>
      );
};

export default IndustryDynamicHero;