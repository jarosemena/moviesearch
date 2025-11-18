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
  transition: var(--transition);

  &:hover {
    color: var(--primary-color);
  }
`;

export const FiltersContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--secondary-color);
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
