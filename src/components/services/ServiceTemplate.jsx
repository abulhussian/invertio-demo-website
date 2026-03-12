import DynamicHero from "@/components/services/components/NestedRoutes/DynamicHero";
import ContactConsultation from "@/components/services/components/NestedRoutes/ContactConsultation";
import TechStack from "./components/NestedRoutes/TechStack";
import OurProcess from "./components/NestedRoutes/OurProcess";
import ServiceModels from "./components/NestedRoutes/ServiceModels";
import ClientTestimonials from "./components/NestedRoutes/ClientTestimonials";
import FooterSection from "./components/NestedRoutes/FooterSection";
import IndustriesSection from "./components/NestedRoutes/IndustryCard";
import AIStrategySection from "./components/NestedRoutes/AIStrategySection";
import EmpowerSection from "./components/NestedRoutes/EmpowerSection";
import AIUseCases from "./components/NestedRoutes/AIUseCases";
import VisionToExecution from "./components/NestedRoutes/VisionToExecution";
import ResultsFocusedAI from "./components/NestedRoutes/ResultsFocusedAI";
import ClientLogoGrid from "./components/NestedRoutes/ClientLogoGrid";

const ServiceTemplate = () => {
      return (
            <>
                  {/* hero page */}
                  <DynamicHero />
                  {/* images */}
                  <ClientLogoGrid />
                  {/* RESULT FOCUSED */}
                  <ResultsFocusedAI />
                  {/* vision */}
                  <VisionToExecution />
                  {/* use cases */}
                  <AIUseCases />
                  {/* empowersection */}
                  <EmpowerSection />
                  <AIStrategySection />
                  {/* industry */}
                  <IndustriesSection />
                  {/* tech stack */}
                  <TechStack />
                  {/* our process */}
                  <OurProcess />
                  {/* hiring model */}
                  <ServiceModels />
                  {/* faq question */}
                  <FooterSection />
                  {/* client testomonial */}
                  <ClientTestimonials />
                  {/* contact form */}
                  <ContactConsultation />
            </>
      );
};

export default ServiceTemplate;





// import DynamicHero from "@/components/services/components/NestedRoutes/DynamicHero";
// import ContactConsultation from "@/components/services/components/NestedRoutes/ContactConsultation";
// import TechStack from "./components/NestedRoutes/TechStack";
// import OurProcess from "./components/NestedRoutes/OurProcess";
// import ServiceModels from "./components/NestedRoutes/ServiceModels";
// import ClientTestimonials from "./components/NestedRoutes/ClientTestimonials";
// import FooterSection from "./components/NestedRoutes/FooterSection";
// import IndustriesSection from "./components/NestedRoutes/IndustryCard";
// import AIStrategySection from "./components/NestedRoutes/AIStrategySection";
// import EmpowerSection from "./components/NestedRoutes/EmpowerSection";
// import AIUseCases from "./components/NestedRoutes/AIUseCases";
// import VisionToExecution from "./components/NestedRoutes/VisionToExecution";
// import ResultsFocusedAI from "./components/NestedRoutes/ResultsFocusedAI";
// import ClientLogoGrid from "./components/NestedRoutes/ClientLogoGrid";

// const ServiceTemplate = ({ data }) => {
//       return (
//             <>
//                   {/* hero */}
//                   <DynamicHero content={data.hero} />

//                   {/* logos */}
//                   <ClientLogoGrid content={data.hero.partners} />

//                   {/* results */}
//                   <ResultsFocusedAI content={data.expertise} />

//                   {/* vision */}
//                   <VisionToExecution content={data.expertise} />

//                   {/* use cases */}
//                   <AIUseCases content={data.expertise} />

//                   {/* empower */}
//                   <EmpowerSection content={data.expertise} />

//                   <AIStrategySection content={data.expertise} />

//                   {/* industries */}
//                   <IndustriesSection content={data.industries} />

//                   {/* tech stack */}
//                   <TechStack content={data.techStack} />

//                   {/* process */}
//                   <OurProcess content={data.process} />

//                   {/* hiring */}
//                   <ServiceModels content={data.hiringModels} />

//                   {/* FAQ */}
//                   <FooterSection content={data.faq} />

//                   {/* testimonials */}
//                   <ClientTestimonials testimonials={data.testimonials.items} />

//                   {/* contact */}
//                   <ContactConsultation content={data.contactConsultation} />
//             </>
//       );
// };

// export default ServiceTemplate;