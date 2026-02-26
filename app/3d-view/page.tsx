import dynamic from 'next/dynamic';

const DeskScene = dynamic(() => import('@/components/three-desk/DeskScene'), {
  ssr: false,
  loading: () => (
    <div className="flex h-screen w-full items-center justify-center bg-[#08080f]">
      <p className="text-neutral-600 text-xs tracking-[0.3em] animate-pulse">loading scene...</p>
    </div>
  ),
});

export default function ThreeDViewPage() {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-[#08080f]">
      <DeskScene />
    </main>
  );
}
