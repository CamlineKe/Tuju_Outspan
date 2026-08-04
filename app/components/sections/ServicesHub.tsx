'use client';

import { useMemo, useState } from 'react';

import { MessageCircle, Search, SearchX, X } from 'lucide-react';

import Breadcrumb from '@/app/components/ui/Breadcrumb';
import Button from '@/app/components/ui/Button';
import Reveal from '@/app/components/ui/Reveal';
import ServiceCard from '@/app/components/ui/ServiceCard';
import { serviceCategories } from '@/app/lib/data/services';
import { buildContextualWhatsAppLink } from '@/app/lib/utils/whatsapp';

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

  const isSearching = query.trim().length > 0;

  return (
    <>
      <section className="hero-glow relative overflow-hidden bg-navy-900 px-6 pb-10 pt-28 text-white lg:pt-32">
        <div className="relative z-10 mx-auto max-w-[1200px]">
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Services' }]} />
          <h1 className="mt-4 text-[28px] font-bold leading-[1.2] tracking-[-0.01em] md:text-[32px] lg:text-4xl">
            Our Services
          </h1>
          <p className="mt-3 max-w-[560px] text-lg text-gray-400">
            Everything you need, professionally handled at one trusted cyber center.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-10">
        <div className="mx-auto max-w-[600px] text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-orange-500">
            QUICK FIND
          </p>
          <h2 className="mt-2 text-xl font-semibold text-navy-900 md:text-2xl">
            What Do You Need Help With?
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Type a service or keyword, like KRA or HELB, to filter instantly.
          </p>
          <div className="relative mt-5">
            <Search
              className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search services..."
              aria-label="Search services"
              className="h-14 w-full rounded-xl border border-gray-200 bg-white pl-12 pr-14 text-base text-gray-800 placeholder:text-gray-400 focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-100"
            />
            {isSearching && (
              <button
                type="button"
                onClick={() => setQuery('')}
                aria-label="Clear search"
                className="absolute right-1 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            )}
          </div>
          <p aria-live="polite" className="mt-3 min-h-[20px] text-sm text-gray-400">
            {isSearching && `${filtered.length} of ${serviceCategories.length} services shown`}
          </p>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((category, index) => (
            <Reveal key={category.slug} className="h-full" delay={index * 60}>
              <ServiceCard
                category={category}
                itemCount={4}
                iconSize="h-7 w-7"
                showDescription
                className="h-full"
              />
            </Reveal>
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="mx-auto mt-12 max-w-[420px] rounded-xl border border-gray-200 bg-white p-10 text-center">
            <SearchX className="mx-auto h-8 w-8 text-navy-100" aria-hidden="true" />
            <p className="mt-4 text-gray-600">
              No services match &quot;{query}&quot;. We probably do it. Just ask.
            </p>
          </div>
        )}
      </section>

      <section className="bg-navy-50 px-6 py-16">
        <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <h2 className="text-xl font-semibold text-navy-900 md:text-2xl">
              Looking for Something Else?
            </h2>
            <p className="mt-2 text-gray-600">We probably do it. Just ask.</p>
          </div>
          <Button href={buildContextualWhatsAppLink('services-catch-all')}>
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Ask on WhatsApp
          </Button>
        </div>
      </section>
    </>
  );
}
