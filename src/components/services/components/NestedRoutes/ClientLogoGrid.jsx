const ClientLogoGrid = ({ content }) => {
      return (
            <section className="bg-gray-100 py-16 px-6">
                  <div className="max-w-7xl mx-auto text-center">

                        <div className="flex items-center justify-center gap-6 mb-12">
                              <div className="h-px bg-gray-300 flex-1 max-w-xs"></div>

                              <p className="text-gray-600 text-lg">
                                    {content.title}
                              </p>

                              <div className="h-px bg-gray-300 flex-1 max-w-xs"></div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 items-center justify-items-center">
                              {content.logos.map((logo, i) => (
                                    <img
                                          key={i}
                                          src={logo.logo}
                                          alt={logo.name}
                                          className="h-10 object-contain"
                                    />
                              ))}
                        </div>

                  </div>
            </section>
      );
};

export default ClientLogoGrid;