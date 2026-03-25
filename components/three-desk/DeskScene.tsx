'use client';

import { Suspense, useState, useEffect, useRef, useCallback } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { ACESFilmicToneMapping } from 'three';
import { AnimatePresence, motion } from 'framer-motion';
import { MacModel } from './MacModel';
import { DeskPlatform, Mug, Headphones, Phone } from './DeskObjects';
import SceneOverlay from './SceneOverlay';
import { buildScreenTexture } from './buildScreenTexture';
import type { SectionId, ScreenTextureHandles } from './types';

// ── Camera fly-in (lives inside Canvas so we can use useThree) ────────────────
function CameraRig({
  controlsRef,
  onReady,
}: {
  controlsRef: React.MutableRefObject<any>;
  onReady: () => void;
}) {
  const { camera } = useThree();
  const done = useRef(false);

  useEffect(() => {
    if (done.current) return;
    done.current = true;
    // Disable controls during fly-in so they don't fight GSAP
    if (controlsRef.current) controlsRef.current.enabled = false;

    import('gsap').then(({ gsap }) => {
      gsap.to(camera.position, {
        x: 3.2,
        y: 2.8,
        z: 3.8,
        duration: 2.2,
        ease: 'power3.inOut',
        onComplete: () => {
          if (controlsRef.current) {
            controlsRef.current.enabled = true;
          }
          onReady();
        },
      });
    });
  }, [camera, controlsRef, onReady]);

  return null;
}

// ── Scene content (everything inside the Canvas) ──────────────────────────────
interface SceneContentProps {
  screenHandles: ScreenTextureHandles | null;
  controlsRef: React.MutableRefObject<any>;
  onHover: (id: SectionId) => void;
  onSelect: (id: NonNullable<SectionId>) => void;
  onReady: () => void;
}

function SceneContent({ screenHandles, controlsRef, onHover, onSelect, onReady }: SceneContentProps) {
  return (
    <>
      <color attach="background" args={['#08080f']} />

      <CameraRig controlsRef={controlsRef} onReady={onReady} />

      <OrbitControls
        ref={controlsRef}
        enablePan={false}
        // enableRotate={false}
        minDistance={2.5}
        maxDistance={8}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2.2}
        // @ts-ignore – drei accepts array
        target={[0, 0.4, 0]}
        autoRotate={false}
        autoRotateSpeed={0.4}
        dampingFactor={0.08}
        enableDamping
      />

      {/* Lighting — deep indigo + magenta neon palette */}
      <ambientLight color={0x2a2244} intensity={0.8} />
      <directionalLight
        position={[3, 5, 3]}
        intensity={2.4}
        color={0x8888cc}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-left={-3}
        shadow-camera-right={3}
        shadow-camera-top={3}
        shadow-camera-bottom={-2}
        shadow-bias={-0.0005}
      />
      {/* Soft indigo fill from above-left */}
      <directionalLight position={[-3, 4, 2]} color={0x6666bb} intensity={1.6} />
      {/* Deep blue side fill */}
      <directionalLight position={[-4, 2, 4]} color={0x3344aa} intensity={0.6} />
      {/* Magenta/pink back light — the neon glow */}
      <directionalLight position={[-2, 3, -4]} color={0x7733cc} intensity={1.8} />
      {/* Pink neon glow on the desk from above */}
      <pointLight position={[0, 2.0, -1.0]} color={0xff3388} intensity={4.0} distance={5} />
      {/* Deep purple accent from the side */}
      <pointLight position={[-1.2, 0.5, -0.5]} color={0x7733cc} intensity={2.5} distance={3} />
      {/* Cool blue accent from the other side */}
      <pointLight position={[1.3, 0.6, 0.5]} color={0x4466dd} intensity={1.5} distance={3} />
      <hemisphereLight color={0x1a1433} groundColor={0x0c0a18} intensity={0.6} />

      {/* Desk platform */}
      <DeskPlatform />

      {/* Mac laptop from GLB */}
      <Suspense fallback={null}>
        <MacModel
          position={[0, 0.28, -0.7]}
          scale={0.25}
          screenHandles={screenHandles}
          onHover={onHover}
          onSelect={onSelect}
        />
      </Suspense>

      {/* Accessories */}
      <Headphones />
      <Phone />
      <Mug />

      {/* Shadow-only ground plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <shadowMaterial opacity={0.4} />
      </mesh>
    </>
  );
}

// ── Top-level component ───────────────────────────────────────────────────────
export default function DeskScene() {
  const [activeSection, setActiveSection] = useState<SectionId>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [cursor, setCursor] = useState<'default' | 'pointer'>('default');
  // State so MacModel re-renders when texture becomes available
  const [screenHandles, setScreenHandles] = useState<ScreenTextureHandles | null>(null);

  // Ref copy so stable callbacks can access the latest value without re-creating
  const screenHandlesRef = useRef<ScreenTextureHandles | null>(null);
  const activeSectionRef = useRef<SectionId>(null);
  activeSectionRef.current = activeSection;
  const hoveredRef = useRef<SectionId>(null);
  const controlsRef = useRef<any>(null);

  // Build screen texture once (needs document — client only via useEffect)
  useEffect(() => {
    let cancelled = false;
    import('three').then((THREE) => {
      if (cancelled) return;
      const handles = buildScreenTexture(THREE);
      screenHandlesRef.current = handles;
      setScreenHandles(handles); // triggers re-render so MacModel gets the texture
    });
    return () => { cancelled = true; };
  }, []);

  // Stable hover handler — uses refs to avoid stale closures and prop churn
  const handleHover = useCallback((id: SectionId) => {
    if (activeSectionRef.current) return;
    if (id === hoveredRef.current) return;
    hoveredRef.current = id;
    setCursor(id ? 'pointer' : 'default');
    screenHandlesRef.current?.redraw(id);
  }, []);

  const handleSelect = useCallback((id: NonNullable<SectionId>) => {
    setActiveSection(id);
  }, []);

  const handleBack = useCallback(() => {
    setActiveSection(null);
    hoveredRef.current = null;
    setCursor('default');
    screenHandlesRef.current?.redraw(null);
  }, []);

  const handleReady = useCallback(() => {
    setIsLoaded(true);
  }, []);

  // Reset texture when overlay closes
  useEffect(() => {
    if (!activeSection) screenHandlesRef.current?.redraw(null);
  }, [activeSection]);

  return (
    <div className="relative h-full w-full" style={{ cursor }}>
      <Canvas
        gl={{
          antialias: true,
          toneMapping: ACESFilmicToneMapping,
          toneMappingExposure: 1.6,
        }}
        shadows
        dpr={[1, 2]}
        camera={{ fov: 35, position: [5, 6, 7], near: 0.1, far: 100 }}
      >
        <Suspense fallback={null}>
          <SceneContent
            screenHandles={screenHandles}
            controlsRef={controlsRef}
            onHover={handleHover}
            onSelect={handleSelect}
            onReady={handleReady}
          />
        </Suspense>
      </Canvas>

      {/* Loading overlay */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="absolute inset-0 z-20 flex items-center justify-center bg-[#0c0a18] pointer-events-none"
          >
            <p className="text-neutral-600 text-xs tracking-[0.3em] animate-pulse">
              loading scene...
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content panels */}
      <SceneOverlay activeSection={activeSection} onBack={handleBack} />

      {/* Hint */}
      <AnimatePresence>
        {isLoaded && !activeSection && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[11px] text-neutral-500
                       tracking-[0.25em] pointer-events-none select-none"
          >
            drag to rotate &middot; click the screen to explore
          </motion.p>
        )}
      </AnimatePresence>

      {/* Back link */}
      <a
        href="/"
        className="absolute top-4 left-4 text-xs text-neutral-500 hover:text-neutral-200
                   transition tracking-widest z-10"
      >
        ← portfolio
      </a>
    </div>
  );
}
