import { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Container,
  FilterGroup,
  Label,
  Select,
  Input,
  GenreGrid,
  GenreChip,
  RangeContainer,
  RangeInput,
  RangeValue,
  ToggleButton,
  FiltersContent,
} from './Filters.styles';

const SORT_OPTIONS = [
  { value: 'popularity.desc', label: 'Más populares' },
  { value: 'vote_average.desc', label: 'Mejor valoradas' },
  { value: 'primary_release_date.desc', label: 'Más recientes' },
  { value: 'primary_release_date.asc', label: 'Más antiguas' },
];

const LANGUAGES = [
  { value: '', label: 'Todos' },
  { value: 'es', label: 'Español' },
  { value: 'en', label: 'Inglés' },
  { value: 'fr', label: 'Francés' },
  { value: 'it', label: 'Italiano' },
  { value: 'ja', label: 'Japonés' },
  { value: 'ko', label: 'Coreano' },
];

export const Filters = ({ filters, onChange }) => {
  const { genres } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleGenreToggle = (genreId) => {
    const newGenres = filters.genres.includes(genreId)
      ? filters.genres.filter(id => id !== genreId)
      : [...filters.genres, genreId];
    onChange({ ...filters, genres: newGenres });
  };

  return (
    <Container>
      <ToggleButton onClick={() => setIsOpen(!isOpen)} $isOpen={isOpen}>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
        Filtros {filters.genres.length > 0 && `(${filters.genres.length})`}
      </ToggleButton>

      <FiltersContent $isOpen={isOpen}>
          <FilterGroup>
            <Label>Ordenar por</Label>
            <Select
              value={filters.sortBy}
              onChange={(e) => onChange({ ...filters, sortBy: e.target.value })}
            >
              {SORT_OPTIONS.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          </FilterGroup>

          <FilterGroup>
            <Label>Géneros</Label>
            <GenreGrid>
              {genres.map(genre => (
                <GenreChip
                  key={genre.id}
                  $active={filters.genres.includes(genre.id)}
                  onClick={() => handleGenreToggle(genre.id)}
                >
                  {genre.name}
                </GenreChip>
              ))}
            </GenreGrid>
          </FilterGroup>

          <FilterGroup>
            <Label>Año</Label>
            <RangeContainer>
              <Input
                type="number"
                min="1990"
                max={currentYear}
                value={filters.yearFrom}
                onChange={(e) => onChange({ ...filters, yearFrom: e.target.value })}
                placeholder="Desde"
              />
              <span>-</span>
              <Input
                type="number"
                min="1990"
                max={currentYear}
                value={filters.yearTo}
                onChange={(e) => onChange({ ...filters, yearTo: e.target.value })}
                placeholder="Hasta"
              />
            </RangeContainer>
          </FilterGroup>

          <FilterGroup>
            <Label>
              Rating mínimo: <RangeValue>{filters.minRating}</RangeValue>
            </Label>
            <RangeInput
              type="range"
              min="0"
              max="10"
              step="0.5"
              value={filters.minRating}
              onChange={(e) => onChange({ ...filters, minRating: parseFloat(e.target.value) })}
            />
          </FilterGroup>

          <FilterGroup>
            <Label>Idioma original</Label>
            <Select
              value={filters.language}
              onChange={(e) => onChange({ ...filters, language: e.target.value })}
            >
              {LANGUAGES.map(lang => (
                <option key={lang.value} value={lang.value}>
                  {lang.label}
                </option>
              ))}
            </Select>
          </FilterGroup>
        </FiltersContent>
    </Container>
  );
};
