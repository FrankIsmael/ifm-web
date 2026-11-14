import type { Metadata } from 'next';
import { DocPage } from '@/components/doc-page';
import { cvData } from '@/lib/cv-data';

export const metadata: Metadata = {
  title: 'Terms of Service | Ismael Francisco',
  description:
    'Terms for software services and WhatsApp AI agent services (Robbie) provided by Ismael Francisco Moreno.',
  alternates: { canonical: '/terms' },
};

const UPDATED = 'November 13, 2026';

export default function TermsPage() {
  const { business } = cvData;

  return (
    <DocPage
      label="Legal"
      title="Terms of Service"
      updated={UPDATED}
      intro={
        <p>
          These terms apply to the software services provided by{' '}
          {business.legalName} (“I”, “me”) to businesses (“you”), including
          Robbie, a WhatsApp AI agent. A signed proposal or contract for a
          specific project takes precedence over these terms where they
          differ.
        </p>
      }
    >
      <section>
        <h2>1. Services</h2>
        <p>
          I provide software development, consulting, and AI agent services.
          Robbie connects to your WhatsApp Business account through the
          official WhatsApp Business Platform to answer your customers,
          manage catalog information, and report on your data, as agreed for
          your account.
        </p>
      </section>

      <section>
        <h2>2. Your WhatsApp account</h2>
        <ul className="copy-list">
          <li>
            You connect your own WhatsApp Business account and phone number
            and keep ownership of them. You can disconnect Robbie at any time.
          </li>
          <li>
            You must comply with the WhatsApp Business Terms of Service and
            the WhatsApp Business and Commerce Policies, including obtaining
            your customers’ opt-in before messaging them.
          </li>
          <li>
            WhatsApp conversation and template charges are billed by Meta to
            the payment method on your WhatsApp Business account, separately
            from my fees.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. Acceptable use</h2>
        <p>
          You may not use the services to send spam, unlawful content, or
          messages to people who have not agreed to receive them, or to sell
          products prohibited by WhatsApp’s policies. I may suspend the
          service if it is used in breach of these terms or of Meta’s
          policies.
        </p>
      </section>

      <section>
        <h2>4. AI-generated replies</h2>
        <p>
          Robbie generates replies automatically from your information. It
          can make mistakes. You are responsible for the business information
          you provide and for reviewing how the agent represents your
          business; sensitive topics should be handed off to a person.
        </p>
      </section>

      <section>
        <h2>5. Fees</h2>
        <p>
          Fees, scope, and payment terms are set out in the proposal or
          contract for each engagement. Invoices (CFDI) are issued according
          to Mexican tax rules.
        </p>
      </section>

      <section>
        <h2>6. Data</h2>
        <p>
          Personal data is handled as described in the{' '}
          <a className="text-link" href="/privacy">
            Privacy Policy
          </a>
          . You own your data; on request or when the service ends, it is
          returned or deleted.
        </p>
      </section>

      <section>
        <h2>7. Liability</h2>
        <p>
          The services are provided with reasonable care but without a
          guarantee of uninterrupted operation, including outages of
          WhatsApp or other third-party platforms. To the extent the law
          allows, my total liability is limited to the fees you paid in the
          three months before the claim.
        </p>
      </section>

      <section>
        <h2>8. Law and contact</h2>
        <p>
          These terms are governed by the laws of Mexico. Questions:{' '}
          <a className="text-link" href={`mailto:${business.email}`}>
            {business.email}
          </a>
          , {business.address}.
        </p>
      </section>
    </DocPage>
  );
}
