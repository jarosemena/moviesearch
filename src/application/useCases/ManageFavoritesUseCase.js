export class ManageFavoritesUseCase {
  constructor(favoritesRepository) {
    this.favoritesRepository = favoritesRepository;
  }

  getFavorites() {
    return this.favoritesRepository.getFavorites();
  }

  addFavorite(movie) {
    this.favoritesRepository.addFavorite(movie);
  }

  removeFavorite(movieId) {
    this.favoritesRepository.removeFavorite(movieId);
  }

  toggleFavorite(movie) {
    if (this.favoritesRepository.isFavorite(movie.id)) {
      this.removeFavorite(movie.id);
      return false;
    } else {
      this.addFavorite(movie);
      return true;
    }
  }

  isFavorite(movieId) {
    return this.favoritesRepository.isFavorite(movieId);
  }
}
