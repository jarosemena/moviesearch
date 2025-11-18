import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const SearchSection = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const RandomButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  background: var(--primary-color);
  color: var(--text-color);
  border-radius: var(--border-radius);
  transition: var(--transition);
  white-space: nowrap;

  &:hover:not(:disabled) {
    background: #c40812;
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const LoadMoreButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  background: var(--card-bg);
  color: var(--text-color);
  border-radius: var(--border-radius);
  margin: 2rem auto;
  display: block;
  transition: var(--transition);

  &:hover:not(:disabled) {
    background: var(--secondary-color);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.div`
  padding: 1rem;
  background: rgba(229, 9, 20, 0.2);
  border: 1px solid var(--primary-color);
  border-radius: var(--border-radius);
  color: var(--text-color);
  text-align: center;
`;
