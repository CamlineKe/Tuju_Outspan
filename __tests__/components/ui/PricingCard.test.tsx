import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import PricingCard from '@/app/components/ui/PricingCard';
import { pricingCards } from '@/app/lib/data/pricing';

const featured = pricingCards.find((card) => card.slug === 'government')!;
const standard = pricingCards.find((card) => card.slug === 'education')!;

describe('PricingCard', () => {
  it('renders the card name, items, and a quote link', () => {
    render(<PricingCard card={standard} />);
    expect(screen.getByRole('heading', { name: 'Education Services' })).toBeInTheDocument();
    expect(screen.getAllByText('Ask for quote').length).toBeGreaterThan(0);
    expect(screen.getByRole('link', { name: /get quote/i })).toHaveAttribute(
      'href',
      expect.stringContaining('wa.me')
    );
  });

  it('marks the featured card with Most Popular and the orange accent', () => {
    const { container } = render(<PricingCard card={featured} />);
    expect(screen.getByText('Most Popular')).toBeInTheDocument();
    expect(container.querySelector('.border-orange-500')).not.toBeNull();
    expect(container.querySelector('.bg-orange-500')).not.toBeNull();
  });
});
