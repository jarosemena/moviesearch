export class GetRandomMovieUseCase {
  constructor(movieRepository, favoritesRepository) {
    this.movieRepository = movieRepository;
    this.favoritesRepository = favoritesRepository;
  }

  async execute(excludeIds = []) {
    const favorites = this.favoritesRepository.getFavorites();
    const favoriteIds = favorites.map(fav => fav.id);
    const allExcludedIds = [...excludeIds, ...favoriteIds];

    const randomPage = Math.floor(Math.random() * 10) + 1;
    const response = await this.movieRepository.discoverMovies({
      page: randomPage,
      sortBy: 'popularity.desc',
    });

    const availableMovies = response.results.filter(
      movie => !allExcludedIds.includes(movie.id)
    );

    if (availableMovies.length === 0) {
      return null;
    }

    const randomIndex = Math.floor(Math.random() * availableMovies.length);
    return availableMovies[randomIndex];
  }

  async executeWithCandidates(excludeIds = []) {
    const favorites = this.favoritesRepository.getFavorites();
    const favoriteIds = favorites.map(fav => fav.id);
    const allExcludedIds = [...excludeIds, ...favoriteIds];

    const randomPage = Math.floor(Math.random() * 10) + 1;
    const response = await this.movieRepository.discoverMovies({
      page: randomPage,
      sortBy: 'popularity.desc',
    });

    const availableMovies = response.results.filter(
      movie => !allExcludedIds.includes(movie.id)
    );

    if (availableMovies.length < 4) {
      return null;
    }

    // Shuffle and get 4 unique random movies
    const shuffled = [...availableMovies].sort(() => Math.random() - 0.5);
    const selectedMovies = shuffled.slice(0, 4);

    return {
      candidates: selectedMovies.slice(0, 3),
      final: selectedMovies[3]
    };
  }
}
