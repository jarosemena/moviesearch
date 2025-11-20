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

  describe('executeWithCandidates', () => {
    it('should return 3 candidates and 1 final movie', async () => {
      const mockMovieRepository = {
        discoverMovies: vi.fn().mockResolvedValue({
          results: [
            { id: 1, title: 'Movie 1' },
            { id: 2, title: 'Movie 2' },
            { id: 3, title: 'Movie 3' },
            { id: 4, title: 'Movie 4' },
            { id: 5, title: 'Movie 5' },
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
      const result = await useCase.executeWithCandidates([]);

      expect(result).toBeDefined();
      expect(result.candidates).toHaveLength(3);
      expect(result.final).toBeDefined();
      expect(result.final.id).toBeDefined();
    });

    it('should return unique movies for candidates and final', async () => {
      const mockMovieRepository = {
        discoverMovies: vi.fn().mockResolvedValue({
          results: [
            { id: 1, title: 'Movie 1' },
            { id: 2, title: 'Movie 2' },
            { id: 3, title: 'Movie 3' },
            { id: 4, title: 'Movie 4' },
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
      const result = await useCase.executeWithCandidates([]);

      const allIds = [...result.candidates.map(c => c.id), result.final.id];
      const uniqueIds = new Set(allIds);
      expect(uniqueIds.size).toBe(4);
    });

    it('should return null when less than 4 movies available', async () => {
      const mockMovieRepository = {
        discoverMovies: vi.fn().mockResolvedValue({
          results: [
            { id: 1, title: 'Movie 1' },
            { id: 2, title: 'Movie 2' },
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
      const result = await useCase.executeWithCandidates([]);

      expect(result).toBeNull();
    });

    it('should exclude favorites from candidates selection', async () => {
      const mockMovieRepository = {
        discoverMovies: vi.fn().mockResolvedValue({
          results: [
            { id: 1, title: 'Movie 1' },
            { id: 2, title: 'Movie 2' },
            { id: 3, title: 'Movie 3' },
            { id: 4, title: 'Movie 4' },
            { id: 5, title: 'Movie 5' },
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
      const result = await useCase.executeWithCandidates([]);

      expect(result).toBeDefined();
      const allIds = [...result.candidates.map(c => c.id), result.final.id];
      expect(allIds).not.toContain(1);
    });
  });
});
