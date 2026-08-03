'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { AnimatePresence, motion } from 'framer-motion';
import { Menu, MessageCircle, X } from 'lucide-react';

import { cn } from '@/app/lib/utils/cn';
import { buildGeneralWhatsAppLink } from '@/app/lib/utils/whatsapp';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-[100] h-20 border-b border-gray-200 bg-white transition-all duration-300 lg:h-24',
        scrolled && 'bg-white/95 shadow-navy-sm backdrop-blur-md'
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-full w-full max-w-[1200px] items-center justify-between px-6"
      >
        <Link href="/" aria-label="Tuju Outspan Cyber Center home">
          <img
            src="/images/logo/logo-white.png"
            alt="Tuju Outspan Cyber Center"
            className="h-14 w-auto sm:h-16 lg:h-20"
          />
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  'relative py-1 text-sm font-medium text-gray-600 transition-colors hover:text-navy-900',
                  isActive(link.href) &&
                    'text-navy-900 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:bg-orange-500'
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href={buildGeneralWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-[10px] bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-600 sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="inline-flex h-11 w-11 items-center justify-center text-navy-900 lg:hidden"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-[110] flex flex-col bg-white lg:hidden"
          >
            <div className="flex h-24 items-center justify-between px-6">
              <img
                src="/images/logo/logo-white.png"
                alt="Tuju Outspan Cyber Center"
                className="h-20 w-auto"
              />
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-11 w-11 items-center justify-center text-navy-900"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <ul className="flex flex-1 flex-col items-center justify-center gap-8">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'text-2xl font-semibold text-navy-900',
                      isActive(link.href) && 'text-orange-500'
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="p-6">
              <Link
                href={buildGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-[10px] bg-orange-500 px-5 py-3.5 font-semibold text-white transition-colors hover:bg-orange-600"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Chat on WhatsApp
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
