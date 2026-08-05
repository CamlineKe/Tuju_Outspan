import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { WhatsAppIcon } from '@/app/components/icons/WhatsAppIcon';

describe('WhatsAppIcon', () => {
  it('renders the official WhatsApp glyph SVG with inherited sizing', () => {
    const { container } = render(<WhatsAppIcon className="h-5 w-5" />);

    const svg = container.querySelector('svg');
    expect(svg).not.toBeNull();
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
    expect(svg).toHaveAttribute('aria-hidden', 'true');
    expect(svg).toHaveClass('h-5', 'w-5');
  });
});
