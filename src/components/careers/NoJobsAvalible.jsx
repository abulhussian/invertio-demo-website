"use client"

import Image from "next/image"
import TransformationHero from "../services/components/TransformationHero"
import CaseStudy from "../services/components/CaseStudy"

const NoJobsAvalible = () => {
      const benefitsData = {
            badge: "Employee Benefits",

            heading: "We Support Your Growth and Well-being",

            subheading:
                  "We invest in our people by providing benefits that support both professional success and personal well-being.",

            benefits: [
                  "Competitive salary packages",
                  "Professional development and training programs",
                  "Flexible working arrangements",
                  "Health and wellness support",
                  "Career growth opportunities",
                  "Collaborative team culture",
            ],

            button: {
                  text: "Contact Us",
                  href: "/contact-us",
            },
      };
      const caseStudyData = {
            badge: "Diversity & Inclusion",

            heading: "Everyone Belongs at Invertio",

            subheading:
                  "We believe diversity drives innovation. Our workplace values different perspectives, backgrounds, and experiences, creating an environment where everyone can contribute and succeed.",

            cards: [
                  {
                        title: "Driven by Innovation, Powered by People",
                        description:
                              "We believe great ideas come from diverse perspectives and collaborative environments. Our culture encourages open communication, experimentation, and continuous improvement. From brainstorming new technologies to delivering impactful digital solutions, every team member plays a key role in shaping our journey.",
                        variant: "secondary",
                  },

                  {
                        title: "A Workplace Where Innovation Meets Opportunity",
                        description:
                              "We foster a culture that values creativity, collaboration, and continuous learning. Our team works on cutting-edge technologies, solving real-world challenges for global organizations across multiple industries. At Invertio, we don't just build technology — we build careers.",
                        variant: "primary",
                  },

                  {
                        title: "Start Your Career Journey",
                        description:
                              "We provide internship opportunities for students and fresh graduates looking to gain real-world experience in software development, UI/UX design, data analytics, and cybersecurity. Work alongside experienced professionals and develop skills that prepare you for the future.",
                        variant: "secondary",
                  },
            ],
      };
      return (
            <>
                  <section className="w-full py-16 sm:py-20 px-4 sm:px-8 flex items-center justify-center">

                        <div className="max-w-2xl text-center flex flex-col items-center gap-4">

                              {/* ICON (you will replace src) */}
                              <Image
                                    src="/carrers/image.png"
                                    alt="No Jobs"
                                    width={80}
                                    height={80}
                                    className="mb-2"
                              />

                              {/* HEADING */}
                              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#0F172A]">
                                    Opportunities Coming Soon
                              </h2>

                              {/* DESCRIPTION */}
                              <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-xl">
                                    We currently don’t have any open roles available, but we’re always looking for talented people to join our team.
                              </p>

                              <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-xl">
                                    Send us your resume or check back later to explore future opportunities at Invertio.
                              </p>

                        </div>

                  </section>

                  {/* Benefits Section */}
                  <TransformationHero data={benefitsData} />

                  {/* Culture Section */}
                  <CaseStudy data={caseStudyData} />

            </>
      )
}

export default NoJobsAvalible