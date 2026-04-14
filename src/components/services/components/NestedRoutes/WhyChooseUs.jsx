import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const WhyChooseUs = ({ data }) => {
      if (!data) return null;

      return (
            // Increased responsive vertical padding (py-16 for mobile, py-24 for desktop)
            <section className="py-16 md:py-24 bg-white overflow-hidden">
                  {/* - px-6: Good base padding for mobile 
          - gap-12: Smaller gap for mobile stacking
          - lg:gap-16: Larger gap for side-by-side desktop layout
      */}
                  <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                        {/* Left Content */}
                        <div className="w-full lg:w-1/2">
                              {/* Responsive font size: text-3xl for mobile, text-4xl for desktop */}
                              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight text-center lg:text-left">
                                    {data.title}
                              </h2>

                              <div className="space-y-4 mb-8 text-center lg:text-left">
                                    {data.description.map((para, i) => (
                                          <p key={i} className="text-sm md:text-base text-slate-600 leading-relaxed">
                                                {para}
                                          </p>
                                    ))}
                              </div>

                              {/* - grid-cols-1: Single column on tiny phones
              - sm:grid-cols-2: Two columns from small screens up
          */}
                              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {data.features.map((feature, idx) => (
                                          <li key={idx} className="flex items-center gap-3 text-slate-800 font-semibold text-sm">
                                                <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                                                <span className="leading-tight">{feature}</span>
                                          </li>
                                    ))}
                              </ul>
                        </div>

                        {/* Right Logo Grid */}
                        {/* - w-full: Ensure it takes full width on mobile 
            - p-6: Slightly reduced padding for mobile to save space
        */}
                        <div className="w-full lg:w-1/2 bg-slate-50/50 p-6 md:p-10 rounded-3xl border border-slate-100">
                              {/* - grid-cols-2: 2 logos per row on mobile (looks much cleaner)
              - sm:grid-cols-3: 3 logos on tablets
              - md:grid-cols-4: 4 logos on desktop
          */}
                              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 items-center justify-items-center">
                                    {data.logos.map((logo, idx) => (
                                          <div
                                                key={idx}
                                                className="bg-white p-3 md:p-4 rounded-xl shadow-sm border border-slate-100 w-full flex justify-center hover:shadow-md transition-shadow aspect-video items-center"
                                          >
                                                <img
                                                      src={logo}
                                                      alt="Client Logo"
                                                      className="h-8 md:h-12 w-32 object-contain  transition-all duration-300"
                                                />
                                          </div>
                                    ))}
                              </div>
                        </div>

                  </div>
            </section>
      );
};

export default WhyChooseUs;