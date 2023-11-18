FROM oven/bun:latest
WORKDIR /app
COPY . /app

RUN bun install

RUN bun run build

EXPOSE 4321

ENTRYPOINT ["bun", "run", "dist/server/entry.mjs"]
