import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { AUTOPLAY_INTERVAL_MS } from '@/app/components/sections/TestimonialCarousel';
import Testimonials from '@/app/components/sections/Testimonials';

afterEach(() => {
  vi.useRealTimers();
});

describe('Testimonials', () => {
  it('renders the first pair of testimonials with carousel controls', () => {
    render(<Testimonials />);

    expect(screen.getByRole('heading', { name: 'What Our Clients Say' })).toBeInTheDocument();
    expect(screen.getByText('Ivan')).toBeInTheDocument();
    expect(screen.getByText('Mama Assembly')).toBeInTheDocument();
    expect(screen.getByText('Online Services')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Previous testimonial' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Next testimonial' })).toBeInTheDocument();
    expect(
      screen.getAllByRole('button', { name: /^Go to testimonials starting with / })
    ).toHaveLength(4);
  });

  it('steps through all positions with next and wraps around', async () => {
    const user = userEvent.setup();
    render(<Testimonials />);

    const next = screen.getByRole('button', { name: 'Next testimonial' });

    await user.click(next);
    expect(await screen.findByText('David Wafula')).toBeInTheDocument();
    expect(screen.queryByText('Ivan')).not.toBeInTheDocument();

    await user.click(next);
    expect(await screen.findByText('Chuka University Christian Union')).toBeInTheDocument();

    await user.click(next);
    expect(await screen.findByText('Ivan')).toBeInTheDocument();

    await user.click(next);
    expect(await screen.findByText('Mama Assembly')).toBeInTheDocument();
    expect(screen.queryByText('Chuka University Christian Union')).not.toBeInTheDocument();
  });

  it('moves backward with the previous button', async () => {
    const user = userEvent.setup();
    render(<Testimonials />);

    const prev = screen.getByRole('button', { name: 'Previous testimonial' });

    await user.click(prev);
    expect(await screen.findByText('Chuka University Christian Union')).toBeInTheDocument();

    await user.click(prev);
    expect(await screen.findByText('David Wafula')).toBeInTheDocument();
  });

  it('jumps to a position via its dot indicator', async () => {
    const user = userEvent.setup();
    render(<Testimonials />);

    await user.click(
      screen.getByRole('button', { name: 'Go to testimonials starting with David Wafula' })
    );

    expect(await screen.findByText('David Wafula')).toBeInTheDocument();
    expect(screen.queryByText('Ivan')).not.toBeInTheDocument();
  });

  it('auto-advances after the autoplay interval', async () => {
    vi.useFakeTimers();
    render(<Testimonials />);

    const dots = screen.getAllByRole('button', { name: /^Go to testimonials starting with / });
    expect(dots[0]).toHaveAttribute('aria-current', 'true');

    await act(async () => {
      vi.advanceTimersByTime(AUTOPLAY_INTERVAL_MS);
    });

    expect(dots[1]).toHaveAttribute('aria-current', 'true');
  });

  it('shows real quotes instead of the coming soon placeholder', () => {
    render(<Testimonials />);

    expect(screen.getByText(/amazing experience with Tuju Outspan/i)).toBeInTheDocument();
    expect(screen.queryByText(/testimonials coming soon/i)).not.toBeInTheDocument();
  });
});
