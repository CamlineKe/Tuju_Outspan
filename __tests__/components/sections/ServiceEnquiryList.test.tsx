import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import ServiceEnquiryList from '@/app/components/sections/ServiceEnquiryList';
import { serviceCategories } from '@/app/lib/data/services';
import { buildServiceEnquiryLink } from '@/app/lib/utils/whatsapp';

const government = serviceCategories.find((category) => category.slug === 'government')!;
const firstService = government.services[0];

describe('ServiceEnquiryList', () => {
  it('renders every service with an enquire button', () => {
    render(<ServiceEnquiryList category={government} />);

    expect(screen.getByRole('heading', { name: firstService.name })).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: /enquire/i })).toHaveLength(
      government.services.length
    );
  });

  it('opens the modal with the service details and a prefilled WhatsApp link', async () => {
    const user = userEvent.setup();
    render(<ServiceEnquiryList category={government} />);

    await user.click(screen.getAllByRole('button', { name: /enquire/i })[0]);

    const dialog = screen.getByRole('dialog', { name: firstService.name });
    expect(dialog).toBeInTheDocument();
    expect(screen.getByText(firstService.description)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /enquire on whatsapp/i })).toHaveAttribute(
      'href',
      buildServiceEnquiryLink(firstService)
    );
  });

  it('closes with Escape and restores focus to the trigger', async () => {
    const user = userEvent.setup();
    render(<ServiceEnquiryList category={government} />);

    const trigger = screen.getAllByRole('button', { name: /enquire/i })[0];
    await user.click(trigger);
    const dialog = screen.getByRole('dialog', { name: firstService.name });

    await user.keyboard('{Escape}');

    await waitForElementToBeRemoved(dialog);
    expect(trigger).toHaveFocus();
  });

  it('closes when the backdrop is clicked', async () => {
    const user = userEvent.setup();
    const { container } = render(<ServiceEnquiryList category={government} />);

    await user.click(screen.getAllByRole('button', { name: /enquire/i })[0]);
    const dialog = screen.getByRole('dialog', { name: firstService.name });

    const backdrop = container.querySelector('div[aria-hidden="true"]');
    expect(backdrop).not.toBeNull();
    await user.click(backdrop!);

    await waitForElementToBeRemoved(dialog);
  });

  it('closes with the Not now button and restores focus to the trigger', async () => {
    const user = userEvent.setup();
    render(<ServiceEnquiryList category={government} />);

    const trigger = screen.getAllByRole('button', { name: /enquire/i })[0];
    await user.click(trigger);
    const dialog = screen.getByRole('dialog', { name: firstService.name });

    await user.click(screen.getByRole('button', { name: /not now/i }));

    await waitForElementToBeRemoved(dialog);
    expect(trigger).toHaveFocus();
  });
});
