import Link from 'next/link';

import {
  ArrowRight,
  Briefcase,
  FileText,
  GraduationCap,
  HeartPulse,
  Landmark,
  Laptop,
  type LucideIcon,
  Palette,
} from 'lucide-react';

import type { ServiceCategory } from '@/app/lib/data/services';
import { cn } from '@/app/lib/utils/cn';

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  Landmark,
  GraduationCap,
  HeartPulse,
  FileText,
  Palette,
  Laptop,
  Briefcase,
};

interface ServiceCardProps {
  category: ServiceCategory;
  itemCount?: number;
  className?: string;
}

export default function ServiceCard({ category, itemCount = 3, className }: ServiceCardProps) {
  const Icon = CATEGORY_ICONS[category.icon] ?? FileText;
  return (
    <article
      className={cn(
        'group rounded-xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-navy-800 hover:shadow-navy-md',
        className
      )}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-navy-50">
        <Icon className="h-6 w-6 text-navy-900" aria-hidden="true" />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-navy-900">{category.name}</h3>
      <ul className="mt-3 space-y-1">
        {category.services.slice(0, itemCount).map((service) => (
          <li key={service.name} className="flex items-start gap-2 text-sm text-gray-600">
            <span
              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500"
              aria-hidden="true"
            />
            {service.name}
          </li>
        ))}
      </ul>
      <Link
        href={`/services/${category.slug}`}
        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy-700 transition-colors group-hover:text-navy-900"
      >
        View Details
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        />
      </Link>
    </article>
  );
}
