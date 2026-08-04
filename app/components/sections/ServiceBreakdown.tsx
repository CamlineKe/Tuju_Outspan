import Image from 'next/image';

import ServiceEnquiryList from '@/app/components/sections/ServiceEnquiryList';
import type { ServiceCategory } from '@/app/lib/data/services';
import { getCategoryIcon } from '@/app/lib/utils/category-icons';

interface ServiceBreakdownProps {
  category: ServiceCategory;
}

export default function ServiceBreakdown({ category }: ServiceBreakdownProps) {
  const Icon = getCategoryIcon(category.icon);
  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[3fr_2fr]">
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
          {category.imagePath ? (
            <div className="relative min-h-[300px] overflow-hidden rounded-xl shadow-navy-md">
              <Image
                src={category.imagePath}
                alt={`${category.name} at Tuju Outspan Cyber Center`}
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          ) : (
            <div className="flex min-h-[300px] items-center justify-center">
              <div className="flex h-30 w-30 items-center justify-center rounded-[20px] bg-navy-50">
                <Icon className="h-14 w-14 text-navy-900" aria-hidden="true" />
              </div>
            </div>
          )}
        </div>

        <ServiceEnquiryList category={category} />
      </div>
    </section>
  );
}
