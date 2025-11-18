import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Movie } from '../../domain/models/Movie';

describe('Movie', () => {
  beforeEach(() => {
    vi.stubEnv('VITE_TMDB_IMAGE_BASE_URL', 'https://image.tmdb.org/t/p');
  });

  it('should create a movie instance', () => {
    const movieData = {
      id: 1,
      title: 'Test Movie',
      overview: 'Test overview',
      posterPath: '/test.jpg',
      backdropPath: '/backdrop.jpg',
      releaseDate: '2020-06-15',
      voteAverage: 8.5,
      voteCount: 1000,
      genreIds: [28, 12],
      originalLanguage: 'en',
      popularity: 100,
    };

    const movie = new Movie(movieData);

    expect(movie.id).toBe(1);
    expect(movie.title).toBe('Test Movie');
    expect(movie.overview).toBe('Test overview');
    expect(movie.voteAverage).toBe(8.5);
    expect(movie.voteCount).toBe(1000);
    expect(movie.genreIds).toEqual([28, 12]);
    expect(movie.originalLanguage).toBe('en');
    expect(movie.popularity).toBe(100);
    expect(movie.year).toBe(2020);
  });

  it('should generate correct poster URL', () => {
    const movie = new Movie({
      id: 1,
      title: 'Test',
      posterPath: '/test.jpg',
    });

    expect(movie.posterUrl).toBe('https://image.tmdb.org/t/p/w500/test.jpg');
  });

  it('should return null for missing poster', () => {
    const movie = new Movie({
      id: 1,
      title: 'Test',
      posterPath: null,
    });

    expect(movie.posterUrl).toBeNull();
  });

  it('should generate correct backdrop URL', () => {
    const movie = new Movie({
      id: 1,
      title: 'Test',
      backdropPath: '/backdrop.jpg',
    });

    expect(movie.backdropUrl).toBe('https://image.tmdb.org/t/p/w1280/backdrop.jpg');
  });

  it('should return null for missing backdrop', () => {
    const movie = new Movie({
      id: 1,
      title: 'Test',
      backdropPath: null,
    });

    expect(movie.backdropUrl).toBeNull();
  });

  it('should extract year from release date', () => {
    const movie = new Movie({
      id: 1,
      title: 'Test',
      releaseDate: '2023-05-15',
    });

    expect(movie.year).toBe(2023);
  });

  it('should return null year for missing release date', () => {
    const movie = new Movie({
      id: 1,
      title: 'Test',
      releaseDate: null,
    });

    expect(movie.year).toBeNull();
  });

  it('should handle all properties', () => {
    const movieData = {
      id: 550,
      title: 'Fight Club',
      overview: 'A ticking-time-bomb insomniac...',
      posterPath: '/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
      backdropPath: '/fCayJrkfRaCRCTh8GqN30f8oyQF.jpg',
      releaseDate: '1999-10-15',
      voteAverage: 8.4,
      voteCount: 26280,
      genreIds: [18],
      originalLanguage: 'en',
      popularity: 61.416,
    };

    const movie = new Movie(movieData);

    expect(movie.id).toBe(550);
    expect(movie.title).toBe('Fight Club');
    expect(movie.year).toBe(1999);
    expect(movie.posterUrl).toContain('pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg');
    expect(movie.backdropUrl).toContain('fCayJrkfRaCRCTh8GqN30f8oyQF.jpg');
  });
});
