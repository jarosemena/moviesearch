import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: var(--card-bg);
  border-radius: var(--border-radius);
  padding: 1rem;
`;

export const ToggleButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: transparent;
  color: var(--text-color);
  font-size: 1rem;
  font-weight: 600;
  text-align: left;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: var(--primary);
  }

  svg {
    transition: transform 0.3s ease;
    transform: ${props => props.$isOpen ? 'rotate(90deg)' : 'rotate(0deg)'};
  }
`;

export const FiltersContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-height: ${props => props.$isOpen ? '2000px' : '0'};
  overflow: hidden;
  opacity: ${props => props.$isOpen ? '1' : '0'};
  margin-top: ${props => props.$isOpen ? '1rem' : '0'};
  padding-top: ${props => props.$isOpen ? '1rem' : '0'};
  border-top: ${props => props.$isOpen ? '1px solid var(--secondary)' : 'none'};
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: max-height, opacity;
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-secondary);
`;

export const Select = styled.select`
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid var(--secondary-color);
  border-radius: var(--border-radius);
  background: var(--background-color);
  color: var(--text-color);
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

export const Input = styled.input`
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid var(--secondary-color);
  border-radius: var(--border-radius);
  background: var(--background-color);
  color: var(--text-color);

  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

export const GenreGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const GenreChip = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  background: ${props => props.$active ? 'var(--primary-color)' : 'var(--background-color)'};
  color: var(--text-color);
  border: 1px solid ${props => props.$active ? 'var(--primary-color)' : 'var(--secondary-color)'};
  transition: var(--transition);

  &:hover {
    border-color: var(--primary-color);
  }
`;

export const RangeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    color: var(--text-secondary);
  }
`;

export const RangeInput = styled.input`
  width: 100%;
  cursor: pointer;
`;

export const RangeValue = styled.span`
  color: var(--primary-color);
  font-weight: 600;
`;
