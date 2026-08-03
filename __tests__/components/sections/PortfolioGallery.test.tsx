import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import PortfolioGallery from '@/app/components/sections/PortfolioGallery';

describe('PortfolioGallery', () => {
  it('renders the section header', () => {
    render(<PortfolioGallery />);
    expect(screen.getByRole('heading', { name: 'Design Portfolio' })).toBeInTheDocument();
  });

  it('renders six placeholder cards while the portfolio is empty', () => {
    render(<PortfolioGallery />);
    expect(screen.getAllByText('Sample coming soon')).toHaveLength(6);
  });
});
