import { MovieRepository } from '../../domain/repositories/MovieRepository';
import { Movie } from '../../domain/models/Movie';
import { Genre } from '../../domain/models/Genre';

export class TMDBMovieRepository extends MovieRepository {
  constructor(client) {
    super();
    this.client = client;
  }

  async discoverMovies(filters = {}) {
    const params = {
      page: filters.page || 1,
      sort_by: filters.sortBy || 'popularity.desc',
    };

    if (filters.genres?.length > 0) {
      params.with_genres = filters.genres.join(',');
    }

    if (filters.yearFrom || filters.yearTo) {
      params['primary_release_date.gte'] = `${filters.yearFrom || 1990}-01-01`;
      params['primary_release_date.lte'] = `${filters.yearTo || new Date().getFullYear()}-12-31`;
    }

    if (filters.minRating) {
      params['vote_average.gte'] = filters.minRating;
      params['vote_count.gte'] = 100;
    }

    if (filters.language) {
      params.with_original_language = filters.language;
    }

    const data = await this.client.get('/discover/movie', params);

    return {
      results: data.results.map(movie => new Movie({
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        posterPath: movie.poster_path,
        backdropPath: movie.backdrop_path,
        releaseDate: movie.release_date,
        voteAverage: movie.vote_average,
        voteCount: movie.vote_count,
        genreIds: movie.genre_ids,
        originalLanguage: movie.original_language,
        popularity: movie.popularity,
      })),
      totalPages: data.total_pages,
      totalResults: data.total_results,
      page: data.page,
    };
  }

  async searchMovies(query, page = 1) {
    const data = await this.client.get('/search/movie', { query, page });

    return {
      results: data.results.map(movie => new Movie({
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        posterPath: movie.poster_path,
        backdropPath: movie.backdrop_path,
        releaseDate: movie.release_date,
        voteAverage: movie.vote_average,
        voteCount: movie.vote_count,
        genreIds: movie.genre_ids,
        originalLanguage: movie.original_language,
        popularity: movie.popularity,
      })),
      totalPages: data.total_pages,
      totalResults: data.total_results,
      page: data.page,
    };
  }

  async getMovieDetails(id) {
    const data = await this.client.get(`/movie/${id}`);

    return new Movie({
      id: data.id,
      title: data.title,
      overview: data.overview,
      posterPath: data.poster_path,
      backdropPath: data.backdrop_path,
      releaseDate: data.release_date,
      voteAverage: data.vote_average,
      voteCount: data.vote_count,
      genreIds: data.genres?.map(g => g.id) || [],
      originalLanguage: data.original_language,
      popularity: data.popularity,
    });
  }

  async getGenres() {
    const data = await this.client.get('/genre/movie/list');
    return data.genres.map(genre => new Genre(genre));
  }
}
