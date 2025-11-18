import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { useImageLoader } from '../../../presentation/hooks/useImageLoader';

describe('useImageLoader', () => {
  beforeEach(() => {
    // Mock Image constructor
    global.Image = class {
      constructor() {
        setTimeout(() => {
          if (this.onload) this.onload();
        }, 100);
      }
    };
  });

  it('should return initial state', () => {
    const { result } = renderHook(() => useImageLoader('test.jpg'));

    expect(result.current.isLoaded).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it('should load image successfully', async () => {
    const { result } = renderHook(() => useImageLoader('test.jpg'));

    await waitFor(() => {
      expect(result.current.isLoaded).toBe(true);
    });

    expect(result.current.error).toBeNull();
  });

  it('should handle image load error', async () => {
    global.Image = class {
      constructor() {
        setTimeout(() => {
          if (this.onerror) this.onerror(new Error('Failed to load'));
        }, 100);
      }
    };

    const { result } = renderHook(() => useImageLoader('invalid.jpg'));

    await waitFor(() => {
      expect(result.current.error).toBeTruthy();
    });

    expect(result.current.isLoaded).toBe(false);
  });

  it('should not load if src is empty', () => {
    const { result } = renderHook(() => useImageLoader(''));

    expect(result.current.isLoaded).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it('should reload when src changes', async () => {
    const { result, rerender } = renderHook(
      ({ src }) => useImageLoader(src),
      { initialProps: { src: 'test1.jpg' } }
    );

    await waitFor(() => {
      expect(result.current.isLoaded).toBe(true);
    });

    // Change src
    rerender({ src: 'test2.jpg' });

    // Should reset and load again
    await waitFor(() => {
      expect(result.current.isLoaded).toBe(true);
    });
  });
});
