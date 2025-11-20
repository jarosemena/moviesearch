import { useState, useEffect, useCallback } from 'react';
import { useApp } from '../../context/AppContext';
import { useDebounce } from '../../hooks/useDebounce';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { Filters } from '../../components/Filters/Filters';
import { MovieGrid } from '../../components/MovieGrid/MovieGrid';
import { MovieCarousel } from '../../components/MovieCarousel/MovieCarousel';
import { RandomMatchModal } from '../../components/RandomMatchModal/RandomMatchModal';
import {
  Container,
  Header,
  Title,
  SearchSection,
  RandomButton,
  LoadMoreButton,
  ErrorMessage,
} from './Home.styles';

const initialFilters = {
  genres: [],
  yearFrom: '',
  yearTo: '',
  minRating: 0,
  language: '',
  sortBy: 'popularity.desc',
};

export const Home = ({ onMovieClick }) => {
  const { getMoviesUseCase, searchMoviesUseCase, getRandomMovieUseCase } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState(initialFilters);
  const [movies, setMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);
  const [loadMoreError, setLoadMoreError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [showRandomModal, setShowRandomModal] = useState(false);
  const [randomMovies, setRandomMovies] = useState(null);
  const [infiniteScrollEnabled, setInfiniteScrollEnabled] = useState(true);

  const debouncedSearch = useDebounce(searchQuery, 300);

  // Load trending movies for carousel
  useEffect(() => {
    const loadTrending = async () => {
      try {
        const response = await getMoviesUseCase.execute({ 
          sortBy: 'popularity.desc',
          page: 1 
        });
        setTrendingMovies(response.results.slice(0, 12));
      } catch (err) {
        console.error('Error loading trending movies:', err);
      }
    };
    loadTrending();
  }, []);

  const loadMovies = useCallback(async (pageNum, reset = false) => {
    try {
      // Use different loading states for initial load vs. infinite scroll
      if (reset || movies.length === 0) {
        setLoading(true);
        setError(null);
      } else {
        setLoadingMore(true);
        setLoadMoreError(null);
      }

      let response;
      if (debouncedSearch) {
        response = await searchMoviesUseCase.execute(debouncedSearch, pageNum);
      } else {
        response = await getMoviesUseCase.execute({ ...filters, page: pageNum });
      }

      setMovies(prev => reset ? response.results : [...prev, ...response.results]);
      setHasMore(pageNum < response.totalPages);
      setPage(pageNum);
    } catch (err) {
      const errorMessage = 'Error al cargar películas. Por favor, intenta de nuevo.';
      if (reset || movies.length === 0) {
        setError(errorMessage);
      } else {
        setLoadMoreError(err);
      }
      console.error(err);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  }, [debouncedSearch, filters, movies.length, searchMoviesUseCase, getMoviesUseCase]);

  useEffect(() => {
    loadMovies(1, true);
  }, [debouncedSearch, filters]);

  // Callback for infinite scroll
  const handleInfiniteScroll = useCallback(() => {
    if (!loadingMore && hasMore && infiniteScrollEnabled) {
      console.log('Infinite scroll triggered - loading page:', page + 1);
      loadMovies(page + 1, false);
    }
  }, [loadingMore, hasMore, page, infiniteScrollEnabled, loadMovies]);

  // Manual load more button handler
  const handleLoadMore = () => {
    if (!loading && !loadingMore && hasMore) {
      loadMovies(page + 1, false);
    }
  };

  // Retry handler for failed infinite scroll loads
  const handleRetry = () => {
    setLoadMoreError(null);
    loadMovies(page + 1, false);
  };

  // Initialize infinite scroll hook
  const infiniteScrollRef = useInfiniteScroll(handleInfiniteScroll, {
    hasMore,
    isLoading: loadingMore,
    threshold: 0.1,
    rootMargin: '200px',
  });

  const handleRandomMovie = async () => {
    try {
      setLoading(true);
      const result = await getRandomMovieUseCase.executeWithCandidates(movies.map(m => m.id));
      if (result) {
        setRandomMovies(result);
        setShowRandomModal(true);
      } else {
        setError('No se encontraron suficientes películas para la animación');
      }
    } catch (err) {
      setError('Error al buscar película aleatoria');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    setShowRandomModal(false);
    setRandomMovies(null);
  };

  const handleViewDetails = (movie) => {
    setShowRandomModal(false);
    onMovieClick(movie);
  };

  const handleStartNew = () => {
    setShowRandomModal(false);
    setRandomMovies(null);
    handleRandomMovie();
  };

  return (
    <Container>
      <Header>
        <Title>🎬 Movie Explorer</Title>
        <SearchSection>
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <RandomButton onClick={handleRandomMovie} disabled={loading}>
            🎲 No sé qué ver
          </RandomButton>
        </SearchSection>
      </Header>

      <Filters filters={filters} onChange={setFilters} />

      {!debouncedSearch && trendingMovies.length > 0 && (
        <MovieCarousel
          movies={trendingMovies}
          title="🔥 Tendencias"
          onMovieClick={onMovieClick}
          autoPlay={true}
        />
      )}

      {error && <ErrorMessage>{error}</ErrorMessage>}

      <MovieGrid
        movies={movies}
        onMovieClick={onMovieClick}
        isLoading={loading}
        emptyMessage={
          debouncedSearch
            ? `No se encontraron resultados para "${debouncedSearch}"`
            : 'No se encontraron películas con estos filtros'
        }
        // Infinite scroll props
        infiniteScrollRef={infiniteScrollEnabled ? infiniteScrollRef : null}
        hasMore={hasMore}
        loadingMore={loadingMore}
        error={loadMoreError}
        onRetry={handleRetry}
      />
      
      {/* Show manual load more button when infinite scroll is disabled */}
      {!infiniteScrollEnabled && hasMore && movies.length > 0 && (
        <LoadMoreButton onClick={handleLoadMore} disabled={loading || loadingMore}>
          {loadingMore ? 'Cargando...' : 'Cargar más'}
        </LoadMoreButton>
      )}

      {showRandomModal && randomMovies && (
        <RandomMatchModal
          candidates={randomMovies.candidates}
          finalMovie={randomMovies.final}
          onClose={handleCloseModal}
          onViewDetails={handleViewDetails}
          onStartNew={handleStartNew}
        />
      )}
    </Container>
  );
};
