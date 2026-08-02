import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Button from '@/app/components/ui/Button';

describe('Button', () => {
  it('renders a button with the given label', () => {
    render(<Button>Get Quote</Button>);
    expect(screen.getByRole('button', { name: 'Get Quote' })).toBeInTheDocument();
  });

  it('renders an anchor when href is provided', () => {
    render(<Button href="/pricing">See Pricing</Button>);
    expect(screen.getByRole('link', { name: 'See Pricing' })).toHaveAttribute('href', '/pricing');
  });

  it('applies the primary variant and medium size by default', () => {
    render(<Button>Default</Button>);
    const button = screen.getByRole('button', { name: 'Default' });
    expect(button.className).toContain('bg-orange-500');
    expect(button.className).toContain('px-8');
  });

  it('applies the whatsapp variant when requested', () => {
    render(<Button variant="whatsapp">Chat</Button>);
    expect(screen.getByRole('button', { name: 'Chat' }).className).toContain('bg-whatsapp');
  });
});
