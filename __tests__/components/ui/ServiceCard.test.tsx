import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ServiceCard from '@/app/components/ui/ServiceCard';
import { serviceCategories } from '@/app/lib/data/services';

const government = serviceCategories.find((category) => category.slug === 'government')!;

describe('ServiceCard', () => {
  it('renders the category name with a whole-card link to the service page', () => {
    render(<ServiceCard category={government} />);

    const cardLink = screen.getByRole('link', { name: /government services/i });
    expect(screen.getByRole('heading', { name: 'Government Services' })).toBeInTheDocument();
    expect(cardLink).toHaveAttribute('href', '/services/government');
    expect(screen.getAllByRole('link')).toHaveLength(1);
  });

  it('shows the requested number of services', () => {
    render(<ServiceCard category={government} itemCount={2} />);
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });

  it('renders the subheadline when showDescription is true', () => {
    render(<ServiceCard category={government} showDescription />);
    expect(screen.getByText(government.subheadline)).toBeInTheDocument();
  });
});
