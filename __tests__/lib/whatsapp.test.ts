import { describe, expect, it } from 'vitest';

import {
  buildCategoryEnquiryLink,
  buildContextualWhatsAppLink,
  buildServiceEnquiryLink,
  buildWhatsAppLink,
  getWhatsAppContextForPath,
} from '@/app/lib/utils/whatsapp';

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

describe('buildServiceEnquiryLink', () => {
  const kraPin = {
    name: 'KRA PIN Registration',
    description: 'New KRA PIN registration for individuals and businesses.',
  };

  it('pre-fills a service-specific enquiry message', () => {
    const link = buildServiceEnquiryLink(kraPin, NUMBER);
    expect(link).toContain('I%27d%20like%20to%20enquire%20about%20KRA%20PIN%20Registration');
    expect(link).toContain(
      'New%20KRA%20PIN%20registration%20for%20individuals%20and%20businesses.'
    );
    expect(link).toContain('process%2C%20requirements%2C%20and%20cost');
  });

  it('uses the custom waMessage override when provided', () => {
    const link = buildServiceEnquiryLink(
      { ...kraPin, waMessage: 'Hi Tuju Outspan, please help me register for a KRA PIN.' },
      NUMBER
    );
    expect(link).toContain('please%20help%20me%20register%20for%20a%20KRA%20PIN');
    expect(link).not.toContain('process%2C%20requirements%2C%20and%20cost');
  });
});

describe('buildCategoryEnquiryLink', () => {
  it('pre-fills a category enquiry message', () => {
    const link = buildCategoryEnquiryLink('Government Services', NUMBER);
    expect(link).toContain('your%20Government%20Services.');
    expect(link).toContain('process%2C%20requirements%2C%20and%20cost');
  });
});

describe('buildContextualWhatsAppLink', () => {
  const cases = [
    ['general', 'question%20about%20your%20services'],
    ['hero', 'enquire%20about%20your%20services'],
    ['pricing', 'a%20quote%20for%20your%20services'],
    ['contact', 'get%20in%20touch'],
    ['about', 'know%20more%20about%20Tuju%20Outspan'],
    ['blog', 'question%20about%20this%20topic'],
    ['not-found', 'couldn%27t%20find%20what%20I%20was%20looking%20for'],
    ['cta', 'get%20started'],
    ['services-catch-all', 'isn%27t%20listed'],
    ['service-card-catch-all', 'can%27t%20find%20the%20service%20I%20need'],
  ] as const;

  it('uses the crafted message for each context', () => {
    for (const [context, expected] of cases) {
      expect(buildContextualWhatsAppLink(context, undefined, NUMBER)).toContain(expected);
    }
  });

  it('uses the service-category label when provided', () => {
    const link = buildContextualWhatsAppLink('service-category', 'Government Services', NUMBER);
    expect(link).toContain('your%20Government%20Services.');
  });

  it('throws when the service-category label is missing', () => {
    expect(() => buildContextualWhatsAppLink('service-category', undefined, NUMBER)).toThrow(
      'Label is required'
    );
  });
});

describe('getWhatsAppContextForPath', () => {
  it('maps service category pages to the service-category context with a label', () => {
    expect(getWhatsAppContextForPath('/services/government')).toEqual({
      context: 'service-category',
      label: 'Government Services',
    });
  });

  it('handles trailing slashes', () => {
    expect(getWhatsAppContextForPath('/services/health/')).toEqual({
      context: 'service-category',
      label: 'Health and Social Services',
    });
  });

  it('maps the main pages to their contexts', () => {
    expect(getWhatsAppContextForPath('/')).toEqual({ context: 'general' });
    expect(getWhatsAppContextForPath('/services')).toEqual({ context: 'general' });
    expect(getWhatsAppContextForPath('/pricing')).toEqual({ context: 'pricing' });
    expect(getWhatsAppContextForPath('/contact')).toEqual({ context: 'contact' });
    expect(getWhatsAppContextForPath('/about')).toEqual({ context: 'about' });
    expect(getWhatsAppContextForPath('/blog')).toEqual({ context: 'blog' });
    expect(getWhatsAppContextForPath('/blog/some-post')).toEqual({ context: 'blog' });
    expect(getWhatsAppContextForPath('/unknown')).toEqual({ context: 'general' });
  });
});
