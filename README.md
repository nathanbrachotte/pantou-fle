# Pantou-fle

Ressources gratuites pour apprendre le Français Langue Etrangere (FLE).

Built with [Astro](https://astro.build), [React](https://react.dev), [Tailwind CSS](https://tailwindcss.com), and [Contentful](https://www.contentful.com).

## Prerequisites

- [Node.js](https://nodejs.org) >= 18
- [pnpm](https://pnpm.io) (declared via `packageManager` in `package.json`)

## Getting started

1. Clone the repository and install dependencies:

```bash
pnpm install
```

2. Copy the environment file and fill in your Contentful credentials:

```bash
cp .env.example .env
```

| Variable | Description |
| --- | --- |
| `CONTENTFUL_SPACE_ID` | Your Contentful space ID |
| `CONTENTFUL_ACCESS_TOKEN` | Your Contentful Content Delivery API access token |
| `GOOGLE_ADSENSE_CLIENT_ID` | (optional) Google AdSense publisher ID |
| `DEV` | Set to `true` to show the dev indicator bar |

3. Start the development server:

```bash
pnpm dev
```

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the local dev server |
| `pnpm build` | Build the production site to `./dist` |
| `pnpm preview` | Preview the production build locally |

## Project structure

```
src/
├── assets/          # SVG icon/logo Astro components
├── components/      # Astro (.astro) and React (.tsx) components
├── layouts/         # Base page layout with SEO, analytics, ads
├── lib/             # Shared utilities, constants, Contentful client
├── pages/           # File-based routing
│   ├── index.astro
│   ├── about.astro
│   ├── 404.astro
│   ├── privacy-policy.astro
│   ├── [slug].astro              # Individual activity pages
│   └── [level]/[activity].astro  # Filtered listing pages
└── styles/          # Global CSS and Tailwind directives
public/              # Static assets (images, favicon, robots.txt)
```

## Tech stack

- **Framework** -- Astro 4 (static output)
- **Interactive islands** -- React 18 via `@astrojs/react` (PDF viewer, rich text renderer)
- **Styling** -- Tailwind CSS 3
- **CMS** -- Contentful (direct SDK, no GraphQL)
- **SEO** -- `astro-seo`, `@astrojs/sitemap`
- **Analytics** -- Simple Analytics
- **Ads** -- Google AdSense
- **Deployment** -- Netlify
