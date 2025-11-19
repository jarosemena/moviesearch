import styled from 'styled-components';

export const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
  padding: 0 2rem;

  @media (max-width: 768px) {
    gap: 0.375rem;
    margin-top: 1rem;
    padding: 0 1rem;
  }
`;

export const Dot = styled.button`
  width: ${props => props.$active ? '24px' : '8px'};
  height: 8px;
  border-radius: 4px;
  background: ${props => props.$active ? 'var(--primary)' : 'rgba(255, 255, 255, 0.3)'};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${props => props.$active ? 'var(--primary)' : 'rgba(255, 255, 255, 0.5)'};
  }

  @media (max-width: 768px) {
    width: ${props => props.$active ? '20px' : '6px'};
    height: 6px;
  }
`;
