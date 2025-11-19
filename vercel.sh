#!/bin/bash

# Install dependencies at root
npm i

# Generate Prisma Client
cd packages/db
npx prisma generate
cd ../..

# Build the Next.js app
cd apps/web
npm run build
