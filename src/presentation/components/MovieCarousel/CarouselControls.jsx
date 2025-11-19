import { ControlButton, LeftButton, RightButton } from './CarouselControls.styles';

export const CarouselControls = ({ onPrev, onNext, canGoPrev, canGoNext }) => {
  return (
    <>
      <LeftButton
        onClick={onPrev}
        disabled={!canGoPrev}
        aria-label="Previous movies"
      >
        ‹
      </LeftButton>
      <RightButton
        onClick={onNext}
        disabled={!canGoNext}
        aria-label="Next movies"
      >
        ›
      </RightButton>
    </>
  );
};
