import styled from 'styled-components';

export const ProgressBarContainer = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
`;

export const ProgressBarLabel = styled.div`
  color: var(--text-color);
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  text-align: center;
`;

export const ProgressBarFill = styled.div`
  width: 100%;
  height: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.$progress}%;
    background: linear-gradient(90deg, var(--primary-color), #ff4444);
    transition: width 0.1s linear;
    border-radius: 4px;
  }
`;
