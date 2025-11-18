import { describe, it, expect } from 'vitest';
import { FavoritesRepository } from '../../../domain/repositories/FavoritesRepository';

describe('FavoritesRepository', () => {
  it('should throw error when getFavorites is not implemented', () => {
    const repository = new FavoritesRepository();
    expect(() => repository.getFavorites()).toThrow('Method not implemented');
  });

  it('should throw error when addFavorite is not implemented', () => {
    const repository = new FavoritesRepository();
    expect(() => repository.addFavorite()).toThrow('Method not implemented');
  });

  it('should throw error when removeFavorite is not implemented', () => {
    const repository = new FavoritesRepository();
    expect(() => repository.removeFavorite()).toThrow('Method not implemented');
  });

  it('should throw error when isFavorite is not implemented', () => {
    const repository = new FavoritesRepository();
    expect(() => repository.isFavorite()).toThrow('Method not implemented');
  });
});
