export class GetMoviesUseCase {
  constructor(movieRepository) {
    this.movieRepository = movieRepository;
  }

  async execute(filters) {
    return await this.movieRepository.discoverMovies(filters);
  }
}
