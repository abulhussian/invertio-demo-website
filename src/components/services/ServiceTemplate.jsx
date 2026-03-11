import DynamicHero from "@/components/services/components/NestedRoutes/DynamicHero";
import ExpertiseSection from "@/components/services/components/NestedRoutes/ExpertiseSection";
import HiringModels from "@/components/services/components/NestedRoutes/hiringModels";
import IndustriesSection from "./components/NestedRoutes/IndustryCard";
import TestimonialSection from "@/components/services/components/NestedRoutes/TestimonialSection";
import TrustedCompanies from "@/components/services/components/NestedRoutes/TrustedCompanies";
import StrategyCTA from "@/components/services/components/NestedRoutes/StrategyCTA";
import ContactConsultation from "@/components/services/components/NestedRoutes/ContactConsultation";

const ServiceTemplate = ({ data }) => {
      return (
            <>
                  {data.hero && <DynamicHero data={data.hero} />}

                  {data.expertise && <ExpertiseSection data={data.expertise} />}

                  {data.hiringModels && <HiringModels data={data.hiringModels} />}

                  {data.industries && <IndustriesSection content={data.industries} />}

                  {data.testimonials && (
                        <TestimonialSection testimonials={data.testimonials.items} />
                  )}

                  {data.trustedCompanies && <TrustedCompanies {...data.trustedCompanies} />}

                  {data.strategyCTA && <StrategyCTA data={data.strategyCTA} />}

                  {data.contactConsultation && (
                        <ContactConsultation data={data.contactConsultation} />
                  )}
            </>
      );
};

export default ServiceTemplate;