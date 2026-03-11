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
import { servicesData } from "../data/servicesData";
import { notFound } from "next/navigation";
import ServiceTemplate from "@/components/services/components/ServiceTemplate";

export default async function Page({ params }) {
  const { slug } = await params;

  const service = servicesData[slug];

  if (!service) return notFound();

  return <ServiceTemplate data={service} />;
}