# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev        # Start development server at http://localhost:3000
yarn build      # Build for production
yarn start      # Run production build
yarn lint       # Run ESLint via next lint
```

This project uses **yarn** as the package manager (not npm or pnpm).

## Architecture

This is a single-page personal portfolio/CV website built with Next.js 13 App Router.

**Key files:**
- `app/page.tsx` — The entire site UI (single page, client component using `'use client'`). Contains all sections: Hero, About, Projects, Contact, Footer.
- `lib/cv-data.ts` — Single source of truth for all personal/professional content (name, bio, skills, experience, projects, contact links). **All content updates go here.**
- `app/layout.tsx` — Root layout with metadata, Google Analytics (gtag), and Vercel Analytics.
- `app/globals.css` — Minimal global styles; Tailwind base + smooth scroll + CSS variables for light/dark colors.

**Stack:**
- Next.js 13.4.9 with App Router
- TypeScript
- Tailwind CSS for styling (stone/neutral palette, dark mode via `prefers-color-scheme`)
- Framer Motion for scroll-triggered and entrance animations
- `@vercel/analytics` for page view tracking
- Deployed on Vercel

**Page structure (all in `app/page.tsx`):**
1. Sticky nav with anchor links
2. Hero section — full-screen with animated profile photo, name, tagline, CTA buttons
3. About section — bio from `cvData.summary`/`cvData.summaryExtra` + skills chips
4. Projects section — responsive 2-col grid of cards pulled from `cvData.projects`
5. Contact section — links to LinkedIn, GitHub, email, and CV PDF download
6. Footer

**Animation pattern:** Framer Motion `motion.div` with `initial="hidden" whileInView="visible" viewport={{ once: true }}` — the shared `inView` variant is defined at the top of `page.tsx`. Hero elements use staggered `animate` (not scroll-triggered).

**CV PDF:** Stored at `public/CV-IsmaelFranciscoMoreno2026.pdf` and served statically.

---

## Security

### `ignore-scripts` — when to use it

`ignore-scripts` prevents yarn from running `preinstall`, `install`, and `postinstall` scripts inside packages. This is a supply-chain attack mitigation, but it **cannot be enabled globally in this repo** because some dependencies may require install scripts to set up native binaries.

| Situation | Use it? |
|---|---|
| CI audit step (dependency scan, no build needed) | Yes |
| Inspecting an unfamiliar/new package before trusting it | Yes |
| Fresh install in a sandboxed/security-review environment | Yes |
| Normal `yarn install` for development or production build | **No** |
| Any package with native bindings (`next`, `sharp`, `esbuild`, …) | **No** |

### How to enable temporarily (no config file changes)

```bash
# One-off install with scripts disabled
yarn install --ignore-scripts

# Audit a single package in isolation
mkdir /tmp/audit && cd /tmp/audit && yarn add <package> --ignore-scripts
```

### How to safely audit a suspicious package

1. `yarn add <package> --ignore-scripts` — install without running its scripts
2. Open `node_modules/<package>/package.json` and read the `scripts.preinstall`, `scripts.install`, and `scripts.postinstall` fields
3. Read the referenced script files manually
4. If safe → re-run `yarn install` (without the flag) to let scripts execute normally
5. If unsafe → `yarn remove <package>` immediately

### Yarn Classic v1 config reference

To enable globally (only appropriate for audit-only environments with no native deps):

```
# .yarnrc
ignore-scripts true
```

> Do NOT commit this for this repo — it will break the build.
