import React from "react";
import { CheckCircle2, Users, UserPlus, Globe } from "lucide-react";

const iconMap = {
      Users: <UserPlus className="w-6 h-6 text-blue-600" />,
      UserGroup: <Users className="w-6 h-6 text-blue-600" />,
      Globe: <Globe className="w-6 h-6 text-blue-600" />,
};

const HiringModels = ({ data }) => {
      if (!data) return null;

      return (
            <section className="py-20 bg-[#F8F9FC]">
                  <div className="max-w-7xl mx-auto px-6">

                        {/* Header */}
                        <div className="text-center mb-14">
                              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                                    {data.heading}
                              </h2>
                              <p className="text-[15px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                                    {data.subheading}
                              </p>
                        </div>

                        {/* Cards */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                              {data.models.map((model, idx) => (
                                    <div
                                          key={idx}
                                          className={`bg-white p-6 rounded-2xl border flex flex-col h-full transition-all duration-300 hover:-translate-y-[2px]
              ${idx === 0
                                                      ? "border-none shadow-sm"
                                                      : "border-slate-200 hover:border-slate-300 hover:shadow-md"
                                                }`}
                                    >
                                          {/* Icon */}
                                          <div className="mb-4">{iconMap[model.icon]}</div>

                                          {/* Title */}
                                          <h3 className="text-[18px] font-semibold text-slate-900 mb-2 min-h-[48px] leading-snug">
                                                {model.title}
                                          </h3>

                                          {/* Description */}
                                          <p className="text-[13px] text-slate-500 mb-5 leading-relaxed">
                                                {model.description}
                                          </p>

                                          {/* Content */}
                                          <div className="space-y-4 flex-grow">

                                                {/* What it is */}
                                                <div>
                                                      <h4 className="text-[13.5px] font-semibold text-slate-900 mb-2">
                                                            What it is:
                                                      </h4>
                                                      <ul className="space-y-2">
                                                            {model.whatItIs.map((item, i) => (
                                                                  <li
                                                                        key={i}
                                                                        className="flex items-start gap-2 text-[12.5px] text-slate-600"
                                                                  >
                                                                        <CheckCircle2 className="w-4 h-4 text-blue-500 mt-[2px] shrink-0" />
                                                                        {item}
                                                                  </li>
                                                            ))}
                                                      </ul>
                                                </div>

                                                {/* Billing */}
                                                <div>
                                                      <h4 className="text-[13.5px] font-semibold text-slate-900">
                                                            Billing:
                                                      </h4>
                                                      <p className="text-[12.5px] text-slate-600">
                                                            {model.billing}
                                                      </p>
                                                </div>

                                                {/* Best for */}
                                                <div>
                                                      <h4 className="text-[13.5px] font-semibold text-slate-900">
                                                            Best for:
                                                      </h4>
                                                      <p className="text-[12.5px] text-slate-600">
                                                            {model.bestFor}
                                                      </p>
                                                </div>

                                                {/* How it works */}
                                                <div>
                                                      <h4 className="text-[13.5px] font-semibold text-slate-900">
                                                            How it works:
                                                      </h4>
                                                      <p className="text-[12.5px] text-slate-600">
                                                            {model.howItWorks}
                                                      </p>
                                                </div>
                                          </div>

                                          {/* Button */}
                                          <button
                                                className={`mt-6 w-full py-2.5 rounded-lg text-[13px] font-medium transition
  ${idx === 0
                                                            ? "bg-[#0f172a] text-white hover:bg-black"
                                                            : "bg-slate-100 text-slate-800 hover:bg-black hover:text-white cursor-pointer"
                                                      }`}
                                          >
                                                {model.buttonText}
                                          </button>
                                    </div>
                              ))}
                        </div>
                  </div>
            </section>
      );
};

export default HiringModels;