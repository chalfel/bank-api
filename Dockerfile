ARG NODE_BASE_IMAGE="node:lts"

ARG PORT=3333

##############################################################################################
# Build Image
##############################################################################################
FROM ${NODE_BASE_IMAGE} as build

WORKDIR /build

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

##############################################################################################
# Dependencies Image
##############################################################################################
FROM ${NODE_BASE_IMAGE} as deps

WORKDIR /build

COPY --from=build /build/package.json /build/yarn.lock ./

RUN yarn install --frozen-lockfile --only=production --no-optional

##############################################################################################
# Production Image
##############################################################################################
FROM ${NODE_BASE_IMAGE} as prod

ENV PORT=${PORT}

WORKDIR /home/node/app

COPY --from=build /build/build/ ./build
COPY --from=deps /build/package.json /build/yarn.lock ./
COPY --from=deps /build/node_modules/ ./node_modules

EXPOSE ${PORT}

ENTRYPOINT ["yarn", "start"]

