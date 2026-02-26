'use client';

import * as THREE from 'three';
import { useMemo } from 'react';

const TOP = 0.22; // desk surface Y

// ── Desk Platform ────────────────────────────────────────────────────────────
export function DeskPlatform() {
  const geo = useMemo(() => {
    const pw = 3.6, pd = 2.8, pr = 0.35;
    const shape = new THREE.Shape();
    shape.moveTo(-pw / 2 + pr, -pd / 2);
    shape.lineTo(pw / 2 - pr, -pd / 2);
    shape.quadraticCurveTo(pw / 2, -pd / 2, pw / 2, -pd / 2 + pr);
    shape.lineTo(pw / 2, pd / 2 - pr);
    shape.quadraticCurveTo(pw / 2, pd / 2, pw / 2 - pr, pd / 2);
    shape.lineTo(-pw / 2 + pr, pd / 2);
    shape.quadraticCurveTo(-pw / 2, pd / 2, -pw / 2, pd / 2 - pr);
    shape.lineTo(-pw / 2, -pd / 2 + pr);
    shape.quadraticCurveTo(-pw / 2, -pd / 2, -pw / 2 + pr, -pd / 2);
    return new THREE.ExtrudeGeometry(shape, {
      depth: 0.18,
      bevelEnabled: true,
      bevelThickness: 0.04,
      bevelSize: 0.04,
      bevelSegments: 3,
    });
  }, []);

  // Edge ring
  const edgeGeo = useMemo(() => {
    const pw = 3.6, pd = 2.8, pr = 0.35;
    const ew = pw + 0.04, ed = pd + 0.04, er = pr + 0.02;
    const shape = new THREE.Shape();
    shape.moveTo(-ew / 2 + er, -ed / 2);
    shape.lineTo(ew / 2 - er, -ed / 2);
    shape.quadraticCurveTo(ew / 2, -ed / 2, ew / 2, -ed / 2 + er);
    shape.lineTo(ew / 2, ed / 2 - er);
    shape.quadraticCurveTo(ew / 2, ed / 2, ew / 2 - er, ed / 2);
    shape.lineTo(-ew / 2 + er, ed / 2);
    shape.quadraticCurveTo(-ew / 2, ed / 2, -ew / 2, ed / 2 - er);
    shape.lineTo(-ew / 2, -ed / 2 + er);
    shape.quadraticCurveTo(-ew / 2, -ed / 2, -ew / 2 + er, -ed / 2);
    return new THREE.ExtrudeGeometry(shape, { depth: 0.01, bevelEnabled: false });
  }, []);

  return (
    <group>
      <mesh geometry={geo} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} castShadow receiveShadow>
        <meshStandardMaterial color={0x1c1c28} roughness={0.35} metalness={0.7} />
      </mesh>
      <mesh geometry={edgeGeo} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.19, 0]}>
        <meshStandardMaterial color={0x664433} roughness={0.3} metalness={0.8} />
      </mesh>
    </group>
  );
}

// ── Coffee Mug ───────────────────────────────────────────────────────────────
export function Mug() {
  const handleGeo = useMemo(() => {
    const curve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(0.093, 0.055, 0),
      new THREE.Vector3(0.22, 0, 0),
      new THREE.Vector3(0.088, -0.055, 0),
    );
    return new THREE.TubeGeometry(curve, 16, 0.013, 8, false);
  }, []);

  return (
    <group position={[1.35, TOP + 0.095, 0.95]}>
      {/* Body */}
      <mesh castShadow>
        <cylinderGeometry args={[0.1, 0.085, 0.19, 24]} />
        <meshStandardMaterial color={0xe8c870} roughness={0.6} metalness={0.05} />
      </mesh>
      {/* Coffee surface */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.09, 0]}>
        <circleGeometry args={[0.085, 20]} />
        <meshStandardMaterial color={0x3a2008} roughness={0.9} />
      </mesh>
      {/* Handle */}
      <mesh geometry={handleGeo}>
        <meshStandardMaterial color={0xe8c870} roughness={0.6} metalness={0.05} />
      </mesh>
    </group>
  );
}

// ── Headphones ───────────────────────────────────────────────────────────────
export function Headphones() {
  const bandGeo = useMemo(() => {
    const curve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(-0.24, 0, 0),
      new THREE.Vector3(0, 0.32, 0),
      new THREE.Vector3(0.24, 0, 0),
    );
    return new THREE.TubeGeometry(curve, 28, 0.024, 12, false);
  }, []);

  const cupGeo = useMemo(() => new THREE.CylinderGeometry(0.135, 0.135, 0.10, 28), []);
  const cushionGeo = useMemo(() => new THREE.TorusGeometry(0.118, 0.030, 12, 30), []);
  const armGeo = useMemo(() => new THREE.CylinderGeometry(0.018, 0.018, 0.10, 10), []);

  return (
    <group position={[1.5, TOP + 0.195, 0.3]} rotation={[0, 0.55, 0]}>
      {/* Headband */}
      <mesh geometry={bandGeo} castShadow>
        <meshStandardMaterial color={0xedeade} roughness={0.5} metalness={0.02} />
      </mesh>
      {/* Arms */}
      <mesh geometry={armGeo} position={[-0.24, 0.04, 0]}>
        <meshStandardMaterial color={0xedeade} roughness={0.5} metalness={0.02} />
      </mesh>
      <mesh geometry={armGeo} position={[0.24, 0.04, 0]}>
        <meshStandardMaterial color={0xedeade} roughness={0.5} metalness={0.02} />
      </mesh>
      {/* Ear cups */}
      <mesh geometry={cupGeo} rotation={[0, 0, Math.PI / 2]} position={[-0.24, -0.04, 0]} castShadow>
        <meshStandardMaterial color={0xedeade} roughness={0.5} metalness={0.02} />
      </mesh>
      <mesh geometry={cupGeo} rotation={[0, 0, Math.PI / 2]} position={[0.24, -0.04, 0]} castShadow>
        <meshStandardMaterial color={0xedeade} roughness={0.5} metalness={0.02} />
      </mesh>
      {/* Cushion rings */}
      <mesh geometry={cushionGeo} rotation={[0, Math.PI / 2, 0]} position={[-0.275, -0.04, 0]}>
        <meshStandardMaterial color={0xe0dbd0} roughness={0.8} metalness={0.0} />
      </mesh>
      <mesh geometry={cushionGeo} rotation={[0, Math.PI / 2, 0]} position={[0.275, -0.04, 0]}>
        <meshStandardMaterial color={0xe0dbd0} roughness={0.8} metalness={0.0} />
      </mesh>
    </group>
  );
}

// ── Phone ─────────────────────────────────────────────────────────────────────
export function Phone() {
  return (
    <group>
      <mesh position={[-1.5, TOP + 0.01, 0.55]} rotation={[0, 0.18, 0]} castShadow>
        <boxGeometry args={[0.35, 0.015, 0.7]} />
        <meshStandardMaterial color={0x111118} roughness={0.2} metalness={0.8} />
      </mesh>
      {/* Screen */}
      <mesh position={[-1.5, TOP + 0.02, 0.55]} rotation={[-Math.PI / 2, 0, 0.18]}>
        <planeGeometry args={[0.3, 0.6]} />
        <meshStandardMaterial color={0x0a0a14} roughness={0.1} metalness={0.3} />
      </mesh>
    </group>
  );
}
