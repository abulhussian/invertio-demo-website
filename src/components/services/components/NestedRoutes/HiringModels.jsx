import React from 'react';
import { CheckCircle2, Users, UserPlus, Globe } from 'lucide-react';

const iconMap = {
      Users: <UserPlus className="w-8 h-8 text-blue-600" />,
      UserGroup: <Users className="w-8 h-8 text-blue-600" />,
      Globe: <Globe className="w-8 h-8 text-blue-600" />
};

const HiringModels = ({ data }) => {
      if (!data) return null;

      return (
            <section className="py-24 bg-[#F8F9FC]">
                  <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                              <h2 className="text-5xl font-bold text-slate-900 mb-6">{data.heading}</h2>
                              <p className="text-slate-600 text-lg max-w-4xl mx-auto leading-relaxed">
                                    {data.subheading}
                              </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                              {data.models.map((model, idx) => (
                                    <div
                                          key={idx}
                                          className={`bg-white p-10 rounded-3xl border-2 flex flex-col h-full transition-all duration-300 hover:shadow-xl ${idx === 0 ? 'border-blue-500' : 'border-slate-100'}`}
                                    >
                                          <div className="mb-6">{iconMap[model.icon]}</div>

                                          <h3 className="text-2xl font-bold text-slate-900 mb-4 h-16 flex items-center">
                                                {model.title}
                                          </h3>

                                          <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                                                {model.description}
                                          </p>

                                          <div className="space-y-6 flex-grow">
                                                <div>
                                                      <h4 className="font-bold text-slate-900 mb-3">What it is:</h4>
                                                      <ul className="space-y-2">
                                                            {model.whatItIs.map((item, i) => (
                                                                  <li key={i} className="flex items-start gap-2 text-[13px] text-slate-600">
                                                                        <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                                                                        {item}
                                                                  </li>
                                                            ))}
                                                      </ul>
                                                </div>

                                                <div>
                                                      <h4 className="font-bold text-slate-900">Billing:</h4>
                                                      <p className="text-slate-600 text-sm">{model.billing}</p>
                                                </div>

                                                <div>
                                                      <h4 className="font-bold text-slate-900">Best for:</h4>
                                                      <p className="text-slate-600 text-sm">{model.bestFor}</p>
                                                </div>

                                                <div>
                                                      <h4 className="font-bold text-slate-900">How it works:</h4>
                                                      <p className="text-slate-600 text-sm">{model.howItWorks}</p>
                                                </div>
                                          </div>

                                          <button className={`mt-10 w-full py-4 rounded-xl font-bold transition-colors ${idx === 0 ? 'bg-[#0f172a] text-white hover:bg-slate-800' : 'bg-slate-50 text-slate-900 hover:bg-slate-100'}`}>
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