import { Clock, Heart, type LucideIcon, ShieldCheck, Tag } from 'lucide-react';

import SectionHeader from '@/app/components/ui/SectionHeader';

interface Pillar {
  icon: LucideIcon;
  title: string;
  description: string;
}

const PILLARS: Pillar[] = [
  { icon: Clock, title: 'Fast', description: 'Quick turnaround, no long queues.' },
  { icon: ShieldCheck, title: 'Reliable', description: 'Support you can trust, every time.' },
  { icon: Tag, title: 'Affordable', description: 'Fair, student-friendly prices.' },
  { icon: Heart, title: 'Friendly', description: 'Professional help with a personal touch.' },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-[1000px]">
        <SectionHeader overline="WHY US" title="Why Tuju Outspan?" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar) => (
            <div key={pillar.title} className="group px-5 py-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-[14px] border-2 border-gray-200 bg-white transition-colors group-hover:border-orange-500 group-hover:bg-orange-50">
                <pillar.icon className="h-6 w-6 text-navy-900" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-base font-bold text-navy-900">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
