import { describe, it, expect } from 'vitest';
import { MovieRepository } from '../../../domain/repositories/MovieRepository';

describe('MovieRepository', () => {
  it('should throw error when discoverMovies is not implemented', async () => {
    const repository = new MovieRepository();
    await expect(repository.discoverMovies()).rejects.toThrow('Method not implemented');
  });

  it('should throw error when searchMovies is not implemented', async () => {
    const repository = new MovieRepository();
    await expect(repository.searchMovies()).rejects.toThrow('Method not implemented');
  });

  it('should throw error when getMovieDetails is not implemented', async () => {
    const repository = new MovieRepository();
    await expect(repository.getMovieDetails()).rejects.toThrow('Method not implemented');
  });

  it('should throw error when getGenres is not implemented', async () => {
    const repository = new MovieRepository();
    await expect(repository.getGenres()).rejects.toThrow('Method not implemented');
  });
});
