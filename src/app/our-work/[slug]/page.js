import projects from "@/data/ourwork.json";

import SectionHeader from "@/components/common/ui/SectionHeader";
import ChallengesSection from "@/components/services/components/ChallengesSection";
import ProjectOutcomeImpact from "@/components/services/components/ProjectOutcomeImpact ";
import ProjectShowcase from "@/components/services/components/ProjectShowcase";
import TransformationHero from "@/components/services/components/TransformationHero";
import SolutionImpactSection from "@/components/services/components/SolutionImpactSection";
import CSection from "@/components/services/components/CSection";
import TechStackSection from "@/components/services/components/TechStackSection";

export default async function Page({ params }) {
      const { slug } = await params;

      const project = projects[slug];

      if (!project) {
            return (
                  <div className="p-20 text-center text-3xl font-semibold">
                        Project not found
                  </div>
            );
      }

      return (
            <>
                  <div className="px-8 md:px-14 lg:px-20 py-16 bg-[#F8F9FC]">

                        <SectionHeader
                              badge={project.badge}
                              heading={project.title}
                              subheading={project.description}
                        />

                        <div className="bg-[#0B132B] text-white p-10 rounded-xl mt-12">
                              <h2 className="text-2xl font-semibold mb-4">About the Project</h2>
                              <p className="text-gray-300 leading-relaxed">
                                    {project.about}
                              </p>
                        </div>

                        <div className="mt-12">
                              <img
                                    src={project.image}
                                    alt={project.title}
                                    className="rounded-xl w-full"
                              />
                        </div>

                        <TransformationHero data={project.features} />
                        <ChallengesSection data={project.challengesSection} />
                  </div>

                  <ProjectShowcase
                        image={project.showcaseImage}
                        alt={project.title}
                  />

                  <div className="px-8 md:px-14 lg:px-20 py-16 bg-[#F8F9FC]">
                        <ProjectOutcomeImpact data={project.impactSection} />
                  </div>

                  <SolutionImpactSection data={project.solutionSection} />
                  <CSection data={project.ctaSection} />
                  <TechStackSection data={project.techStack} />
            </>
      );
}