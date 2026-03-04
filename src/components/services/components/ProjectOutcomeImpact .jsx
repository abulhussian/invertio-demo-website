import Image from "next/image";

const ProjectOutcomeImpact = ({ data }) => {
      return (
            <section className="w-full py-16">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                        {/* LEFT COLUMN */}
                        <div className="flex flex-col gap-6">

                              {/* Outcome */}
                              <div className="bg-[#F97316] text-white p-8 rounded-xl relative overflow-hidden">
                                    <h3 className="text-2xl font-semibold mb-3">
                                          {data?.outcome?.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed">
                                          {data?.outcome?.description}
                                    </p>

                                    {data?.outcome?.image && (
                                          <Image
                                                src={data.outcome.image}
                                                alt="outcome"
                                                width={120}
                                                height={120}
                                                className="absolute right-0 bottom-0 opacity-20"
                                          />
                                    )}
                              </div>

                              {/* Business Challenge */}
                              <div className="bg-[#E5E7EB] p-8 rounded-xl relative overflow-hidden">
                                    <h3 className="text-2xl font-semibold mb-3 text-[#111827]">
                                          {data?.challenge?.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                          {data?.challenge?.description}
                                    </p>

                                    {data?.challenge?.image && (
                                          <Image
                                                src={data.challenge.image}
                                                alt="challenge"
                                                width={120}
                                                height={120}
                                                className="absolute right-0 bottom-0 opacity-20"
                                          />
                                    )}
                              </div>

                        </div>

                        {/* RIGHT COLUMN */}
                        <div className="bg-[#0F172A] text-white p-10 rounded-xl relative overflow-hidden flex flex-col justify-center">

                              <h3 className="text-3xl font-semibold mb-4">
                                    {data?.impact?.title}
                              </h3>

                              <p className="text-gray-300 text-sm leading-relaxed">
                                    {data?.impact?.description}
                              </p>

                              {data?.impact?.image && (
                                    <Image
                                          src={data.impact.image}
                                          alt="impact"
                                          width={200}
                                          height={200}
                                          className="absolute right-6 bottom-6 opacity-20"
                                    />
                              )}
                        </div>

                  </div>
            </section>
      );
};

export default ProjectOutcomeImpact;