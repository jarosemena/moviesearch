# Implementation Plan - Random Match Animation

- [x] 1. Update Application Layer for multiple random movies


  - Modify `GetRandomMovieUseCase.js` to support fetching 4 random movies
  - Add method `executeWithCandidates()` that returns 3 candidates and 1 final movie
  - _Requirements: 1.1, 1.2_

- [x]* 1.1 Update tests for GetRandomMovieUseCase


  - Add tests for `executeWithCandidates()` method
  - Verify correct splitting of candidates and final movie
  - _Requirements: 1.1, 1.2_



- [x] 2. Create animation state management hook
  - Create `useRandomMatchAnimation.js` custom hook
  - Implement state machine for animation phases (searching, candidate1, candidate2, candidate3, selecting, final)
  - Add progress tracking (0-100%)
  - Add cancel functionality
  - Handle 30-second timeline with proper phase durations
  - _Requirements: 1.3, 1.5, 2.1, 2.2, 2.3, 3.1, 3.2, 3.3, 4.1, 4.2, 5.1, 5.2_

- [ ]* 2.1 Write tests for useRandomMatchAnimation hook
  - Test state transitions between phases
  - Test progress calculation
  - Test cancel functionality


  - Test timing of phase transitions
  - _Requirements: 1.3, 1.5, 2.1, 2.2, 2.3, 3.1, 3.2, 4.1, 4.2, 5.1, 5.2_

- [x] 3. Create ProgressBar component
  - Create `RandomMatchModal/ProgressBar.jsx` component


  - Display progress percentage (0-100%)
  - Show current phase name
  - Implement smooth progress updates
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_



- [x] 4. Create CandidateCard component
  - Create `RandomMatchModal/CandidateCard.jsx` component
  - Display movie poster, title, and rating
  - Implement flip/reveal animation effect
  - Support reduced motion preference
  - _Requirements: 2.4, 2.5, 6.1, 6.2, 6.3_

- [x] 5. Create RandomMatchModal component
  - Create `RandomMatchModal/RandomMatchModal.jsx` main component
  - Implement full-screen modal layout

  - Display searching animation phase
  - Sequentially reveal candidate cards
  - Display selection animation
  - Display final movie reveal with enhanced effects
  - Add cancel button
  - Handle Escape key for cancellation
  - Prevent background interaction during animation
  - _Requirements: 1.4, 2.1, 2.2, 2.3, 4.1, 4.3, 4.4, 5.1, 5.2, 5.3, 5.4, 5.5_




- [x] 6. Create styled components for RandomMatchModal
  - Create `RandomMatchModal/RandomMatchModal.styles.js`
  - Implement responsive layout (mobile and desktop)
  - Add animation keyframes for searching, selection, and reveal phases
  - Implement reduced motion alternatives
  - Ensure 60+ FPS performance
  - Prevent background scrolling
  - _Requirements: 6.1, 6.2, 6.3, 7.1, 7.2, 7.3, 7.4, 7.5_

- [x] 7. Integrate RandomMatchModal into Home page
  - Add trigger button in `Home.jsx` for random match feature
  - Wire up modal state management
  - Connect to `GetRandomMovieUseCase` for fetching movies
  - Handle final movie selection actions (view details, start new match)
  - _Requirements: 1.1, 5.4, 5.5_
