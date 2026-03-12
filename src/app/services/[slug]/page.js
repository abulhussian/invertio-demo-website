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
import services from "@/data/services/services.json";
import ServiceTemplate from "@/components/services/ServiceTemplate";

export default async function Page({ params }) {

  const { slug } = await params;   // ✅ REQUIRED in Next 16

  const service = services[slug];

  console.log("slug:", slug);
  console.log("service:", service);

  if (!service) return notFound();

  return <ServiceTemplate data={service} />;
}