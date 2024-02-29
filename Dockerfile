FROM node:18-alpine as base
WORKDIR /app

# Build dependencies
FROM base as deps

ADD package.json pnpm-lock.yaml ./
RUN npm install --include=dev

# Prod dependencies
FROM base as build

COPY --from=deps /app/node_modules /app/node_modules
COPY . .

RUN npm run build

CMD [ "npm", "run", "preview" ]