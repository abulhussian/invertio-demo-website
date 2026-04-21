// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "ranamahacreations.com" },
      { hostname: "w7.pngwing.com" },
      { hostname: "upload.wikimedia.org" },
      { hostname: "seeklogo.com" }
    ],
    unoptimized: true,
  },
  output: "export",
};

export default nextConfig;