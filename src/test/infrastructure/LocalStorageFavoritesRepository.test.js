import { describe, it, expect, beforeEach, vi } from 'vitest';
import { LocalStorageFavoritesRepository } from '../../infrastructure/repositories/LocalStorageFavoritesRepository';

describe('LocalStorageFavoritesRepository', () => {
  let repository;

  beforeEach(() => {
    localStorage.clear();
    repository = new LocalStorageFavoritesRepository();
  });

  it('should return empty array when no favorites', () => {
    const favorites = repository.getFavorites();
    expect(favorites).toEqual([]);
  });

  it('should add a favorite', () => {
    const movie = { id: 1, title: 'Test Movie' };
    
    repository.addFavorite(movie);
    const favorites = repository.getFavorites();

    expect(favorites).toHaveLength(1);
    expect(favorites[0].id).toBe(1);
  });

  it('should not add duplicate favorites', () => {
    const movie = { id: 1, title: 'Test Movie' };
    
    repository.addFavorite(movie);
    repository.addFavorite(movie);
    const favorites = repository.getFavorites();

    expect(favorites).toHaveLength(1);
  });

  it('should remove a favorite', () => {
    const movie = { id: 1, title: 'Test Movie' };
    
    repository.addFavorite(movie);
    repository.removeFavorite(1);
    const favorites = repository.getFavorites();

    expect(favorites).toHaveLength(0);
  });

  it('should check if movie is favorite', () => {
    const movie = { id: 1, title: 'Test Movie' };
    
    expect(repository.isFavorite(1)).toBe(false);
    
    repository.addFavorite(movie);
    expect(repository.isFavorite(1)).toBe(true);
  });

  it('should handle localStorage errors gracefully', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('Storage error');
    });

    const favorites = repository.getFavorites();
    expect(favorites).toEqual([]);
  });

  it('should handle save errors gracefully', () => {
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('Storage error');
    });

    const movie = { id: 1, title: 'Test Movie' };
    expect(() => repository.addFavorite(movie)).not.toThrow();
  });
});
