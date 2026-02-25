'use client';

import { useRef, useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSceneSetup } from './useSceneSetup';
import { useGsapAnimations } from './useGsapAnimations';
import SceneOverlay from './SceneOverlay';
import type { SectionId } from './types';

export default function DeskScene() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<SectionId>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const { sceneRefsRef, meshesRef, screenTextureRef } = useSceneSetup(mountRef, () =>
    setIsLoaded(true),
  );
  const { handleSectionSelect, handleBack } = useGsapAnimations(
    sceneRefsRef,
    meshesRef,
    setActiveSection,
  );

  const activeSectionRef = useRef(activeSection);
  activeSectionRef.current = activeSection;

  const handleSectionSelectRef = useRef(handleSectionSelect);
  handleSectionSelectRef.current = handleSectionSelect;

  // Raycaster for hover + click on laptop screen
  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let animId = 0;
    let pendingHover: SectionId = null;
    let needsRedraw = false;

    function getHitSection(event: MouseEvent): SectionId {
      const refs = sceneRefsRef.current;
      const meshes = meshesRef.current;
      const stHandles = screenTextureRef.current;
      if (!refs || !meshes || !stHandles || !mount) return null;

      const raycaster = (refs as typeof refs & {
        _raycaster?: { setFromCamera: Function; intersectObjects: Function };
      })._raycaster;
      if (!raycaster) return null;

      const rect = mount.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera({ x, y }, refs.camera);
      const intersects = raycaster.intersectObjects([meshes.laptopScreenMesh]) as Array<{
        uv?: { x: number; y: number };
      }>;

      if (!intersects.length || !intersects[0].uv) return null;

      const { x: u, y: v } = intersects[0].uv;
      const px = u * 1024;
      const py = (1 - v) * 600;

      const { hitRects } = stHandles;
      for (const id of ['about', 'projects', 'contact'] as NonNullable<SectionId>[]) {
        const r = hitRects[id];
        if (px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h) {
          return id;
        }
      }
      return null;
    }

    function onMouseMove(e: MouseEvent) {
      if (activeSectionRef.current) return;
      const hit = getHitSection(e);
      if (hit !== pendingHover) {
        pendingHover = hit;
        needsRedraw = true;
        if (mount) mount.style.cursor = hit ? 'pointer' : 'default';
      }
    }

    function onClick(e: MouseEvent) {
      if (activeSectionRef.current) return;
      const hit = getHitSection(e);
      if (hit) {
        // Stop auto-rotate when user selects a section
        const refs = sceneRefsRef.current;
        if (refs?.controls) {
          (refs.controls as { autoRotate: boolean }).autoRotate = false;
        }
        handleSectionSelectRef.current(hit);
      }
    }

    function redrawLoop() {
      animId = requestAnimationFrame(redrawLoop);
      if (needsRedraw) {
        needsRedraw = false;
        screenTextureRef.current?.redraw(pendingHover);

        const meshes = meshesRef.current;
        if (meshes) {
          import('gsap').then(({ gsap }) => {
            const s = pendingHover ? 1.015 : 1;
            gsap.to(meshes.laptopScreen.scale, {
              x: s,
              y: s,
              z: s,
              duration: 0.2,
              ease: 'power1.out',
            });
          });
        }
      }
    }
    redrawLoop();

    mount.addEventListener('mousemove', onMouseMove);
    mount.addEventListener('click', onClick);

    return () => {
      cancelAnimationFrame(animId);
      mount.removeEventListener('mousemove', onMouseMove);
      mount.removeEventListener('click', onClick);
      mount.style.cursor = 'default';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Reset screen texture when overlay closes
  useEffect(() => {
    if (!activeSection) {
      screenTextureRef.current?.redraw(null);
    }
  }, [activeSection, screenTextureRef]);

  return (
    <div className="relative h-full w-full">
      <div ref={mountRef} className="absolute inset-0" />

      {/* Loading screen */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="absolute inset-0 z-20 flex items-center justify-center bg-[#08080f]"
          >
            <p className="text-neutral-600 text-xs tracking-[0.3em] animate-pulse">
              loading scene...
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content overlay */}
      <SceneOverlay activeSection={activeSection} onBack={handleBack} />

      {/* Hint text */}
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

      {/* Back to portfolio */}
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
