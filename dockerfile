FROM oven/bun:1 as builder
WORKDIR /build
COPY . .
RUN bun run xbuild

FROM oven/bun:1
WORKDIR /dist
COPY --from=builder /build/dist/ ./
VOLUME /dist/store
EXPOSE 3000
CMD ["bun", "run", "server.js"]
