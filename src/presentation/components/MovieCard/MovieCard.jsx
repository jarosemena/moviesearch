import { useApp } from '../../context/AppContext';
import { LazyImage } from '../LazyImage/LazyImage';
import {
  Card,
  PosterContainer,
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
  const favorite = isFavorite(movie.id);

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    toggleFavorite(movie);
  };

  return (
    <Card onClick={() => onClick?.(movie)}>
      <PosterContainer>
        <LazyImage
          src={movie.posterUrl}
          alt={movie.title}
          placeholder="🎬"
        />
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
