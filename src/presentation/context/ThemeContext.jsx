import { createContext, useContext, useState, useEffect } from 'react';
import { LocalStorageThemeRepository } from '../../infrastructure/repositories/LocalStorageThemeRepository';
import { ManageThemeUseCase } from '../../application/useCases/ManageThemeUseCase';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const themeRepository = new LocalStorageThemeRepository();
  const manageThemeUseCase = new ManageThemeUseCase(themeRepository);

  const [theme, setTheme] = useState(() => manageThemeUseCase.getCurrentTheme());

  useEffect(() => {
    // Apply theme colors to CSS variables
    const root = document.documentElement;
    Object.entries(theme.colors).forEach(([key, value]) => {
      const cssVarName = `--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
      root.style.setProperty(cssVarName, value);
    });
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = manageThemeUseCase.toggleTheme();
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
