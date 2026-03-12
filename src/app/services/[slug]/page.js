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


import services from "@/data/services/services.json";
import { notFound } from "next/navigation";
import ServiceTemplate from "@/components/services/ServiceTemplate";

export default async function Page({ params }) {
  const { slug } = await params;
  const service = services[slug];
  // console.log(slug, services);

  if (!service) return notFound();

  return <ServiceTemplate data={service} />;
}