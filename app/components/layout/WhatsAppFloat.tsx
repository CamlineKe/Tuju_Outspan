'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

import { buildGeneralWhatsAppLink } from '@/app/lib/utils/whatsapp';

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={buildGeneralWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.12, 1] }}
      transition={{ duration: 2, times: [0, 0.15, 1], repeat: 0, ease: 'easeInOut' }}
      className="group fixed bottom-6 right-6 z-[120] flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_4px_16px_rgba(37,211,102,0.4)] transition-transform hover:scale-110"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-navy-900 px-3 py-1.5 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100">
        Chat with us
      </span>
    </motion.a>
  );
}
