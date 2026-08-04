import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import FAQItem from '@/app/components/ui/FAQItem';

describe('FAQItem', () => {
  it('starts collapsed with correct aria wiring', () => {
    render(<FAQItem question="How do I pay?" answer="M-Pesa or cash." />);

    const button = screen.getByRole('button', { name: 'How do I pay?' });
    const panelId = button.getAttribute('aria-controls');

    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(panelId).toBeTruthy();
    expect(document.getElementById(panelId!)).toHaveAttribute('aria-hidden', 'true');
  });

  it('expands and collapses on click', async () => {
    const user = userEvent.setup();
    render(<FAQItem question="How do I pay?" answer="M-Pesa or cash." />);

    const button = screen.getByRole('button', { name: 'How do I pay?' });
    const panelId = button.getAttribute('aria-controls')!;

    await user.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
    expect(document.getElementById(panelId)).toHaveAttribute('aria-hidden', 'false');

    await user.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(document.getElementById(panelId)).toHaveAttribute('aria-hidden', 'true');
  });
});
