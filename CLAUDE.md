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

Note: `next` is pinned at 13.4.9 with React 18. Upgrading is deferred — check API compatibility
(especially `MetadataRoute`, `next-mdx-remote`, and the `@react-three/fiber` v8 stack) before doing it.

## Architecture

A personal portfolio / services site built with Next.js 13 App Router: a single-page home
at `/`, plus an MDX blog at `/blog` and a 3D easter egg at `/3d-view`.

**Key files:**
- `app/page.tsx` — Composes the home page from section components. Server Component; the sections themselves are `'use client'`.
- `lib/content/` — Single source of truth for all user-facing copy. **All content updates go here.**
  - `types.ts` — the `Content` interface and `Locale` type
  - `en.ts` — the full English copy (the only complete dictionary today)
  - `es.ts` — `Partial<Content>` stub for a future Spanish translation
  - `index.ts` — `getContent(locale = 'en')`, which merges the locale over English
- `lib/blog.ts` — Reads `content/blog/*.mdx` at build time (frontmatter via `gray-matter`).
- `lib/site.ts` — `SITE_URL`, the canonical origin used by metadata, sitemap, robots, and JSON-LD.
- `app/layout.tsx` — Root layout with metadata, Google Analytics (gtag), and Vercel Analytics.
- `app/globals.css` — Tailwind base plus the `:root` CSS variables that define the (dark-only) palette.

**Stack:**
- Next.js 13.4.9 with App Router
- TypeScript
- Tailwind CSS for styling — a forced-dark near-black palette with an emerald accent
  (`--highlight`). There is no light theme and no theme toggle.
- Framer Motion for scroll-triggered and entrance animations
- `@vercel/analytics` for page view tracking
- Deployed on Vercel

**Page structure (`app/page.tsx` composes `components/*`):**
1. `Nav` — sticky, with a mobile disclosure menu below `md`
2. `Hero` — full-screen: photo, `headline`, `subheadline`, skills chips, CTAs
3. `Services` — 5 service cards + a trailing "Something else?" CTA cell, then trust signals
4. `Projects` — problem / what I did / result cards from `content.projects`
5. `Experience` — jobs, then "Selected Impact" from `content.achievements`, then education
6. `Contact` — WhatsApp (primary) + email CTAs, recruiter note, and the full link list
7. `SiteFooter` — shared with the blog routes

**Animation:** Framer Motion is used for the `/3d-view` overlay panels. The home page sections are
plain CSS/Tailwind — there is no shared scroll-reveal variant.

**CV PDF:** Stored at `public/CV-IsmaelFranciscoMoreno2026.pdf` and served statically.

### Content & localization conventions

- Every user-facing string lives in `lib/content/en.ts`. Never inline copy in a component.
- Components read content via `const c = getContent();` at module scope — they take no props.
- To add Spanish later: fill in `lib/content/es.ts` (a `Partial<Content>`, so it can be done
  field by field), then add locale routing. No i18n library is installed yet, deliberately.

---

## Blog (`/blog`)

- Posts are `content/blog/*.mdx` with frontmatter: `title`, `description`, `date` (`YYYY-MM-DD`),
  `tags`, `draft`.
- `lib/blog.ts` exposes `getAllPosts()` / `getPostBySlug()` / `getPostSlugs()` / `formatPostDate()`.
  Posts sort newest-first. **`draft: true` posts are visible in `yarn dev` and excluded from
  production builds** — so they also stay out of the production sitemap.
- Routes: `app/blog/page.tsx` (index) and `app/blog/[slug]/page.tsx`, which uses
  `generateStaticParams` + `generateMetadata` so every post is statically generated.
- MDX is compiled with `next-mdx-remote/rsc` (not `@next/mdx`, which only handles `.mdx` files
  placed as routes). Body styling comes from `@tailwindcss/typography`'s `prose` classes.

## SEO

- `lib/site.ts` holds `SITE_URL`. `app/layout.tsx` sets `metadataBase` from it, so all OG and
  canonical URLs resolve absolutely.
- `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and `/robots.txt`.
  Note: Next 13.4's `MetadataRoute.Sitemap` only accepts `url` and `lastModified`.
- JSON-LD: `Person` + `ProfessionalService` in `app/layout.tsx`, `BlogPosting` per post.

## Styling conventions

- Colors are CSS variables in `app/globals.css`, exposed as Tailwind tokens in
  `tailwind.config.js`. Use `bg-highlight` / `text-highlight`, never a raw `oklch(...)` literal.
- **Tailwind 3.3 cannot apply an opacity modifier to a bare `var()` color**, so `bg-highlight/40`
  silently renders at full opacity. Use the pre-mixed `--highlight-soft` (0.4),
  `--highlight-faint` (0.3), and `--highlight-glow` (0.08) tokens instead.
- Fonts: Inter (`--font-inter`) and JetBrains Mono (`--font-jetbrains`) are wired into
  `theme.extend.fontFamily`, so `font-sans` / `font-mono` resolve to them.

---

## 3D View (`/3d-view`)

A separate immersive route built with **@react-three/fiber** + **@react-three/drei** on Three.js,
with **GSAP** driving the camera fly-in.

**Files:**
- `app/3d-view/page.tsx` — `'use client'` entry, mounts `DeskScene`
- `app/3d-view/layout.tsx` — Server Component with page metadata
- `components/three-desk/types.ts` — Shared TS interfaces (`SectionId`, `HitRect`, `ScreenTextureHandles`)
- `components/three-desk/buildScreenTexture.ts` — Canvas 2D texture for the monitor screen; returns `hitRects` map for UV-based hit detection
- `components/three-desk/MacModel.tsx` — Loads `/mac-draco.glb` (from `public/`) via `useGLTF`
- `components/three-desk/DeskObjects.tsx` — `DeskPlatform`, `Mug`, `Headphones`, `Phone` meshes
- `components/three-desk/SceneOverlay.tsx` — Framer Motion overlay panels (About/Projects/Contact) over the canvas
- `components/three-desk/DeskScene.tsx` — Top-level client component; wires the Canvas, camera rig, and raycaster

**Known issue:** the "loading scene…" overlay in `DeskScene.tsx` is gated on `isLoaded`, which is
only set by `CameraRig`'s GSAP fly-in `onComplete`. That callback does not currently fire, so the
overlay covers the canvas even though the scene renders behind it.

**Key patterns:**
- `app/3d-view/page.tsx` imports `DeskScene` via `next/dynamic` with `ssr: false` — the scene must
  never render on the server
- Raycaster uses UV coordinates on the monitor screen mesh to hit-test against `hitRects` from the canvas texture
- GSAP is loaded with `await import('gsap')` inside the effect that starts the camera tween
- `next.config.js` has `transpilePackages: ['three']` required for Three.js ESM
- The model is `public/mac-draco.glb`, Draco-compressed; drei fetches the decoder from gstatic at runtime

---

## Security

### `ignore-scripts` — when to use it

`ignore-scripts` prevents yarn from running `preinstall`, `install`, and `postinstall` scripts inside packages. This is a supply-chain attack mitigation, but it **cannot be enabled globally in this repo** because `next`, `three`, `@react-three/fiber`, and `@react-three/drei` all rely on postinstall scripts to compile native binaries.

| Situation | Use it? |
|---|---|
| CI audit step (dependency scan, no build needed) | Yes |
| Inspecting an unfamiliar/new package before trusting it | Yes |
| Fresh install in a sandboxed/security-review environment | Yes |
| Normal `yarn install` for development or production build | **No** |
| Any package with native bindings (`next`, `three`, `sharp`, `esbuild`, …) | **No** |

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
