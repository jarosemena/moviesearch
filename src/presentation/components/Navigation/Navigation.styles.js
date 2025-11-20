import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  background: var(--card-bg);
  border-bottom: 1px solid var(--card-border);
  box-shadow: 0 2px 4px var(--card-shadow);
  position: sticky;
  top: 0;
  z-index: 100;

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 0.5rem;
  }
`;

export const NavButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex: 1;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

export const NavButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  background: ${props => props.$active ? 'var(--button-bg)' : 'transparent'};
  color: ${props => props.$active ? 'var(--button-text)' : 'var(--text-color)'};
  border: 1px solid ${props => props.$active ? 'var(--button-bg)' : 'transparent'};
  border-radius: var(--border-radius);
  transition: var(--transition);
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: ${props => props.$active ? 'var(--button-hover)' : 'var(--hover-bg)'};
    border-color: ${props => props.$active ? 'var(--button-hover)' : 'var(--card-border)'};
  }

  &:active {
    background: ${props => props.$active ? 'var(--button-active)' : 'var(--hover-bg)'};
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
`;

export const Badge = styled.span`
  background: var(--background-color);
  color: var(--primary-color);
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 700;
  border: 1px solid var(--card-border);
`;
