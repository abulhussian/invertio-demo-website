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
// }
import { notFound } from "next/navigation";
import { megaMenuData } from "@/data/megaMenuData";
import industriesData from "@/data/industries/industries.json";

import ServiceTemplate from "@/components/services/components/NestedRoutes/ServiceTemplate";

export default async function Page({ params }) {
  const { slug } = await params;

  // ✅ FIXED STRUCTURE
  const allLinks = megaMenuData.industries.flatMap((item) =>
    item.columns.flatMap((col) =>
      col.links
    )
  );

  const match = allLinks.find(
    (link) => link.href === `/industries/${slug}`
  );

  if (!match) return notFound();

  // ✅ JSON DATA
  const industry = industriesData[slug];

  if (!industry) return notFound();

  return <ServiceTemplate data={industry} />;
}