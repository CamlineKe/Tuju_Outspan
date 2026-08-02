import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Footer from '@/app/components/layout/Footer';

describe('Footer', () => {
  it('renders quick links and service categories', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Services' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Government Services' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Online and Career Services' })).toBeInTheDocument();
  });

  it('renders contact details', () => {
    render(<Footer />);
    expect(screen.getByText('0715 616 633')).toBeInTheDocument();
    expect(screen.getByText('Open daily until late')).toBeInTheDocument();
  });
});
