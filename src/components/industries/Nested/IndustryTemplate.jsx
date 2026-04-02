import IndustryDynamicHero from "./Nested/IndustryDynamicHero";
import TrustedCompanies from "./Nested/TrustedCompanies";
import IndustrySolutions from "./Nested/IndustrySolutions";
import CreativePotentialCTA from "./Nested/CreativePotentialCTA";
import IndustryApplicationServices from "./Nested/IndustryApplicationServices.jsx"
import IndustryExpertise from './Nested/IndustryExpertise.jsx'
import IndustryEmpowerSection from './Nested/IndustryEmpowerSection'
import IndustryEngageCTA from './Nested/IndustryEngageCTA'
import IndustryUserGuide from './Nested/IndustryUserGuide'

import IndustryFAQ from "./Nested/IndustryFAQ";
import IndustryHiringModels from "./Nested/IndustryHiringModels";
import IndustryInsights from './Nested/IndustryInsights'
import IndustryTestimonials from "./Nested/IndustryTestimonials";
import IndustryConsultationForm from "./Nested/IndustryConsultationForm";

const IndustryTemplate = ({ data }) => {
      return (
            <>
                  <IndustryDynamicHero data={data.hero} />

                  <TrustedCompanies data={data.trustedCompanies} />

                  <IndustrySolutions data={data.industrySolutions} />
                  <CreativePotentialCTA data={data.creativePotential} />
                  <IndustryApplicationServices data={data.applicationServices} />
                  <IndustryExpertise data={data.expertiseSection} />
                  <IndustryEmpowerSection data={data.empowerSection} />
                  <IndustryEngageCTA data={data.engageSection} />
                  <IndustryUserGuide data={data.userGuide} />
                  <IndustryInsights data={data.insightsSection} />
                  <IndustryHiringModels data={data.hiringModels} />

                  <IndustryFAQ data={data.faq} />
                  <IndustryTestimonials data={data.testimonials} />
                  <IndustryConsultationForm data={data.contactConsultation} />
            </>
      );
};

export default IndustryTemplate;