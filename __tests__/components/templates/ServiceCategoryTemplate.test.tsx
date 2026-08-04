import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ServiceCategoryTemplate from '@/app/components/templates/ServiceCategoryTemplate';
import { serviceCategories } from '@/app/lib/data/services';

const government = serviceCategories.find((category) => category.slug === 'government')!;

describe('ServiceCategoryTemplate', () => {
  it('renders the category hero and service breakdown heading', () => {
    render(<ServiceCategoryTemplate category={government} />);

    expect(
      screen.getByRole('heading', { level: 1, name: 'Government Services' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: 'Government Services' })
    ).toBeInTheDocument();
  });

  it('renders process steps, FAQ, pricing note, and CTAs', () => {
    render(<ServiceCategoryTemplate category={government} />);

    expect(screen.getByRole('heading', { name: 'Simple as 1-2-3' })).toBeInTheDocument();
    expect(screen.getByText(government.processSteps[0].title)).toBeInTheDocument();
    expect(screen.getByText(government.faqs[0].question)).toBeInTheDocument();
    expect(screen.getByText(government.pricingNote)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /get a quote/i })).toHaveAttribute(
      'href',
      expect.stringContaining('enquire%20about%20your%20Government%20Services')
    );
    expect(screen.getByRole('link', { name: /get a quote/i })).toHaveAttribute(
      'href',
      expect.stringContaining('process%2C%20requirements%2C%20and%20cost')
    );
    expect(screen.getByRole('link', { name: /get help on whatsapp/i })).toHaveAttribute(
      'href',
      expect.stringContaining('enquire%20about%20your%20Government%20Services')
    );
  });
});
