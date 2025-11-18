import { useTheme } from '../../context/ThemeContext';
import { Container, ToggleButton, Icon } from './ThemeToggle.styles';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Container>
      <ToggleButton onClick={toggleTheme} aria-label="Toggle theme">
        <Icon $mode={theme.mode}>
          {theme.mode === 'dark' ? '☀️' : '🌙'}
        </Icon>
      </ToggleButton>
    </Container>
  );
};
