import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '../../../presentation/context/ThemeContext';
import { CarouselDots } from '../../../presentation/components/MovieCarousel/CarouselDots';

const renderWithTheme = (component) => {
  return render(
    <ThemeProvider>
      {component}
    </ThemeProvider>
  );
};

describe('CarouselDots', () => {
  it('should render dots for navigation', () => {
    renderWithTheme(
      <CarouselDots
        totalItems={12}
        currentIndex={0}
        visibleCount={6}
        onDotClick={vi.fn()}
      />
    );

    const dots = screen.getAllByRole('button');
    expect(dots.length).toBe(7); // 12 - 6 + 1 = 7 dots
  });

  it('should highlight active dot', () => {
    renderWithTheme(
      <CarouselDots
        totalItems={12}
        currentIndex={2}
        visibleCount={6}
        onDotClick={vi.fn()}
      />
    );

    const dots = screen.getAllByRole('button');
    const activeDot = dots[2];
    
    expect(activeDot).toHaveAttribute('aria-label', 'Go to slide 3');
  });

  it('should call onDotClick when dot is clicked', () => {
    const handleClick = vi.fn();
    renderWithTheme(
      <CarouselDots
        totalItems={12}
        currentIndex={0}
        visibleCount={6}
        onDotClick={handleClick}
      />
    );

    const dots = screen.getAllByRole('button');
    fireEvent.click(dots[2]);

    expect(handleClick).toHaveBeenCalledWith(2);
  });

  it('should not render when totalItems <= visibleCount', () => {
    const { container } = renderWithTheme(
      <CarouselDots
        totalItems={5}
        currentIndex={0}
        visibleCount={6}
        onDotClick={vi.fn()}
      />
    );

    expect(container.firstChild).toBeNull();
  });
});
