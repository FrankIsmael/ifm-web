import type { Metadata } from 'next';
import { DocPage } from '@/components/doc-page';
import { cvData } from '@/lib/cv-data';

export const metadata: Metadata = {
  title: 'Robbie · WhatsApp AI agent for stores | Ismael Francisco',
  description:
    'Robbie is a WhatsApp AI agent for small stores: it answers customers, keeps the product catalog up to date, and answers questions about sales data, on the official WhatsApp Business Platform.',
  alternates: { canonical: '/robbie' },
};

const capabilities = [
  {
    title: 'Answers your customers',
    description:
      'Replies to product, price, and availability questions on your WhatsApp number, using your catalog as the source of truth, and hands the conversation to you when a person is needed.',
  },
  {
    title: 'Manages your catalog from a chat',
    description:
      'Add or update products by sending a message and a photo. The changes show up on your store or catalog site.',
  },
  {
    title: 'Answers questions about your sales',
    description:
      'Ask in plain language — what sold best this month, which products are running low — and get an answer from your own data.',
  },
];

const steps = [
  {
    title: 'Connect',
    description:
      'You connect your WhatsApp Business account through Meta’s Embedded Signup. You keep ownership of your number, your account, and your data.',
  },
  {
    title: 'Configure',
    description:
      'We load your catalog, business hours, and tone, and agree on what Robbie answers and when it hands off to you.',
  },
  {
    title: 'Go live',
    description:
      'Robbie starts replying on your number. Message templates and conversation charges are managed in your own WhatsApp Business account.',
  },
];

export default function RobbiePage() {
  const subject = encodeURIComponent('Robbie for my business');

  return (
    <DocPage
      label="Product"
      title="Robbie, a WhatsApp AI agent for stores."
      intro={
        <p>
          Robbie works where your customers already are. It runs on the
          official WhatsApp Business Platform (Cloud API) and is built and
          operated by {cvData.business.legalName}, a software engineer in
          Mexico.
        </p>
      }
    >
      <section aria-labelledby="robbie-does">
        <h2 id="robbie-does">What Robbie does</h2>
        <ul className="rule-list">
          {capabilities.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="robbie-onboarding">
        <h2 id="robbie-onboarding">How onboarding works</h2>
        <ol className="process-line process-line--three">
          {steps.map((step) => (
            <li key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="robbie-built">
        <h2 id="robbie-built">How it’s built</h2>
        <p>
          Robbie is a custom agent built on the open-source goose agent
          runtime, running in an isolated sandbox. I built the web interface,
          the real-time streaming layer, and the WhatsApp gateway around it.
          You can try the web version at{' '}
          <a className="text-link" href={cvData.agentUrl}>
            acp-agent.ismaelfrancisco.tech
          </a>
          .
        </p>
        <p>
          How customer data and WhatsApp messages are handled is described in
          the <a className="text-link" href="/privacy">Privacy Policy</a> and
          the <a className="text-link" href="/terms">Terms of Service</a>.
        </p>
      </section>

      <section aria-labelledby="robbie-contact" className="doc-cta">
        <h2 id="robbie-contact">Want Robbie for your business?</h2>
        <p>Tell me about your store and how your customers reach you today.</p>
        <a
          className="button"
          href={`mailto:${cvData.business.email}?subject=${subject}`}
        >
          Email {cvData.business.email}
        </a>
      </section>
    </DocPage>
  );
}
