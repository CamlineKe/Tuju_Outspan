import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ServicesGrid from '@/app/components/sections/ServicesGrid';
import { serviceCategories } from '@/app/lib/data/services';

describe('ServicesGrid', () => {
  it('renders all eight category cards', () => {
    render(<ServicesGrid />);

    expect(screen.getAllByRole('article')).toHaveLength(8);
  });

  it('renders the catch-all CTA card with a WhatsApp link', () => {
    render(<ServicesGrid />);

    expect(screen.getByRole('heading', { name: /can't find what you need/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /ask on whatsapp/i })).toBeInTheDocument();
  });

  it('shows category descriptions on the cards', () => {
    render(<ServicesGrid />);

    expect(screen.getByText(serviceCategories[0].subheadline)).toBeInTheDocument();
  });
});
