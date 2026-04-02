// import { notFound } from "next/navigation";
// import CloudService from "@/components/services/CloudService";
// import DigitalTransformation from "@/components/services/DigitalTransformation";
// import SoftwareDevelopment from "@/components/services/SoftwareDevelopment";
// export default async function Page({ params }) {
//   const { slug } = await params;
//   if (slug === "cloud-services") {
//     return <CloudService />;
//   }

//   if (slug === "digital-transformation") {
//     return <DigitalTransformation />;
//   }

//   if (slug === "software-development") {
//     return <SoftwareDevelopment />;
//   }

//   notFound();
// }
import { notFound } from "next/navigation";
import { megaMenuData } from "@/data/megaMenuData";
import servicesData from "@/data/services/services.json";

import ServiceTemplate from "@/components/services/components/NestedRoutes/ServiceTemplate";

import CloudService from "@/components/services/CloudService";
import DigitalTransformation from "@/components/services/DigitalTransformation";
import SoftwareDevelopment from "@/components/services/SoftwareDevelopment";

export default async function Page({ params }) {
  const { slug } = await params;

  // ✅ DEFAULT PAGES
  if (slug === "cloud-services") return <CloudService />;
  if (slug === "digital-transformation") return <DigitalTransformation />;
  if (slug === "software-development") return <SoftwareDevelopment />;

  // ✅ ROUTE VALIDATION
  const allLinks = megaMenuData.services.flatMap((item) =>
    item.subTabs.flatMap((tab) =>
      tab.columns.flatMap((col) => col.links)
    )
  );

  const match = allLinks.find(
    (link) => link.href === `/services/${slug}`
  );

  if (!match) return notFound();

  // ✅ JSON DATA
  const service = servicesData[slug];

  console.log("SERVICE:", service);

  if (!service) return notFound();

  return <ServiceTemplate data={service} />;
}