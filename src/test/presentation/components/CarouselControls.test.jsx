import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '../../../presentation/context/ThemeContext';
import { CarouselControls } from '../../../presentation/components/MovieCarousel/CarouselControls';

const renderWithTheme = (component) => {
  return render(
    <ThemeProvider>
      {component}
    </ThemeProvider>
  );
};

describe('CarouselControls', () => {
  it('should render prev and next buttons', () => {
    renderWithTheme(
      <CarouselControls
        onPrev={vi.fn()}
        onNext={vi.fn()}
        canGoPrev={true}
        canGoNext={true}
      />
    );

    expect(screen.getByLabelText('Previous movies')).toBeInTheDocument();
    expect(screen.getByLabelText('Next movies')).toBeInTheDocument();
  });

  it('should call onPrev when prev button is clicked', () => {
    const handlePrev = vi.fn();
    renderWithTheme(
      <CarouselControls
        onPrev={handlePrev}
        onNext={vi.fn()}
        canGoPrev={true}
        canGoNext={true}
      />
    );

    fireEvent.click(screen.getByLabelText('Previous movies'));
    expect(handlePrev).toHaveBeenCalled();
  });

  it('should call onNext when next button is clicked', () => {
    const handleNext = vi.fn();
    renderWithTheme(
      <CarouselControls
        onPrev={vi.fn()}
        onNext={handleNext}
        canGoPrev={true}
        canGoNext={true}
      />
    );

    fireEvent.click(screen.getByLabelText('Next movies'));
    expect(handleNext).toHaveBeenCalled();
  });

  it('should disable prev button when canGoPrev is false', () => {
    renderWithTheme(
      <CarouselControls
        onPrev={vi.fn()}
        onNext={vi.fn()}
        canGoPrev={false}
        canGoNext={true}
      />
    );

    expect(screen.getByLabelText('Previous movies')).toBeDisabled();
  });

  it('should disable next button when canGoNext is false', () => {
    renderWithTheme(
      <CarouselControls
        onPrev={vi.fn()}
        onNext={vi.fn()}
        canGoPrev={true}
        canGoNext={false}
      />
    );

    expect(screen.getByLabelText('Next movies')).toBeDisabled();
  });
});
