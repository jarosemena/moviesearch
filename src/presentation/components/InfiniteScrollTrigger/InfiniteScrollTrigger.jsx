import React from 'react';
import { MovieCardSkeleton } from '../Skeleton/MovieCardSkeleton';
import {
  TriggerContainer,
  SkeletonGrid,
  Message,
  RetryButton,
} from './InfiniteScrollTrigger.styles';

/**
 * InfiniteScrollTrigger Component
 * Invisible trigger element that activates infinite scroll when visible
 * Displays loading skeletons, end message, or error state
 * 
 * @param {Object} props
 * @param {React.Ref} props.triggerRef - Ref to attach for intersection observer
 * @param {boolean} props.isLoading - Whether content is currently loading
 * @param {boolean} props.hasMore - Whether there is more content to load
 * @param {Error} props.error - Error object if loading failed
 * @param {Function} props.onRetry - Callback to retry loading after error
 * @param {number} props.skeletonCount - Number of skeleton cards to show while loading
 */
export const InfiniteScrollTrigger = ({
  triggerRef,
  isLoading = false,
  hasMore = true,
  error = null,
  onRetry = null,
  skeletonCount = 6,
}) => {
  // Don't render anything if there's no more content and not loading
  if (!hasMore && !isLoading && !error) {
    return (
      <TriggerContainer ref={triggerRef} role="status" aria-live="polite">
        <Message>No hay más películas para mostrar</Message>
      </TriggerContainer>
    );
  }

  // Show error state with retry button
  if (error && !isLoading) {
    return (
      <TriggerContainer ref={triggerRef} role="alert" aria-live="assertive">
        <Message $error>
          Error al cargar más películas: {error.message}
        </Message>
        {onRetry && (
          <RetryButton onClick={onRetry} aria-label="Reintentar carga">
            Reintentar
          </RetryButton>
        )}
      </TriggerContainer>
    );
  }

  // Show loading skeletons
  if (isLoading) {
    return (
      <TriggerContainer ref={triggerRef} role="status" aria-live="polite" aria-busy="true">
        <SkeletonGrid>
          {Array.from({ length: skeletonCount }).map((_, index) => (
            <MovieCardSkeleton key={`skeleton-${index}`} />
          ))}
        </SkeletonGrid>
      </TriggerContainer>
    );
  }

  // Invisible trigger element (when hasMore but not loading)
  return (
    <TriggerContainer 
      ref={triggerRef} 
      $invisible 
      role="status" 
      aria-live="polite"
      aria-label="Cargando más contenido"
    />
  );
};

