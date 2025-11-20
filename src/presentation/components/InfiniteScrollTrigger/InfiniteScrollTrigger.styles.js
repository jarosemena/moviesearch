import styled from 'styled-components';

export const TriggerContainer = styled.div`
  width: 100%;
  padding: ${props => props.$invisible ? '1px' : '2rem 0'};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  min-height: ${props => props.$invisible ? '1px' : 'auto'};
  opacity: ${props => props.$invisible ? '0' : '1'};
  pointer-events: ${props => props.$invisible ? 'none' : 'auto'};
`;

export const SkeletonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
  }
`;

export const Message = styled.p`
  font-size: 1rem;
  color: ${props => props.$error ? 'var(--primary-color)' : 'var(--text-secondary)'};
  text-align: center;
  margin: 0;
  padding: 1rem;
`;

export const RetryButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  background: var(--button-bg);
  color: var(--button-text);
  border: 1px solid var(--card-border);
  border-radius: var(--border-radius);
  transition: var(--transition);
  cursor: pointer;

  &:hover {
    background: var(--button-hover);
    transform: translateY(-2px);
  }

  &:active {
    background: var(--button-active);
    transform: translateY(0);
  }

  &:focus {
    outline: 2px solid var(--input-focus);
    outline-offset: 2px;
  }
`;

