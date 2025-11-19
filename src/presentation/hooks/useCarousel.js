import { useState, useEffect, useCallback, useRef } from 'react';

export const useCarousel = (items, options = {}) => {
  const {
    visibleCount = 6,
    autoPlay = false,
    autoPlayInterval = 5000,
  } = options;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const maxIndex = Math.max(0, items.length - visibleCount);

  const visibleItems = items.slice(currentIndex, currentIndex + visibleCount);

  const next = useCallback(() => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const goTo = useCallback((index) => {
    const clampedIndex = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(clampedIndex);
  }, [maxIndex]);

  const pause = useCallback(() => {
    setIsPaused(true);
  }, []);

  const resume = useCallback(() => {
    setIsPaused(false);
  }, []);

  // Auto-play effect
  useEffect(() => {
    if (!autoPlay || isPaused || items.length <= visibleCount) {
      return;
    }

    intervalRef.current = setInterval(next, autoPlayInterval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoPlay, isPaused, next, autoPlayInterval, items.length, visibleCount]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return {
    currentIndex,
    visibleItems,
    next,
    prev,
    goTo,
    pause,
    resume,
    isPaused,
    totalItems: items.length,
    maxIndex,
  };
};
