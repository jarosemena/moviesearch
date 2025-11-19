import styled from 'styled-components';

export const ControlButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: all 0.3s ease;
  opacity: 0;

  &:hover:not(:disabled) {
    background: rgba(0, 0, 0, 0.9);
    transform: translateY(-50%) scale(1.1);
  }

  &:disabled {
    opacity: 0 !important;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
    opacity: 1;
  }
`;

export const LeftButton = styled(ControlButton)`
  left: 0.5rem;
`;

export const RightButton = styled(ControlButton)`
  right: 0.5rem;
`;
