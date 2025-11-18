import { useState } from 'react';
import { AppProvider } from './presentation/context/AppContext';
import { ThemeProvider } from './presentation/context/ThemeContext';
import { Navigation } from './presentation/components/Navigation/Navigation';
import { Home } from './presentation/pages/Home/Home';
import { Favorites } from './presentation/pages/Favorites/Favorites';
import { MovieDetail } from './presentation/components/MovieDetail/MovieDetail';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseDetail = () => {
    setSelectedMovie(null);
  };

  return (
    <ThemeProvider>
      <AppProvider>
        <Navigation currentView={currentView} onViewChange={setCurrentView} />
        
        {currentView === 'home' && (
          <Home onMovieClick={handleMovieClick} />
        )}
        
        {currentView === 'favorites' && (
          <Favorites
            onMovieClick={handleMovieClick}
            onBack={() => setCurrentView('home')}
          />
        )}

        {selectedMovie && (
          <MovieDetail movie={selectedMovie} onClose={handleCloseDetail} />
        )}
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
