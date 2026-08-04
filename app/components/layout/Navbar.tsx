'use client';

import { useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { AnimatePresence, motion } from 'framer-motion';
import { Menu, MessageCircle, X } from 'lucide-react';

import { cn } from '@/app/lib/utils/cn';
import { buildContextualWhatsAppLink, getWhatsAppContextForPath } from '@/app/lib/utils/whatsapp';

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
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const wasMenuOpenRef = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock page scroll while the mobile menu is open so the page behind the
  // overlay cannot be swiped or scrolled. Locking both body and html covers
  // iOS Safari, which ignores overflow on the body alone.
  useEffect(() => {
    if (!menuOpen) {
      return;
    }
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [menuOpen]);

  // Move focus into the menu when it opens, restore it when it closes, close
  // on Escape, and keep Tab cycling within the overlay while it is open.
  useEffect(() => {
    if (menuOpen) {
      wasMenuOpenRef.current = true;
      closeButtonRef.current?.focus();
      const onKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          setMenuOpen(false);
          return;
        }
        if (event.key !== 'Tab') {
          return;
        }
        const container = document.getElementById('mobile-menu');
        if (!container) {
          return;
        }
        const focusable = Array.from(
          container.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')
        );
        if (focusable.length === 0) {
          return;
        }
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      };
      document.addEventListener('keydown', onKeyDown);
      return () => document.removeEventListener('keydown', onKeyDown);
    }
    if (wasMenuOpenRef.current) {
      wasMenuOpenRef.current = false;
      menuButtonRef.current?.focus();
    }
    return undefined;
  }, [menuOpen]);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));
  const { context: whatsappContext, label: whatsappLabel } = getWhatsAppContextForPath(
    pathname ?? ''
  );
  const whatsappHref = buildContextualWhatsAppLink(whatsappContext, whatsappLabel);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-[100] h-24 border-b border-navy-800 bg-navy-900 transition-all duration-300 lg:h-28',
        scrolled && 'bg-navy-900/95 shadow-navy-sm backdrop-blur-md'
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-full w-full max-w-[1200px] items-center justify-between px-6"
      >
        <Link href="/" aria-label="Tuju Outspan Cyber Center home">
          <Image
            src="/images/logo/logo-footer.png"
            alt="Tuju Outspan Cyber Center"
            width={636}
            height={160}
            className="h-18 w-auto lg:h-24"
          />
        </Link>

        <ul className="hidden items-center gap-6 lg:flex xl:gap-7">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  'relative py-1 text-sm font-medium text-gray-400 transition-colors hover:text-white',
                  isActive(link.href) &&
                    'text-white after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:bg-orange-500'
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-[10px] bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-600 sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp
          </Link>
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="inline-flex h-11 w-11 items-center justify-center text-white lg:hidden"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-[110] flex flex-col bg-navy-900 lg:hidden"
          >
            <div className="flex h-24 items-center justify-between px-6">
              <Image
                src="/images/logo/logo-footer.png"
                alt="Tuju Outspan Cyber Center"
                width={636}
                height={160}
                className="h-20 w-auto"
              />
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-11 w-11 items-center justify-center text-white"
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
                      'text-2xl font-semibold text-white',
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
                href={whatsappHref}
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
