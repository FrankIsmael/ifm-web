# Ismael Francisco — Portfolio

A personal portfolio built with Next.js, TypeScript, and Tailwind CSS. The main page uses a original near-black palette with off-white text and emerald accents (`oklch(0.72 0.18 162)`), with an introduction, background, engineering experience, selected projects, and contact links. A separate interactive desk lives at `/3d-view`.

## Local development

```sh
yarn install --frozen-lockfile
yarn dev
```

Open [localhost:3000](http://localhost:3000).

```sh
yarn lint                         # ESLint
yarn tsc --noEmit --incremental false  # TypeScript
yarn build                        # Production build
yarn start                        # Serve the production build
```

## Updating the portfolio

- `lib/cv-data.ts`: personal information, experience, education, certifications, and projects. Shared by the main page and the 3D desk.
- `components/`: page sections, navigation, and small shared presentation components.
- `app/globals.css`: portfolio styles and responsive layouts. The main page and the 3D desk share the original color tokens in `:root`.
- `app/layout.tsx` and `app/opengraph-image.tsx`: search and social sharing metadata.
- `public/ifm.png`: profile photo.
- `public/CV-IsmaelFranciscoMoreno2026.pdf`: downloadable CV.

The first entry in `cvData.projects` is the featured project, currently ACP Agent. A project with an empty `url` displays an overview without a website link. Project artwork is rendered locally with CSS and SVG.
