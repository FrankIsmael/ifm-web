'use client';

import { useGLTF } from '@react-three/drei';
import type { ScreenTextureHandles, SectionId } from './types';

interface MacModelProps {
  screenHandles: ScreenTextureHandles | null;
  onHover: (id: SectionId) => void;
  onSelect: (id: NonNullable<SectionId>) => void;
  position?: [number, number, number];
  scale?: number | [number, number, number];
  rotation?: [number, number, number];
}

function getHitFromUV(
  uv: { x: number; y: number },
  handles: ScreenTextureHandles,
): SectionId {
  const { width, height } = handles.canvas;
  const px = (1 - uv.x) * width;
  const py = uv.y * height;
  for (const id of ['about', 'projects', 'contact'] as NonNullable<SectionId>[]) {
    const r = handles.hitRects[id];
    if (px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h) return id;
  }
  return null;
}

export function MacModel({ screenHandles, onHover, onSelect, ...props }: MacModelProps) {
  const { nodes, materials } = useGLTF('/mac-draco.glb') as any;

  return (
    <group {...props} dispose={null}>
      <group position={[0.002, -0.038, 0.414]} rotation={[0.014, 0, 0]}>
        <group position={[0, 2.965, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          {/* Aluminium lid */}
          <mesh castShadow receiveShadow geometry={nodes.Cube008.geometry} material={materials.aluminium} />
          {/* Bezel / matte frame */}
          <mesh castShadow receiveShadow geometry={nodes.Cube008_1.geometry} material={materials['matte.001']} />
          {/* Screen — override with canvas texture + pointer events */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube008_2.geometry}
            onPointerMove={(e) => {
              e.stopPropagation();
              if (!e.uv || !screenHandles) { onHover(null); return; }
              onHover(getHitFromUV(e.uv, screenHandles));
            }}
            onPointerLeave={() => onHover(null)}
            onClick={(e) => {
              e.stopPropagation();
              if (!e.uv || !screenHandles) return;
              const hit = getHitFromUV(e.uv, screenHandles);
              if (hit) onSelect(hit);
            }}
          >
            <meshBasicMaterial map={screenHandles?.texture ?? null} color={screenHandles ? undefined : '#000000'} />
          </mesh>
        </group>
      </group>

      {/* Keyboard */}
      <mesh castShadow receiveShadow geometry={nodes.keyboard.geometry} material={materials.keys} position={[1.793, 0, 3.451]} />

      {/* Base + trackpad */}
      <group position={[0, -0.1, 3.394]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube002.geometry} material={materials.aluminium} />
        <mesh castShadow receiveShadow geometry={nodes.Cube002_1.geometry} material={materials.trackpad} />
      </group>

      {/* Touchbar */}
      <mesh castShadow receiveShadow geometry={nodes.touchbar.geometry} material={materials.touchbar} position={[0, -0.027, 1.201]} />
    </group>
  );
}

useGLTF.preload('/mac-draco.glb');
