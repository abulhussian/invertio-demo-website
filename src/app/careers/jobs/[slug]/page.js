// import jobs from "@/data/jobs.json";
// import { notFound } from "next/navigation";

// export default async function JobDetails({ params }) {
//       // Fix: Await params to avoid the 404 error
//       const { slug } = await params;
//       const job = jobs.find((j) => j.slug === slug);

//       if (!job) return notFound();

//       return (
//             <div className="px-8 md:px-14 lg:px-20 py-20 bg-[#F8F9FC] min-h-screen">
//                   <div className="max-w-4xl mx-auto">
//                         <h1 className="text-4xl font-bold text-[#0F172A] mb-4">{job.title}</h1>
//                         <p className="text-xl text-gray-600 mb-10">{job.company} • {job.pay}</p>

//                         <section className="mb-10 bg-white p-8 rounded-3xl shadow-sm">
//                               <h2 className="text-2xl font-bold mb-4">Job Description</h2>
//                               <p className="text-gray-700 leading-relaxed">{job.description}</p>
//                         </section>

//                         {/* Dynamic Lists */}
//                         <div className="space-y-8">
//                               <JobSection title="Key Responsibilities" items={job.responsibilities} />
//                               <JobSection title="Required Skills" items={job.skills} />
//                               <JobSection title="Benefits" items={job.benefits} />
//                         </div>
//                   </div>
//             </div>
//       );
// }

// function JobSection({ title, items }) {
//       return (
//             <section className="bg-white p-8 rounded-3xl shadow-sm">
//                   <h2 className="text-2xl font-bold mb-4">{title}</h2>
//                   <ul className="list-disc pl-6 space-y-2 text-gray-700">
//                         {items?.map((item, i) => <li key={i}>{item}</li>)}
//                   </ul>
//             </section>
//       );
// }


import jobs from "@/data/jobs.json";
import { notFound } from "next/navigation";

export default async function JobDetails({ params }) {

      const { slug } = await params;
      const job = jobs.find((j) => j.slug === slug);

      if (!job) return notFound();

      return (
            <div className="px-8 md:px-14 lg:px-20 py-20 bg-[#F8F9FC] min-h-screen">

                  <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">

                        {/* LEFT CONTENT */}
                        <div className="lg:col-span-2">

                              <h1 className="text-4xl font-bold text-[#0F172A] mb-4">
                                    {job.title}
                              </h1>

                              <p className="text-lg text-gray-600 mb-10">
                                    {job.company} • {job.pay}
                              </p>

                              {/* Description */}
                              <JobTextSection
                                    title="Job Description"
                                    text={job.description}
                              />

                              {/* Summary */}
                              {job.summary && (
                                    <JobTextSection
                                          title="Job Summary"
                                          text={job.summary}
                                    />
                              )}

                              {/* Responsibilities */}
                              <JobListSection
                                    title="Key Responsibilities"
                                    items={job.responsibilities}
                              />

                              {/* Skills */}
                              <JobListSection
                                    title="Required Skills & Qualifications"
                                    items={job.skills}
                              />

                              {/* Preferred */}
                              {job.preferred && (
                                    <JobListSection
                                          title="Preferred Qualifications"
                                          items={job.preferred}
                                    />
                              )}

                              {/* Benefits */}
                              <JobListSection
                                    title="Benefits"
                                    items={job.benefits}
                              />

                        </div>


                        {/* RIGHT SIDE APPLY FORM */}
                        <div className="bg-white p-8 rounded-3xl shadow-sm h-fit">

                              <h3 className="text-xl font-semibold mb-6">
                                    Apply Now
                              </h3>

                              <form className="space-y-4">

                                    <input
                                          type="text"
                                          placeholder="Full Name"
                                          className="w-full border rounded-lg px-4 py-2"
                                    />

                                    <input
                                          type="email"
                                          placeholder="Email Address"
                                          className="w-full border rounded-lg px-4 py-2"
                                    />

                                    <input
                                          type="text"
                                          placeholder="Phone Number"
                                          className="w-full border rounded-lg px-4 py-2"
                                    />

                                    <input
                                          type="file"
                                          className="w-full border rounded-lg px-4 py-2"
                                    />

                                    <button
                                          type="submit"
                                          className="w-full bg-[#0F172A] text-white py-3 rounded-lg"
                                    >
                                          Submit Application
                                    </button>

                              </form>

                        </div>

                  </div>

            </div>
      );
}


function JobTextSection({ title, text }) {
      return (
            <section className="mb-8 bg-white p-8 rounded-3xl shadow-sm">
                  <h2 className="text-2xl font-bold mb-4">{title}</h2>
                  <p className="text-gray-700 leading-relaxed">{text}</p>
            </section>
      );
}


function JobListSection({ title, items }) {
      return (
            <section className="mb-8 bg-white p-8 rounded-3xl shadow-sm">
                  <h2 className="text-2xl font-bold mb-4">{title}</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        {items?.map((item, i) => (
                              <li key={i}>{item}</li>
                        ))}
                  </ul>
            </section>
      );
}