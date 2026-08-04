import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import WhatsAppFloat from '@/app/components/layout/WhatsAppFloat';

const { mockUsePathname } = vi.hoisted(() => ({
  mockUsePathname: vi.fn(),
}));

vi.mock('next/navigation', () => ({
  usePathname: () => mockUsePathname(),
}));

describe('WhatsAppFloat', () => {
  beforeEach(() => {
    mockUsePathname.mockReturnValue('/');
  });

  it('shows on regular pages', () => {
    render(<WhatsAppFloat />);

    const link = screen.getByRole('link', { name: 'Chat with us on WhatsApp' });
    expect(link.className).not.toContain('hidden');
  });

  it('hides on mobile for service category pages', () => {
    mockUsePathname.mockReturnValue('/services/government');
    render(<WhatsAppFloat />);

    const link = screen.getByRole('link', { name: 'Chat with us on WhatsApp' });
    expect(link.className).toContain('hidden');
    expect(link.className).toContain('md:flex');
  });
});
