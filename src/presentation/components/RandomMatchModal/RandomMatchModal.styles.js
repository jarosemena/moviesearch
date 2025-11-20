import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const scaleIn = keyframes`
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease-out;
  padding: 1rem;
`;

export const ModalContent = styled.div`
  background: var(--secondary-color);
  border-radius: 16px;
  padding: 2rem;
  max-width: 500px;
  width: 100%;
  max-height: 85vh;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${scaleIn} 0.3s ease-out;

  @media (max-width: 768px) {
    padding: 1.5rem;
    max-width: 100%;
    max-height: 90vh;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  color: var(--text-color);
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem;
  line-height: 1;
  transition: transform 0.2s ease;
  z-index: 10;

  &:hover {
    transform: scale(1.1);
  }

  &:focus {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }
`;

export const SearchingAnimation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 250px;
  gap: 1.5rem;
  animation: ${props => props.$reducedMotion ? fadeIn : pulse} 2s ease-in-out infinite;
`;

export const SearchingText = styled.div`
  color: var(--text-color);
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;

  &:first-child {
    font-size: 4rem;
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;

    &:first-child {
      font-size: 3rem;
    }
  }
`;

export const SelectingAnimation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 250px;
  gap: 1.5rem;
  animation: ${props => props.$reducedMotion ? fadeIn : spin} 2s linear infinite;
`;

export const SelectingText = styled.div`
  color: var(--text-color);
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;

  &:first-child {
    font-size: 4rem;
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;

    &:first-child {
      font-size: 3rem;
    }
  }
`;

export const FinalReveal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  animation: ${scaleIn} 0.6s ease-out;
`;

export const FinalTitle = styled.h2`
  color: var(--primary-color);
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  max-width: 400px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ActionButton = styled.button`
  flex: 1;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${props => props.$secondary ? 'transparent' : 'var(--button-bg)'};
  color: ${props => props.$secondary ? 'var(--text-color)' : 'var(--button-text)'};
  border: ${props => props.$secondary ? '2px solid var(--button-bg)' : '1px solid var(--card-border)'};

  &:hover {
    transform: translateY(-2px);
    background: ${props => props.$secondary ? 'var(--hover-bg)' : 'var(--button-hover)'};
    box-shadow: 0 4px 12px var(--card-shadow);
  }

  &:active {
    transform: translateY(0);
    background: ${props => props.$secondary ? 'var(--hover-bg)' : 'var(--button-active)'};
  }

  &:focus {
    outline: 2px solid var(--input-focus);
    outline-offset: 2px;
  }
`;
