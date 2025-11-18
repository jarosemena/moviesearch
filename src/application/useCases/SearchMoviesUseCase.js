export class SearchMoviesUseCase {
  constructor(movieRepository) {
    this.movieRepository = movieRepository;
  }

  async execute(query, page = 1) {
    if (!query || query.trim().length === 0) {
      return { results: [], totalPages: 0, totalResults: 0, page: 1 };
    }
    return await this.movieRepository.searchMovies(query, page);
  }
}
