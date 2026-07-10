import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Prevent Next.js from bundling @prisma/client so native engine binaries load correctly
  serverExternalPackages: ["@prisma/client", "@prisma/engines"],

  // CRITICAL for monorepos: tells the file tracer to resolve files relative to the workspace root
  // Without this, it can't find node_modules/.prisma outside the apps/web directory
  outputFileTracingRoot: path.join(__dirname, "../../"),

  // Explicitly include Prisma engine binaries in the deployment bundle
  outputFileTracingIncludes: {
    "**": [
      "./node_modules/.prisma/client/**/*",
      "./node_modules/@prisma/client/**/*",
    ],
  },
};

export default nextConfig;
