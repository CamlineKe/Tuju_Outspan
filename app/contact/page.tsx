import {
  Clock,
  Globe,
  type LucideIcon,
  Mail,
  MapPin,
  Megaphone,
  Phone,
  Users,
} from 'lucide-react';

import { WhatsAppIcon } from '@/app/components/icons/WhatsAppIcon';
import ContactForm from '@/app/components/sections/ContactForm';
import ContactInfo from '@/app/components/sections/ContactInfo';
import Breadcrumb from '@/app/components/ui/Breadcrumb';
import Button from '@/app/components/ui/Button';
import Reveal from '@/app/components/ui/Reveal';
import SectionHeader from '@/app/components/ui/SectionHeader';
import { buildMetadata, contactPageJsonLd } from '@/app/lib/utils/seo';
import { buildContextualWhatsAppLink } from '@/app/lib/utils/whatsapp';

export const metadata = buildMetadata({
  title: 'Contact Us',
  description:
    'Chat with us on WhatsApp, email us, or walk into our cyber center at Ikonge-Ekerenyo Stage, Chuka University.',
  path: '/contact',
});

const BUSINESS_EMAIL = process.env.NEXT_PUBLIC_BUSINESS_EMAIL ?? 'rafaeeltuju902@gmail.com';
const BUSINESS_LOCATION =
  process.env.NEXT_PUBLIC_BUSINESS_LOCATION ?? 'Ikonge-Ekerenyo Stage, Chuka University';

interface ContactDetail {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}

const DETAILS: ContactDetail[] = [
  {
    icon: Phone,
    label: 'Call or WhatsApp',
    value: '0715 616 633',
    href: buildContextualWhatsAppLink('contact'),
  },
  { icon: Mail, label: 'Email', value: BUSINESS_EMAIL, href: `mailto:${BUSINESS_EMAIL}` },
  { icon: MapPin, label: 'Location', value: BUSINESS_LOCATION },
  { icon: Clock, label: 'Hours', value: 'Open Daily Until Late' },
  { icon: Globe, label: 'Reach', value: 'Online services available countrywide' },
];

export default function ContactPage() {
  const groupLink = process.env.NEXT_PUBLIC_WHATSAPP_GROUP;
  const channelLink = process.env.NEXT_PUBLIC_WHATSAPP_CHANNEL;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd()) }}
      />

      <section className="hero-glow relative overflow-hidden bg-navy-900 px-6 pb-10 pt-28 text-white lg:pt-32">
        <div className="relative z-10 mx-auto max-w-[1200px]">
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />
          <h1 className="mt-4 text-[28px] font-bold leading-[1.2] tracking-[-0.01em] md:text-[32px] lg:text-4xl">
            Contact Us
          </h1>
          <p className="mt-3 max-w-[560px] text-lg text-gray-400">
            We are one message away. Reach out however works best for you.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal className="h-full">
            <div className="flex h-full flex-col rounded-2xl border-2 border-whatsapp bg-white p-8 shadow-[0_8px_32px_rgba(37,211,102,0.15)] md:p-10">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp/10">
                <WhatsAppIcon className="h-7 w-7 text-whatsapp" aria-hidden="true" />
              </div>
              <h2 className="mt-5 text-2xl font-bold text-navy-900">Chat with Us on WhatsApp</h2>
              <p className="mt-3 text-[28px] font-bold text-navy-900">0715 616 633</p>
              <p className="mt-2 text-sm text-gray-600">
                Fastest way to get help. Usually responds within minutes.
              </p>
              <div className="mt-auto pt-8">
                <Button
                  href={buildContextualWhatsAppLink('contact')}
                  variant="whatsapp"
                  className="w-full"
                >
                  <WhatsAppIcon className="h-5 w-5" aria-hidden="true" />
                  Start Chat
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="h-full">
            <div className="flex h-full flex-col rounded-2xl bg-gray-50 p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-orange-500">
                GET IN TOUCH
              </p>
              <h3 className="mt-3 text-2xl font-bold text-navy-900">Other Ways to Reach Us</h3>
              <ul className="mt-6 space-y-5">
                {DETAILS.map((detail) => (
                  <li key={detail.label} className="flex items-start gap-3">
                    <detail.icon
                      className="mt-0.5 h-5 w-5 shrink-0 text-navy-900"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-[13px] text-gray-400">{detail.label}</p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          target={detail.href.startsWith('http') ? '_blank' : undefined}
                          rel={detail.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-lg font-semibold text-navy-900 transition-colors hover:text-navy-700"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-lg font-semibold text-navy-900">{detail.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-[1200px]">
          <SectionHeader
            overline="COMMUNITY"
            title="Join the Community"
            description="Tips, updates, and peer support on WhatsApp."
          />
          <div className="mx-auto grid max-w-[900px] grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-8">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-navy-50">
                  <Users className="h-6 w-6 text-navy-900" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-navy-900">
                  Join Our WhatsApp Group
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Community Q&amp;A, tips, and peer support.
                </p>
                <div className="mt-auto pt-6">
                  {groupLink ? (
                    <Button href={groupLink} variant="outline" size="small">
                      Join Now
                    </Button>
                  ) : (
                    <p className="text-sm text-gray-400">Link coming soon</p>
                  )}
                </div>
              </div>
            </Reveal>

            <Reveal delay={100} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-8">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-navy-50">
                  <Megaphone className="h-6 w-6 text-navy-900" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-navy-900">
                  Join Our WhatsApp Channel
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Announcements, new services, and updates.
                </p>
                <div className="mt-auto pt-6">
                  {channelLink ? (
                    <Button href={channelLink} variant="outline" size="small">
                      Join Now
                    </Button>
                  ) : (
                    <p className="text-sm text-gray-400">Link coming soon</p>
                  )}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <ContactInfo />

      <section className="bg-navy-50 px-6 py-16">
        <div className="mx-auto max-w-[720px]">
          <SectionHeader
            overline="SEND A MESSAGE"
            title="Send Us a Message"
            description="Fill this out and it opens WhatsApp with your message ready to send."
          />
          <Reveal>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-navy-md md:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
