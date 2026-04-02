# Admin Frontend

This repository contains the Coz admin frontend.

It is a React application built with TanStack Start, TanStack Router, Vite, Tailwind CSS, React Hook Form, and Zod.

## Role in the workspace

This repo is part of a three-repository local workspace:

```text
coz/
  admin-frontend/
  backend/
  dev/
```

- `admin-frontend`: admin UI source code
- `backend`: backend API
- `dev`: canonical full-stack local entrypoint

If you want to run the entire system locally, start from the `dev` repo. This repo can still be run on its own for isolated frontend work.

## Local development

### Recommended: run through the shared dev repo

From `dev`:

```bash
cp .env.example .env
task install:frontend
task up
```

That workflow starts the frontend together with the backend and Postgres using the shared local environment.

### Frontend-only workflow

From this repo:

```bash
npm install
npm run dev
```

Default local URL:

- `http://localhost:3000`

## Available scripts

- `npm run dev`: start the Vite development server
- `npm run build`: produce a production build
- `npm run preview`: preview the production build locally
- `npm run test`: run the Vitest test suite

## Environment notes

The current login flow uses local mock credentials sourced from the shared `dev` repo during the full-stack Docker workflow.

Relevant variables:

- `VITE_DEV_ADMIN_EMAIL`
- `VITE_DEV_ADMIN_PASSWORD`

In the shared Docker-based setup, those values come from `dev/.env`.

## Current frontend structure

The app is small right now and follows a feature-first structure for domain code.

- `src/routes`: route files and page composition
- `src/features`: feature-owned UI, validation, services, and tests
- `src/lib`: shared cross-cutting utilities
- `src/styles.css`: application styles

Current implemented feature:

- `src/features/auth/login`: local login form, schema, service, telemetry, and tests

## Architecture notes

- Keep route files thin and move domain behavior into `src/features`.
- Colocate form UI, schema, service logic, telemetry, and tests inside the feature folder that owns them.
- Prefer reusable shared code in `src/lib` only when it is truly cross-feature.

## Testing

Run:

```bash
npm run test
```

The project uses Vitest and Testing Library for component and behavior-focused tests.
