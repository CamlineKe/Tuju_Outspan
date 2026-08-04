import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import ContactForm from '@/app/components/sections/ContactForm';

describe('ContactForm', () => {
  it('renders all fields, service options, and the submit button', () => {
    render(<ContactForm />);

    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Phone')).toBeInTheDocument();
    expect(screen.getByLabelText('Service Needed')).toBeInTheDocument();
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Choose a service' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Other' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'KRA PIN Registration' })).toBeInTheDocument();
    expect(screen.getByRole('group', { name: 'Government Services' })).toBeInTheDocument();
  });

  it('shows validation errors for an invalid submission', async () => {
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.click(screen.getByRole('button', { name: /send message/i }));

    expect(await screen.findByText('Please enter your name')).toBeInTheDocument();
    expect(screen.getByText('Please enter a valid phone number')).toBeInTheDocument();
    expect(screen.getByText('Please choose a service')).toBeInTheDocument();
    expect(screen.getByText('Please add a short message')).toBeInTheDocument();
  });

  it('opens WhatsApp with the selected service in the prefilled message', async () => {
    const user = userEvent.setup();
    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null);
    render(<ContactForm />);

    await user.type(screen.getByLabelText('Name'), 'Jane Doe');
    await user.type(screen.getByLabelText('Phone'), '0715616633');
    await user.selectOptions(screen.getByLabelText('Service Needed'), 'KRA PIN Registration');
    await user.type(screen.getByLabelText('Message'), 'I need help with my KRA PIN.');

    await user.click(screen.getByRole('button', { name: /send message/i }));

    expect(openSpy).toHaveBeenCalledWith(
      expect.stringContaining('enquire%20about%20KRA%20PIN%20Registration'),
      '_blank',
      'noopener,noreferrer'
    );
    openSpy.mockRestore();
  });
});
