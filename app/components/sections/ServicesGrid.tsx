import { MessageCircle } from 'lucide-react';

import Button from '@/app/components/ui/Button';
import Reveal from '@/app/components/ui/Reveal';
import SectionHeader from '@/app/components/ui/SectionHeader';
import ServiceCard from '@/app/components/ui/ServiceCard';
import { serviceCategories } from '@/app/lib/data/services';
import { buildGeneralWhatsAppLink } from '@/app/lib/utils/whatsapp';

export default function ServicesGrid() {
  return (
    <section className="bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-[1100px]">
        <SectionHeader
          overline="WHAT WE DO"
          title="All Services at One Desk"
          description="Everything you need, professionally handled at one trusted cyber center."
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
          {serviceCategories.map((category, index) => (
            <Reveal key={category.slug} className="h-full" delay={index * 100}>
              <ServiceCard category={category} itemCount={3} showDescription className="h-full" />
            </Reveal>
          ))}
          <Reveal className="h-full" delay={serviceCategories.length * 100}>
            <div className="flex h-full flex-col justify-center rounded-xl border border-orange-200 bg-orange-50 p-7">
              <MessageCircle className="h-8 w-8 text-orange-500" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-semibold text-navy-900">
                Can&apos;t Find What You Need?
              </h3>
              <p className="mt-2 text-sm text-gray-600">We probably do it. Just ask.</p>
              <div className="mt-auto pt-6">
                <Button href={buildGeneralWhatsAppLink()} variant="outline" className="w-full">
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  Ask on WhatsApp
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
