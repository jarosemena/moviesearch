import { describe, it, expect, beforeEach, vi } from 'vitest';
import { LocalStorageThemeRepository } from '../../infrastructure/repositories/LocalStorageThemeRepository';
import { Theme } from '../../domain/models/Theme';

describe('LocalStorageThemeRepository', () => {
  let repository;

  beforeEach(() => {
    localStorage.clear();
    repository = new LocalStorageThemeRepository();
  });

  it('should return dark theme by default when no theme is stored', () => {
    const theme = repository.getTheme();

    expect(theme).toBeInstanceOf(Theme);
    expect(theme.mode).toBe('dark');
  });

  it('should save and retrieve a theme', () => {
    const lightTheme = new Theme('light');

    repository.saveTheme(lightTheme);
    const retrievedTheme = repository.getTheme();

    expect(retrievedTheme.mode).toBe('light');
  });

  it('should save theme mode to localStorage', () => {
    const lightTheme = new Theme('light');

    repository.saveTheme(lightTheme);

    const stored = localStorage.getItem('movie-explorer-theme');
    expect(stored).toBe('light');
  });

  it('should handle localStorage errors gracefully when getting theme', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('Storage error');
    });

    const theme = repository.getTheme();

    expect(theme).toBeInstanceOf(Theme);
    expect(theme.mode).toBe('dark');
  });

  it('should handle localStorage errors gracefully when saving theme', () => {
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('Storage error');
    });

    const lightTheme = new Theme('light');

    expect(() => repository.saveTheme(lightTheme)).not.toThrow();
  });

  it('should handle invalid stored theme mode', () => {
    // Clear any previous mocks
    vi.restoreAllMocks();
    localStorage.clear();
    
    localStorage.setItem('movie-explorer-theme', 'invalid');

    const theme = repository.getTheme();

    expect(theme.mode).toBe('dark');
  });
});
