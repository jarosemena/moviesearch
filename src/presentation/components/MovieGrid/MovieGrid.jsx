import { MovieCard } from '../MovieCard/MovieCard';
import { Grid, EmptyState, EmptyIcon, EmptyText } from './MovieGrid.styles';

export const MovieGrid = ({ movies, onMovieClick, emptyMessage = 'No se encontraron películas' }) => {
  if (movies.length === 0) {
    return (
      <EmptyState>
        <EmptyIcon>🎬</EmptyIcon>
        <EmptyText>{emptyMessage}</EmptyText>
      </EmptyState>
    );
  }

  return (
    <Grid>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} onClick={onMovieClick} />
      ))}
    </Grid>
  );
};
