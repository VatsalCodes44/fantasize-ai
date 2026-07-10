/** @type {import('next').NextConfig} */
const nextConfig = {
  // Prevent Next.js from bundling @prisma/client so native engine binaries load correctly at runtime
  serverExternalPackages: ["@prisma/client", "@prisma/engines"],
};

export default nextConfig;

