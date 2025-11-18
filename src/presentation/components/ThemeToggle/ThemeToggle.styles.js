import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ToggleButton = styled.button`
  background: var(--card-bg);
  border: 2px solid var(--secondary);
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;

  &:hover {
    transform: scale(1.1);
    border-color: var(--primary);
    box-shadow: 0 4px 12px rgba(229, 9, 20, 0.3);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const Icon = styled.span`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${props => props.$mode === 'dark' ? 'rotateIn' : 'rotateOut'} 0.3s ease;

  @keyframes rotateIn {
    from {
      transform: rotate(-180deg);
      opacity: 0;
    }
    to {
      transform: rotate(0deg);
      opacity: 1;
    }
  }

  @keyframes rotateOut {
    from {
      transform: rotate(180deg);
      opacity: 0;
    }
    to {
      transform: rotate(0deg);
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;
