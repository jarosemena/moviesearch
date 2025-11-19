import { useRef } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useImageLoader } from '../../hooks/useImageLoader';
import { ImageContainer, StyledImage, Placeholder } from './LazyImage.styles';

export const LazyImage = ({ src, alt, placeholder = '🎬' }) => {
  const ref = useRef();
  const isInView = useIntersectionObserver(ref, { threshold: 0.1 });
  const { isLoaded, error } = useImageLoader(isInView ? src : null);

  return (
    <ImageContainer ref={ref}>
      {isInView && !error && (
        <StyledImage
          src={src}
          alt={alt}
          $isLoaded={isLoaded}
          loading="lazy"
        />
      )}
      {(!isInView || !isLoaded || error) && (
        <Placeholder>{placeholder}</Placeholder>
      )}
    </ImageContainer>
  );
};
