import { describe, it, expect, vi } from 'vitest';
import { SearchMoviesUseCase } from '../../application/useCases/SearchMoviesUseCase';

describe('SearchMoviesUseCase', () => {
  it('should search movies by query', async () => {
    const mockRepository = {
      searchMovies: vi.fn().mockResolvedValue({
        results: [{ id: 1, title: 'Matrix' }],
        totalPages: 1,
        totalResults: 1,
        page: 1,
      }),
    };

    const useCase = new SearchMoviesUseCase(mockRepository);
    const result = await useCase.execute('Matrix', 1);

    expect(mockRepository.searchMovies).toHaveBeenCalledWith('Matrix', 1);
    expect(result.results).toHaveLength(1);
    expect(result.results[0].title).toBe('Matrix');
  });

  it('should return empty results for empty query', async () => {
    const mockRepository = {
      searchMovies: vi.fn(),
    };

    const useCase = new SearchMoviesUseCase(mockRepository);
    const result = await useCase.execute('', 1);

    expect(mockRepository.searchMovies).not.toHaveBeenCalled();
    expect(result.results).toHaveLength(0);
  });

  it('should handle whitespace-only query', async () => {
    const mockRepository = {
      searchMovies: vi.fn(),
    };

    const useCase = new SearchMoviesUseCase(mockRepository);
    const result = await useCase.execute('   ', 1);

    expect(mockRepository.searchMovies).not.toHaveBeenCalled();
    expect(result.results).toHaveLength(0);
  });
});
