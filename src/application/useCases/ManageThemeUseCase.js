export class ManageThemeUseCase {
  constructor(themeRepository) {
    this.themeRepository = themeRepository;
  }

  getCurrentTheme() {
    return this.themeRepository.getTheme();
  }

  toggleTheme() {
    const currentTheme = this.themeRepository.getTheme();
    const newTheme = currentTheme.toggle();
    this.themeRepository.saveTheme(newTheme);
    return newTheme;
  }
}
