import { Container, Input, ClearButton } from './SearchBar.styles';

export const SearchBar = ({ value, onChange, placeholder = 'Buscar películas...' }) => {
  return (
    <Container>
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
      {value && (
        <ClearButton onClick={() => onChange('')}>✕</ClearButton>
      )}
    </Container>
  );
};
