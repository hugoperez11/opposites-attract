import { describe, it, expect } from 'vitest';
import {isLove} from '../src/isLove'; 


describe('isLove', () => {
  it('should return true when Timmy has 1 petal and Sarah has 4 petals', () => {
    expect(isLove(1, 4)).toBe(true);
  });

  it('should return false when Timmy has 2 petals and Sarah has 2 petals', () => {
    expect(isLove(2, 2)).toBe(false);
  });

  it('should return true when Timmy has 0 petals and Sarah has 1 petal', () => {
    expect(isLove(0, 1)).toBe(true);
  });

  it('should return false when Timmy has 0 petals and Sarah has 0 petals', () => {
    expect(isLove(0, 0)).toBe(false);
  });
});




