import InsightsSection from "@/components/common/components/InsightsSection";
import CaseStudy from "@/components/services/components/CaseStudy";
import TransformationHero from "@/components/services/components/TransformationHero";
import SolutionFinalCTA from "@/components/services/components/NestedRoutes/SolutionFinalCTA";
import SolutionTrustedLogos from "@/components/services/components/NestedRoutes/SolutionTrustedLogos";
import AboutSection from "@/components/services/components/AboutSection";
import TestimonialsSection from "@/components/common/components/TestimonialsSection";
import SectionHeader from "@/components/common/ui/SectionHeader";

const IndustryTemplate = ({ data }) => {
      if (!data) return null;

      console.log("INDUSTRY TEMPLATE DATA:", data);

      return (
            <div>

                  {/* 🔥 Hero Section */}
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

                  {/* 🔥 Services Grid */}
                  {data.servicesGrid && (
                        <AboutSection
                              leftCards={data.servicesGrid.leftCards}
                              rightCard={data.servicesGrid.rightCard}
                              hideImage={true}
                        />
                  )}

                  {/* 🔥 Transformation */}
                  {data.transformationHero && (
                        <TransformationHero data={data.transformationHero} />
                  )}

                  {/* 🔥 Case Study */}
                  {data.caseStudy && (
                        <CaseStudy data={data.caseStudy} />
                  )}

                  {/* 🔥 CTA */}
                  {data.ctaSection && (
                        <SolutionFinalCTA data={data.ctaSection} />
                  )}

                  {/* 🔥 Static Sections */}
                  <InsightsSection />
                  <TestimonialsSection />

            </div>
      );
};

export default IndustryTemplate;