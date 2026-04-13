import React from 'react';
// Import UI components from your services folder
import SolutionTrustedLogos from "@/components/services/components/NestedRoutes/SolutionTrustedLogos";
import ServicesGrid from "@/components/services/components/NestedRoutes/ServicesGrid";
import AutomationBanner from "@/components/services/components/NestedRoutes/AutomationBanner";
import WhyChooseUs from "@/components/services/components/NestedRoutes/WhyChooseUs";
import StatsSection from "@/components/services/components/NestedRoutes/StatsSection";
import IndustriesGrid from "@/components/services/components/NestedRoutes/IndustriesGrid";
import ProcessTimeline from "@/components/services/components/NestedRoutes/ProcessTimeline";
import HiringModels from "@/components/services/components/NestedRoutes/HiringModels";
import GuideSection from "@/components/services/components/NestedRoutes/GuideSection";
import FAQSection from "@/components/services/components/NestedRoutes/FAQSection";
import TechStackWrapper from "@/components/services/components/NestedRoutes/TechStackWrapper";

// Common Components
import TestimonialsSection from "@/components/common/components/TestimonialsSection";
import SectionHeader from "@/components/common/ui/SectionHeader";

const SolutionTemplate = ({ data }) => {
      if (!data) return null;

      console.log("SOLUTION TEMPLATE DATA:", data);

      return (
            <>
                  {/* Top Background Section (Gray) */}
                  <div className="px-8 md:px-14 lg:px-20 py-4 pb-16 bg-[#F8F9FC] -mt-32 pt-34">

                        {/* 🔥 Hero Section */}
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

                        {/* 🔥 Trusted Logos */}
                        {data.clientLogos && (
                              <SolutionTrustedLogos data={data.clientLogos} />
                        )}

                        {/* 🔥 Consulting Services Grid */}
                        {data.consultingServices && (
                              <ServicesGrid data={data.consultingServices} />
                        )}
                  </div>

                  {/* Main Content Sections (White Background) */}
                  <div>
                        {/* 🔥 Automation Banner / CTA */}
                        {data.automationCTA && (
                              <AutomationBanner data={data.automationCTA} />
                        )}

                        {/* 🔥 Why Choose Us */}
                        {data.whyChooseUs && (
                              <WhyChooseUs data={data.whyChooseUs} />
                        )}

                        {/* 🔥 Stats Section */}
                        {data.statsSection && (
                              <StatsSection data={data.statsSection} />
                        )}

                        {/* 🔥 Industries Section */}
                        {data.industries && (
                              <IndustriesGrid data={data.industries} />
                        )}

                        {/* 🔥 Tech Impact / Stack Section */}
                        {data.techImpact && (
                              <TechStackWrapper data={data.techImpact} />
                        )}

                        {/* 🔥 Process Timeline */}
                        {data.processTimeline && (
                              <ProcessTimeline data={data.processTimeline} />
                        )}

                        {/* 🔥 Hiring Models */}
                        {data.hiringModels && (
                              <HiringModels data={data.hiringModels} />
                        )}


                        {/* 🔥 Guide / Resources Section */}
                        {data.guideSection && (
                              <GuideSection data={data.guideSection} />
                        )}

                        {/* 🔥 FAQ Section */}
                        {data.faqs && (
                              <FAQSection data={data.faqs} />
                        )}

                        {/* 🔥 Static Testimonials */}
                        <TestimonialsSection />
                  </div>
            </>
      );
};

export default SolutionTemplate;