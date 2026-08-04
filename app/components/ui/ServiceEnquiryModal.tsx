'use client';

import { useEffect, useRef } from 'react';

import { motion, useReducedMotion } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

import Button from '@/app/components/ui/Button';
import type { ServiceItem } from '@/app/lib/data/services';
import { buildServiceEnquiryLink } from '@/app/lib/utils/whatsapp';

interface ServiceEnquiryModalProps {
  service: ServiceItem;
  categoryName: string;
  onClose: () => void;
}

export default function ServiceEnquiryModal({
  service,
  categoryName,
  onClose,
}: ServiceEnquiryModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const previouslyFocused =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    closeButtonRef.current?.focus();

    // Lock page scroll while the dialog is open so the page behind it cannot
    // be scrolled. Locking both body and html covers iOS Safari.
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onCloseRef.current();
        return;
      }
      if (event.key !== 'Tab') {
        return;
      }
      const container = dialogRef.current;
      if (!container) {
        return;
      }
      const focusable = Array.from(
        container.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]):not([tabindex="-1"]), [tabindex]:not([tabindex="-1"])'
        )
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
    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.removeEventListener('keydown', onKeyDown);
      previouslyFocused?.focus();
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[130] overflow-y-auto">
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.2 }}
        onClick={onClose}
        className="fixed inset-0 bg-navy-900/60 backdrop-blur-sm"
      />
      <div className="flex min-h-full items-center justify-center p-4">
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-enquiry-title"
          aria-describedby="service-enquiry-description"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16, scale: reduceMotion ? 1 : 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="relative z-10 w-full max-w-md rounded-2xl bg-white p-6 shadow-navy-lg md:p-8"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-orange-500">
                {categoryName}
              </p>
              <h2
                id="service-enquiry-title"
                className="mt-2 text-xl font-bold text-navy-900 md:text-2xl"
              >
                {service.name}
              </h2>
            </div>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close enquiry dialog"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <p
            id="service-enquiry-description"
            className="mt-3 text-sm leading-relaxed text-gray-600"
          >
            {service.description}
          </p>

          {service.details && (
            <div className="mt-4 rounded-[10px] bg-navy-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-navy-900">
                What to have ready
              </p>
              <p className="mt-1 text-sm text-gray-600">{service.details}</p>
            </div>
          )}

          <p className="mt-4 text-sm text-gray-500">
            This opens WhatsApp with your message ready to send. No commitment to proceed.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row-reverse">
            <Button href={buildServiceEnquiryLink(service)} className="flex-1">
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Enquire on WhatsApp
            </Button>
            <Button variant="outline" onClick={onClose} className="flex-1">
              Not now
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
