import { useApp } from '../../context/AppContext';
import {
  Overlay,
  Modal,
  CloseButton,
  Content,
  Backdrop,
  Info,
  Title,
  Meta,
  Rating,
  Year,
  Overview,
  FavoriteButton,
  Actions,
} from './MovieDetail.styles';

export const MovieDetail = ({ movie, onClose }) => {
  const { toggleFavorite, isFavorite } = useApp();
  const favorite = isFavorite(movie.id);

  const handleFavoriteClick = () => {
    toggleFavorite(movie);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <Modal>
        <CloseButton onClick={onClose}>✕</CloseButton>
        {movie.backdropUrl && <Backdrop src={movie.backdropUrl} alt={movie.title} />}
        <Content>
          <Info>
            <Title>{movie.title}</Title>
            <Meta>
              <Rating>⭐ {movie.voteAverage.toFixed(1)}</Rating>
              {movie.year && <Year>📅 {movie.year}</Year>}
              <span>🗣️ {movie.originalLanguage.toUpperCase()}</span>
            </Meta>
            {movie.overview && <Overview>{movie.overview}</Overview>}
            <Actions>
              <FavoriteButton onClick={handleFavoriteClick} $isFavorite={favorite}>
                {favorite ? '❤️ Quitar de favoritos' : '🤍 Agregar a favoritos'}
              </FavoriteButton>
            </Actions>
          </Info>
        </Content>
      </Modal>
    </Overlay>
  );
};
