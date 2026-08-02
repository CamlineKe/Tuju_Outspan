import PricingCard from '@/app/components/ui/PricingCard';
import { pricingCards } from '@/app/lib/data/pricing';

export default function PricingTable() {
  return (
    <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-6 lg:grid-cols-3">
      {pricingCards.map((card) => (
        <PricingCard key={card.slug} card={card} />
      ))}
    </div>
  );
}
