import { Megaphone, MessageCircle, Users } from 'lucide-react';

import Breadcrumb from '@/app/components/ui/Breadcrumb';
import Button from '@/app/components/ui/Button';
import ContactForm from '@/app/components/sections/ContactForm';
import ContactInfo from '@/app/components/sections/ContactInfo';
import { buildMetadata, contactPageJsonLd } from '@/app/lib/utils/seo';
import { buildGeneralWhatsAppLink } from '@/app/lib/utils/whatsapp';

export const metadata = buildMetadata({
  title: 'Contact Us',
  description:
    'Chat with us on WhatsApp, email us, or walk into our cyber center at Ikonge-Ekerenyo Stage, Chuka University.',
  path: '/contact',
});

export default function ContactPage() {
  const groupLink = process.env.NEXT_PUBLIC_WHATSAPP_GROUP;
  const channelLink = process.env.NEXT_PUBLIC_WHATSAPP_CHANNEL;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd()) }}
      />

      <section className="hero-glow relative overflow-hidden bg-navy-900 px-6 pb-15 pt-24 text-white lg:pt-28">
        <div className="relative z-10 mx-auto max-w-[1200px]">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Contact' },
            ]}
          />
          <h1 className="mt-4 text-[28px] font-bold leading-[1.2] tracking-[-0.01em] md:text-[32px] lg:text-4xl">
            Contact Us
          </h1>
          <p className="mt-3 max-w-[560px] text-lg text-gray-400">
            We are one message away. Reach out however works best for you.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 pb-12 pt-16">
        <div className="mx-auto max-w-[500px] rounded-2xl border-2 border-whatsapp bg-white p-10 text-center shadow-[0_8px_32px_rgba(37,211,102,0.15)]">
          <MessageCircle className="mx-auto h-12 w-12 text-whatsapp" aria-hidden="true" />
          <h2 className="mt-4 text-2xl font-bold text-navy-900">Chat with Us on WhatsApp</h2>
          <p className="mt-2 text-[28px] font-bold text-navy-900">0715 616 633</p>
          <p className="mt-2 text-sm text-gray-600">
            Fastest way to get help. Usually responds within minutes.
          </p>
          <div className="mt-6">
            <Button href={buildGeneralWhatsAppLink()} variant="whatsapp" className="w-full">
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Start Chat
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-12">
        <div className="mx-auto grid max-w-[800px] grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-white p-7">
            <Users className="h-8 w-8 text-navy-900" aria-hidden="true" />
            <h3 className="mt-4 text-lg font-semibold text-navy-900">Join Our WhatsApp Group</h3>
            <p className="mt-2 text-sm text-gray-600">
              Community Q&amp;A, tips, and peer support.
            </p>
            <div className="mt-4">
              {groupLink ? (
                <Button href={groupLink} variant="outline" size="small">
                  Join Now
                </Button>
              ) : (
                <p className="text-sm text-gray-400">Link coming soon</p>
              )}
            </div>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-7">
            <Megaphone className="h-8 w-8 text-navy-900" aria-hidden="true" />
            <h3 className="mt-4 text-lg font-semibold text-navy-900">Join Our WhatsApp Channel</h3>
            <p className="mt-2 text-sm text-gray-600">
              Announcements, new services, and updates.
            </p>
            <div className="mt-4">
              {channelLink ? (
                <Button href={channelLink} variant="outline" size="small">
                  Join Now
                </Button>
              ) : (
                <p className="text-sm text-gray-400">Link coming soon</p>
              )}
            </div>
          </div>
        </div>
      </section>

      <ContactInfo />

      <section className="bg-navy-50 px-6 py-16">
        <div className="mx-auto max-w-[560px] text-center">
          <h2 className="text-2xl font-bold text-navy-900">Send Us a Message</h2>
          <p className="mt-2 text-gray-600">
            Fill this out and it opens WhatsApp with your message ready to send.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-orange-50 px-6 py-12 text-center">
        <p className="text-lg font-medium text-navy-900">
          Prefer to visit? Walk in anytime, we are open daily until late.
        </p>
      </section>
    </>
  );
}
