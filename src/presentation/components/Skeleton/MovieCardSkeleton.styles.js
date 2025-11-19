import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

const skeletonGradient = `
  linear-gradient(
    90deg,
    var(--card-bg) 0%,
    var(--secondary) 50%,
    var(--card-bg) 100%
  )
`;

export const Card = styled.div`
  background: var(--card-bg);
  border-radius: var(--border-radius);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const PosterSkeleton = styled.div`
  width: 100%;
  padding-top: 150%;
  background: ${skeletonGradient};
  background-size: 2000px 100%;
  animation: ${shimmer} 2s infinite linear;
`;

export const InfoSkeleton = styled.div`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const TitleSkeleton = styled.div`
  height: 1.5rem;
  width: 80%;
  border-radius: 4px;
  background: ${skeletonGradient};
  background-size: 2000px 100%;
  animation: ${shimmer} 2s infinite linear;
`;

export const MetaSkeleton = styled.div`
  display: flex;
  gap: 1rem;
`;

export const LineSkeleton = styled.div`
  height: 1rem;
  width: ${props => props.$width || '100%'};
  border-radius: 4px;
  background: ${skeletonGradient};
  background-size: 2000px 100%;
  animation: ${shimmer} 2s infinite linear;
`;
