import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  gap: 1rem;
`;

export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid var(--card-bg);
  border-top-color: var(--primary-color);
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export const Text = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
`;
