import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import ServicesHub from '@/app/components/sections/ServicesHub';

describe('ServicesHub', () => {
  it('renders all eight category cards', () => {
    render(<ServicesHub />);

    expect(screen.getAllByRole('article')).toHaveLength(8);
    expect(screen.getByRole('heading', { name: 'Government Services' })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Internet Services & Internet Sales' })
    ).toBeInTheDocument();
  });

  it('filters the grid when a query is typed', async () => {
    const user = userEvent.setup();
    render(<ServicesHub />);

    await user.type(screen.getByLabelText('Search services'), 'KRA');

    expect(screen.getByRole('heading', { name: 'Government Services' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Design and Branding' })).not.toBeInTheDocument();
    expect(screen.getByText('1 of 8 services shown')).toBeInTheDocument();
  });

  it('shows the empty state when no services match', async () => {
    const user = userEvent.setup();
    render(<ServicesHub />);

    await user.type(screen.getByLabelText('Search services'), 'zzzz');

    expect(screen.getByText(/no services match/i)).toBeInTheDocument();
  });

  it('clears the search when the clear button is used', async () => {
    const user = userEvent.setup();
    render(<ServicesHub />);

    await user.type(screen.getByLabelText('Search services'), 'KRA');
    await user.click(screen.getByRole('button', { name: 'Clear search' }));

    expect(screen.getByLabelText('Search services')).toHaveValue('');
    expect(screen.getByRole('heading', { name: 'Design and Branding' })).toBeInTheDocument();
  });
});
