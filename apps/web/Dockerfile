FROM node:20-alpine AS base

RUN apk update

RUN apk add --no-cache libc6-compat

WORKDIR /app

RUN npm install -g turbo

COPY . .

RUN turbo prune web --docker


FROM node:20-alpine AS builder

RUN apk update && apk add --no-cache libc6-compat

WORKDIR /app

COPY --from=base /app/out/json/ .

RUN npm ci 

COPY --from=base /app/out/full/ .

RUN cd packages/db && npx prisma generate && cd ../..

RUN npm run build


FROM node:20-alpine AS runner

RUN apk update && apk add --no-cache libc6-compat

WORKDIR /app

# Copy built files from builder
COPY --from=builder /app/apps/web ./apps/web
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/packages/db ./packages/db


EXPOSE 3000

CMD ["npm", "--prefix", "apps/web", "run", "start"]
