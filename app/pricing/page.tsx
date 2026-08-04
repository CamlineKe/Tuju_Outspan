import { Banknote, Smartphone, Tag } from 'lucide-react';

import PricingTable from '@/app/components/sections/PricingTable';
import Breadcrumb from '@/app/components/ui/Breadcrumb';
import Button from '@/app/components/ui/Button';
import FAQItem from '@/app/components/ui/FAQItem';
import SectionHeader from '@/app/components/ui/SectionHeader';
import { pricingCards } from '@/app/lib/data/pricing';
import { absolutePageUrl, buildMetadata, faqJsonLd, serviceJsonLd } from '@/app/lib/utils/seo';
import { buildGeneralWhatsAppLink } from '@/app/lib/utils/whatsapp';

const PRICING_FAQS = [
  {
    question: 'Why do you not list exact prices for everything?',
    answer:
      'Rates depend on service complexity, urgency, and volume, so we quote after understanding your needs.',
  },
  {
    question: 'Can I negotiate for bulk work?',
    answer: 'Yes. Bulk orders enjoy volume discounts; mention it when you contact us.',
  },
  {
    question: 'Do I pay before or after?',
    answer: 'Payment is agreed per service. M-Pesa and cash are accepted.',
  },
  {
    question: 'How do I get an exact quote?',
    answer: 'Message us on WhatsApp with the service you need and we respond with a quote.',
  },
];

export const metadata = buildMetadata({
  title: 'Pricing',
  description:
    'No hidden fees. Fair, transparent rates for every service at Tuju Outspan Cyber Center.',
  path: '/pricing',
});

export default function PricingPage() {
  const serviceLd = pricingCards.map((card) =>
    serviceJsonLd({
      name: card.name,
      description: card.description,
      url: absolutePageUrl(`/services/${card.slug}`),
    })
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(PRICING_FAQS)) }}
      />

      <section className="hero-glow relative overflow-hidden bg-navy-900 px-6 pb-10 pt-28 text-white lg:pt-32">
        <div className="relative z-10 mx-auto max-w-[1200px]">
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Pricing' }]} />
          <h1 className="mt-4 text-[28px] font-bold leading-[1.2] tracking-[-0.01em] md:text-[32px] lg:text-4xl">
            Pricing
          </h1>
          <p className="mt-3 max-w-[560px] text-lg text-gray-400">
            No hidden fees. Fair, transparent rates for every service.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <p className="mx-auto max-w-[640px] text-center leading-relaxed text-gray-600">
          We believe in honest pricing. Rates depend on service complexity, urgency, and volume.
          Below are starting estimates; confirm your exact quote on WhatsApp.
        </p>
      </section>

      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-[1000px]">
          <SectionHeader overline="PRICING" title="Transparent Rates" />
          <PricingTable />
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-[600px] text-center">
          <Tag className="mx-auto h-8 w-8 text-orange-500" aria-hidden="true" />
          <h2 className="mt-4 text-2xl font-bold text-navy-900">Special Rates Available</h2>
          <p className="mt-2 text-gray-600">
            Students get discounted rates. Bulk orders enjoy volume discounts. Mention it when you
            contact us.
          </p>
          <div className="mt-6 flex justify-center">
            <Button href={buildGeneralWhatsAppLink()} variant="outline">
              Ask About Discounts
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-navy-50 px-6 py-12 text-center">
        <h2 className="text-xl font-semibold text-navy-900">Payment Options</h2>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-8">
          <p className="flex items-center gap-2 text-gray-600">
            <Smartphone className="h-5 w-5 text-navy-900" aria-hidden="true" />
            M-Pesa (primary)
          </p>
          <p className="flex items-center gap-2 text-gray-600">
            <Banknote className="h-5 w-5 text-navy-900" aria-hidden="true" />
            Cash for walk-ins
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-[720px]">
          <SectionHeader overline="FAQ" title="Common Questions" />
          {PRICING_FAQS.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Button href={buildGeneralWhatsAppLink()} size="large">
            Get Your Exact Quote
          </Button>
        </div>
      </section>
    </>
  );
}
