FROM oven/bun:1 as builder
WORKDIR /build
COPY . .
RUN bun run xbuild

FROM oven/bun:1
WORKDIR /app
COPY --from=builder /build/dist/ ./
RUN mkdir -p /app/store
VOLUME /app/store
EXPOSE 3000
CMD ["bun", "run", "server.js"]
