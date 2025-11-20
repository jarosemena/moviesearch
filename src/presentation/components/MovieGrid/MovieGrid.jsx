import { MovieCard } from '../MovieCard/MovieCard';
import { MovieCardSkeleton } from '../Skeleton/MovieCardSkeleton';
import { InfiniteScrollTrigger } from '../InfiniteScrollTrigger/InfiniteScrollTrigger';
import { Grid, EmptyState, EmptyIcon, EmptyText, GridContainer } from './MovieGrid.styles';

export const MovieGrid = ({ 
  movies, 
  onMovieClick, 
  emptyMessage = 'No se encontraron películas',
  isLoading = false,
  skeletonCount = 12,
  // Infinite scroll props
  infiniteScrollRef = null,
  hasMore = false,
  loadingMore = false,
  error = null,
  onRetry = null,
}) => {
  // Initial loading state (no movies yet)
  if (isLoading && movies.length === 0) {
    return (
      <Grid>
        {Array.from({ length: skeletonCount }).map((_, index) => (
          <MovieCardSkeleton key={`skeleton-${index}`} />
        ))}
      </Grid>
    );
  }

  // Empty state (no movies found)
  if (movies.length === 0 && !isLoading) {
    return (
      <EmptyState>
        <EmptyIcon>🎬</EmptyIcon>
        <EmptyText>{emptyMessage}</EmptyText>
      </EmptyState>
    );
  }

  // Movies grid with optional infinite scroll trigger
  return (
    <GridContainer>
      <Grid>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} onClick={onMovieClick} />
        ))}
      </Grid>
      
      {/* Infinite scroll trigger (only if ref is provided) */}
      {infiniteScrollRef && (
        <InfiniteScrollTrigger
          triggerRef={infiniteScrollRef}
          isLoading={loadingMore}
          hasMore={hasMore}
          error={error}
          onRetry={onRetry}
          skeletonCount={6}
        />
      )}
    </GridContainer>
  );
};
