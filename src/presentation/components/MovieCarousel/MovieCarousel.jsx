import { useCarousel } from '../../hooks/useCarousel';
import { MovieCard } from '../MovieCard/MovieCard';
import { CarouselDots } from './CarouselDots';
import { CarouselControls } from './CarouselControls';
import {
  Container,
  CarouselWrapper,
  MoviesContainer,
  MoviesTrack,
  Title,
} from './MovieCarousel.styles';

export const MovieCarousel = ({ 
  movies, 
  title = 'Películas Recomendadas',
  onMovieClick,
  autoPlay = true 
}) => {
  const {
    currentIndex,
    visibleItems,
    next,
    prev,
    goTo,
    pause,
    resume,
    totalItems,
  } = useCarousel(movies, {
    visibleCount: 6,
    autoPlay,
    autoPlayInterval: 5000,
  });

  if (!movies || movies.length === 0) {
    return null;
  }

  return (
    <Container>
      <Title>{title}</Title>
      <CarouselWrapper
        onMouseEnter={pause}
        onMouseLeave={resume}
      >
        <CarouselControls
          onPrev={prev}
          onNext={next}
          canGoPrev={currentIndex > 0}
          canGoNext={currentIndex < totalItems - 6}
        />
        
        <MoviesContainer>
          <MoviesTrack $currentIndex={currentIndex}>
            {movies.map((movie, index) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onClick={onMovieClick}
              />
            ))}
          </MoviesTrack>
        </MoviesContainer>
        
        <CarouselDots
          totalItems={totalItems}
          currentIndex={currentIndex}
          visibleCount={6}
          onDotClick={goTo}
        />
      </CarouselWrapper>
    </Container>
  );
};
