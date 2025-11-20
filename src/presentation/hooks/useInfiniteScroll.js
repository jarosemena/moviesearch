import { useEffect, useRef, useCallback } from 'react';

/**
 * Custom hook for implementing infinite scroll functionality
 * Uses Intersection Observer API to detect when user reaches bottom of content
 * Includes scroll position restoration for better UX when navigating back
 * 
 * @param {Function} onLoadMore - Callback function to load more content
 * @param {Object} options - Configuration options
 * @param {boolean} options.hasMore - Whether there is more content to load
 * @param {boolean} options.isLoading - Whether content is currently loading
 * @param {string} options.threshold - Intersection threshold (0-1)
 * @param {string} options.rootMargin - Root margin for intersection observer
 * @param {string} options.scrollKey - Unique key for storing scroll position
 * @returns {Object} - Ref to attach to trigger element
 */
export const useInfiniteScroll = (
  onLoadMore,
  { 
    hasMore = true, 
    isLoading = false, 
    threshold = 0.1, 
    rootMargin = '100px',
    scrollKey = 'infinite-scroll-position'
  } = {}
) => {
  const observerRef = useRef(null);
  const triggerRef = useRef(null);
  const scrollRestoredRef = useRef(false);

  const handleIntersection = useCallback(
    (entries) => {
      const [entry] = entries;

      // Only trigger load if:
      // 1. Element is intersecting (visible)
      // 2. Not currently loading
      // 3. There is more content to load
      if (entry.isIntersecting && !isLoading && hasMore) {
        onLoadMore();
      }
    },
    [onLoadMore, isLoading, hasMore]
  );

  // Save scroll position before unmount
  useEffect(() => {
    const saveScrollPosition = () => {
      const scrollPosition = window.scrollY || window.pageYOffset;
      sessionStorage.setItem(scrollKey, scrollPosition.toString());
    };

    // Save scroll position periodically and on unmount
    const handleScroll = () => {
      saveScrollPosition();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      saveScrollPosition();
    };
  }, [scrollKey]);

  // Restore scroll position on mount
  useEffect(() => {
    if (!scrollRestoredRef.current) {
      const savedPosition = sessionStorage.getItem(scrollKey);
      if (savedPosition) {
        // Use requestAnimationFrame to ensure DOM is ready
        requestAnimationFrame(() => {
          window.scrollTo({
            top: parseInt(savedPosition, 10),
            behavior: 'auto', // instant restore
          });
          scrollRestoredRef.current = true;
        });
      }
    }
  }, [scrollKey]);

  // Intersection Observer setup
  useEffect(() => {
    // Create Intersection Observer
    const options = {
      root: null, // viewport
      rootMargin,
      threshold,
    };

    observerRef.current = new IntersectionObserver(handleIntersection, options);

    // Observe the trigger element
    const currentTrigger = triggerRef.current;
    if (currentTrigger) {
      observerRef.current.observe(currentTrigger);
    }

    // Cleanup: disconnect observer on unmount
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [handleIntersection, rootMargin, threshold]);

  return triggerRef;
};

