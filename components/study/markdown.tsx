import { Fragment, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * Minimal Markdown renderer for card faces. It builds React elements directly
 * (never raw HTML), so card content can't inject markup.
 * Supports: ```fences```, # headings, - / 1. lists, > quotes, `code`,
 * **bold**, *italic*, [links](https://...) and single line breaks.
 */
export function Markdown({ source, className }: { source: string; className?: string }) {
  return <div className={cn('study-md', className)}>{blocks(source)}</div>;
}

const FENCE = /^```\s*([\w+-]*)\s*$/;
const HEADING = /^(#{1,3})\s+(.*)$/;
const BULLET = /^\s*[-*+]\s+(.*)$/;
const ORDERED = /^\s*\d+[.)]\s+(.*)$/;
const QUOTE = /^>\s?(.*)$/;

function startsBlock(line: string) {
  return FENCE.test(line) || HEADING.test(line) || BULLET.test(line) || ORDERED.test(line) || QUOTE.test(line);
}

function blocks(source: string): ReactNode[] {
  const lines = source.replace(/\r\n?/g, '\n').split('\n');
  const out: ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const key = out.length;

    if (!line.trim()) {
      i++;
      continue;
    }

    const fence = line.match(FENCE);
    if (fence) {
      const code: string[] = [];
      i++;
      while (i < lines.length && !/^```\s*$/.test(lines[i])) code.push(lines[i++]);
      i++; // closing fence
      out.push(
        <pre key={key} data-lang={fence[1] || undefined}>
          <code>{code.join('\n')}</code>
        </pre>,
      );
      continue;
    }

    const heading = line.match(HEADING);
    if (heading) {
      const Tag = (['h3', 'h4', 'h5'] as const)[heading[1].length - 1];
      out.push(<Tag key={key}>{inline(heading[2])}</Tag>);
      i++;
      continue;
    }

    for (const [re, Tag] of [
      [BULLET, 'ul'],
      [ORDERED, 'ol'],
    ] as const) {
      if (!re.test(line)) continue;
      const items: string[] = [];
      while (i < lines.length && re.test(lines[i])) items.push(lines[i++].match(re)![1]);
      out.push(
        <Tag key={key}>
          {items.map((item, n) => (
            <li key={n}>{inline(item)}</li>
          ))}
        </Tag>,
      );
      break;
    }
    if (out.length > key) continue;

    if (QUOTE.test(line)) {
      const quoted: string[] = [];
      while (i < lines.length && QUOTE.test(lines[i])) quoted.push(lines[i++].match(QUOTE)![1]);
      out.push(<blockquote key={key}>{blocks(quoted.join('\n'))}</blockquote>);
      continue;
    }

    const para: string[] = [];
    while (i < lines.length && lines[i].trim() && !startsBlock(lines[i])) para.push(lines[i++]);
    out.push(
      <p key={key}>
        {para.map((l, n) => (
          <Fragment key={n}>
            {n > 0 && <br />}
            {inline(l)}
          </Fragment>
        ))}
      </p>,
    );
  }
  return out;
}

const INLINE = /(`[^`]+`)|(\*\*[^*]+\*\*|__[^_]+__)|(\*[^*\s][^*]*\*|_[^_\s][^_]*_)|\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g;

function inline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  for (const m of Array.from(text.matchAll(INLINE))) {
    const index = m.index ?? 0;
    if (index > last) out.push(text.slice(last, index));
    const key = out.length;
    if (m[1]) out.push(<code key={key}>{m[1].slice(1, -1)}</code>);
    else if (m[2]) out.push(<strong key={key}>{inline(m[2].slice(2, -2))}</strong>);
    else if (m[3]) out.push(<em key={key}>{inline(m[3].slice(1, -1))}</em>);
    else
      out.push(
        <a key={key} href={m[5]} target="_blank" rel="noopener noreferrer">
          {m[4]}
        </a>,
      );
    last = index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}
