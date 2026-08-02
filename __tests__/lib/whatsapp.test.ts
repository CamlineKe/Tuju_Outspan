import { describe, expect, it } from 'vitest';

import { buildServiceWhatsAppLink, buildWhatsAppLink } from '@/app/lib/utils/whatsapp';

const NUMBER = '254715616633';

describe('buildWhatsAppLink', () => {
  it('builds a wa.me link with an encoded message', () => {
    expect(buildWhatsAppLink('Hi Tuju Outspan, I need help with KRA PIN.', NUMBER)).toBe(
      'https://wa.me/254715616633?text=Hi%20Tuju%20Outspan%2C%20I%20need%20help%20with%20KRA%20PIN.'
    );
  });

  it('throws when no number is configured', () => {
    expect(() => buildWhatsAppLink('Hello', '')).toThrow('WhatsApp number');
  });
});

describe('buildServiceWhatsAppLink', () => {
  it('pre-fills the service name in the message', () => {
    const link = buildServiceWhatsAppLink('HELB Application', NUMBER);
    expect(link).toContain('HELB%20Application');
    expect(link).toContain('need%20help%20with');
  });
});
