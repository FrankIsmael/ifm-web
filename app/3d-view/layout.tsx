import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '3D View | Ismael Francisco Moreno',
  description: 'Interactive 3D portfolio experience.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
