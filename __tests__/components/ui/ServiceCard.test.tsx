import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ServiceCard from '@/app/components/ui/ServiceCard';
import { serviceCategories } from '@/app/lib/data/services';

const government = serviceCategories.find((category) => category.slug === 'government')!;

describe('ServiceCard', () => {
  it('renders the category name and details link', () => {
    render(<ServiceCard category={government} />);
    expect(screen.getByRole('heading', { name: 'Government Services' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /view details/i })).toHaveAttribute(
      'href',
      '/services/government'
    );
  });

  it('shows the requested number of services', () => {
    render(<ServiceCard category={government} itemCount={2} />);
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });
});
