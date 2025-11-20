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
  border: 1px solid var(--input-border);
  border-radius: var(--border-radius);
  background: var(--card-bg);
  color: var(--text-color);
  transition: var(--transition);

  &:focus {
    outline: none;
    border-color: var(--input-focus);
    box-shadow: 0 0 0 3px rgba(229, 9, 20, 0.1);
  }

  &::placeholder {
    color: var(--text-secondary);
    opacity: 0.7;
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
