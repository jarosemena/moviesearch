import { useState, useEffect, useCallback, useRef } from 'react';

const ANIMATION_PHASES = {
  SEARCHING: 'searching',
  CANDIDATE_1: 'candidate1',
  CANDIDATE_2: 'candidate2',
  CANDIDATE_3: 'candidate3',
  SELECTING: 'selecting',
  FINAL: 'final',
  CANCELLED: 'cancelled',
};

const PHASE_DURATIONS = {
  [ANIMATION_PHASES.SEARCHING]: 5000,
  [ANIMATION_PHASES.CANDIDATE_1]: 5000,
  [ANIMATION_PHASES.CANDIDATE_2]: 5000,
  [ANIMATION_PHASES.CANDIDATE_3]: 5000,
  [ANIMATION_PHASES.SELECTING]: 5000,
  [ANIMATION_PHASES.FINAL]: 5000,
};

const REDUCED_MOTION_DURATIONS = {
  [ANIMATION_PHASES.SEARCHING]: 1500,
  [ANIMATION_PHASES.CANDIDATE_1]: 1500,
  [ANIMATION_PHASES.CANDIDATE_2]: 1500,
  [ANIMATION_PHASES.CANDIDATE_3]: 1500,
  [ANIMATION_PHASES.SELECTING]: 1500,
  [ANIMATION_PHASES.FINAL]: 2000,
};

const PHASE_ORDER = [
  ANIMATION_PHASES.SEARCHING,
  ANIMATION_PHASES.CANDIDATE_1,
  ANIMATION_PHASES.CANDIDATE_2,
  ANIMATION_PHASES.CANDIDATE_3,
  ANIMATION_PHASES.SELECTING,
  ANIMATION_PHASES.FINAL,
];

export const useRandomMatchAnimation = (candidates, finalMovie, prefersReducedMotion = false) => {
  const [currentPhase, setCurrentPhase] = useState(ANIMATION_PHASES.SEARCHING);
  const [progress, setProgress] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const startTimeRef = useRef(Date.now());
  const animationFrameRef = useRef(null);
  const phaseTimeoutRef = useRef(null);

  const durations = prefersReducedMotion ? REDUCED_MOTION_DURATIONS : PHASE_DURATIONS;
  const totalDuration = Object.values(durations).reduce((sum, duration) => sum + duration, 0);

  const getCurrentCandidate = useCallback(() => {
    if (!candidates || candidates.length === 0) return null;
    
    switch (currentPhase) {
      case ANIMATION_PHASES.CANDIDATE_1:
        return candidates[0];
      case ANIMATION_PHASES.CANDIDATE_2:
        return candidates[1];
      case ANIMATION_PHASES.CANDIDATE_3:
        return candidates[2];
      default:
        return null;
    }
  }, [currentPhase, candidates]);

  const cancel = useCallback(() => {
    setCurrentPhase(ANIMATION_PHASES.CANCELLED);
    setIsActive(false);
    
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    if (phaseTimeoutRef.current) {
      clearTimeout(phaseTimeoutRef.current);
    }
  }, []);

  const updateProgress = useCallback(() => {
    if (!isActive) return;

    const elapsed = Date.now() - startTimeRef.current;
    const newProgress = Math.min((elapsed / totalDuration) * 100, 100);
    setProgress(newProgress);

    if (newProgress < 100) {
      animationFrameRef.current = requestAnimationFrame(updateProgress);
    }
  }, [isActive, totalDuration]);

  useEffect(() => {
    if (!isActive) return;

    animationFrameRef.current = requestAnimationFrame(updateProgress);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isActive, updateProgress]);

  useEffect(() => {
    if (!isActive) return;

    const currentPhaseIndex = PHASE_ORDER.indexOf(currentPhase);
    if (currentPhaseIndex === -1 || currentPhaseIndex === PHASE_ORDER.length - 1) {
      return;
    }

    const phaseDuration = durations[currentPhase];
    phaseTimeoutRef.current = setTimeout(() => {
      const nextPhase = PHASE_ORDER[currentPhaseIndex + 1];
      setCurrentPhase(nextPhase);
    }, phaseDuration);

    return () => {
      if (phaseTimeoutRef.current) {
        clearTimeout(phaseTimeoutRef.current);
      }
    };
  }, [currentPhase, isActive, durations]);

  return {
    currentPhase,
    progress,
    currentCandidate: getCurrentCandidate(),
    finalMovie: currentPhase === ANIMATION_PHASES.FINAL ? finalMovie : null,
    isActive,
    cancel,
    phases: ANIMATION_PHASES,
  };
};
