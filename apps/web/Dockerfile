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

ENV NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in \
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up \
    NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/dashboard \
    NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/dashboard \
    NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_live_RGs6MXJOHelIFw \
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_Y2xlcmsudmF0c2FsbWFoYWphbi5pbiQ

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
