

import InsightsSection from "@/components/common/components/InsightsSection";
import CaseStudy from "../CaseStudy";
import TransformationHero from "../TransformationHero";
import SolutionFinalCTA from "./SolutionFinalCTA";
import SolutionTrustedLogos from "./SolutionTrustedLogos";
import AboutSection from "@/components/services/components/AboutSection";
import TestimonialsSection from "@/components/common/components/TestimonialsSection";
import SectionHeader from "@/components/common/ui/SectionHeader";

const ServiceTemplate = ({ data }) => {
      if (!data) return null;
      console.log("TEMPLATE DATA:", data);

      return (
            <div>

                  {/* 🔥 Hero Section */}
                  {/* {data.hero && <SolutionHero data={data.hero} />} */}
                  {data.hero && (
                        <section className="bg-[#f8f9fb] pt-20 pb-14 px-6">

                              <SectionHeader
                                    badge={data.hero.tag}
                                    heading={data.hero.title}
                                    subheading={data.hero.subtitle}
                                    para={data.hero.description}
                                    align="left"
                                    size="xl"
                              />
                        </section>
                  )}

                  {/* 🔥 Trusted Logos */}
                  {data.clientLogos && (
                        <SolutionTrustedLogos data={data.clientLogos} />
                  )}

                  {/* below logos */}

                  {data.servicesGrid && (
                        <AboutSection
                              leftCards={data.servicesGrid.leftCards}
                              rightCard={data.servicesGrid.rightCard}
                              hideImage={true}
                        />
                  )}

                  {data.transformationHero && (
                        <TransformationHero data={data.transformationHero} />
                  )}

                  {data.caseStudy && (
                        <CaseStudy data={data.caseStudy} />
                  )}

                  {data.ctaSection && (
                        <SolutionFinalCTA data={data.ctaSection} />
                  )}

                  <InsightsSection />

                  <TestimonialsSection />
            </div>
      );
};

export default ServiceTemplate;