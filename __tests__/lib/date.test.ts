import { describe, expect, it } from 'vitest';

import { formatDateLong, formatDateShort } from '@/app/lib/utils/date';

describe('date formatting', () => {
  it('formats a short date', () => {
    expect(formatDateShort('2026-08-01')).toBe('1 Aug 2026');
  });

  it('formats a long date', () => {
    expect(formatDateLong('2026-08-01')).toBe('1 August 2026');
  });

  it('returns an empty string for invalid input', () => {
    expect(formatDateShort('not-a-date')).toBe('');
    expect(formatDateLong('')).toBe('');
  });
});
