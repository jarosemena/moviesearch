import { useApp } from '../../context/AppContext';
import { Nav, NavButton, Badge } from './Navigation.styles';

export const Navigation = ({ currentView, onViewChange }) => {
  const { favorites } = useApp();

  return (
    <Nav>
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
    </Nav>
  );
};
