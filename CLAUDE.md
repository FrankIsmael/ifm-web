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
- `app/[lang]/page.tsx` — The portfolio page for a locale (`en` or `es`); composes the section components in `components/` and passes them the locale's content.
- `lib/cv-data.ts` (English) and `lib/cv-data.es.ts` (Spanish) — all personal/professional content and UI strings. **Content updates go in both files**; the Spanish file is typed as `CvData`, so a missing key fails the build. Language-independent values (name, links, skills) live in `lib/cv-shared.ts`.
- `lib/content.ts` — `getCvData(locale)`; `lib/i18n.ts` — locale list, cookie name, `localePath()`.
- `app/[lang]/layout.tsx` — Root layout for the portfolio: `<html lang>`, localized metadata + hreflang alternates, chat widget, analytics. `app/study/layout.tsx` is a separate root layout (there is no `app/layout.tsx`).
- `middleware.ts` — locale routing (see i18n below).
- `app/[lang]/privacy`, `app/[lang]/terms` — legal pages used for Meta business verification / WhatsApp Tech Provider review). Copy lives under `pages.*` in both cv-data files; the legal name and fiscal address live in `cv-shared.ts` (`business`) and must match the SAT CSF. Shared shell: `components/doc-page.tsx`; site footer: `components/footer.tsx`. Use `localeHref(lang, path)` for internal links.
- `app/globals.css` — Minimal global styles; Tailwind base + smooth scroll + CSS variables for light/dark colors.

**Stack:**
- Next.js 13.4.9 with App Router
- TypeScript
- Tailwind CSS for styling (stone/neutral palette, dark mode via `prefers-color-scheme`)
- Framer Motion for scroll-triggered and entrance animations
- `@vercel/analytics` for page view tracking
- Deployed on Vercel

**Page structure (composed in `app/[lang]/page.tsx`):**
1. Sticky nav with anchor links
2. Hero section — full-screen with animated profile photo, name, tagline, CTA buttons
3. About section — bio from `cvData.summary`/`cvData.summaryExtra` + skills chips
4. Projects section — responsive 2-col grid of cards pulled from `cvData.projects`
5. Contact section — links to LinkedIn, GitHub, email, and CV PDF download
6. Footer

**i18n (English + Spanish):** native App Router pattern, no library. English is served unprefixed at `/` (the middleware rewrites it to `/en`), Spanish at `/es`; `/en` redirects to `/`. A first visit to `/` with a Spanish `Accept-Language` redirects to `/es` unless the `NEXT_LOCALE` cookie is set — the nav language switcher sets that cookie. Server components receive `content: CvData` as a prop; client components (`nav.tsx`, `chat-widget.tsx`) receive only the labels they need. `/study`, `/llms.txt`, `/mcp` are excluded from the middleware and stay English-only.

**Animation pattern:** Framer Motion `motion.div` with `initial="hidden" whileInView="visible" viewport={{ once: true }}` — the shared `inView` variant is defined at the top of `page.tsx`. Hero elements use staggered `animate` (not scroll-triggered).

**CV PDF:** Stored at `public/CV-IsmaelFranciscoMoreno2026.pdf` and served statically.

**Study app (`/study`):** a private, password-protected flashcard app (Anki-style spaced repetition), separate from the portfolio UI.
- Routes: `app/study/` (login + `(app)` group whose layout enforces auth); JSON API in `app/study/api/*`, every handler wrapped with `route()` from `lib/study/api.ts`.
- Data: Postgres via `postgres` (`lib/study/db.ts`); tables `study_*` are created on first request and the sample deck is seeded once. Queries live in `lib/study/data.ts`.
- Scheduling: pure SM-2 scheduler in `lib/study/srs.ts`, shared by the API and the review UI's button previews.
- Env vars: `POSTGRES_URL`, `STUDY_PASSWORD`, `STUDY_SECRET` (HMAC key for the session cookie), optional `STUDY_TZ` (default `America/Mexico_City`).

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
