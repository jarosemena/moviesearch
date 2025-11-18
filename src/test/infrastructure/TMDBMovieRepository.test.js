import { describe, it, expect, vi } from 'vitest';
import { TMDBMovieRepository } from '../../infrastructure/repositories/TMDBMovieRepository';
import { Movie } from '../../domain/models/Movie';

describe('TMDBMovieRepository', () => {
  it('should discover movies with filters', async () => {
    const mockClient = {
      get: vi.fn().mockResolvedValue({
        results: [
          {
            id: 1,
            title: 'Test Movie',
            overview: 'Test overview',
            poster_path: '/test.jpg',
            backdrop_path: '/backdrop.jpg',
            release_date: '2023-01-01',
            vote_average: 8.5,
            vote_count: 1000,
            genre_ids: [28],
            original_language: 'en',
            popularity: 100,
          },
        ],
        total_pages: 10,
        total_results: 200,
        page: 1,
      }),
    };

    const repository = new TMDBMovieRepository(mockClient);
    const result = await repository.discoverMovies({ page: 1 });

    expect(mockClient.get).toHaveBeenCalledWith('/discover/movie', expect.any(Object));
    expect(result.results).toHaveLength(1);
    expect(result.results[0]).toBeInstanceOf(Movie);
    expect(result.results[0].title).toBe('Test Movie');
  });

  it('should apply genre filters', async () => {
    const mockClient = {
      get: vi.fn().mockResolvedValue({
        results: [],
        total_pages: 0,
        total_results: 0,
        page: 1,
      }),
    };

    const repository = new TMDBMovieRepository(mockClient);
    await repository.discoverMovies({ genres: [28, 12] });

    expect(mockClient.get).toHaveBeenCalledWith(
      '/discover/movie',
      expect.objectContaining({
        with_genres: '28,12',
      })
    );
  });

  it('should apply year filters', async () => {
    const mockClient = {
      get: vi.fn().mockResolvedValue({
        results: [],
        total_pages: 0,
        total_results: 0,
        page: 1,
      }),
    };

    const repository = new TMDBMovieRepository(mockClient);
    await repository.discoverMovies({ yearFrom: 2020, yearTo: 2023 });

    expect(mockClient.get).toHaveBeenCalledWith(
      '/discover/movie',
      expect.objectContaining({
        'primary_release_date.gte': '2020-01-01',
        'primary_release_date.lte': '2023-12-31',
      })
    );
  });

  it('should apply rating filter', async () => {
    const mockClient = {
      get: vi.fn().mockResolvedValue({
        results: [],
        total_pages: 0,
        total_results: 0,
        page: 1,
      }),
    };

    const repository = new TMDBMovieRepository(mockClient);
    await repository.discoverMovies({ minRating: 8.0 });

    expect(mockClient.get).toHaveBeenCalledWith(
      '/discover/movie',
      expect.objectContaining({
        'vote_average.gte': 8.0,
        'vote_count.gte': 100,
      })
    );
  });

  it('should search movies', async () => {
    const mockClient = {
      get: vi.fn().mockResolvedValue({
        results: [
          {
            id: 1,
            title: 'Matrix',
            overview: 'Test',
            poster_path: '/test.jpg',
            backdrop_path: '/backdrop.jpg',
            release_date: '1999-03-31',
            vote_average: 8.7,
            vote_count: 20000,
            genre_ids: [28, 878],
            original_language: 'en',
            popularity: 150,
          },
        ],
        total_pages: 1,
        total_results: 1,
        page: 1,
      }),
    };

    const repository = new TMDBMovieRepository(mockClient);
    const result = await repository.searchMovies('Matrix', 1);

    expect(mockClient.get).toHaveBeenCalledWith('/search/movie', {
      query: 'Matrix',
      page: 1,
    });
    expect(result.results).toHaveLength(1);
    expect(result.results[0].title).toBe('Matrix');
  });

  it('should get movie details', async () => {
    const mockClient = {
      get: vi.fn().mockResolvedValue({
        id: 1,
        title: 'Test Movie',
        overview: 'Test overview',
        poster_path: '/test.jpg',
        backdrop_path: '/backdrop.jpg',
        release_date: '2023-01-01',
        vote_average: 8.5,
        vote_count: 1000,
        genres: [{ id: 28, name: 'Action' }],
        original_language: 'en',
        popularity: 100,
      }),
    };

    const repository = new TMDBMovieRepository(mockClient);
    const result = await repository.getMovieDetails(1);

    expect(mockClient.get).toHaveBeenCalledWith('/movie/1');
    expect(result).toBeInstanceOf(Movie);
    expect(result.title).toBe('Test Movie');
  });

  it('should get genres', async () => {
    const mockClient = {
      get: vi.fn().mockResolvedValue({
        genres: [
          { id: 28, name: 'Acción' },
          { id: 12, name: 'Aventura' },
        ],
      }),
    };

    const repository = new TMDBMovieRepository(mockClient);
    const result = await repository.getGenres();

    expect(mockClient.get).toHaveBeenCalledWith('/genre/movie/list');
    expect(result).toHaveLength(2);
    expect(result[0].name).toBe('Acción');
  });
});
