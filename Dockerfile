# Wdrożenie na VPS (ronim.com.pl), wzorem bdo-filler-demo frontend/Dockerfile.vps:
# statyczny build Astro w etapie 1, serwowany przez nginx w etapie 2.
FROM node:22-slim AS build

RUN corepack enable

WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
ARG SITE_URL=https://michal.ronim.com.pl
ENV SITE_URL=$SITE_URL
RUN pnpm build

FROM nginx:1.27-alpine AS runtime
COPY nginx.vps.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=10s --timeout=3s --start-period=5s --retries=3 \
    CMD wget -q -O- http://127.0.0.1:80/ >/dev/null || exit 1
