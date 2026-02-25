'use client';

import { useEffect, useRef } from 'react';
import type { SceneRefs, DeskMeshes, ScreenTextureHandles } from './types';

interface SetupResult {
  sceneRefsRef: React.MutableRefObject<SceneRefs | null>;
  meshesRef: React.MutableRefObject<DeskMeshes | null>;
  screenTextureRef: React.MutableRefObject<ScreenTextureHandles | null>;
}

export function useSceneSetup(
  mountRef: React.RefObject<HTMLDivElement | null>,
  onReady: () => void,
): SetupResult {
  const sceneRefsRef = useRef<SceneRefs | null>(null);
  const meshesRef = useRef<DeskMeshes | null>(null);
  const screenTextureRef = useRef<ScreenTextureHandles | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const mount = mountRef.current;
    let cancelled = false;

    async function init() {
      const THREE = await import('three');
      const { OrbitControls } = await import('three/examples/jsm/controls/OrbitControls.js');
      const { buildDeskGeometry } = await import('./buildDeskGeometry');
      const { buildScreenTexture } = await import('./buildScreenTexture');
      const { gsap } = await import('gsap');

      if (cancelled || !mount) return;

      // ── Renderer ───────────────────────────────────────────────────────────
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.6;
      mount.appendChild(renderer.domElement);

      // ── Camera (isometric-ish angle like the ref) ──────────────────────────
      const aspect = mount.clientWidth / mount.clientHeight;
      const camera = new THREE.PerspectiveCamera(35, aspect, 0.1, 100);
      // Start position for fly-in (high and far)
      camera.position.set(4, 5, 5);

      // ── Scene ──────────────────────────────────────────────────────────────
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0xffffff);

      // ── Orbit Controls ─────────────────────────────────────────────────────
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.08;
      controls.enablePan = false;
      controls.minDistance = 2.5;
      controls.maxDistance = 8;
      controls.minPolarAngle = Math.PI / 6;   // don't go below desk
      controls.maxPolarAngle = Math.PI / 2.2;  // don't flip underneath
      controls.target.set(0, 0.4, 0);
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.4;

      // ── Lighting ────────────────────────────────────────────────────────────

      // Ambient — neutral so aluminum reads as silver, not tinted
      const ambient = new THREE.AmbientLight(0x9aaabb, 1.0);
      scene.add(ambient);

      // Main key light — bright neutral white; aluminum needs strong specular
      const keyLight = new THREE.DirectionalLight(0xffffff, 3.2);
      keyLight.position.set(3, 5, 3);
      keyLight.castShadow = true;
      keyLight.shadow.camera.left = -3;
      keyLight.shadow.camera.right = 3;
      keyLight.shadow.camera.top = 3;
      keyLight.shadow.camera.bottom = -2;
      keyLight.shadow.mapSize.set(2048, 2048);
      keyLight.shadow.bias = -0.0005;
      scene.add(keyLight);

      // Secondary key from upper-left — creates the two-tone sheen on metal
      const keyLight2 = new THREE.DirectionalLight(0xddeeff, 1.8);
      keyLight2.position.set(-3, 4, 2);
      scene.add(keyLight2);

      // Fill light — cool blue tint from left, keeps shadow side visible
      const fillLight = new THREE.DirectionalLight(0x88aacc, 0.8);
      fillLight.position.set(-4, 2, 4);
      scene.add(fillLight);

      // Rim light — purple from behind (gives the ref's purple edge glow)
      const rimLight = new THREE.DirectionalLight(0x8844cc, 1.2);
      rimLight.position.set(-2, 3, -4);
      scene.add(rimLight);

      // Monitor screen glow — bright blue/cyan like the ref
      const screenGlow = new THREE.PointLight(0x4499ff, 3.0, 4);
      screenGlow.position.set(0, 1.0, -0.2);
      scene.add(screenGlow);

      // Neon accent glow — purple (like ref's purple accent lights)
      const purpleGlow = new THREE.PointLight(0x8844ff, 2.0, 3);
      purpleGlow.position.set(-1.2, 0.5, -0.5);
      scene.add(purpleGlow);

      // Warm accent near mug
      const warmGlow = new THREE.PointLight(0xff8844, 1.0, 3);
      warmGlow.position.set(-1.3, 0.6, 0.5);
      scene.add(warmGlow);

      // Subtle bottom fill to prevent pure black underneath
      const bottomFill = new THREE.HemisphereLight(0x111122, 0x080810, 0.5);
      scene.add(bottomFill);

      // ── Build geometry ─────────────────────────────────────────────────────
      const screenTextureHandles = buildScreenTexture(THREE);
      screenTextureRef.current = screenTextureHandles;

      const meshes = buildDeskGeometry(THREE, screenTextureHandles);
      meshesRef.current = meshes;

      // Add all meshes to scene
      const {
        deskPlatform, laptopBase, laptopScreen, laptopScreenMesh,
        laptopHinge, keyboard, mug, headphones, phone, _extras,
      } = meshes;
      scene.add(
        deskPlatform, laptopBase, laptopScreen, laptopScreenMesh,
        laptopHinge, keyboard, mug, headphones, phone,
      );
      _extras.forEach(o => scene.add(o));

      // Ground plane (invisible, just for shadows)
      const groundGeo = new THREE.PlaneGeometry(20, 20);
      const groundMat = new THREE.ShadowMaterial({ opacity: 0.4 });
      const ground = new THREE.Mesh(groundGeo, groundMat);
      ground.rotation.x = -Math.PI / 2;
      ground.position.y = -0.01;
      ground.receiveShadow = true;
      scene.add(ground);

      // Raycaster — attached to refs right away
      const raycaster = new THREE.Raycaster();

      // ── Render loop ────────────────────────────────────────────────────────
      let animFrameId = 0;
      function animate() {
        animFrameId = requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      }
      animate();

      const refs: SceneRefs & { _raycaster: unknown; _cleanup?: () => void } = {
        renderer,
        scene,
        camera,
        controls,
        animFrameId,
        _raycaster: raycaster,
      };
      sceneRefsRef.current = refs;

      // ── Camera fly-in ──────────────────────────────────────────────────────
      const endPos = { x: 3.2, y: 2.8, z: 3.8 };
      gsap.fromTo(
        camera.position,
        { x: 5, y: 6, z: 7 },
        {
          x: endPos.x,
          y: endPos.y,
          z: endPos.z,
          duration: 2.2,
          ease: 'power3.inOut',
          onComplete: () => {
            controls.autoRotate = true;
            onReady();
          },
        },
      );

      // Entrance stagger for desk objects
      const staggerTargets = [
        deskPlatform, laptopBase, laptopScreen, laptopScreenMesh,
        laptopHinge, keyboard, mug, headphones, phone,
      ];
      staggerTargets.forEach((obj, i) => {
        const origY = obj.position.y;
        obj.position.y = origY - 0.5;
        gsap.to(obj.position, {
          y: origY,
          duration: 0.9,
          ease: 'back.out(1.2)',
          delay: 0.4 + i * 0.06,
        });
      });

      // ── Resize handling ────────────────────────────────────────────────────
      const resizeObserver = new ResizeObserver(() => {
        if (!mount) return;
        renderer.setSize(mount.clientWidth, mount.clientHeight);
        camera.aspect = mount.clientWidth / mount.clientHeight;
        camera.updateProjectionMatrix();
      });
      resizeObserver.observe(mount);

      refs._cleanup = () => {
        resizeObserver.disconnect();
        cancelAnimationFrame(animFrameId);
        controls.dispose();
        renderer.dispose();
        screenTextureHandles.texture.dispose();
        if (mount.contains(renderer.domElement)) {
          mount.removeChild(renderer.domElement);
        }
      };
    }

    init().catch(console.error);

    return () => {
      cancelled = true;
      const refs = sceneRefsRef.current as (SceneRefs & { _cleanup?: () => void }) | null;
      refs?._cleanup?.();
      sceneRefsRef.current = null;
      meshesRef.current = null;
      screenTextureRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { sceneRefsRef, meshesRef, screenTextureRef };
}
