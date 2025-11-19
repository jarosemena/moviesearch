import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 2rem 0;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  padding: 0 2rem;
  color: var(--text-color);

  @media (max-width: 768px) {
    font-size: 1.25rem;
    padding: 0 1rem;
  }
`;

export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;

  &:hover button {
    opacity: 1;
  }
`;

export const MoviesContainer = styled.div`
  overflow: hidden;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const MoviesTrack = styled.div`
  display: flex;
  gap: 1rem;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(${props => {
    const cardWidth = 200;
    const gap = 16;
    const offset = props.$currentIndex * (cardWidth + gap);
    return `-${offset}px`;
  }});

  @media (max-width: 768px) {
    gap: 0.5rem;
    transform: translateX(${props => {
      const cardWidth = 150;
      const gap = 8;
      const offset = props.$currentIndex * (cardWidth + gap);
      return `-${offset}px`;
    }});
  }

  > * {
    flex: 0 0 200px;

    @media (max-width: 768px) {
      flex: 0 0 150px;
    }
  }
`;
