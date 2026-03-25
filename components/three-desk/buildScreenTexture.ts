import type * as THREE_TYPE from 'three';
import type { SectionId, ScreenTextureHandles, HitRect } from './types';

const CANVAS_W = 1024;
const CANVAS_H = 600;

// Emerald accent matching the site's --highlight: oklch(0.72 0.18 162)
const ACCENT = '#34d399';
const ACCENT_DIM = 'rgba(52,211,153,0.5)';
const ACCENT_GLOW = 'rgba(52,211,153,0.25)';
const ACCENT_SUBTLE = 'rgba(52,211,153,0.12)';
const BORDER = 'rgba(255,255,255,0.08)';
const DIM = 'rgba(255,255,255,0.35)';
const MUTED = 'rgba(255,255,255,0.55)';

const ITEMS: { label: string; id: NonNullable<SectionId>; icon: string }[] = [
  { label: 'About Me', id: 'about', icon: '>' },
  { label: 'Projects', id: 'projects', icon: '#' },
  { label: 'Contact', id: 'contact', icon: '@' },
];

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

    // ── Background: near black ──────────────────────────────────────────────
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);

    // Subtle grid texture
    ctx.strokeStyle = 'rgba(255,255,255,0.025)';
    ctx.lineWidth = 1;
    for (let x = 0; x < CANVAS_W; x += 64) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, CANVAS_H);
      ctx.stroke();
    }
    for (let y = 0; y < CANVAS_H; y += 64) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(CANVAS_W, y);
      ctx.stroke();
    }

    // ── Top accent line ─────────────────────────────────────────────────────
    const barGrad = ctx.createLinearGradient(100, 0, CANVAS_W - 100, 0);
    barGrad.addColorStop(0, 'rgba(52,211,153,0)');
    barGrad.addColorStop(0.3, ACCENT);
    barGrad.addColorStop(0.7, ACCENT);
    barGrad.addColorStop(1, 'rgba(52,211,153,0)');
    ctx.shadowColor = ACCENT;
    ctx.shadowBlur = 12;
    ctx.fillStyle = barGrad;
    ctx.fillRect(80, 28, CANVAS_W - 160, 2);
    ctx.shadowBlur = 0;

    // ── Header text ─────────────────────────────────────────────────────────
    ctx.shadowColor = ACCENT;
    ctx.shadowBlur = 6;
    ctx.font = 'bold 16px monospace';
    ctx.fillStyle = ACCENT;
    ctx.textAlign = 'left';
    ctx.fillText('ismael@dev:~$', 46, 68);
    ctx.shadowBlur = 0;
    ctx.fillStyle = MUTED;
    ctx.fillText(' portfolio --interactive', 210, 68);

    // ── Divider ─────────────────────────────────────────────────────────────
    ctx.strokeStyle = BORDER;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(46, 86);
    ctx.lineTo(CANVAS_W - 46, 86);
    ctx.stroke();

    // ── Nav items ───────────────────────────────────────────────────────────
    const pillW = 380;
    const pillH = 64;
    const pillX = (CANVAS_W - pillW) / 2;
    const startY = 120;
    const gap = 96;

    ITEMS.forEach(({ label, id, icon }, i) => {
      const py = startY + i * gap;
      const isHovered = hoveredItem === id;

      hitRects[id] = { x: pillX, y: py, w: pillW, h: pillH };

      // Item background
      ctx.fillStyle = isHovered ? ACCENT_SUBTLE : 'rgba(255,255,255,0.03)';
      ctx.fillRect(pillX, py, pillW, pillH);

      // Item border
      ctx.strokeStyle = isHovered ? ACCENT_DIM : BORDER;
      ctx.lineWidth = 1;
      if (isHovered) {
        ctx.shadowColor = ACCENT;
        ctx.shadowBlur = 12;
      }
      ctx.strokeRect(pillX, py, pillW, pillH);
      ctx.shadowBlur = 0;

      // Left accent bar (hovered)
      if (isHovered) {
        ctx.fillStyle = ACCENT;
        ctx.fillRect(pillX, py, 3, pillH);
      }

      // Icon
      ctx.font = 'bold 18px monospace';
      ctx.fillStyle = isHovered ? ACCENT : DIM;
      ctx.textAlign = 'left';
      ctx.fillText(icon, pillX + 24, py + pillH / 2 + 6);

      // Label
      ctx.font = `${isHovered ? '600' : '400'} 22px monospace`;
      ctx.fillStyle = isHovered ? '#f5f5f5' : MUTED;
      if (isHovered) {
        ctx.shadowColor = 'rgba(255,255,255,0.15)';
        ctx.shadowBlur = 4;
      }
      ctx.textAlign = 'center';
      ctx.fillText(label.toUpperCase(), pillX + pillW / 2, py + pillH / 2 + 7);
      ctx.shadowBlur = 0;

      // Arrow (hovered)
      if (isHovered) {
        ctx.font = '18px monospace';
        ctx.fillStyle = ACCENT;
        ctx.textAlign = 'right';
        ctx.fillText('→', pillX + pillW - 18, py + pillH / 2 + 6);
      }

      ctx.textAlign = 'left';
    });

    // ── Footer ──────────────────────────────────────────────────────────────
    ctx.font = '12px monospace';
    ctx.fillStyle = DIM;
    ctx.textAlign = 'center';
    ctx.fillText('[ click to select ]', CANVAS_W / 2, CANVAS_H - 22);
    ctx.textAlign = 'left';

    // ── Corner brackets ─────────────────────────────────────────────────────
    const cSize = 16;
    const cPad = 14;
    ctx.strokeStyle = ACCENT_GLOW;
    ctx.lineWidth = 1;
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
