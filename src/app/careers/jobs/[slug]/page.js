import jobs from "@/data/jobs.json";
import { notFound } from "next/navigation";

export default async function JobDetails({ params }) {

      const { slug } = params;
      console.log("slug ig ", params);

      const job = jobs.find((j) => j.slug === slug);

      if (!job) {
            return notFound();
      }

      return (
            <div className="px-8 md:px-14 lg:px-20 py-20 bg-[#F8F9FC]">

                  <h1 className="text-4xl font-bold text-[#0F172A] mb-4">
                        {job.title}
                  </h1>

                  <p className="text-gray-600 mb-10">
                        {job.company} • {job.pay}
                  </p>

                  <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-3">Job Description</h2>
                        <p className="text-gray-700">{job.description}</p>
                  </section>

                  <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-3">Job Summary</h2>
                        <p className="text-gray-700">{job.summary}</p>
                  </section>

                  <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-3">Key Responsibilities</h2>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                              {job.responsibilities?.map((item, index) => (
                                    <li key={index}>{item}</li>
                              ))}
                        </ul>
                  </section>

                  <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-3">
                              Required Skills & Qualifications
                        </h2>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                              {job.skills?.map((item, index) => (
                                    <li key={index}>{item}</li>
                              ))}
                        </ul>
                  </section>

                  <section className="mb-10">
                        <h2 className="text-2xl font-semibold mb-3">
                              Preferred Qualifications
                        </h2>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                              {job.preferred?.map((item, index) => (
                                    <li key={index}>{item}</li>
                              ))}
                        </ul>
                  </section>

                  <section>
                        <h2 className="text-2xl font-semibold mb-3">Benefits</h2>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                              {job.benefits?.map((item, index) => (
                                    <li key={index}>{item}</li>
                              ))}
                        </ul>
                  </section>

            </div>
      );
}