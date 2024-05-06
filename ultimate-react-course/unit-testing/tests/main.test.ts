import { it, expect, describe } from 'vitest';
import { calculateDiscount } from '../src/main';

describe('CalculateDiscount', () => {
  it('should returns discount price if given valid code', () => {
    expect(calculateDiscount(10, 'SAVE10')).toBe(9);
    expect(calculateDiscount(10, 'SAVE20')).toBe(8);
  });

  it('should handle negative price', () => {
    expect(calculateDiscount(-10, 'save10')).toMatch(/invalid/i);
  });

  it('should handle non-string discount code', () => {
    expect(calculateDiscount(10, 'INVALID')).toBe(10);
  });
});
