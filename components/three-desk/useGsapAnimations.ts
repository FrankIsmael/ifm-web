'use client';

import { useRef, useCallback } from 'react';
import type { SceneRefs, DeskMeshes, SectionId } from './types';

export function useGsapAnimations(
  sceneRefsRef: React.MutableRefObject<SceneRefs | null>,
  meshesRef: React.MutableRefObject<DeskMeshes | null>,
  setActiveSection: (s: SectionId) => void,
) {
  const animatingRef = useRef(false);

  const handleSectionSelect = useCallback(
    async (section: NonNullable<SectionId>) => {
      const refs = sceneRefsRef.current;
      if (!refs || animatingRef.current) return;
      animatingRef.current = true;

      const { gsap } = await import('gsap');

      // Stop auto-rotate during focus
      const controls = refs.controls as { autoRotate: boolean; enabled: boolean };
      controls.autoRotate = false;

      // Just show the overlay — camera stays where user has it (orbit controls)
      gsap.to({}, {
        duration: 0.3,
        onComplete: () => {
          setActiveSection(section);
          animatingRef.current = false;
        },
      });
    },
    [sceneRefsRef, setActiveSection],
  );

  const handleBack = useCallback(
    async () => {
      const refs = sceneRefsRef.current;
      if (!refs) return;

      setActiveSection(null);

      // Re-enable auto-rotate
      const controls = refs.controls as { autoRotate: boolean; enabled: boolean };
      controls.autoRotate = true;
    },
    [sceneRefsRef, setActiveSection],
  );

  return { handleSectionSelect, handleBack };
}
