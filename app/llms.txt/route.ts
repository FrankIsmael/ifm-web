import { websiteInfo, websiteUrl } from '@/lib/website-info';

export function GET() {
  return new Response(`# ${websiteInfo.title}

> ${websiteInfo.profile.summary}

## Public information for agents

- [Portfolio](${websiteUrl}/): Biography, skills, work experience, projects, and contact links.
- [CV](${websiteInfo.contact.cv}): Downloadable résumé.

## MCP server

Endpoint: ${websiteUrl}/mcp
Transport: Streamable HTTP (POST, JSON responses)
Authentication: none; public, read-only portfolio content.
Tool: get_website_info (no arguments).
Resource: website://portfolio (application/json).

Connect an MCP client to the endpoint, initialize, then use tools/list or resources/list to discover the available information. Call get_website_info or read website://portfolio for the full public profile, experience, projects, skills, education, certifications, and contact links.
`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
