import { describe, it, expect, beforeEach } from 'vitest';
import { ManageFavoritesUseCase } from '../../application/useCases/ManageFavoritesUseCase';
import { LocalStorageFavoritesRepository } from '../../infrastructure/repositories/LocalStorageFavoritesRepository';

describe('ManageFavoritesUseCase', () => {
  let useCase;
  let repository;

  beforeEach(() => {
    localStorage.clear();
    repository = new LocalStorageFavoritesRepository();
    useCase = new ManageFavoritesUseCase(repository);
  });

  it('should add a movie to favorites', () => {
    const movie = { id: 1, title: 'Test Movie' };
    
    useCase.addFavorite(movie);
    const favorites = useCase.getFavorites();

    expect(favorites).toHaveLength(1);
    expect(favorites[0].id).toBe(1);
  });

  it('should remove a movie from favorites', () => {
    const movie = { id: 1, title: 'Test Movie' };
    
    useCase.addFavorite(movie);
    useCase.removeFavorite(1);
    const favorites = useCase.getFavorites();

    expect(favorites).toHaveLength(0);
  });

  it('should toggle favorite status', () => {
    const movie = { id: 1, title: 'Test Movie' };
    
    const added = useCase.toggleFavorite(movie);
    expect(added).toBe(true);
    expect(useCase.isFavorite(1)).toBe(true);

    const removed = useCase.toggleFavorite(movie);
    expect(removed).toBe(false);
    expect(useCase.isFavorite(1)).toBe(false);
  });

  it('should check if movie is favorite', () => {
    const movie = { id: 1, title: 'Test Movie' };
    
    expect(useCase.isFavorite(1)).toBe(false);
    
    useCase.addFavorite(movie);
    expect(useCase.isFavorite(1)).toBe(true);
  });
});
