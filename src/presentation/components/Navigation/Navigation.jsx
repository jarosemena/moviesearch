import { useApp } from '../../context/AppContext';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import { Nav, NavButtons, NavButton, Badge } from './Navigation.styles';

export const Navigation = ({ currentView, onViewChange }) => {
  const { favorites } = useApp();

  return (
    <Nav>
      <NavButtons>
        <NavButton
          $active={currentView === 'home'}
          onClick={() => onViewChange('home')}
        >
          🏠 Inicio
        </NavButton>
        <NavButton
          $active={currentView === 'favorites'}
          onClick={() => onViewChange('favorites')}
        >
          ❤️ Favoritas
          {favorites.length > 0 && <Badge>{favorites.length}</Badge>}
        </NavButton>
      </NavButtons>
      <ThemeToggle />
    </Nav>
  );
};
