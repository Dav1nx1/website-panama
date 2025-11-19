# Multi-stage Dockerfile for Next.js production deployment
# Stage 1: Dependencies
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy package files first for better layer caching
COPY package.json package-lock.json* pnpm-lock.yaml* ./

# Install dependencies based on the preferred package manager
# Using --frozen-lockfile ensures reproducible builds
RUN \
  if [ -f pnpm-lock.yaml ]; then \
    corepack enable pnpm && \
    pnpm install --frozen-lockfile --prefer-offline; \
  elif [ -f package-lock.json ]; then \
    npm ci --prefer-offline; \
  else \
    npm install --prefer-offline; \
  fi

# Stage 2: Builder
FROM node:20-alpine AS builder
WORKDIR /app

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy package files for pnpm/npm
COPY package.json package-lock.json* pnpm-lock.yaml* ./

# Copy source code (this layer will be invalidated on code changes)
COPY . .

# Set environment variables for build
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Skip linting and type checking during Docker build for faster builds
# This can save 30-60+ seconds on each build
# Linting and type checking should be run in CI/CD pipelines before building the image
# These are set both as ENV and in the RUN command to ensure they're available
ENV SKIP_ESLINT=true
ENV SKIP_TYPE_CHECK=true
ENV ESLINT_NO_DEV_ERRORS=true

# Build the application
# Explicitly set skip flags in the build command to ensure they're used
RUN \
  if [ -f pnpm-lock.yaml ]; then \
    corepack enable pnpm && \
    SKIP_ESLINT=true SKIP_TYPE_CHECK=true pnpm run build; \
  else \
    SKIP_ESLINT=true SKIP_TYPE_CHECK=true npm run build; \
  fi

# Stage 3: Runner
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create a non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy necessary files from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Set proper permissions
RUN chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
