import { describe, expect, it } from 'vitest';

import { cn } from '@/app/lib/utils/cn';

describe('cn', () => {
  it('joins class names', () => {
    expect(cn('a', 'b', 'c')).toBe('a b c');
  });

  it('filters falsy values', () => {
    expect(cn('a', null, undefined, '', 'd')).toBe('a d');
  });

  it('merges conflicting Tailwind classes', () => {
    expect(cn('p-4', 'p-2')).toBe('p-2');
  });
});
