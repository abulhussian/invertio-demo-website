export default async function Page({ params }) {
  const { slug } = await params;

  return <div className="text-2xl font-semibold"> {slug}</div>;
}
// import CloudService from "@/components/services/CloudService";
// import DigitalService from "@/components/services/DigitalService";
// import CyberService from "@/components/services/CyberService";

// export default function ServicePage({ params }) {
//   const { slug } = params;

//   if (slug === "cloud-services") {
//     return <CloudService />;
//   }

//   if (slug === "digital-transformation") {
//     return <DigitalService />;
//   }

//   if (slug === "cybersecurity") {
//     return <CyberService />;
//   }

//   return <div>Service Not Found</div>;
// }
