import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import Navbar from '@/app/components/layout/Navbar';

vi.mock('next/navigation', () => ({
  usePathname: () => '/services',
}));

describe('Navbar', () => {
  it('renders the main navigation links and logo', () => {
    render(<Navbar />);
    expect(screen.getByRole('link', { name: /tuju outspan/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Services' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Pricing' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument();
  });

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup();
    render(<Navbar />);
    await user.click(screen.getByRole('button', { name: /open menu/i }));
    const closeButton = await screen.findByRole('button', { name: /close menu/i });
    await user.click(closeButton);
    // AnimatePresence keeps the menu in the DOM during its 300ms exit animation.
    await waitForElementToBeRemoved(closeButton);
  });
});
