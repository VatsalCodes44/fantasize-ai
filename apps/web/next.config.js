/** @type {import('next').NextConfig} */
const nextConfig = {
  // Prevent Next.js from bundling @prisma/client so native engine binaries load correctly at runtime
  serverExternalPackages: ["@prisma/client", "@prisma/engines"],

  // Ensure Prisma engine binaries are included in the Vercel deployment file trace
  outputFileTracingIncludes: {
    "/**/*": [
      "../../packages/db/src/generated/client/**/*",
      "../../node_modules/.prisma/client/**/*",
    ],
  },
};

export default nextConfig;

