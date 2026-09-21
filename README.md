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

## Public MCP endpoint

Agents can connect to `https://ismaelfrancisco.tech/mcp` after deployment (locally,
`http://localhost:3000/mcp`) using Streamable HTTP. This uses the official
[MCP TypeScript SDK](https://ts.sdk.modelcontextprotocol.io/server), with stateless
JSON responses and no authentication because all exposed content is public.

- `tools/list` discovers `get_website_info`, called with `{}`.
- `resources/list` discovers `website://portfolio`; `resources/read` returns JSON.
- Both return biography, skills, experience, projects, education, certifications,
  public contact information, and page/CV links sourced from `lib/cv-data.ts`.
- `/llms.txt`, linked from the footer, describes the endpoint for visiting agents.
  This is a discovery aid, not automatic registration with every MCP client;
  configure the endpoint URL in your agent’s MCP settings.

Example for clients supporting `mcpServers` with HTTP URLs:

```json
{
  "mcpServers": {
    "ismael-portfolio": {
      "url": "https://ismaelfrancisco.tech/mcp"
    }
  }
}
```

The endpoint supports POST only (GET/DELETE return 405; no persistent SSE stream).
Requests must accept `application/json, text/event-stream` and send JSON.
Browser origins are restricted to the canonical and www domains, plus localhost
port 3000 in development. Server-to-server clients can omit Origin. Requests are
limited to 16 KiB. Configure rate limiting at the hosting/CDN layer if needed;
there is no shared in-memory rate limiter across serverless instances.

With the dev server running, run the MCP integration checks:

```sh
node --test tests/mcp.test.mjs
```

Set `MCP_TEST_URL` to test another local endpoint.
