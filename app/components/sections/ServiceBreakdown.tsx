import { Check } from 'lucide-react';

import type { ServiceCategory } from '@/app/lib/data/services';
import { getCategoryIcon } from '@/app/lib/utils/category-icons';

interface ServiceBreakdownProps {
  category: ServiceCategory;
}

export default function ServiceBreakdown({ category }: ServiceBreakdownProps) {
  const Icon = getCategoryIcon(category.icon);
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-12 md:grid-cols-[3fr_2fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-orange-500">
            WHAT WE OFFER
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-[1.25] text-navy-900 md:text-[28px] lg:text-[32px]">
            {category.name}
          </h2>
          <ul className="mt-6 divide-y divide-gray-100">
            {category.services.map((service) => (
              <li key={service.name} className="flex gap-3 py-4">
                <Check className="mt-1 h-5 w-5 shrink-0 text-orange-500" aria-hidden="true" />
                <div>
                  <h3 className="text-lg font-semibold text-navy-900">{service.name}</h3>
                  <p className="mt-1 text-sm text-gray-600">{service.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex h-30 w-30 items-center justify-center rounded-[20px] bg-navy-50">
            <Icon className="h-14 w-14 text-navy-900" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
