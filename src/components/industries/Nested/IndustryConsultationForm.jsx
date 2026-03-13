"use client";

const IndustryConsultationForm = ({ data }) => {
      if (!data) return null;

      const { contactLinks = [], trustTitle, stats = [], partners = [], form } = data;

      return (
            <section className="bg-white py-24 px-6">
                  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

                        {/* LEFT SIDE */}
                        <div>

                              {/* Contact Links */}
                              <div className="flex gap-6 mb-8">
                                    {contactLinks.map((item, index) => (
                                          <span key={index} className="text-sm text-[#0f2a44] underline cursor-pointer">
                                                {item.label}
                                          </span>
                                    ))}
                              </div>

                              {/* Trust Title */}
                              <h4 className="font-semibold text-[#0f2a44] mb-8">
                                    {trustTitle}
                              </h4>

                              {/* Stats */}
                              <div className="space-y-6 mb-10">
                                    {stats.map((stat, index) => (
                                          <div key={index}>
                                                <p className="font-semibold text-[#0f2a44]">
                                                      {stat.title}
                                                </p>
                                                <p className="text-gray-600 text-sm">
                                                      {stat.description}
                                                </p>
                                          </div>
                                    ))}
                              </div>

                              {/* Partner Logos */}
                              <div className="flex gap-4">
                                    {partners.map((partner, index) => (
                                          <img
                                                key={index}
                                                src={partner.logo}
                                                alt={partner.name}
                                                className="h-10 object-contain"
                                          />
                                    ))}
                              </div>

                        </div>

                        {/* RIGHT SIDE FORM */}
                        <div>

                              <h2 className="text-3xl font-bold text-[#0f2a44] mb-2">
                                    {form.title}
                              </h2>

                              <p className="text-gray-600 mb-8">
                                    {form.subtitle}
                              </p>

                              <form className="grid grid-cols-2 gap-4">

                                    <input
                                          type="text"
                                          placeholder="Full Name"
                                          className="border p-3 rounded-md col-span-1"
                                    />

                                    <input
                                          type="email"
                                          placeholder="Email Address"
                                          className="border p-3 rounded-md col-span-1"
                                    />

                                    <input
                                          type="text"
                                          placeholder="Phone Number"
                                          className="border p-3 rounded-md col-span-1"
                                    />

                                    <input
                                          type="text"
                                          placeholder="Country"
                                          className="border p-3 rounded-md col-span-1"
                                    />

                                    <select className="border p-3 rounded-md col-span-2">
                                          <option>Select Your Service</option>
                                    </select>

                                    <textarea
                                          placeholder="Project Brief"
                                          className="border p-3 rounded-md col-span-2 h-32"
                                    />

                                    <button
                                          type="submit"
                                          className="bg-orange-500 text-white px-6 py-3 rounded-full col-span-2 w-fit"
                                    >
                                          {form.buttonText}
                                    </button>

                              </form>

                        </div>

                  </div>
            </section>
      );
};

export default IndustryConsultationForm;