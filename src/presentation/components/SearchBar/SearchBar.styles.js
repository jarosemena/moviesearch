import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem 3rem 1rem 1rem;
  font-size: 1rem;
  border: 2px solid var(--card-bg);
  border-radius: var(--border-radius);
  background: var(--card-bg);
  color: var(--text-color);
  transition: var(--transition);

  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }

  &::placeholder {
    color: var(--text-secondary);
  }
`;

export const ClearButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  color: var(--text-secondary);
  font-size: 1.25rem;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);

  &:hover {
    color: var(--text-color);
  }
`;
