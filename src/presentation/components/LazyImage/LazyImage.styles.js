import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: var(--secondary);
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${props => props.$isLoaded ? 1 : 0};
  transition: opacity 0.3s ease-in-out;
  animation: ${props => props.$isLoaded ? fadeIn : 'none'} 0.3s ease-in-out;
`;

export const Placeholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  background: var(--secondary);
  color: var(--text-secondary);
`;
