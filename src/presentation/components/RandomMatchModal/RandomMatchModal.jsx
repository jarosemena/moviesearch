import React, { useEffect } from 'react';
import { useRandomMatchAnimation } from '../../hooks/useRandomMatchAnimation';
import { ProgressBar } from './ProgressBar';
import { CandidateCard } from './CandidateCard';
import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  SearchingAnimation,
  SearchingText,
  SelectingAnimation,
  SelectingText,
  FinalReveal,
  FinalTitle,
  ActionButtons,
  ActionButton,
} from './RandomMatchModal.styles';

export const RandomMatchModal = ({ 
  candidates, 
  finalMovie, 
  onClose, 
  onViewDetails,
  onStartNew 
}) => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  const {
    currentPhase,
    progress,
    currentCandidate,
    finalMovie: revealedFinalMovie,
    cancel,
    phases,
  } = useRandomMatchAnimation(candidates, finalMovie, prefersReducedMotion);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        cancel();
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [cancel, onClose]);

  const handleClose = () => {
    cancel();
    onClose();
  };

  const renderContent = () => {
    switch (currentPhase) {
      case phases.SEARCHING:
        return (
          <SearchingAnimation $reducedMotion={prefersReducedMotion}>
            <SearchingText>🎬</SearchingText>
            <SearchingText>Searching for your perfect match...</SearchingText>
          </SearchingAnimation>
        );

      case phases.CANDIDATE_1:
      case phases.CANDIDATE_2:
      case phases.CANDIDATE_3:
        return currentCandidate ? (
          <CandidateCard 
            movie={currentCandidate} 
            prefersReducedMotion={prefersReducedMotion}
          />
        ) : null;

      case phases.SELECTING:
        return (
          <SelectingAnimation $reducedMotion={prefersReducedMotion}>
            <SelectingText>🎲</SelectingText>
            <SelectingText>Making your selection...</SelectingText>
          </SelectingAnimation>
        );

      case phases.FINAL:
        return revealedFinalMovie ? (
          <FinalReveal>
            <FinalTitle>Your Perfect Match!</FinalTitle>
            <CandidateCard 
              movie={revealedFinalMovie} 
              prefersReducedMotion={prefersReducedMotion}
            />
            <ActionButtons>
              <ActionButton onClick={() => onViewDetails(revealedFinalMovie)}>
                View Details
              </ActionButton>
              <ActionButton $secondary onClick={onStartNew}>
                Try Again
              </ActionButton>
            </ActionButtons>
          </FinalReveal>
        ) : null;

      default:
        return null;
    }
  };

  return (
    <ModalOverlay onClick={handleClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={handleClose} aria-label="Close">
          ✕
        </CloseButton>
        
        <ProgressBar progress={progress} currentPhase={currentPhase} />
        
        {renderContent()}
      </ModalContent>
    </ModalOverlay>
  );
};
