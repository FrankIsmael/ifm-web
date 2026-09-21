import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { websiteInfo } from './website-info';

export function createWebsiteMcpServer() {
  const server = new McpServer(
    { name: 'ismael-francisco-portfolio', version: '1.0.0' },
    { instructions: 'Read public information about Ismael Francisco and his portfolio using get_website_info or the website://portfolio resource.' },
  );
  const text = JSON.stringify(websiteInfo, null, 2);

  server.registerTool('get_website_info', {
    title: 'Read portfolio information',
    description: 'Get Ismael Francisco’s public biography, skills, experience, projects, education, certifications, contact links, and website pages.',
    inputSchema: {},
    annotations: {
      readOnlyHint: true,
      destructiveHint: false,
      idempotentHint: true,
      openWorldHint: false,
    },
  }, async () => ({
    content: [{ type: 'text', text }],
    structuredContent: websiteInfo,
  }));

  server.registerResource('portfolio', 'website://portfolio', {
    title: 'Ismael Francisco’s portfolio',
    description: 'Public website information, shared with the portfolio page.',
    mimeType: 'application/json',
  }, async (uri) => ({
    contents: [{ uri: uri.href, mimeType: 'application/json', text }],
  }));

  return server;
}
