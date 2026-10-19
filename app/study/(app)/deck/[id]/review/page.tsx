import { notFound } from 'next/navigation';
import { getSession } from '@/lib/study/data';
import { requireAuth } from '@/lib/study/auth';
import { ReviewSession } from '@/components/study/review-session';

export const dynamic = 'force-dynamic';

export default async function ReviewPage({ params }: { params: { id: string } }) {
  requireAuth();
  const id = Number(params.id);
  if (!Number.isInteger(id) || id <= 0) notFound();
  const session = await getSession(id);
  if (!session) notFound();
  return <ReviewSession initial={session} />;
}
