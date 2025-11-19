import { MovieCard } from '../MovieCard/MovieCard';
import { MovieCardSkeleton } from '../Skeleton/MovieCardSkeleton';
import { Grid, EmptyState, EmptyIcon, EmptyText } from './MovieGrid.styles';

export const MovieGrid = ({ 
  movies, 
  onMovieClick, 
  emptyMessage = 'No se encontraron películas',
  isLoading = false,
  skeletonCount = 12
}) => {
  if (isLoading && movies.length === 0) {
    return (
      <Grid>
        {Array.from({ length: skeletonCount }).map((_, index) => (
          <MovieCardSkeleton key={`skeleton-${index}`} />
        ))}
      </Grid>
    );
  }

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
