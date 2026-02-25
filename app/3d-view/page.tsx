'use client';

import DeskScene from '@/components/three-desk/DeskScene';

export default function ThreeDViewPage() {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-[#08080f]">
      <DeskScene />
    </main>
  );
}
