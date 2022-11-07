FROM node:lts-bullseye-slim

ENV HOME /fastify-starter

WORKDIR ${HOME}
ADD . $HOME

RUN apt-get install libcurl4-openssl-dev

RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile
