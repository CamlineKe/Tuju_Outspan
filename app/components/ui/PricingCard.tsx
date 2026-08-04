import { Check } from 'lucide-react';

import Button from '@/app/components/ui/Button';
import type { PricingCard as PricingCardData } from '@/app/lib/data/pricing';
import { cn } from '@/app/lib/utils/cn';
import { buildCategoryEnquiryLink } from '@/app/lib/utils/whatsapp';

interface PricingCardProps {
  card: PricingCardData;
  className?: string;
}

export default function PricingCard({ card, className }: PricingCardProps) {
  return (
    <div
      className={cn(
        'relative rounded-xl border border-gray-200 bg-white p-8',
        card.featured && 'border-2 border-orange-500 shadow-orange',
        className
      )}
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 rounded-t-xl bg-orange-500"
      />
      {card.featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-md bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
          Most Popular
        </span>
      )}
      <h3 className="text-xl font-semibold text-navy-900">{card.name}</h3>
      <p className="mt-1 text-sm text-gray-600">{card.description}</p>
      <ul className="mt-6 space-y-3">
        {card.items.map((item) => (
          <li key={item.name} className="flex items-start gap-3 text-sm text-gray-600">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" aria-hidden="true" />
            <span className="flex-1">{item.name}</span>
            <span className="text-right font-medium text-navy-900">{item.priceLabel}</span>
          </li>
        ))}
      </ul>
      <Button href={buildCategoryEnquiryLink(card.name)} size="small" className="mt-6 w-full">
        Get Quote
      </Button>
    </div>
  );
}
