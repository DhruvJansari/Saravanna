/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
    domains: ["images.unsplash.com"],
  },
  allowedDevOrigins: ["192.168.2.41"],
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
