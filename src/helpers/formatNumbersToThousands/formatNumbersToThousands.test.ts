import { describe, it, expect } from 'vitest';
import { formatNumbersToThousands } from './formatNumbersToThousands';

describe('format numbers to thousands', () => {
  it('should format 10000 to 10K', () => {
    expect(formatNumbersToThousands('10000')).toBe('10K');
  });

  it('should format 2500 to 2.5K', () => {
    expect(formatNumbersToThousands('2500')).toBe('2.5K');
  });

  it('should format 999 to 999', () => {
    expect(formatNumbersToThousands('999')).toBe('999');
  });

  it('should format 1000000 to 1M', () => {
    expect(formatNumbersToThousands('1000000')).toBe('1M');
  });

  it('should format 2500000 to 2.5M', () => {
    expect(formatNumbersToThousands('2500000')).toBe('2.5M');
  });
});
