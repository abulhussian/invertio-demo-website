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
import { getAllRoutes } from "@/lib/getAllRoutes";
import ServiceTemplate from "@/components/services/components/ServiceTemplate";

export default async function Page({ params }) {
  const { slug } = await params;

  const services = getAllRoutes("services");

  const service = services.find((s) => s.slug === slug);

  if (!service) return notFound();

  return <ServiceTemplate data={service} />;
}