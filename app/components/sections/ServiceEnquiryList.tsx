'use client';

import { useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

import { WhatsAppIcon } from '@/app/components/icons/WhatsAppIcon';
import Button from '@/app/components/ui/Button';
import ServiceEnquiryModal from '@/app/components/ui/ServiceEnquiryModal';
import type { ServiceCategory, ServiceItem } from '@/app/lib/data/services';

interface ServiceEnquiryListProps {
  category: ServiceCategory;
}

export default function ServiceEnquiryList({ category }: ServiceEnquiryListProps) {
  const [selected, setSelected] = useState<ServiceItem | null>(null);

  return (
    <>
      <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {category.services.map((service) => (
          <li
            key={service.name}
            className="flex flex-col rounded-xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-navy-800 hover:shadow-navy-md"
          >
            <div className="flex items-start gap-3">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" aria-hidden="true" />
              <div>
                <h3 className="font-semibold text-navy-900">{service.name}</h3>
                <p className="mt-1 text-sm text-gray-600">{service.description}</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="small"
              onClick={() => setSelected(service)}
              aria-haspopup="dialog"
              className="mt-4 self-start"
            >
              <WhatsAppIcon className="h-4 w-4" aria-hidden="true" />
              Enquire
            </Button>
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {selected && (
          <ServiceEnquiryModal
            service={selected}
            categoryName={category.name}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
