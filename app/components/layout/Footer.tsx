import Link from 'next/link';

import { Clock, Mail, MapPin, Megaphone, MessageCircle, Phone } from 'lucide-react';

import { serviceCategories } from '@/app/lib/data/services';

const QUICK_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

const BUSINESS_EMAIL = process.env.NEXT_PUBLIC_BUSINESS_EMAIL ?? 'rafaeeltuju902@gmail.com';
const BUSINESS_LOCATION =
  process.env.NEXT_PUBLIC_BUSINESS_LOCATION ?? 'Ikonge-Ekerenyo Stage, Chuka University';

export default function Footer() {
  const groupLink = process.env.NEXT_PUBLIC_WHATSAPP_GROUP;
  const channelLink = process.env.NEXT_PUBLIC_WHATSAPP_CHANNEL;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 px-6 pb-6 pt-16 text-white">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.5fr]">
        <div>
          <img
            src="/images/logo/logo-footer.png"
            alt="Tuju Outspan Cyber Center"
            className="h-12 w-auto"
          />
          <p className="mt-3 text-sm text-gray-400">
            Your trusted cyber center at Ikonge-Ekerenyo Stage, Chuka University. Online services
            available countrywide.
          </p>
          <p className="mt-3 text-sm font-semibold text-orange-400">
            Your Hustle. Our Tech. Made Easy.
          </p>
        </div>

        <nav aria-label="Footer quick links">
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">Quick Links</h2>
          <ul className="space-y-2.5">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer services">
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">Services</h2>
          <ul className="space-y-2.5">
            {serviceCategories.map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/services/${category.slug}`}
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">Contact</h2>
          <ul className="space-y-2.5 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span className="font-semibold text-white">0715 616 633</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" aria-hidden="true" />
              <a href={`mailto:${BUSINESS_EMAIL}`} className="transition-colors hover:text-white">
                {BUSINESS_EMAIL}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {BUSINESS_LOCATION}
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4" aria-hidden="true" />
              Open daily until late
            </li>
          </ul>
          <div className="mt-4 flex flex-wrap gap-3">
            {groupLink && (
              <a
                href={groupLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-navy-800 px-3.5 py-2 text-sm font-semibold text-white transition-colors hover:bg-navy-700"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp Group
              </a>
            )}
            {channelLink && (
              <a
                href={channelLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-navy-800 px-3.5 py-2 text-sm font-semibold text-white transition-colors hover:bg-navy-700"
              >
                <Megaphone className="h-4 w-4" aria-hidden="true" />
                WhatsApp Channel
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 w-full max-w-[1200px] border-t border-navy-800 pt-5 text-center text-sm text-gray-400">
        <p>Online services available countrywide • Your Hustle. Our Tech. Made Easy.</p>
        <p className="mt-1">© {year} Tuju Outspan Cyber Center</p>
      </div>
    </footer>
  );
}
