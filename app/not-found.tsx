import { Briefcase, FileText, House, Phone, type LucideIcon } from 'lucide-react';
import Link from 'next/link';

import Button from '@/app/components/ui/Button';
import { buildGeneralWhatsAppLink } from '@/app/lib/utils/whatsapp';

interface QuickLink {
  href: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const QUICK_LINKS: QuickLink[] = [
  { href: '/', title: 'Home', description: 'Back to our main page', icon: House },
  {
    href: '/services',
    title: 'Services',
    description: 'Browse all our services',
    icon: Briefcase,
  },
  {
    href: '/contact',
    title: 'Contact',
    description: 'Get in touch via WhatsApp',
    icon: Phone,
  },
  {
    href: '/pricing',
    title: 'Pricing',
    description: 'Check our transparent rates',
    icon: FileText,
  },
];

export default function NotFound() {
  return (
    <>
      <section className="hero-glow relative overflow-hidden bg-navy-900 px-6 py-20 text-center text-white lg:py-30">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] font-bold text-navy-800 opacity-10 lg:text-[280px]"
        >
          TO
        </span>
        <div className="relative z-10 mx-auto max-w-[1200px]">
          <p className="text-[80px] font-bold leading-none opacity-15 lg:text-[120px]">404</p>
          <h1 className="mt-2 text-[28px] font-bold leading-[1.2] md:text-[32px] lg:text-4xl">
            Page Not Found
          </h1>
          <p className="mx-auto mt-4 max-w-[480px] text-lg text-gray-400">
            Looks like this page took a wrong turn. But do not worry, we are still here to help.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/">Back to Home</Button>
            <Button href={buildGeneralWhatsAppLink()} variant="outline-light">
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="text-2xl font-bold leading-[1.25] text-navy-900 md:text-[28px] lg:text-[32px]">
            Where to Next?
          </h2>
          <p className="mt-2 text-gray-600">Here are some pages you might be looking for.</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-[900px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {QUICK_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-navy-800 hover:shadow-navy-md"
            >
              <link.icon className="h-6 w-6 text-navy-900" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-semibold text-navy-900">{link.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{link.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-orange-50 px-6 py-12 text-center">
        <h2 className="text-2xl font-bold text-navy-900">Can't Find What You Need?</h2>
        <p className="mt-2 text-gray-600">Just WhatsApp us, we probably do it.</p>
        <div className="mt-6 flex justify-center">
          <Button href={buildGeneralWhatsAppLink()}>Ask on WhatsApp</Button>
        </div>
      </section>
    </>
  );
}
