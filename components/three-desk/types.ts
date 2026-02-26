import type * as THREE from 'three';

export type SectionId = 'about' | 'projects' | 'contact' | null;

export interface HitRect {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface ScreenTextureHandles {
  canvas: HTMLCanvasElement;
  texture: THREE.CanvasTexture;
  redraw: (hoveredItem: SectionId) => void;
  hitRects: Record<NonNullable<SectionId>, HitRect>;
}
