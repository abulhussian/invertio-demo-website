import projects from "@/data/ourwork.json";

import SectionHeader from "@/components/common/ui/SectionHeader";
import ChallengesSection from "@/components/services/components/ChallengesSection";
import ProjectOutcomeImpact from "@/components/services/components/ProjectOutcomeImpact ";
import ProjectShowcase from "@/components/services/components/ProjectShowcase";
import TransformationHero from "@/components/services/components/TransformationHero";
import SolutionImpactSection from "@/components/services/components/SolutionImpactSection";
import CSection from "@/components/services/components/CSection";
import TechStackSection from "@/components/services/components/TechStackSection";
import Image from "next/image";


export async function generateStaticParams() {
      return Object.keys(projects).map((slug) => ({
            slug: slug,
      }));
}

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

                  <div className="px-8 md:px-14 lg:px-20  bg-[#F8F9FC]">
                        <SectionHeader
                              badge={project.badge}
                              heading={project.title}
                              subheading={project.description}
                        />
                  </div>

                  <div className="bg-[#0B132B] text-white px-8 md:px-14 lg:px-20 py-16  mt-12">
                        <h2 className="text-2xl font-semibold mb-4">About the Project</h2>
                        <p className="text-gray-300 leading-relaxed">
                              {project.about}
                        </p>
                  </div>

                  <div className="mt-12">
                        <Image
                              src={project.image}
                              alt={project.title}
                              width={1200}
                              height={700}
                              className="rounded-xl w-full h-[280px] md:h-[400px] lg:h-[700px] object-cover"
                        />
                  </div>

                  <TransformationHero data={project.features} />
                  <ChallengesSection data={project.challengesSection} />

                  <ProjectShowcase
                        image={project.showcaseImage}
                        alt={project.title}
                  />

                  <div className="px-8 md:px-14 lg:px-20 py-8 bg-[#F8F9FC]">
                        <ProjectOutcomeImpact data={project.impactSection} />
                  </div>

                  <SolutionImpactSection data={project.solutionSection} />

                  <TechStackSection data={project.techStack} />
                  <CSection data={project.ctaSection} />
            </>
      );
}