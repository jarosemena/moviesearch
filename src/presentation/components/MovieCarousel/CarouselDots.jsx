import { DotsContainer, Dot } from './CarouselDots.styles';

export const CarouselDots = ({ totalItems, currentIndex, visibleCount, onDotClick }) => {
  if (totalItems <= visibleCount) {
    return null;
  }

  const maxIndex = totalItems - visibleCount;
  const dots = Array.from({ length: totalItems }, (_, index) => index);

  return (
    <DotsContainer>
      {dots.map((index) => {
        const isActive = index === currentIndex;
        const isVisible = index <= maxIndex;
        
        if (!isVisible) return null;
        
        return (
          <Dot
            key={index}
            $active={isActive}
            onClick={() => onDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        );
      })}
    </DotsContainer>
  );
};
