import { Clock, Globe, Mail, MapPin, Phone, type LucideIcon } from 'lucide-react';

import { buildGeneralWhatsAppLink } from '@/app/lib/utils/whatsapp';

const BUSINESS_EMAIL = process.env.NEXT_PUBLIC_BUSINESS_EMAIL ?? 'rafaeeltuju902@gmail.com';
const BUSINESS_LOCATION =
  process.env.NEXT_PUBLIC_BUSINESS_LOCATION ?? 'Ikonge-Ekerenyo Stage, Chuka University';
const MAPS_EMBED_URL = process.env.NEXT_PUBLIC_MAPS_EMBED_URL;

interface ContactDetail {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}

const DETAILS: ContactDetail[] = [
  { icon: Phone, label: 'Call or WhatsApp', value: '0715 616 633', href: buildGeneralWhatsAppLink() },
  { icon: Mail, label: 'Email', value: BUSINESS_EMAIL, href: `mailto:${BUSINESS_EMAIL}` },
  { icon: MapPin, label: 'Location', value: BUSINESS_LOCATION },
  { icon: Clock, label: 'Hours', value: 'Open Daily Until Late' },
  { icon: Globe, label: 'Reach', value: 'Online services available countrywide' },
];

export default function ContactInfo() {
  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-12 lg:grid-cols-[45%_55%]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-orange-500">
            GET IN TOUCH
          </p>
          <h2 className="mt-3 text-3xl font-bold text-navy-900">Other Ways to Reach Us</h2>
          <ul className="mt-6 space-y-5">
            {DETAILS.map((detail) => (
              <li key={detail.label} className="flex items-start gap-3">
                <detail.icon className="mt-0.5 h-5 w-5 shrink-0 text-navy-900" aria-hidden="true" />
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
        <div className="min-h-[400px]">
          {MAPS_EMBED_URL ? (
            <iframe
              src={MAPS_EMBED_URL}
              title="Tuju Outspan Cyber Center location map"
              loading="lazy"
              className="h-full min-h-[400px] w-full rounded-xl border border-gray-200"
            />
          ) : (
            <div className="flex h-full min-h-[400px] flex-col items-center justify-center rounded-xl border border-gray-200 bg-gray-50 p-8 text-center">
              <MapPin className="h-10 w-10 text-navy-100" aria-hidden="true" />
              <p className="mt-4 text-gray-600">
                Map embed coming soon. Find us at Ikonge-Ekerenyo Stage, Chuka University.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
