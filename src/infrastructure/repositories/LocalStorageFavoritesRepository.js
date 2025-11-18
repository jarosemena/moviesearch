import { FavoritesRepository } from '../../domain/repositories/FavoritesRepository';

const STORAGE_KEY = 'movie-explorer-favorites';

export class LocalStorageFavoritesRepository extends FavoritesRepository {
  getFavorites() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error('Error reading favorites:', error);
      return [];
    }
  }

  addFavorite(movie) {
    const favorites = this.getFavorites();
    if (!favorites.find(fav => fav.id === movie.id)) {
      favorites.push(movie);
      this._save(favorites);
    }
  }

  removeFavorite(movieId) {
    const favorites = this.getFavorites();
    const filtered = favorites.filter(fav => fav.id !== movieId);
    this._save(filtered);
  }

  isFavorite(movieId) {
    const favorites = this.getFavorites();
    return favorites.some(fav => fav.id === movieId);
  }

  _save(favorites) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    } catch (error) {
      console.error('Error saving favorites:', error);
    }
  }
}
