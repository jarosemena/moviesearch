import React from 'react';
import {
  ProgressBarContainer,
  ProgressBarFill,
  ProgressBarLabel,
} from './ProgressBar.styles';

const PHASE_LABELS = {
  searching: 'Searching for movies...',
  candidate1: 'Candidate 1',
  candidate2: 'Candidate 2',
  candidate3: 'Candidate 3',
  selecting: 'Making selection...',
  final: 'Your match!',
};

export const ProgressBar = ({ progress, currentPhase }) => {
  const label = PHASE_LABELS[currentPhase] || 'Loading...';

  return (
    <ProgressBarContainer>
      <ProgressBarLabel>{label}</ProgressBarLabel>
      <ProgressBarFill $progress={progress} />
    </ProgressBarContainer>
  );
};
