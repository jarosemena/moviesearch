import { createContext, useContext, useState, useEffect } from 'react';
import { TMDBClient } from '../../infrastructure/api/tmdbClient';
import { TMDBMovieRepository } from '../../infrastructure/repositories/TMDBMovieRepository';
import { LocalStorageFavoritesRepository } from '../../infrastructure/repositories/LocalStorageFavoritesRepository';
import { GetMoviesUseCase } from '../../application/useCases/GetMoviesUseCase';
import { SearchMoviesUseCase } from '../../application/useCases/SearchMoviesUseCase';
import { ManageFavoritesUseCase } from '../../application/useCases/ManageFavoritesUseCase';
import { GetRandomMovieUseCase } from '../../application/useCases/GetRandomMovieUseCase';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const client = new TMDBClient();
  const movieRepository = new TMDBMovieRepository(client);
  const favoritesRepository = new LocalStorageFavoritesRepository();

  const getMoviesUseCase = new GetMoviesUseCase(movieRepository);
  const searchMoviesUseCase = new SearchMoviesUseCase(movieRepository);
  const manageFavoritesUseCase = new ManageFavoritesUseCase(favoritesRepository);
  const getRandomMovieUseCase = new GetRandomMovieUseCase(movieRepository, favoritesRepository);

  const [favorites, setFavorites] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    setFavorites(manageFavoritesUseCase.getFavorites());
    
    movieRepository.getGenres().then(setGenres).catch(console.error);
  }, []);

  const toggleFavorite = (movie) => {
    const isFav = manageFavoritesUseCase.toggleFavorite(movie);
    setFavorites(manageFavoritesUseCase.getFavorites());
    return isFav;
  };

  const isFavorite = (movieId) => {
    return manageFavoritesUseCase.isFavorite(movieId);
  };

  return (
    <AppContext.Provider
      value={{
        getMoviesUseCase,
        searchMoviesUseCase,
        getRandomMovieUseCase,
        favorites,
        toggleFavorite,
        isFavorite,
        genres,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};
