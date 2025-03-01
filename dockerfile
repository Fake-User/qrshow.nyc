FROM oven/bun:1 as builder
WORKDIR /build
COPY . .
RUN bun run xbuild

FROM oven/bun:1
WORKDIR /app
COPY --from=builder /build/dist/
EXPOSE 3000
CMD ["bun", "run", "server.js"]
