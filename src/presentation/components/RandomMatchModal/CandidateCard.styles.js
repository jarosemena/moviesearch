import styled, { keyframes } from 'styled-components';

const flipIn = keyframes`
  0% {
    transform: perspective(1000px) rotateY(-90deg);
    opacity: 0;
  }
  100% {
    transform: perspective(1000px) rotateY(0deg);
    opacity: 1;
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.95);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const CardContainer = styled.div`
  background: var(--card-bg);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  width: 100%;
  animation: ${props => props.$reducedMotion ? fadeIn : flipIn} 0.6s ease-out;
  
  @media (max-width: 768px) {
    max-width: 300px;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  aspect-ratio: 2/3;
  object-fit: cover;
`;

export const CardInfo = styled.div`
  padding: 1.5rem;
  background: var(--card-bg);
`;

export const CardTitle = styled.h3`
  color: var(--text-color);
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const CardRating = styled.div`
  color: var(--text-secondary);
  font-size: 1rem;
  font-weight: 500;
`;
