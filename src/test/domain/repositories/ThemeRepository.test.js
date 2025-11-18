import { describe, it, expect } from 'vitest';
import { ThemeRepository } from '../../../domain/repositories/ThemeRepository';

describe('ThemeRepository', () => {
  it('should throw error when getTheme is not implemented', () => {
    const repository = new ThemeRepository();
    expect(() => repository.getTheme()).toThrow('Method not implemented');
  });

  it('should throw error when saveTheme is not implemented', () => {
    const repository = new ThemeRepository();
    expect(() => repository.saveTheme()).toThrow('Method not implemented');
  });
});
