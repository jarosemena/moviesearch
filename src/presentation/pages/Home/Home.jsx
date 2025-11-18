import { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { useDebounce } from '../../hooks/useDebounce';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { Filters } from '../../components/Filters/Filters';
import { MovieGrid } from '../../components/MovieGrid/MovieGrid';
import { Loading } from '../../components/Loading/Loading';
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const debouncedSearch = useDebounce(searchQuery, 300);

  useEffect(() => {
    loadMovies(1, true);
  }, [debouncedSearch, filters]);

  const loadMovies = async (pageNum, reset = false) => {
    try {
      setLoading(true);
      setError(null);

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
      setError('Error al cargar películas. Por favor, intenta de nuevo.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    if (!loading && hasMore) {
      loadMovies(page + 1, false);
    }
  };

  const handleRandomMovie = async () => {
    try {
      setLoading(true);
      const movie = await getRandomMovieUseCase.execute(movies.map(m => m.id));
      if (movie) {
        onMovieClick(movie);
      } else {
        setError('No se encontró ninguna película nueva');
      }
    } catch (err) {
      setError('Error al buscar película aleatoria');
      console.error(err);
    } finally {
      setLoading(false);
    }
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

      {error && <ErrorMessage>{error}</ErrorMessage>}

      {loading && movies.length === 0 ? (
        <Loading />
      ) : (
        <>
          <MovieGrid
            movies={movies}
            onMovieClick={onMovieClick}
            emptyMessage={
              debouncedSearch
                ? `No se encontraron resultados para "${debouncedSearch}"`
                : 'No se encontraron películas con estos filtros'
            }
          />
          {hasMore && movies.length > 0 && (
            <LoadMoreButton onClick={handleLoadMore} disabled={loading}>
              {loading ? 'Cargando...' : 'Cargar más'}
            </LoadMoreButton>
          )}
        </>
      )}
    </Container>
  );
};
