import { useApp } from '../../context/AppContext';
import { MovieGrid } from '../../components/MovieGrid/MovieGrid';
import { Container, Header, Title, BackButton } from './Favorites.styles';

export const Favorites = ({ onMovieClick, onBack }) => {
  const { favorites } = useApp();

  return (
    <Container>
      <Header>
        <BackButton onClick={onBack}>← Volver</BackButton>
        <Title>❤️ Mis Favoritas ({favorites.length})</Title>
      </Header>

      <MovieGrid
        movies={favorites}
        onMovieClick={onMovieClick}
        emptyMessage="No tienes películas favoritas aún. ¡Empieza a agregar algunas!"
      />
    </Container>
  );
};
