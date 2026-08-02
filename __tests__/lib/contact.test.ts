import { describe, expect, it } from 'vitest';

import { contactSchema } from '@/app/lib/schemas/contact';

const validSubmission = {
  name: 'Jane Doe',
  phone: '0715616633',
  service: 'KRA PIN Registration',
  message: 'I need help with my KRA PIN.',
};

describe('contactSchema', () => {
  it('accepts a valid submission', () => {
    expect(contactSchema.safeParse(validSubmission).success).toBe(true);
  });

  it('rejects a missing name', () => {
    expect(contactSchema.safeParse({ ...validSubmission, name: '' }).success).toBe(false);
  });

  it('rejects a short phone number', () => {
    expect(contactSchema.safeParse({ ...validSubmission, phone: '123' }).success).toBe(false);
  });

  it('rejects invalid phone characters', () => {
    expect(contactSchema.safeParse({ ...validSubmission, phone: '07a15616633' }).success).toBe(
      false
    );
  });

  it('rejects a short message', () => {
    expect(contactSchema.safeParse({ ...validSubmission, message: 'short' }).success).toBe(false);
  });
});
