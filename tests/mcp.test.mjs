import assert from 'node:assert/strict';
import { test } from 'node:test';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';

const endpoint = new URL(process.env.MCP_TEST_URL || 'http://localhost:3000/mcp');

test('an MCP client discovers and reads matching tool and resource data', async () => {
  const client = new Client({ name: 'portfolio-test', version: '1.0.0' });
  try {
    await client.connect(new StreamableHTTPClientTransport(endpoint));
    const { tools } = await client.listTools();
    assert.ok(tools.some(tool => tool.name === 'get_website_info' && tool.annotations.readOnlyHint));
    const { resources } = await client.listResources();
    assert.ok(resources.some(resource => resource.uri === 'website://portfolio'));
    const result = await client.callTool({ name: 'get_website_info', arguments: {} });
    const info = JSON.parse(result.content[0].text);
    assert.equal(info.profile.name, 'Ismael Francisco Moreno');
    assert.ok(info.projects.length > 0);
    assert.ok(info.experience.length > 0);
    assert.equal(info.contact.cv, 'https://ismaelfrancisco.tech/CV-IsmaelFranciscoMoreno2026.pdf');
    assert.equal('agentUrl' in info, false);
    const resource = await client.readResource({ uri: 'website://portfolio' });
    assert.deepEqual(JSON.parse(resource.contents[0].text), info);
    const unknown = await client.callTool({ name: 'nonexistent', arguments: {} });
    assert.equal(unknown.isError, true);
    await assert.rejects(client.readResource({ uri: 'file:///etc/passwd' }));
  } finally {
    await client.close();
  }
});

test('transport rejects invalid origins, malformed JSON, and oversized bodies', async () => {
  const post = (body, extra = {}) => fetch(endpoint, {
    method: 'POST', headers: {
      'Content-Type': 'application/json', Accept: 'application/json, text/event-stream', ...extra,
    }, body,
  });
  assert.equal((await post('{}', { Origin: 'https://untrusted.example' })).status, 403);
  assert.equal((await post('{')).status, 400);
  assert.equal((await post('x'.repeat(16385))).status, 413);
  assert.equal((await post('{}', { 'Content-Type': 'text/plain' })).status, 415);
  assert.equal((await fetch(endpoint)).status, 405);
  const discovery = await fetch(new URL('/llms.txt', endpoint));
  assert.equal(discovery.status, 200);
  assert.match(await discovery.text(), /get_website_info/);
});
