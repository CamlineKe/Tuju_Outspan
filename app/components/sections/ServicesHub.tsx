'use client';

import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import Breadcrumb from '@/app/components/ui/Breadcrumb';
import Button from '@/app/components/ui/Button';
import ServiceCard from '@/app/components/ui/ServiceCard';
import { serviceCategories } from '@/app/lib/data/services';
import { buildGeneralWhatsAppLink } from '@/app/lib/utils/whatsapp';

export default function ServicesHub() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      return serviceCategories;
    }
    return serviceCategories.filter((category) => {
      const haystack = [
        category.name,
        category.headline,
        ...category.services.map((service) => service.name),
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(normalized);
    });
  }, [query]);

  return (
    <>
      <section className="hero-glow relative overflow-hidden bg-navy-900 px-6 pb-15 pt-24 text-white lg:pt-28">
        <div className="relative z-10 mx-auto max-w-[1200px]">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services' },
            ]}
          />
          <h1 className="mt-4 text-[28px] font-bold leading-[1.2] tracking-[-0.01em] md:text-[32px] lg:text-4xl">
            Our Services
          </h1>
          <p className="mt-3 max-w-[560px] text-lg text-gray-400">
            Everything you need, professionally handled at one trusted cyber center.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 pt-8">
        <div className="relative mx-auto max-w-[600px]">
          <Search
            className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="What do you need help with? (e.g., KRA, HELB, CV...)"
            aria-label="Search services"
            className="h-14 w-full rounded-xl border border-gray-200 bg-white pl-12 pr-4 text-base text-gray-800 placeholder:text-gray-400 focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-100"
          />
        </div>
      </section>

      <section className="bg-white px-6 py-12 lg:pb-20">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((category) => (
            <ServiceCard key={category.slug} category={category} itemCount={4} iconSize="h-7 w-7" />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="py-16 text-center text-gray-600">
            No services match &quot;{query}&quot;. We probably do it. Just ask.
          </p>
        )}
      </section>

      <section className="bg-navy-50 px-6 py-12 text-center">
        <h2 className="text-xl font-semibold text-navy-900">Looking for Something Else?</h2>
        <p className="mt-2 text-gray-600">We probably do it. Just ask.</p>
        <div className="mt-6 flex justify-center">
          <Button href={buildGeneralWhatsAppLink()}>Ask on WhatsApp</Button>
        </div>
      </section>
    </>
  );
}
