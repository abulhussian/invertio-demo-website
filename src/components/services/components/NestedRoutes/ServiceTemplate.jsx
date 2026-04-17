

import SolutionTrustedLogos from "./SolutionTrustedLogos";
import TestimonialsSection from "@/components/common/components/TestimonialsSection";
import SectionHeader from "@/components/common/ui/SectionHeader";
import ServicesGrid from "./ServicesGrid";
import AutomationBanner from "./AutomationBanner";
import WhyChooseUs from "./WhyChooseUs";
import StatsSection from "./StatsSection";
import IndustriesGrid from "./IndustriesGrid";
import ProcessTimeline from "./ProcessTimeline";
import HiringModels from "./HiringModels";
import GuideSection from "./GuideSection";
import FAQSection from "./FAQSection";
import TechStackWrapper from "./TechStackWrapper";

const ServiceTemplate = ({ data }) => {
      if (!data) return null;
      console.log("TEMPLATE DATA:", data);

      return (
            <>
                  <div className=" md:px-14 lg:px-20 py-4 pb-16 bg-[#F8F9FC] -mt-32 pt-24 lg:pt-34" >

                        {/* 🔥 Hero Section */}
                        {/* {data.hero && <SolutionHero data={data.hero} />} */}
                        {data.hero && (
                              <section className="bg-[#f8f9fb] pb-10 sm:pb-12 md:pb-14 px-4 sm:px-6 md:px-10 lg:px-14">

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

                        {/* 🔥 Consulting Services Grid (Added data prop here) */}
                        {data.consultingServices && (
                              <ServicesGrid data={data.consultingServices} />
                        )}

                  </div>

                  {data.automationCTA && (
                        <AutomationBanner data={data.automationCTA} />
                  )}
                  <div className="px-4 md:px-14 lg:px-20 py-4 pb-16 bg-[#F8F9FC] -mt-32 pt-24 lg:pt-34" >



                        {data.whyChooseUs && (
                              <WhyChooseUs data={data.whyChooseUs} />
                        )}

                        {data.statsSection && (
                              <StatsSection data={data.statsSection} />
                        )}

                        {/* 🔥 Industries Section */}
                        {data.industries &&
                              (
                                    <IndustriesGrid data={data.industries} />
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


                        {data.guideSection && (
                              <GuideSection data={data.guideSection} />
                        )}



                        {data.faqs && (
                              <FAQSection data={data.faqs} />
                        )}


                        <TestimonialsSection />
                  </div >
            </>
      );
};

export default ServiceTemplate;