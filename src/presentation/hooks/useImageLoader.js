import { useState, useEffect } from 'react';

export const useImageLoader = (src) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!src) return;

    setIsLoaded(false);
    setError(null);

    const img = new Image();

    img.onload = () => {
      setIsLoaded(true);
      setError(null);
    };

    img.onerror = (err) => {
      setIsLoaded(false);
      setError(err);
    };

    img.src = src;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return { isLoaded, error };
};
