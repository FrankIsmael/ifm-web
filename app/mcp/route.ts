import { WebStandardStreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js';
import { createWebsiteMcpServer } from '@/lib/website-mcp';
import { websiteUrl } from '@/lib/website-info';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
const maxBodyBytes = 16 * 1024;

function validOrigin(request: Request) {
  const origin = request.headers.get('origin');
  if (!origin) return true; // Server-to-server MCP clients do not send Origin.
  const allowed = [websiteUrl, 'https://www.ismaelfrancisco.tech'];
  if (process.env.NODE_ENV !== 'production') {
    allowed.push('http://localhost:3000', 'http://127.0.0.1:3000');
  }
  return allowed.includes(origin);
}

export async function POST(request: Request) {
  if (!validOrigin(request)) return new Response('Forbidden', { status: 403 });
  if (request.headers.get('content-type')?.split(';')[0].trim().toLowerCase() !== 'application/json') {
    return new Response('Expected application/json', { status: 415 });
  }

  // Bound actual bytes, including chunked requests without Content-Length.
  const reader = request.body?.getReader();
  const chunks: Uint8Array[] = [];
  let size = 0;
  if (reader) {
    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        size += value.byteLength;
        if (size > maxBodyBytes) {
          await reader.cancel();
          return new Response('Request too large', { status: 413 });
        }
        chunks.push(value);
      }
    } finally {
      reader.releaseLock();
    }
  }

  let parsedBody: unknown;
  try {
    parsedBody = JSON.parse(Buffer.concat(chunks).toString('utf8'));
  } catch {
    return new Response(JSON.stringify({ jsonrpc: '2.0', id: null, error: { code: -32700, message: 'Parse error' } }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Each request is isolated, so the endpoint works on serverless deployments.
  const server = createWebsiteMcpServer();
  const transport = new WebStandardStreamableHTTPServerTransport({
    sessionIdGenerator: undefined,
    enableJsonResponse: true,
  });
  try {
    await server.connect(transport);
    return await transport.handleRequest(request, { parsedBody });
  } finally {
    await server.close();
  }
}

export function GET(request: Request) {
  if (!validOrigin(request)) return new Response('Forbidden', { status: 403 });
  return new Response('Use MCP Streamable HTTP POST requests. See /llms.txt.', {
    status: 405,
    headers: { Allow: 'POST' },
  });
}

export const DELETE = GET;
