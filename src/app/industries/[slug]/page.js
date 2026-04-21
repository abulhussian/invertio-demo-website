// import { notFound } from "next/navigation";
// import Information from "@/components/industries/Information";
// import Logistics from "@/components/industries/Logistics";
// import RetailECommerce from "@/components/industries/RetailECommerce";
// import FinanceBanking from "@/components/industries/FinanceBanking";
// import HealthCare from "@/components/industries/HealthCare";
// import Education from "@/components/industries/Education";
// export default async function Page({ params }) {
//   const { slug } = await params;

//   if (slug === "retail-ecommerce") {
//     return <RetailECommerce />;
//   }

//   if (slug === "finance-banking") {
//     return <FinanceBanking />;
//   }

//   if (slug === "healthcare") {
//     return <HealthCare />;
//   }
//   if (slug === "information") {
//     return <Information />;
//   }
//   if (slug === "logistics") {
//     return <Logistics />;
//   } if (slug === "education") {
//     return <Education />;
//   }


//   return notFound();
// }import { notFound } from "next/navigation";
import industriesData from "@/data/industries/industries.json";

import ServiceTemplate from "@/components/services/components/NestedRoutes/ServiceTemplate";

// ✅ Default Components (optional)
import Education from "@/components/industries/Education";
import Logistics from "@/components/industries/Logistics";
import RetailECommerce from "@/components/industries/RetailECommerce";
import FinanceBanking from "@/components/industries/FinanceBanking";
import HealthCare from "@/components/industries/HealthCare";
import Information from "@/components/industries/Information";

export async function generateStaticParams() {
  const hardcodedSlugs = ["education", "logistics", "retail-ecommerce", "finance-banking", "healthcare", "information"];
  const jsonSlugs = Object.keys(industriesData);
  const allSlugs = [...new Set([...hardcodedSlugs, ...jsonSlugs])];
  return allSlugs.map((slug) => ({ slug }));
}

export default async function Page({ params }) {
  const { slug } = await params;

  // ✅ DEFAULT ROUTES (priority)
  if (slug === "education") return <Education />;
  if (slug === "logistics") return <Logistics />;
  if (slug === "retail-ecommerce") return <RetailECommerce />;
  if (slug === "finance-banking") return <FinanceBanking />;
  if (slug === "healthcare") return <HealthCare />;
  if (slug === "information") return <Information />;

  // ✅ JSON ROUTES (fallback)
  const industry = industriesData[slug];

  if (!industry) return notFound();

  return <ServiceTemplate data={industry} />;
}