import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useIntersectionObserver } from '../../../presentation/hooks/useIntersectionObserver';

describe('useIntersectionObserver', () => {
  let mockIntersectionObserver;
  let mockObserve;
  let mockDisconnect;

  beforeEach(() => {
    mockObserve = vi.fn();
    mockDisconnect = vi.fn();

    mockIntersectionObserver = vi.fn((callback) => ({
      observe: mockObserve,
      disconnect: mockDisconnect,
      unobserve: vi.fn(),
    }));

    global.IntersectionObserver = mockIntersectionObserver;
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should return false initially', () => {
    const ref = { current: document.createElement('div') };
    const { result } = renderHook(() => useIntersectionObserver(ref));

    expect(result.current).toBe(false);
  });

  it('should create IntersectionObserver with correct options', () => {
    const ref = { current: document.createElement('div') };
    const options = { threshold: 0.5, rootMargin: '10px' };

    renderHook(() => useIntersectionObserver(ref, options));

    expect(mockIntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      options
    );
  });

  it('should observe the element when ref is provided', () => {
    const element = document.createElement('div');
    const ref = { current: element };

    renderHook(() => useIntersectionObserver(ref));

    expect(mockObserve).toHaveBeenCalledWith(element);
  });

  it('should not observe when ref.current is null', () => {
    const ref = { current: null };

    renderHook(() => useIntersectionObserver(ref));

    expect(mockObserve).not.toHaveBeenCalled();
  });

  it('should disconnect observer on unmount', () => {
    const ref = { current: document.createElement('div') };
    const { unmount } = renderHook(() => useIntersectionObserver(ref));

    unmount();

    expect(mockDisconnect).toHaveBeenCalled();
  });
});
