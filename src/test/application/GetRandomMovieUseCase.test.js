import { describe, it, expect, vi } from 'vitest';
import { GetRandomMovieUseCase } from '../../application/useCases/GetRandomMovieUseCase';

describe('GetRandomMovieUseCase', () => {
  it('should get a random movie', async () => {
    const mockMovieRepository = {
      discoverMovies: vi.fn().mockResolvedValue({
        results: [
          { id: 1, title: 'Movie 1' },
          { id: 2, title: 'Movie 2' },
          { id: 3, title: 'Movie 3' },
        ],
      }),
    };

    const mockFavoritesRepository = {
      getFavorites: vi.fn().mockReturnValue([]),
    };

    const useCase = new GetRandomMovieUseCase(
      mockMovieRepository,
      mockFavoritesRepository
    );
    const result = await useCase.execute([]);

    expect(mockMovieRepository.discoverMovies).toHaveBeenCalled();
    expect(result).toBeDefined();
    expect([1, 2, 3]).toContain(result.id);
  });

  it('should exclude favorites from random selection', async () => {
    const mockMovieRepository = {
      discoverMovies: vi.fn().mockResolvedValue({
        results: [
          { id: 1, title: 'Movie 1' },
          { id: 2, title: 'Movie 2' },
          { id: 3, title: 'Movie 3' },
        ],
      }),
    };

    const mockFavoritesRepository = {
      getFavorites: vi.fn().mockReturnValue([{ id: 1, title: 'Movie 1' }]),
    };

    const useCase = new GetRandomMovieUseCase(
      mockMovieRepository,
      mockFavoritesRepository
    );
    const result = await useCase.execute([]);

    expect(result).toBeDefined();
    expect(result.id).not.toBe(1);
  });

  it('should return null when no movies available', async () => {
    const mockMovieRepository = {
      discoverMovies: vi.fn().mockResolvedValue({
        results: [],
      }),
    };

    const mockFavoritesRepository = {
      getFavorites: vi.fn().mockReturnValue([]),
    };

    const useCase = new GetRandomMovieUseCase(
      mockMovieRepository,
      mockFavoritesRepository
    );
    const result = await useCase.execute([]);

    expect(result).toBeNull();
  });
});
