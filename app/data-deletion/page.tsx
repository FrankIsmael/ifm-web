import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalPage } from '@/components/legal-page';
import { business } from '@/lib/business';

export const metadata: Metadata = {
  title: 'Data Deletion | Ismael Francisco',
  description: 'How to request deletion of your personal data.',
};

export default function DataDeletionPage() {
  const subject = encodeURIComponent('Data deletion request');

  return (
    <LegalPage
      title="Data Deletion"
      intro="You can ask me to delete the personal data I hold about you at any time."
    >
      <h2>How to request it</h2>
      <ol>
        <li>
          Email{' '}
          <a href={`mailto:${business.email}?subject=${subject}`}>{business.email}</a> with the
          subject “Data deletion request”.
        </li>
        <li>
          Include the WhatsApp phone number you used, or the approximate date and time of your chat
          with the agent, so I can find your data.
        </li>
        <li>
          If you messaged a business on WhatsApp, you can also ask that business directly; it will
          pass the request to me.
        </li>
      </ol>

      <h2>What happens next</h2>
      <p>
        I confirm receipt, verify the request and delete your messages, media and contact details
        from the systems I operate within 20 business days, then confirm by the same channel. Data I
        must keep by law is retained only for that purpose.
      </p>
      <p>
        Deleting data on my side does not delete the chat from your own WhatsApp app or from Meta’s
        systems; you manage that in WhatsApp itself.
      </p>
      <p>
        More details in the <Link href="/privacy">Privacy Policy</Link>.
      </p>
    </LegalPage>
  );
}
