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
    
    // Define CSS variable mapping for better control
    const cssVarMapping = {
      primary: '--primary-color',
      secondary: '--secondary-color',
      background: '--background-color',
      text: '--text-color',
      textSecondary: '--text-secondary',
      cardBg: '--card-bg',
      cardBorder: '--card-border',
      cardShadow: '--card-shadow',
      hoverBg: '--hover-bg',
      buttonBg: '--button-bg',
      buttonText: '--button-text',
      buttonHover: '--button-hover',
      buttonActive: '--button-active',
      inputBorder: '--input-border',
      inputFocus: '--input-focus',
      overlay: '--overlay-color',
      skeletonBase: '--skeleton-base',
      skeletonHighlight: '--skeleton-highlight',
    };
    
    // Apply each color to its corresponding CSS variable
    Object.entries(theme.colors).forEach(([key, value]) => {
      const cssVarName = cssVarMapping[key] || `--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
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
