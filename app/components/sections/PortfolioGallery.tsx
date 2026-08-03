import Image from 'next/image';

import { Image as ImageIcon } from 'lucide-react';

import Reveal from '@/app/components/ui/Reveal';
import SectionHeader from '@/app/components/ui/SectionHeader';
import { portfolioItems } from '@/app/lib/data/portfolio';

const PLACEHOLDER_COUNT = 6;

export default function PortfolioGallery() {
  const isEmpty = portfolioItems.length === 0;

  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-[1100px]">
        <SectionHeader
          overline="OUR WORK"
          title="Design Portfolio"
          description="A few samples of the design and branding work we produce."
        />
        {isEmpty ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: PLACEHOLDER_COUNT }).map((_, index) => (
              <Reveal key={index} delay={index * 100}>
                <div className="flex aspect-[4/3] flex-col items-center justify-center rounded-xl border border-dashed border-gray-200 bg-navy-50 p-6 text-center">
                  <ImageIcon className="h-10 w-10 text-navy-100" aria-hidden="true" />
                  <p className="mt-3 text-sm text-gray-600">Sample coming soon</p>
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item, index) => (
              <Reveal key={item.title} delay={index * 100}>
                {item.imagePath ? (
                  <figure className="overflow-hidden rounded-xl border border-gray-200 bg-white">
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={item.imagePath}
                        alt={item.alt ?? item.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="p-4 text-sm font-semibold text-navy-900">
                      {item.title}
                    </figcaption>
                  </figure>
                ) : (
                  <div className="flex aspect-[4/3] flex-col items-center justify-center rounded-xl border border-dashed border-gray-200 bg-navy-50 p-6 text-center">
                    <ImageIcon className="h-10 w-10 text-navy-100" aria-hidden="true" />
                    <p className="mt-3 text-sm text-gray-600">{item.title}</p>
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
