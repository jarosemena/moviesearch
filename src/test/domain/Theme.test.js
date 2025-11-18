import { describe, it, expect } from 'vitest';
import { Theme } from '../../domain/models/Theme';

describe('Theme', () => {
  it('should create a dark theme', () => {
    const theme = new Theme('dark');

    expect(theme.mode).toBe('dark');
    expect(theme.colors).toBeDefined();
    expect(theme.colors.primary).toBe('#e50914');
    expect(theme.colors.background).toBe('#141414');
  });

  it('should create a light theme', () => {
    const theme = new Theme('light');

    expect(theme.mode).toBe('light');
    expect(theme.colors).toBeDefined();
    expect(theme.colors.primary).toBe('#e50914');
    expect(theme.colors.background).toBe('#ffffff');
  });

  it('should toggle from dark to light', () => {
    const darkTheme = new Theme('dark');
    const lightTheme = darkTheme.toggle();

    expect(lightTheme.mode).toBe('light');
    expect(lightTheme.colors.background).toBe('#ffffff');
  });

  it('should toggle from light to dark', () => {
    const lightTheme = new Theme('light');
    const darkTheme = lightTheme.toggle();

    expect(darkTheme.mode).toBe('dark');
    expect(darkTheme.colors.background).toBe('#141414');
  });

  it('should default to dark theme if invalid mode', () => {
    const theme = new Theme('invalid');

    expect(theme.mode).toBe('dark');
  });

  it('should have all required color properties', () => {
    const theme = new Theme('dark');

    expect(theme.colors).toHaveProperty('primary');
    expect(theme.colors).toHaveProperty('secondary');
    expect(theme.colors).toHaveProperty('background');
    expect(theme.colors).toHaveProperty('text');
    expect(theme.colors).toHaveProperty('textSecondary');
    expect(theme.colors).toHaveProperty('cardBg');
  });
});
