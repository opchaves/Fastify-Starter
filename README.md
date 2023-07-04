# Fastify Starter

:leopard: A boilerplate for Node.js, Fastify, TypeScript, Vite, Playwright, and Render.

:rainbow: [Live Demo](https://fastify-starter-12ih.onrender.com) - The client application is [here](https://github.com/Shyam-Chen/Vue-Starter).

## Table of Contents

- [Getting Started](#getting-started)
- [Project Setup](#project-setup)
- [Key Features](#key-features)
- [Configuration](#configuration)
- [Directory Structure](#directory-structure)
- [Microservices](#microservices)

## Getting Started

Get started with Fastify Starter.

```sh
# dev server
$ pnpm install
$ pnpm dev

# mock server
$ cd mock/requests && pnpm install && cd ../..
$ pnpm mock
```

## Project Setup

Follow steps to execute this boilerplate.

### Install dependencies

```sh
$ pnpm install
```

### Compiles and hot-reloads for development

```sh
$ pnpm dev
```

### Compiles and minifies for production

```sh
$ pnpm build
```

### Locally preview the production build

```sh
# Before running the `preview` command, make sure to run the following commands.
$ pnpm build

$ pnpm preview
```

### Lints and fixes files

Files: `src/**/*.ts`

```sh
$ pnpm lint
```

### Runs unit tests

Files: `src/**/*.spec.ts`

```sh
$ pnpm unit
```

### Runs end-to-end tests

Files: `e2e/**/*.spec.ts`

```sh
# Before running the `e2e` command, make sure to run the following commands.
$ pnpm build
$ pnpm preview

# If it's not installed, run it.
$ cd e2e && pnpm install && cd ..

$ pnpm e2e
```

### Performance metrics

Files: `benchmark/**/*.spec.ts`

```sh
# Before running the `bench` command, make sure to run the following commands.
$ pnpm build
$ pnpm preview

# If it's not installed, run it.
$ cd benchmark && pnpm install && cd ..

$ pnpm bench
```

### Mock requests

```sh
# If it's not installed, run it.
$ cd mock/requests && pnpm install && cd ../..

$ pnpm mock
```

### Documentation

Files: `docs/**/*.md`

```sh
# If it's not installed, run it.
$ cd docs && pnpm install && cd ..

$ pnpm doc
```

## Key Features

This seed repository provides the following features:

- ---------- **Essentials** ----------
- [x] [Fastify](https://github.com/fastify/fastify) - Web Application Framework
- [x] [Routes](https://github.com/Vanilla-IceCream/vite-plugin-fastify-routes) - File-based routing
- [x] [MongoDB](https://github.com/fastify/fastify-mongodb) - Document Database
- [x] [JWT](https://github.com/fastify/fastify-jwt) - Authentication
- [x] [PBKDF2](https://github.com/Vanilla-IceCream/pbkdf2-passworder) - Hash Passwords
- [x] [OTP](https://github.com/yeojz/otplib) - Authenticator
- [x] [Cloudinary](https://github.com/Vanilla-IceCream/fastify-cloudinary) - Asset Management
- [x] [I18n](https://github.com/Vanilla-IceCream/fastify-i18n) - Internationalization and Localization
- [x] [Redis](https://github.com/fastify/fastify-redis) - In-memory Data Structure Store
- [x] [WebSocket](https://github.com/fastify/fastify-websocket) - Two-way Interactive Communication Session
- [x] [EventSource](https://github.com/nodefactoryio/fastify-sse-v2) - Server-sent Events
- [x] [Mailer](https://github.com/nodemailer/nodemailer) - Email Sending
- [x] [Email](https://github.com/Shyam-Chen/Email-Builder) - Email Builder
- [x] [Nunjucks](https://github.com/mozilla/nunjucks) - Email Rendering
- [x] [Sheets](https://github.com/SheetJS/sheetjs) - Spreadsheet Data Toolkit
- [x] [BullMQ](https://github.com/taskforcesh/bullmq) - Message Queue
- ---------- **Tools** ----------
- [x] [Vite](https://github.com/vitejs/vite) - Bundler
- [x] [TypeScript](https://github.com/microsoft/TypeScript) - JavaScript with Syntax for Types
- [x] [ESLint](https://github.com/eslint/eslint) - Linter
- [x] [Prettier](https://github.com/prettier/prettier) - Formatter
- [x] [Vitest](https://github.com/vitest-dev/vitest) - Test Runner
- [x] [Playwright](https://github.com/microsoft/playwright) - Test Automation
- [x] [Autocannon](https://github.com/mcollina/autocannon) - Measure Performance
- [x] [VitePress](https://vitepress.vuejs.org/) - Documentation
- ---------- **Environments** ----------
- [x] [Node.js](https://nodejs.org/en/) - JavaScript Runtime Environment
- [x] [Pnpm](https://pnpm.io/) - Package Manager
- [x] [PM2](https://pm2.keymetrics.io/) - Process Manager
- [x] [Caddy](https://caddyserver.com/) - Web Server
- [x] [Docker](https://www.docker.com/) - Containerized Application Development
- [x] [CircleCI](https://circleci.com/) - Continuous Integration and Delivery
- [x] [Render](https://render.com/) - Cloud Application Hosting

## Configuration

Control the environment.

### Default environments

Set your local environment variables.

```ts
// env.ts
export default {
  NODE_ENV: process.env.NODE_ENV || 'development',

  HOST: process.env.HOST || '127.0.0.1',
  PORT: process.env.PORT || 3000,

  SITE_URL: process.env.SITE_URL || 'http://127.0.0.1:5173',

  MONGODB_URL: process.env.MONGODB_URL || 'xxx',
  REDIS_URL: process.env.REDIS_URL || 'xxx',
  CLOUDINARY_URL: process.env.CLOUDINARY_URL || 'xxx',
  SMTP_URL: process.env.SMTP_URL || 'xxx',

  SECRET_KEY: process.env.SECRET_KEY || 'xxx',
};
```

### Continuous integration environments

Add environment variables to the CircleCI build.

```sh
# production
DEPLOY_HOOK=xxx

# development
DEV_DEPLOY_HOOK=xxx

# staging
STAGE_DEPLOY_HOOK=xxx
```

### Continuous delivery environments

Add environment variables to the Render build.

```sh
SITE_URL=xxx

MONGODB_URL=xxx
REDIS_URL=xxx
CLOUDINARY_URL=xxx
SMTP_URL=xxx

SECRET_KEY=xxx
```

## Directory Structure

The structure follows the LIFT Guidelines.

```coffee
.
├── .circleci
├── benchmark -> load testing
├── docs -> api documentation
├── e2e -> e2e testing (Caddy Server proxy api and proxy mock api)
├── mock
│   ├── requests -> mock third-party api
│   └── responses -> mock data for mock api, unit testing, and e2e testing
├── public -> not handled by vite, copy it to dist
├── src
│   ├── assets -> wasm
│   ├── components -> shared module
│   ├── composables -> shared module
│   ├── locales -> core module
│   ├── middleware -> core module
│   ├── plugins -> root module
│   ├── routes -> feature modules
│   ├── templates -> email templates with nunjucks
│   ├── utilities -> shared module
│   ├── app.ts
│   ├── error.ts
│   ├── main.ts
│   └── shims.d.ts
├── .editorconfig
├── .eslintrc
├── .gitignore
├── .prettierrc
├── Caddyfile
├── docker-compose.yml
├── Dockerfile
├── env.ts
├── index.ts -> entrypoint
├── LICENSE
├── package.json
├── pnpm-lock.yaml
├── README.md
├── render.yaml
├── tsconfig.json
└── vite.config.ts
```

## Microservices

> A microservice architecture – a variant of the service-oriented architecture structural style – is an architectural pattern that arranges an application as a collection of loosely-coupled, fine-grained services, communicating through lightweight protocols.

See [Micro-Fullstack's Micro Backends](https://github.com/Shyam-Chen/Micro-Fullstack/tree/main/mbe) for instructions on how to create microservices from source code.

```coffee
api.example.com
├── /auth
│   └── auth.api.example.com
├── /stats
│   └── stats.api.example.com
├── /todoist
│   └── todoist.api.example.com
├── /feature
│   └── feature.api.example.com
├── /files
│   └── files.api.example.com
└── /settings
    └── settings.api.example.com
```
