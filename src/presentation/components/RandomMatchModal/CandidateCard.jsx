import React from 'react';
import {
  CardContainer,
  CardImage,
  CardInfo,
  CardTitle,
  CardRating,
} from './CandidateCard.styles';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export const CandidateCard = ({ movie, prefersReducedMotion = false }) => {
  if (!movie) return null;

  const posterUrl = movie.poster_path
    ? `${IMAGE_BASE_URL}${movie.poster_path}`
    : '/placeholder-poster.png';

  return (
    <CardContainer $reducedMotion={prefersReducedMotion}>
      <CardImage src={posterUrl} alt={movie.title} />
      <CardInfo>
        <CardTitle>{movie.title}</CardTitle>
        <CardRating>⭐ {movie.vote_average?.toFixed(1) || 'N/A'}</CardRating>
      </CardInfo>
    </CardContainer>
  );
};
