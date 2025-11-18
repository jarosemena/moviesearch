import { describe, it, expect, vi } from 'vitest';
import { GetMoviesUseCase } from '../../application/useCases/GetMoviesUseCase';

describe('GetMoviesUseCase', () => {
  it('should get movies with filters', async () => {
    const mockRepository = {
      discoverMovies: vi.fn().mockResolvedValue({
        results: [
          { id: 1, title: 'Movie 1' },
          { id: 2, title: 'Movie 2' },
        ],
        totalPages: 10,
        totalResults: 200,
        page: 1,
      }),
    };

    const useCase = new GetMoviesUseCase(mockRepository);
    const filters = { genres: [28], page: 1 };
    const result = await useCase.execute(filters);

    expect(mockRepository.discoverMovies).toHaveBeenCalledWith(filters);
    expect(result.results).toHaveLength(2);
    expect(result.totalPages).toBe(10);
  });

  it('should handle empty filters', async () => {
    const mockRepository = {
      discoverMovies: vi.fn().mockResolvedValue({
        results: [],
        totalPages: 0,
        totalResults: 0,
        page: 1,
      }),
    };

    const useCase = new GetMoviesUseCase(mockRepository);
    const result = await useCase.execute({});

    expect(mockRepository.discoverMovies).toHaveBeenCalledWith({});
    expect(result.results).toHaveLength(0);
  });
});
