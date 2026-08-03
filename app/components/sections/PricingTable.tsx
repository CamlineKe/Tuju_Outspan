import PricingCard from '@/app/components/ui/PricingCard';
import Reveal from '@/app/components/ui/Reveal';
import { pricingCards } from '@/app/lib/data/pricing';

export default function PricingTable() {
  return (
    <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-6 lg:grid-cols-3">
      {pricingCards.map((card, index) => (
        <Reveal key={card.slug} delay={index * 100}>
          <PricingCard card={card} className="h-full" />
        </Reveal>
      ))}
    </div>
  );
}
