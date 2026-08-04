'use client';

import { useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

import { cn } from '@/app/lib/utils/cn';
import {
  buildContextualWhatsAppLink,
  getWhatsAppContextForPath,
} from '@/app/lib/utils/whatsapp';

const PULSE_SESSION_KEY = 'tuju-outspan-whatsapp-pulsed';

export default function WhatsAppFloat() {
  const pathname = usePathname();
  const [shouldPulse, setShouldPulse] = useState(false);
  const hideOnMobile = /^\/services\/.+$/.test(pathname ?? '');
  const { context: whatsappContext, label: whatsappLabel } = getWhatsAppContextForPath(
    pathname ?? ''
  );

  useEffect(() => {
    try {
      if (!sessionStorage.getItem(PULSE_SESSION_KEY)) {
        sessionStorage.setItem(PULSE_SESSION_KEY, '1');
        setShouldPulse(true);
      }
    } catch {
      // Storage can be unavailable (private mode, blocked cookies); pulse anyway.
      setShouldPulse(true);
    }
  }, []);

  return (
    <motion.a
      href={buildContextualWhatsAppLink(whatsappContext, whatsappLabel)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ scale: 1 }}
      animate={shouldPulse ? { scale: [1, 1.12, 1] } : { scale: 1 }}
      transition={{ duration: 2, times: [0, 0.15, 1], repeat: 0, ease: 'easeInOut' }}
      className={cn(
        'group fixed bottom-6 right-6 z-[120] flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_4px_16px_rgba(37,211,102,0.4)] transition-transform hover:scale-110',
        hideOnMobile && 'hidden md:flex'
      )}
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-navy-900 px-3 py-1.5 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100">
        Chat with us
      </span>
    </motion.a>
  );
}
