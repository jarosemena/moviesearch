import { ThemeRepository } from '../../domain/repositories/ThemeRepository';
import { Theme } from '../../domain/models/Theme';

const STORAGE_KEY = 'movie-explorer-theme';

export class LocalStorageThemeRepository extends ThemeRepository {
  getTheme() {
    try {
      const storedMode = localStorage.getItem(STORAGE_KEY);
      return new Theme(storedMode || 'dark');
    } catch (error) {
      console.error('Error reading theme from localStorage:', error);
      return new Theme('dark');
    }
  }

  saveTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme.mode);
    } catch (error) {
      console.error('Error saving theme to localStorage:', error);
    }
  }
}
