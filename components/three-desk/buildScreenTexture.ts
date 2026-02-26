import type * as THREE_TYPE from 'three';
import type { SectionId, ScreenTextureHandles, HitRect } from './types';

const CANVAS_W = 1024;
const CANVAS_H = 600;

const ITEMS: { label: string; id: NonNullable<SectionId>; icon: string }[] = [
  { label: 'About Me', id: 'about', icon: '>' },
  { label: 'Projects', id: 'projects', icon: '#' },
  { label: 'Contact', id: 'contact', icon: '@' },
];

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

export function buildScreenTexture(
  THREE: typeof THREE_TYPE,
): ScreenTextureHandles {
  // Draw canvas: content is rendered here normally (correct orientation).
  const canvas = document.createElement('canvas');
  canvas.width = CANVAS_W;
  canvas.height = CANVAS_H;
  const ctx = canvas.getContext('2d')!;

  // Texture canvas: receives a transformed copy of the draw canvas.
  // The mac-draco GLB screen UV orientation requires a vertical flip here
  // so the final on-screen text appears the right way round.
  const texCanvas = document.createElement('canvas');
  texCanvas.width = CANVAS_W;
  texCanvas.height = CANVAS_H;
  const texCtx = texCanvas.getContext('2d')!;

  const hitRects: Record<NonNullable<SectionId>, HitRect> = {
    about: { x: 0, y: 0, w: 0, h: 0 },
    projects: { x: 0, y: 0, w: 0, h: 0 },
    contact: { x: 0, y: 0, w: 0, h: 0 },
  };

  const texture = new THREE.CanvasTexture(texCanvas);

  function redraw(hoveredItem: SectionId) {
    ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);

    // ── Background: pure black ───────────────────────────────────────────────
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);

    // Subtle scan lines for CRT feel
    ctx.fillStyle = 'rgba(255,255,255,0.018)';
    for (let y = 0; y < CANVAS_H; y += 3) {
      ctx.fillRect(0, y, CANVAS_W, 1);
    }

    // ── Neon top bar ────────────────────────────────────────────────────────
    const barGrad = ctx.createLinearGradient(100, 0, CANVAS_W - 100, 0);
    barGrad.addColorStop(0, 'rgba(0,220,255,0)');
    barGrad.addColorStop(0.3, 'rgba(0,220,255,1)');
    barGrad.addColorStop(0.7, 'rgba(100,140,255,1)');
    barGrad.addColorStop(1, 'rgba(150,80,255,0)');
    ctx.shadowColor = '#00ddff';
    ctx.shadowBlur = 18;
    ctx.fillStyle = barGrad;
    roundRect(ctx, 80, 28, CANVAS_W - 160, 5, 3);
    ctx.fill();
    ctx.shadowBlur = 0;

    // ── Header text ─────────────────────────────────────────────────────────
    ctx.shadowColor = '#00ccff';
    ctx.shadowBlur = 8;
    ctx.font = 'bold 18px monospace';
    ctx.fillStyle = '#00ddff';
    ctx.textAlign = 'left';
    ctx.fillText('ismael@dev:~$', 46, 74);
    ctx.shadowBlur = 0;
    ctx.fillStyle = '#ccddff';
    ctx.fillText(' portfolio --interactive', 224, 74);

    // ── Divider ─────────────────────────────────────────────────────────────
    ctx.strokeStyle = 'rgba(0,200,255,0.2)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(46, 92);
    ctx.lineTo(CANVAS_W - 46, 92);
    ctx.stroke();

    // ── Nav items ───────────────────────────────────────────────────────────
    const pillW = 380;
    const pillH = 68;
    const pillX = (CANVAS_W - pillW) / 2;
    const startY = 130;
    const gap = 100;

    ITEMS.forEach(({ label, id, icon }, i) => {
      const py = startY + i * gap;
      const isHovered = hoveredItem === id;

      hitRects[id] = { x: pillX, y: py, w: pillW, h: pillH };

      // Pill background — visible fill even when not hovered
      roundRect(ctx, pillX, py, pillW, pillH, 14);
      ctx.fillStyle = isHovered
        ? 'rgba(0,180,255,0.15)'
        : 'rgba(255,255,255,0.06)';
      ctx.fill();

      // Pill border — bright on black
      roundRect(ctx, pillX, py, pillW, pillH, 14);
      ctx.shadowColor = isHovered ? '#00ccff' : '#4488ff';
      ctx.shadowBlur = isHovered ? 20 : 6;
      ctx.strokeStyle = isHovered ? '#00ddff' : 'rgba(80,160,255,0.7)';
      ctx.lineWidth = isHovered ? 2 : 1.5;
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Left accent bar (hovered)
      if (isHovered) {
        ctx.shadowColor = '#00eeff';
        ctx.shadowBlur = 12;
        ctx.fillStyle = '#00eeff';
        roundRect(ctx, pillX + 3, py + 16, 4, pillH - 32, 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Icon
      ctx.font = 'bold 21px monospace';
      ctx.fillStyle = isHovered ? '#00ddff' : 'rgba(80,180,255,0.8)';
      ctx.textAlign = 'left';
      ctx.fillText(icon, pillX + 24, py + pillH / 2 + 8);

      // Label — pure white on hover, bright grey otherwise
      ctx.font = `${isHovered ? '700' : '500'} 26px -apple-system, BlinkMacSystemFont, sans-serif`;
      ctx.fillStyle = isHovered ? '#ffffff' : '#ddeeff';
      if (isHovered) {
        ctx.shadowColor = '#ffffff';
        ctx.shadowBlur = 6;
      }
      ctx.textAlign = 'center';
      ctx.fillText(label, pillX + pillW / 2, py + pillH / 2 + 9);
      ctx.shadowBlur = 0;

      // Arrow (hovered)
      if (isHovered) {
        ctx.font = '22px monospace';
        ctx.fillStyle = '#00ccff';
        ctx.textAlign = 'right';
        ctx.fillText('→', pillX + pillW - 18, py + pillH / 2 + 8);
      }

      ctx.textAlign = 'left';
    });

    // ── Footer ──────────────────────────────────────────────────────────────
    ctx.font = '13px monospace';
    ctx.fillStyle = 'rgba(0,200,255,0.5)';
    ctx.textAlign = 'center';
    ctx.fillText('[ click to select ]', CANVAS_W / 2, CANVAS_H - 22);
    ctx.textAlign = 'left';

    // ── Corner decorations ──────────────────────────────────────────────────
    const cColor = 'rgba(0,200,255,0.35)';
    const cSize = 20;
    const cPad = 14;
    ctx.strokeStyle = cColor;
    ctx.lineWidth = 1.5;
    const corners = [
      [cPad, cPad, 1, 1],
      [CANVAS_W - cPad, cPad, -1, 1],
      [cPad, CANVAS_H - cPad, 1, -1],
      [CANVAS_W - cPad, CANVAS_H - cPad, -1, -1],
    ] as [number, number, number, number][];
    for (const [cx, cy, dx, dy] of corners) {
      ctx.beginPath();
      ctx.moveTo(cx + dx * cSize, cy);
      ctx.lineTo(cx, cy);
      ctx.lineTo(cx, cy + dy * cSize);
      ctx.stroke();
    }

    // The model UVs introduce a horizontal reversal after a 180deg rotation.
    // Compensate with the equivalent transform (vertical flip) so text reads correctly.
    texCtx.clearRect(0, 0, CANVAS_W, CANVAS_H);
    texCtx.save();
    texCtx.translate(0, CANVAS_H);
    texCtx.scale(1, -1);
    texCtx.drawImage(canvas, 0, 0);
    texCtx.restore();
    texture.needsUpdate = true;
  }

  redraw(null);

  return { canvas, texture, redraw, hitRects };
}
