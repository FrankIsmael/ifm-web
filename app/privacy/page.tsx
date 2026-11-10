import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalPage } from '@/components/legal-page';
import { business } from '@/lib/business';

export const metadata: Metadata = {
  title: 'Privacy Policy | Ismael Francisco',
  description: 'How personal data is collected, used and protected on this site and in the AI agent and WhatsApp services.',
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro={`This policy explains how ${business.legalName} ("I", "me") collects, uses and protects personal data on ${business.website}, in the AI agent ("Robbie") and in the WhatsApp messaging services I build and operate for client businesses.`}
    >
      <h2>1. Who is responsible</h2>
      <p>
        {business.legalName}, a software developer operating as an individual business in{' '}
        {business.country}.
        {business.address && ` Address: ${business.address}.`} Contact:{' '}
        <a href={`mailto:${business.email}`}>{business.email}</a>
        {business.phone && `, ${business.phone}`}.
      </p>
      <p>
        When I operate a WhatsApp or AI assistant on behalf of a client business, that business is
        responsible for its customers’ data and I process it only on its instructions.
      </p>

      <h2>2. Data I collect</h2>
      <ul>
        <li>
          <strong>Website visits:</strong> pages viewed, referrer, device and browser type and
          approximate location, through Google Analytics (which uses cookies) and Vercel Analytics.
        </li>
        <li>
          <strong>AI agent chat:</strong> the messages you send, the agent’s replies, and technical
          data needed to run and rate-limit the service, such as a session identifier and IP address.
        </li>
        <li>
          <strong>WhatsApp messaging:</strong> when you message a business that uses a service I
          operate, the WhatsApp Business Platform (Meta) delivers your phone number, WhatsApp profile
          name, the content of your messages and any media you send, timestamps and delivery status.
        </li>
        <li>
          <strong>Direct contact:</strong> your name, email address and anything you include when you
          write to me.
        </li>
      </ul>

      <h2>3. How I use it</h2>
      <ul>
        <li>To answer your messages and provide the requested service.</li>
        <li>To run, secure, debug and improve the website and the agent.</li>
        <li>To meet legal obligations.</li>
      </ul>
      <p>
        I do not sell personal data, I do not use WhatsApp message content for advertising, and I do
        not use it to train AI models.
      </p>

      <h2>4. Who processes it</h2>
      <p>
        I rely on service providers that process data on my behalf: Meta (WhatsApp Business
        Platform), AI model providers that generate the agent’s replies, Vercel (website hosting),
        Oracle Cloud and EasyBits (agent hosting and file storage), and Google (Analytics, Maps).
        Some of them store data outside Mexico, including in the United States. I share data with
        authorities only when required by law.
      </p>

      <h2>5. How long I keep it</h2>
      <p>
        Only as long as needed for the purposes above. Documents uploaded to the agent are deleted
        automatically after 30 days, and download links for files the agent generates expire after
        7 days. Conversation history is kept while the service is active or until you ask for its
        deletion.
      </p>

      <h2>6. Your rights</h2>
      <p>
        Under Mexico’s Federal Law on the Protection of Personal Data Held by Private Parties you can
        access, rectify, cancel or oppose the use of your data (ARCO rights) and withdraw your
        consent. Email <a href={`mailto:${business.email}`}>{business.email}</a> with your request;
        I reply within 20 business days. To delete your data, see{' '}
        <Link href="/data-deletion">Data deletion</Link>.
      </p>

      <h2>7. Security</h2>
      <p>
        Data travels over encrypted connections, storage is private and access is limited to what
        each part of the service needs. No system is completely secure; I will notify affected
        people of any breach that significantly affects their rights.
      </p>

      <h2>8. Children</h2>
      <p>These services are not directed to people under 18.</p>

      <h2>9. Changes</h2>
      <p>
        I will update this page when the policy changes and adjust the date at the top.
      </p>
    </LegalPage>
  );
}
