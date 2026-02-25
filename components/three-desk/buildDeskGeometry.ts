import type * as THREE_TYPE from 'three';
import type { DeskMeshes, ScreenTextureHandles } from './types';

export function buildDeskGeometry(
  THREE: typeof THREE_TYPE,
  screenTextureHandles: ScreenTextureHandles,
): DeskMeshes {
  // ── Materials ──────────────────────────────────────────────────────────────
  // Dark desk platform — metallic dark surface like the ref
  const platformMat = new THREE.MeshStandardMaterial({
    color: 0x1c1c28,
    roughness: 0.35,
    metalness: 0.7,
  });
  // Platform edge highlight (subtle copper/gold like ref)
  const platformEdgeMat = new THREE.MeshStandardMaterial({
    color: 0x664433,
    roughness: 0.3,
    metalness: 0.8,
  });
  // MacBook space-gray aluminum — brushed, highly metallic, low roughness
  const laptopMat = new THREE.MeshStandardMaterial({
    color: 0x9a9fa6,   // space gray aluminum
    roughness: 0.18,
    metalness: 0.92,
    envMapIntensity: 1.2,
  });
  // Lid / bezel — same aluminum, very slightly darker at edges
  const bezelMat = new THREE.MeshStandardMaterial({
    color: 0x8e9298,
    roughness: 0.15,
    metalness: 0.95,
    envMapIntensity: 1.2,
  });
  // Interactive screen
  const screenMat = new THREE.MeshBasicMaterial({
    map: screenTextureHandles.texture,
  });
  // Keyboard deck — recessed matte aluminum, slightly darker than lid
  const keyboardMat = new THREE.MeshStandardMaterial({
    color: 0x7a7f86,
    roughness: 0.35,
    metalness: 0.85,
  });
  // Key caps — dark silver, matte like real MacBook keys
  const keycapMat = new THREE.MeshStandardMaterial({
    color: 0x6a6e74,
    roughness: 0.55,
    metalness: 0.6,
  });
  // Mug ceramic (warm orange/white like ref)
  const mugMat = new THREE.MeshStandardMaterial({
    color: 0xe8c870,
    roughness: 0.6,
    metalness: 0.05,
  });
  const coffeeMat = new THREE.MeshStandardMaterial({
    color: 0x3a2008,
    roughness: 0.9,
  });
  // Headphones
  const headphoneMat = new THREE.MeshStandardMaterial({
    color: 0x1e2030,
    roughness: 0.3,
    metalness: 0.6,
  });
  const headphonePadMat = new THREE.MeshStandardMaterial({
    color: 0x2a2a3a,
    roughness: 0.8,
    metalness: 0.1,
  });
  // Phone
  const phoneMat = new THREE.MeshStandardMaterial({
    color: 0x111118,
    roughness: 0.2,
    metalness: 0.8,
  });

  const DESK_Y = 0; // everything sits on Y=0

  // ── Desk Platform ─────────────────────────────────────────────────────────
  // Rounded box shape: thick slab with beveled edges (ref style)
  const platformShape = new THREE.Shape();
  const pw = 3.6, pd = 2.8, pr = 0.35;
  platformShape.moveTo(-pw / 2 + pr, -pd / 2);
  platformShape.lineTo(pw / 2 - pr, -pd / 2);
  platformShape.quadraticCurveTo(pw / 2, -pd / 2, pw / 2, -pd / 2 + pr);
  platformShape.lineTo(pw / 2, pd / 2 - pr);
  platformShape.quadraticCurveTo(pw / 2, pd / 2, pw / 2 - pr, pd / 2);
  platformShape.lineTo(-pw / 2 + pr, pd / 2);
  platformShape.quadraticCurveTo(-pw / 2, pd / 2, -pw / 2, pd / 2 - pr);
  platformShape.lineTo(-pw / 2, -pd / 2 + pr);
  platformShape.quadraticCurveTo(-pw / 2, -pd / 2, -pw / 2 + pr, -pd / 2);

  const platformGeo = new THREE.ExtrudeGeometry(platformShape, {
    depth: 0.18,
    bevelEnabled: true,
    bevelThickness: 0.04,
    bevelSize: 0.04,
    bevelSegments: 3,
  });
  const deskPlatform = new THREE.Mesh(platformGeo, platformMat);
  deskPlatform.rotation.x = -Math.PI / 2;
  deskPlatform.position.set(0, DESK_Y, 0);
  deskPlatform.castShadow = true;
  deskPlatform.receiveShadow = true;

  // Platform edge ring (thin outline glow strip)
  const edgeShape = new THREE.Shape();
  const ew = pw + 0.04, ed = pd + 0.04, er = pr + 0.02;
  edgeShape.moveTo(-ew / 2 + er, -ed / 2);
  edgeShape.lineTo(ew / 2 - er, -ed / 2);
  edgeShape.quadraticCurveTo(ew / 2, -ed / 2, ew / 2, -ed / 2 + er);
  edgeShape.lineTo(ew / 2, ed / 2 - er);
  edgeShape.quadraticCurveTo(ew / 2, ed / 2, ew / 2 - er, ed / 2);
  edgeShape.lineTo(-ew / 2 + er, ed / 2);
  edgeShape.quadraticCurveTo(-ew / 2, ed / 2, -ew / 2, ed / 2 - er);
  edgeShape.lineTo(-ew / 2, -ed / 2 + er);
  edgeShape.quadraticCurveTo(-ew / 2, -ed / 2, -ew / 2 + er, -ed / 2);
  const edgeGeo = new THREE.ExtrudeGeometry(edgeShape, {
    depth: 0.01,
    bevelEnabled: false,
  });
  const edgeMesh = new THREE.Mesh(edgeGeo, platformEdgeMat);
  edgeMesh.rotation.x = -Math.PI / 2;
  edgeMesh.position.set(0, DESK_Y + 0.19, 0);

  // Surface top
  const TOP = DESK_Y + 0.22;

  // ── Laptop Base ────────────────────────────────────────────────────────────
  const laptopBase = new THREE.Mesh(
    new THREE.BoxGeometry(1.7, 0.04, 1.1),
    laptopMat,
  );
  laptopBase.position.set(0, TOP + 0.02, -0.1);
  laptopBase.castShadow = true;
  laptopBase.receiveShadow = true;

  // Trackpad — glass-like, slightly lighter than keyboard deck
  const trackpadMat = new THREE.MeshStandardMaterial({
    color: 0x8a8f96,
    roughness: 0.08,
    metalness: 0.75,
  });
  const trackpad = new THREE.Mesh(
    new THREE.BoxGeometry(0.4, 0.003, 0.28),
    trackpadMat,
  );
  trackpad.position.set(0, TOP + 0.045, 0.18);

  // ── Keyboard on laptop ─────────────────────────────────────────────────────
  const keyboard = new THREE.Mesh(
    new THREE.BoxGeometry(1.4, 0.006, 0.52),
    keyboardMat,
  );
  keyboard.position.set(0, TOP + 0.045, -0.14);
  keyboard.receiveShadow = true;

  // Key rows (5 rows of subtle bumps)
  const keyRows: THREE_TYPE.Mesh[] = [];
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 14; col++) {
      const key = new THREE.Mesh(
        new THREE.BoxGeometry(0.08, 0.006, 0.07),
        keycapMat,
      );
      key.position.set(
        -0.6 + col * 0.092,
        TOP + 0.052,
        -0.34 + row * 0.095,
      );
      keyRows.push(key);
    }
  }

  // ── Laptop Screen (lid) ────────────────────────────────────────────────────
  // BoxGeometry face order: right(0), left(1), top(2), bottom(3), front(4), back(5)
  // Face 4 (+Z / front) = screen texture; rest = bezel
  const laptopScreenMaterials = [
    bezelMat, bezelMat, bezelMat, bezelMat, screenMat, bezelMat,
  ];
  const laptopScreen = new THREE.Mesh(
    new THREE.BoxGeometry(1.7, 1.06, 0.03),
    laptopScreenMaterials,
  );
  laptopScreen.position.set(0, TOP + 0.04 + 0.53, -0.64);
  laptopScreen.rotation.x = -0.12;
  laptopScreen.castShadow = true;

  // ── Interactive Screen Plane (slightly in front for raycasting) ────────────
  // Invisible plane that receives clicks — offset 0.02 forward to avoid z-fight
  const laptopScreenMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(1.52, 0.92),
    new THREE.MeshBasicMaterial({ visible: false, side: THREE.FrontSide }),
  );
  laptopScreenMesh.position.set(0, TOP + 0.04 + 0.53, -0.608);
  laptopScreenMesh.rotation.x = -0.12;
  laptopScreenMesh.userData = { clickable: true };

  // ── Hinge ──────────────────────────────────────────────────────────────────
  const laptopHinge = new THREE.Mesh(
    new THREE.CylinderGeometry(0.018, 0.018, 1.5, 12),
    laptopMat,
  );
  laptopHinge.rotation.z = Math.PI / 2;
  laptopHinge.position.set(0, TOP + 0.04, -0.64);

  // ── Coffee Mug ────────────────────────────────────────────────────────────
  const mug = new THREE.Group();
  const mugBody = new THREE.Mesh(
    new THREE.CylinderGeometry(0.1, 0.085, 0.19, 24),
    mugMat,
  );
  mugBody.castShadow = true;
  const coffee = new THREE.Mesh(
    new THREE.CircleGeometry(0.085, 20),
    coffeeMat,
  );
  coffee.rotation.x = -Math.PI / 2;
  coffee.position.y = 0.09;
  // Handle: quadratic bezier curve from top-right to bottom-right of cup,
  // bulging outward in +X. Cup body top rim ≈ y=+0.095, bottom rim ≈ y=-0.095,
  // cup surface radius at those heights ≈ 0.097 (lerp between 0.1 and 0.085).
  const handleCurve = new THREE.QuadraticBezierCurve3(
    new THREE.Vector3(0.093,  0.055, 0),   // top attachment (cup surface)
    new THREE.Vector3(0.22,   0,     0),   // control point — bulges outward
    new THREE.Vector3(0.088, -0.055, 0),   // bottom attachment (cup surface)
  );
  const handle = new THREE.Mesh(
    new THREE.TubeGeometry(handleCurve, 16, 0.013, 8, false),
    mugMat,
  );
  mug.add(mugBody, coffee, handle);
  mug.position.set(-1.25, TOP + 0.095, 0.4);

  // ── Headphones ────────────────────────────────────────────────────────────
  const headphones = new THREE.Group();

  // Headband (torus arc)
  const headband = new THREE.Mesh(
    new THREE.TorusGeometry(0.22, 0.02, 8, 24, Math.PI),
    headphoneMat,
  );
  headband.rotation.z = Math.PI;
  headband.position.y = 0.22;

  // Left ear cup
  const earCupGeo = new THREE.CylinderGeometry(0.1, 0.1, 0.06, 20);
  const leftCup = new THREE.Mesh(earCupGeo, headphoneMat);
  leftCup.rotation.z = Math.PI / 2;
  leftCup.position.set(-0.22, 0, 0);

  const leftPad = new THREE.Mesh(
    new THREE.CylinderGeometry(0.09, 0.09, 0.03, 20),
    headphonePadMat,
  );
  leftPad.rotation.z = Math.PI / 2;
  leftPad.position.set(-0.25, 0, 0);

  // Right ear cup
  const rightCup = new THREE.Mesh(earCupGeo, headphoneMat);
  rightCup.rotation.z = Math.PI / 2;
  rightCup.position.set(0.22, 0, 0);

  const rightPad = new THREE.Mesh(
    new THREE.CylinderGeometry(0.09, 0.09, 0.03, 20),
    headphonePadMat,
  );
  rightPad.rotation.z = Math.PI / 2;
  rightPad.position.set(0.25, 0, 0);

  headphones.add(headband, leftCup, leftPad, rightCup, rightPad);
  headphones.position.set(1.2, TOP + 0.1, 0.3);
  headphones.rotation.y = -0.4;

  // ── Phone ─────────────────────────────────────────────────────────────────
  const phone = new THREE.Mesh(
    new THREE.BoxGeometry(0.35, 0.015, 0.7),
    phoneMat,
  );
  phone.position.set(1.15, TOP + 0.01, 0.65);
  phone.rotation.y = 0.35;
  phone.castShadow = true;

  // Phone screen (slight inset)
  const phoneScreen = new THREE.Mesh(
    new THREE.PlaneGeometry(0.3, 0.6),
    new THREE.MeshStandardMaterial({
      color: 0x0a0a14,
      roughness: 0.1,
      metalness: 0.3,
    }),
  );
  phoneScreen.rotation.x = -Math.PI / 2;
  phoneScreen.rotation.z = 0.35;
  phoneScreen.position.set(1.15, TOP + 0.02, 0.65);

  return {
    deskPlatform,
    laptopBase,
    laptopScreen,
    laptopScreenMesh,
    laptopHinge,
    keyboard,
    mug,
    headphones,
    phone,
    _extras: [edgeMesh, trackpad, phoneScreen, ...keyRows],
  };
}
