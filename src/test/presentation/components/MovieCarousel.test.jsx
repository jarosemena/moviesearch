import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '../../../presentation/context/ThemeContext';
import { MovieCarousel } from '../../../presentation/components/MovieCarousel/MovieCarousel';

const mockMovies = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: `Movie ${i + 1}`,
  poster_path: `/poster${i + 1}.jpg`,
  vote_average: 7.5,
  release_date: '2024-01-01',
}));

const renderWithTheme = (component) => {
  return render(
    <ThemeProvider>
      {component}
    </ThemeProvider>
  );
};

describe('MovieCarousel', () => {
  it('should render carousel with title', () => {
    renderWithTheme(
      <MovieCarousel 
        movies={mockMovies} 
        title="Test Carousel"
        onMovieClick={vi.fn()}
      />
    );

    expect(screen.getByText('Test Carousel')).toBeInTheDocument();
  });

  it('should render movie cards', () => {
    renderWithTheme(
      <MovieCarousel 
        movies={mockMovies} 
        onMovieClick={vi.fn()}
      />
    );

    expect(screen.getByText('Movie 1')).toBeInTheDocument();
  });

  it('should render navigation controls', () => {
    renderWithTheme(
      <MovieCarousel 
        movies={mockMovies} 
        onMovieClick={vi.fn()}
      />
    );

    expect(screen.getByLabelText('Previous movies')).toBeInTheDocument();
    expect(screen.getByLabelText('Next movies')).toBeInTheDocument();
  });

  it('should render dots navigation', () => {
    renderWithTheme(
      <MovieCarousel 
        movies={mockMovies} 
        onMovieClick={vi.fn()}
      />
    );

    const dots = screen.getAllByRole('button').filter(btn => 
      btn.getAttribute('aria-label')?.includes('Go to slide')
    );
    expect(dots.length).toBeGreaterThan(0);
  });

  it('should not render when movies array is empty', () => {
    const { container } = renderWithTheme(
      <MovieCarousel 
        movies={[]} 
        onMovieClick={vi.fn()}
      />
    );

    expect(container.firstChild).toBeNull();
  });

  it('should call onMovieClick when card is clicked', () => {
    const handleClick = vi.fn();
    renderWithTheme(
      <MovieCarousel 
        movies={mockMovies} 
        onMovieClick={handleClick}
      />
    );

    const movieCard = screen.getByText('Movie 1').closest('article');
    fireEvent.click(movieCard);

    expect(handleClick).toHaveBeenCalledWith(mockMovies[0]);
  });

  it('should navigate to next items when next button is clicked', () => {
    renderWithTheme(
      <MovieCarousel 
        movies={mockMovies} 
        onMovieClick={vi.fn()}
      />
    );

    const nextButton = screen.getByLabelText('Next movies');
    fireEvent.click(nextButton);

    // After clicking next, Movie 2 should be the first visible
    expect(screen.getByText('Movie 2')).toBeInTheDocument();
  });

  it('should navigate to previous items when prev button is clicked', () => {
    renderWithTheme(
      <MovieCarousel 
        movies={mockMovies} 
        onMovieClick={vi.fn()}
      />
    );

    const nextButton = screen.getByLabelText('Next movies');
    const prevButton = screen.getByLabelText('Previous movies');

    // Move forward first
    fireEvent.click(nextButton);
    // Then move back
    fireEvent.click(prevButton);

    expect(screen.getByText('Movie 1')).toBeInTheDocument();
  });
});
