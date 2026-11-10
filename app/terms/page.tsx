import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalPage } from '@/components/legal-page';
import { business } from '@/lib/business';

export const metadata: Metadata = {
  title: 'Terms of Service | Ismael Francisco',
  description: 'Terms for using this site, the AI agent and the WhatsApp messaging services.',
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      intro={`These terms apply to ${business.website}, the AI agent ("Robbie") and the software and messaging services provided by ${business.legalName}. By using them you accept these terms.`}
    >
      <h2>1. Services</h2>
      <p>
        I design, build and operate web applications, APIs, cloud infrastructure and AI assistants,
        including assistants that answer customers on WhatsApp on behalf of client businesses through
        Meta’s WhatsApp Business Platform. The scope, price and schedule of client work are set in a
        separate written agreement, which prevails over these terms.
      </p>

      <h2>2. AI-generated content</h2>
      <p>
        The agent’s replies are generated automatically and may be inaccurate or incomplete. Do not
        rely on them as professional, legal, medical or financial advice. A business using the agent
        remains responsible for the information it gives its customers.
      </p>

      <h2>3. Acceptable use</h2>
      <p>
        Do not use the services to break the law, send spam, harass anyone, distribute malware,
        attempt to bypass security or usage limits, or extract other people’s data. I may limit or
        suspend access that breaks these rules.
      </p>

      <h2>4. Client businesses on WhatsApp</h2>
      <p>
        Businesses that use a WhatsApp service I operate keep ownership of their WhatsApp Business
        Account and phone number. They are responsible for obtaining their customers’ consent where
        required and for following the WhatsApp Business Terms, the WhatsApp Business Messaging Policy
        and the Meta Commerce Policy. Meta’s messaging charges are billed by Meta unless agreed
        otherwise.
      </p>

      <h2>5. Intellectual property</h2>
      <p>
        The content and code of this site belong to me unless stated otherwise. Ownership of work
        built for clients is defined in each client agreement.
      </p>

      <h2>6. Availability and liability</h2>
      <p>
        The services are provided “as is”. I work to keep them available but do not guarantee
        uninterrupted operation. To the extent the law allows, I am not liable for indirect or
        consequential losses arising from their use.
      </p>

      <h2>7. Privacy</h2>
      <p>
        Personal data is handled as described in the <Link href="/privacy">Privacy Policy</Link>.
      </p>

      <h2>8. Governing law</h2>
      <p>
        These terms are governed by the laws of Mexico. Any dispute will be handled by the competent
        courts of Mexico.
      </p>

      <h2>9. Contact</h2>
      <p>
        <a href={`mailto:${business.email}`}>{business.email}</a>
      </p>
    </LegalPage>
  );
}
