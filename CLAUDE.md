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

## 3D View (`/3d-view`)

A separate immersive route built with **Three.js** (raw, no react-three-fiber) and **GSAP**.

**Files:**
- `app/3d-view/page.tsx` — `'use client'` entry, mounts `DeskScene`
- `app/3d-view/layout.tsx` — Server Component with page metadata
- `components/three-desk/types.ts` — Shared TS interfaces (`SectionId`, `SceneRefs`, `DeskMeshes`, `ScreenTextureHandles`)
- `components/three-desk/buildScreenTexture.ts` — Canvas 2D texture for the monitor screen; returns `hitRects` map for UV-based hit detection
- `components/three-desk/buildDeskGeometry.ts` — Creates all Three.js meshes (desk, monitor, keyboard, mug, plant)
- `components/three-desk/useSceneSetup.ts` — Bootstraps renderer, scene, lights, render loop; all Three.js imports are dynamic inside `useEffect` to avoid SSR
- `components/three-desk/useGsapAnimations.ts` — GSAP timelines for camera fly-in, section focus, and back transitions
- `components/three-desk/SceneOverlay.tsx` — Framer Motion overlay panels (About/Projects/Contact) over the canvas
- `components/three-desk/DeskScene.tsx` — Top-level client component; wires all hooks + raycaster

**Key patterns:**
- All Three.js code uses `await import('three')` inside `useEffect` to ensure browser-only execution
- Raycaster uses UV coordinates on the monitor screen mesh to hit-test against `hitRects` from the canvas texture
- GSAP camera tweens use `onUpdate: () => camera.lookAt(...)` on every tick — critical for orientation
- `next.config.js` has `transpilePackages: ['three']` required for Three.js ESM
