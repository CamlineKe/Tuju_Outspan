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
      <div className="mx-auto max-w-[1100px]">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[3fr_2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-orange-500">
              WHAT WE OFFER
            </p>
            <h2 className="mt-3 text-2xl font-bold leading-[1.25] text-navy-900 md:text-[28px] lg:text-[32px]">
              {category.name}
            </h2>
            <p className="mt-3 max-w-[520px] leading-relaxed text-gray-600">
              {category.subheadline}
            </p>
          </div>
          <div>
            {category.imagePath ? (
              <img
                src={category.imagePath}
                alt={`${category.name} at Tuju Outspan Cyber Center`}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-xl object-cover shadow-navy-md"
              />
            ) : (
              <div className="flex items-center justify-center">
                <div className="flex h-30 w-30 items-center justify-center rounded-[20px] bg-navy-50">
                  <Icon className="h-14 w-14 text-navy-900" aria-hidden="true" />
                </div>
              </div>
            )}
          </div>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {category.services.map((service) => (
            <li
              key={service.name}
              className="rounded-xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-navy-800 hover:shadow-navy-md"
            >
              <div className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-navy-900">{service.name}</h3>
                  <p className="mt-1 text-sm text-gray-600">{service.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
