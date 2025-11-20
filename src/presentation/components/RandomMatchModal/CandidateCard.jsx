import React, { useState } from 'react';
import {
  CardContainer,
  CardImage,
  CardInfo,
  CardTitle,
  CardRating,
} from './CandidateCard.styles';

export const CandidateCard = ({ movie, prefersReducedMotion = false }) => {
  const [imageError, setImageError] = useState(false);

  if (!movie) return null;

  // Use the posterUrl getter from Movie model, or construct it from posterPath
  const posterUrl = movie.posterUrl || (movie.posterPath 
    ? `https://image.tmdb.org/t/p/w500${movie.posterPath}`
    : null);

  const handleImageError = () => {
    setImageError(true);
  };

  const rating = movie.voteAverage || 0;

  return (
    <CardContainer $reducedMotion={prefersReducedMotion}>
      {posterUrl && !imageError ? (
        <CardImage 
          src={posterUrl} 
          alt={movie.title}
          onError={handleImageError}
          loading="eager"
        />
      ) : (
        <CardImage 
          as="div"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '4rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
          }}
        >
          🎬
        </CardImage>
      )}
      <CardInfo>
        <CardTitle>{movie.title}</CardTitle>
        <CardRating>⭐ {rating > 0 ? rating.toFixed(1) : 'N/A'}</CardRating>
      </CardInfo>
    </CardContainer>
  );
};
