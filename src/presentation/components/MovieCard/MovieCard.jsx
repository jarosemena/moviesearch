import { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Card,
  PosterContainer,
  Poster,
  PlaceholderPoster,
  FavoriteButton,
  Info,
  Title,
  Meta,
  Rating,
  Year,
  Overview,
} from './MovieCard.styles';

export const MovieCard = ({ movie, onClick }) => {
  const { toggleFavorite, isFavorite } = useApp();
  const [imageError, setImageError] = useState(false);
  const favorite = isFavorite(movie.id);

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    toggleFavorite(movie);
  };

  return (
    <Card onClick={() => onClick?.(movie)}>
      <PosterContainer>
        {movie.posterUrl && !imageError ? (
          <Poster
            src={movie.posterUrl}
            alt={movie.title}
            onError={() => setImageError(true)}
            loading="lazy"
          />
        ) : (
          <PlaceholderPoster>
            <span>🎬</span>
          </PlaceholderPoster>
        )}
        <FavoriteButton onClick={handleFavoriteClick} $isFavorite={favorite}>
          {favorite ? '❤️' : '🤍'}
        </FavoriteButton>
      </PosterContainer>
      <Info>
        <Title>{movie.title}</Title>
        <Meta>
          <Rating>⭐ {movie.voteAverage.toFixed(1)}</Rating>
          {movie.year && <Year>{movie.year}</Year>}
        </Meta>
        {movie.overview && <Overview>{movie.overview}</Overview>}
      </Info>
    </Card>
  );
};
