import React from 'react';
// UI Components
import SolutionTrustedLogos from "@/components/services/components/NestedRoutes/SolutionTrustedLogos";
import ServicesGrid from "@/components/services/components/NestedRoutes/ServicesGrid";
import AutomationBanner from "@/components/services/components/NestedRoutes/AutomationBanner";
import WhyChooseUs from "@/components/services/components/NestedRoutes/WhyChooseUs";
import StatsSection from "@/components/services/components/NestedRoutes/StatsSection";
import IndustriesGrid from "@/components/services/components/NestedRoutes/IndustriesGrid";
import ProcessTimeline from "@/components/services/components/NestedRoutes/ProcessTimeline";
import HiringModels from "@/components/services/components/NestedRoutes/HiringModels";
import GuideSection from '@/components/services/components/NestedRoutes/GuideSection';
import FAQSection from "@/components/services/components/NestedRoutes/FAQSection";
import TechStackWrapper from "@/components/services/components/NestedRoutes/TechStackWrapper";


// Common Components
import TestimonialsSection from "@/components/common/components/TestimonialsSection";
import SectionHeader from "@/components/common/ui/SectionHeader";

const IndustryTemplate = ({ data }) => {
      if (!data) return null;

      return (
            <>
                  {/* Hero & Top Grid Section */}
                  <div className="px-8 md:px-14 lg:px-20 py-4 pb-16 bg-[#F8F9FC] -mt-32 pt-34">

                        {data.hero && (
                              <section className="bg-[#f8f9fb] pb-14 px-6">
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

                        {data.clientLogos && (
                              <SolutionTrustedLogos data={data.clientLogos} />
                        )}

                        {/* Industry-Specific Capabilities Grid */}
                        {data.industrySolutions && (
                              <ServicesGrid data={data.industrySolutions} />
                        )}
                  </div>

                  {/* Main Content Sections */}
                  <div>
                        {data.industryCTA && (
                              <AutomationBanner data={data.industryCTA} />
                        )}

                        {data.whyChooseUs && (
                              <WhyChooseUs data={data.whyChooseUs} />
                        )}

                        {data.statsSection && (
                              <StatsSection data={data.statsSection} />
                        )}

                        {/* 🔥 Industries Section */}
                        {data.industries && (
                              <IndustriesGrid data={data.industries} />
                        )}

                        {data.techImpact && (
                              <TechStackWrapper data={data.techImpact} />
                        )}
                        {data.techImpact && (
                              <TechStackWrapper data={data.techImpact} />
                        )}

                        {data.processTimeline && (
                              <ProcessTimeline data={data.processTimeline} />
                        )}

                        {data.hiringModels && (
                              <HiringModels data={data.hiringModels} />
                        )}

                        {/* 🔥 Guide / Resources Section */}
                        {data.guideSection && (
                              <GuideSection data={data.guideSection} />
                        )}

                        {data.faqs && (
                              <FAQSection data={data.faqs} />
                        )}

                        <TestimonialsSection />
                  </div>
            </>
      );
};

export default IndustryTemplate;