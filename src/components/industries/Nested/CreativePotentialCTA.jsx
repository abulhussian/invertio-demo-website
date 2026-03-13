"use client";

const CreativePotentialCTA = ({ data }) => {
      if (!data) return null;

      const { title, description, cta, teamCards = [], floatingAvatars = [] } = data;

      return (
            <section className="bg-[#0d1b4c] text-white py-24 px-6 overflow-hidden">
                  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-12">

                        {/* LEFT CONTENT */}
                        <div>
                              <h2 className="text-4xl font-bold mb-6">
                                    {title}
                              </h2>

                              <p className="text-gray-300 max-w-lg mb-8">
                                    {description}
                              </p>

                              <button className="flex items-center gap-4 border border-white rounded-full px-6 py-3 hover:bg-white hover:text-[#0d1b4c] transition">
                                    {cta}
                                    <span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center">
                                          →
                                    </span>
                              </button>
                        </div>

                        {/* RIGHT SIDE TEAM CARDS */}
                        <div className="relative flex flex-col gap-6 items-start">

                              {teamCards.map((member, index) => (
                                    <div
                                          key={index}
                                          className="flex items-center gap-4 bg-[#1a2b6d] px-6 py-4 rounded-2xl shadow-lg"
                                    >
                                          <img
                                                src={member.avatar}
                                                alt={member.name}
                                                className="w-12 h-12 rounded-full object-cover"
                                          />

                                          <div>
                                                <p className="font-semibold">{member.name}</p>
                                                <p className="text-sm text-gray-300">{member.role}</p>
                                          </div>
                                    </div>
                              ))}

                              {/* Floating avatars */}
                              {floatingAvatars.map((avatar, index) => (
                                    <img
                                          key={index}
                                          src={avatar}
                                          className="absolute w-10 h-10 rounded-full border border-white"
                                          style={{
                                                top: `${index * 50}px`,
                                                right: `${index * 60}px`
                                          }}
                                    />
                              ))}

                        </div>

                  </div>
            </section>
      );
};

export default CreativePotentialCTA;