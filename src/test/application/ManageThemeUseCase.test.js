import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ManageThemeUseCase } from '../../application/useCases/ManageThemeUseCase';
import { Theme } from '../../domain/models/Theme';

describe('ManageThemeUseCase', () => {
  let useCase;
  let mockRepository;

  beforeEach(() => {
    mockRepository = {
      getTheme: vi.fn(),
      saveTheme: vi.fn(),
    };
    useCase = new ManageThemeUseCase(mockRepository);
  });

  it('should get current theme from repository', () => {
    const darkTheme = new Theme('dark');
    mockRepository.getTheme.mockReturnValue(darkTheme);

    const theme = useCase.getCurrentTheme();

    expect(mockRepository.getTheme).toHaveBeenCalled();
    expect(theme).toBe(darkTheme);
    expect(theme.mode).toBe('dark');
  });

  it('should toggle theme from dark to light', () => {
    const darkTheme = new Theme('dark');
    mockRepository.getTheme.mockReturnValue(darkTheme);

    const newTheme = useCase.toggleTheme();

    expect(mockRepository.getTheme).toHaveBeenCalled();
    expect(mockRepository.saveTheme).toHaveBeenCalledWith(expect.any(Theme));
    expect(newTheme.mode).toBe('light');
  });

  it('should toggle theme from light to dark', () => {
    const lightTheme = new Theme('light');
    mockRepository.getTheme.mockReturnValue(lightTheme);

    const newTheme = useCase.toggleTheme();

    expect(mockRepository.getTheme).toHaveBeenCalled();
    expect(mockRepository.saveTheme).toHaveBeenCalledWith(expect.any(Theme));
    expect(newTheme.mode).toBe('dark');
  });

  it('should save the toggled theme to repository', () => {
    const darkTheme = new Theme('dark');
    mockRepository.getTheme.mockReturnValue(darkTheme);

    useCase.toggleTheme();

    expect(mockRepository.saveTheme).toHaveBeenCalledTimes(1);
    const savedTheme = mockRepository.saveTheme.mock.calls[0][0];
    expect(savedTheme).toBeInstanceOf(Theme);
    expect(savedTheme.mode).toBe('light');
  });

  it('should return the new theme after toggling', () => {
    const darkTheme = new Theme('dark');
    mockRepository.getTheme.mockReturnValue(darkTheme);

    const result = useCase.toggleTheme();

    expect(result).toBeInstanceOf(Theme);
    expect(result.mode).toBe('light');
    expect(result.colors).toBeDefined();
  });

  it('should handle multiple toggles correctly', () => {
    let currentTheme = new Theme('dark');
    mockRepository.getTheme.mockImplementation(() => currentTheme);
    mockRepository.saveTheme.mockImplementation((theme) => {
      currentTheme = theme;
    });

    // First toggle: dark -> light
    const firstToggle = useCase.toggleTheme();
    expect(firstToggle.mode).toBe('light');

    // Second toggle: light -> dark
    const secondToggle = useCase.toggleTheme();
    expect(secondToggle.mode).toBe('dark');

    // Third toggle: dark -> light
    const thirdToggle = useCase.toggleTheme();
    expect(thirdToggle.mode).toBe('light');
  });
});
