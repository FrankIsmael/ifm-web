import type * as THREE from 'three';

export type SectionId = 'about' | 'projects' | 'contact' | null;

export interface SceneRefs {
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  controls: unknown; // OrbitControls
  animFrameId: number;
}

export interface DeskMeshes {
  deskPlatform: THREE.Mesh;
  laptopBase: THREE.Mesh;
  laptopScreen: THREE.Mesh;
  laptopScreenMesh: THREE.Mesh; // the interactive screen plane
  laptopHinge: THREE.Mesh;
  keyboard: THREE.Mesh;
  mug: THREE.Group;
  headphones: THREE.Group;
  phone: THREE.Mesh;
  _extras: THREE.Object3D[];
}

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
