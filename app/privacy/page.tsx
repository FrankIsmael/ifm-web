import type { Metadata } from 'next';
import { DocPage } from '@/components/doc-page';
import { cvData } from '@/lib/cv-data';

export const metadata: Metadata = {
  title: 'Privacy Policy | Ismael Francisco',
  description:
    'How Ismael Francisco Moreno collects, uses, and protects personal data on this website and in WhatsApp services such as Robbie.',
  alternates: { canonical: '/privacy' },
};

const UPDATED = 'November 13, 2026';

export default function PrivacyPage() {
  const { business } = cvData;
  const mail = (
    <a className="text-link" href={`mailto:${business.email}`}>
      {business.email}
    </a>
  );

  return (
    <DocPage
      label="Legal"
      title="Privacy Policy"
      updated={UPDATED}
      intro={
        <p>
          This policy explains how personal data is handled on
          ismaelfrancisco.tech and in the software services I provide,
          including Robbie, a WhatsApp AI agent for businesses. It is issued in
          accordance with Mexico’s Federal Law on the Protection of Personal
          Data Held by Private Parties (LFPDPPP).
        </p>
      }
    >
      <section>
        <h2>1. Who is responsible</h2>
        <p>
          {business.legalName}, an individual providing software consulting
          services in Mexico, with address at {business.address}. Contact:{' '}
          {mail}.
        </p>
      </section>

      <section>
        <h2>2. Two roles</h2>
        <ul className="copy-list">
          <li>
            <strong>Website visitors and prospective clients.</strong> I am
            the party responsible for the data described in section 3.
          </li>
          <li>
            <strong>WhatsApp services for client businesses.</strong> When a
            business uses Robbie, that business is responsible for its
            customers’ data, and I process it only on its behalf and according
            to its instructions, as described in section 4.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. Website and direct contact</h2>
        <p>Data collected:</p>
        <ul className="copy-list">
          <li>
            Information you send me by email: your name, email address,
            company, and the content of your message.
          </li>
          <li>
            Usage data collected by Vercel Analytics and Google Analytics:
            pages visited, approximate location derived from your IP address,
            device and browser type.
          </li>
          <li>
            Messages you send to the chat assistant on this website, used to
            answer you.
          </li>
        </ul>
        <p>
          Purposes: replying to inquiries, preparing proposals and contracts,
          and understanding how the website is used. I do not sell personal
          data or use it for advertising.
        </p>
      </section>

      <section>
        <h2>4. WhatsApp data processed for client businesses</h2>
        <p>
          When a business connects its WhatsApp Business account to Robbie
          through the WhatsApp Business Platform, the following data may be
          processed:
        </p>
        <ul className="copy-list">
          <li>Phone numbers and WhatsApp profile names of the business’s customers.</li>
          <li>Message content, including text, images, audio, and documents.</li>
          <li>Message metadata such as timestamps and delivery status.</li>
          <li>
            The business’s WhatsApp Business account identifiers, message
            templates, and catalog or product data.
          </li>
        </ul>
        <p>
          This data is used only to provide the service the business
          requested: receiving and answering messages, managing catalog
          information, and producing reports for that business. It is not
          used to train AI models, sold, or shared with other clients.
        </p>
        <p>
          The business is responsible for obtaining its customers’ consent
          (opt-in) to receive WhatsApp messages and for informing them about
          this processing.
        </p>
      </section>

      <section>
        <h2>5. Service providers</h2>
        <p>
          Data is processed with the following providers, only as needed to
          run the services:
        </p>
        <ul className="copy-list">
          <li>Meta Platforms (WhatsApp Business Platform), for sending and receiving WhatsApp messages.</li>
          <li>Vercel, for website hosting and analytics.</li>
          <li>Google, for website analytics.</li>
          <li>
            {/* TODO(owner): confirm hosting provider for the agent runtime. */}
            Cloud infrastructure providers that host the agent and its data.
          </li>
          <li>
            {/* TODO(owner): name the AI model provider(s) actually used. */}
            AI model providers that generate the agent’s replies, under terms
            that do not allow them to train on this data.
          </li>
        </ul>
        <p>
          Some of these providers are located outside Mexico. Transfers are
          made only to the extent necessary to provide the services.
        </p>
      </section>

      <section>
        <h2>6. Retention and security</h2>
        <p>
          Inquiry emails are kept as long as needed to handle the
          conversation and any resulting contract. WhatsApp data is kept for
          as long as the business uses the service and is deleted within 30
          days after the business disconnects or requests deletion, unless
          the law requires otherwise. Access is restricted, credentials are
          stored securely, and data travels over encrypted connections.
        </p>
      </section>

      <section id="data-deletion">
        <h2>7. Your rights and data deletion</h2>
        <p>
          You can request access to, rectification, cancellation, or
          opposition to the processing of your personal data (ARCO rights),
          or revoke your consent, by emailing {mail} with your name, the
          phone number or email involved, and your request. I will reply
          within 20 business days.
        </p>
        <p>
          If you are a customer of a business that uses Robbie, you can also
          contact that business directly. To delete WhatsApp conversation
          data, send the request to {mail}; it will be deleted within 30 days
          and you will receive a confirmation.
        </p>
      </section>

      <section>
        <h2>8. Changes</h2>
        <p>
          Changes to this policy are published on this page with a new
          “Last updated” date.
        </p>
      </section>
    </DocPage>
  );
}
