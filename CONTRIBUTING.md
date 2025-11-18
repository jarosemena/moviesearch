# 🤝 Guía de Contribución

## Cómo Contribuir

### 1. Fork y Clone
```bash
git clone https://github.com/tu-usuario/movie-explorer.git
cd movie-explorer
npm install
```

### 2. Crear una Rama
```bash
git checkout -b feature/nueva-funcionalidad
```

### 3. Hacer Cambios
- Sigue la arquitectura hexagonal existente
- Escribe tests para nuevas funcionalidades
- Mantén el código limpio y documentado

### 4. Commit y Push
```bash
git add .
git commit -m "feat: descripción de la funcionalidad"
git push origin feature/nueva-funcionalidad
```

### 5. Crear Pull Request
- Describe los cambios realizados
- Incluye screenshots si aplica
- Asegúrate de que los tests pasen

## Ejemplos de Extensión

### Agregar un Nuevo Filtro

#### 1. Actualizar el Componente de Filtros
```jsx
// src/presentation/components/Filters/Filters.jsx

// Agregar nuevo estado en el componente padre
const [filters, setFilters] = useState({
  ...initialFilters,
  newFilter: '', // Nuevo filtro
});

// Agregar UI para el nuevo filtro
<FilterGroup>
  <Label>Nuevo Filtro</Label>
  <Select
    value={filters.newFilter}
    onChange={(e) => onChange({ ...filters, newFilter: e.target.value })}
  >
    <option value="">Todos</option>
    <option value="option1">Opción 1</option>
  </Select>
</FilterGroup>
```

#### 2. Actualizar el Repositorio
```javascript
// src/infrastructure/repositories/TMDBMovieRepository.js

async discoverMovies(filters = {}) {
  const params = {
    // ... parámetros existentes
  };

  // Agregar nuevo filtro
  if (filters.newFilter) {
    params.new_filter_param = filters.newFilter;
  }

  // ... resto del código
}
```

### Agregar una Nueva Fuente de Datos

#### 1. Crear el Cliente
```javascript
// src/infrastructure/api/newApiClient.js

export class NewAPIClient {
  async get(endpoint, params = {}) {
    const url = new URL(`${BASE_URL}${endpoint}`);
    // Implementar lógica de petición
    return response.json();
  }
}
```

#### 2. Crear el Repositorio
```javascript
// src/infrastructure/repositories/NewMovieRepository.js

import { MovieRepository } from '../../domain/repositories/MovieRepository';
import { Movie } from '../../domain/models/Movie';

export class NewMovieRepository extends MovieRepository {
  constructor(client) {
    super();
    this.client = client;
  }

  async discoverMovies(filters = {}) {
    const data = await this.client.get('/movies', filters);
    return {
      results: data.results.map(movie => new Movie({
        // Mapear datos de la nueva API al modelo Movie
      })),
      totalPages: data.total_pages,
      totalResults: data.total_results,
      page: data.page,
    };
  }

  // Implementar otros métodos...
}
```

#### 3. Inyectar en el Contexto
```jsx
// src/presentation/context/AppContext.jsx

import { NewAPIClient } from '../../infrastructure/api/newApiClient';
import { NewMovieRepository } from '../../infrastructure/repositories/NewMovieRepository';

export const AppProvider = ({ children }) => {
  const newClient = new NewAPIClient();
  const movieRepository = new NewMovieRepository(newClient);
  
  // ... resto del código
};
```

### Agregar un Nuevo Caso de Uso

#### 1. Crear el Caso de Uso
```javascript
// src/application/useCases/GetTrendingMoviesUseCase.js

export class GetTrendingMoviesUseCase {
  constructor(movieRepository) {
    this.movieRepository = movieRepository;
  }

  async execute(timeWindow = 'week') {
    // Implementar lógica del caso de uso
    return await this.movieRepository.getTrending(timeWindow);
  }
}
```

#### 2. Agregar al Contexto
```jsx
// src/presentation/context/AppContext.jsx

const getTrendingMoviesUseCase = new GetTrendingMoviesUseCase(movieRepository);

return (
  <AppContext.Provider
    value={{
      // ... casos de uso existentes
      getTrendingMoviesUseCase,
    }}
  >
    {children}
  </AppContext.Provider>
);
```

#### 3. Usar en Componentes
```jsx
// src/presentation/pages/Trending/Trending.jsx

import { useApp } from '../../context/AppContext';

export const Trending = () => {
  const { getTrendingMoviesUseCase } = useApp();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMoviesUseCase.execute('week')
      .then(setMovies)
      .catch(console.error);
  }, []);

  return <MovieGrid movies={movies} />;
};
```

### Agregar Tests

#### Test de Caso de Uso
```javascript
// src/test/application/GetTrendingMoviesUseCase.test.js

import { describe, it, expect, vi } from 'vitest';
import { GetTrendingMoviesUseCase } from '../../application/useCases/GetTrendingMoviesUseCase';

describe('GetTrendingMoviesUseCase', () => {
  it('should get trending movies', async () => {
    const mockRepository = {
      getTrending: vi.fn().mockResolvedValue([
        { id: 1, title: 'Movie 1' },
      ]),
    };

    const useCase = new GetTrendingMoviesUseCase(mockRepository);
    const result = await useCase.execute('week');

    expect(mockRepository.getTrending).toHaveBeenCalledWith('week');
    expect(result).toHaveLength(1);
  });
});
```

#### Test de Componente
```javascript
// src/test/presentation/components/MovieCard.test.jsx

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MovieCard } from '../../../presentation/components/MovieCard/MovieCard';
import { AppProvider } from '../../../presentation/context/AppContext';

describe('MovieCard', () => {
  it('should render movie title', () => {
    const movie = {
      id: 1,
      title: 'Test Movie',
      voteAverage: 8.5,
    };

    render(
      <AppProvider>
        <MovieCard movie={movie} />
      </AppProvider>
    );

    expect(screen.getByText('Test Movie')).toBeInTheDocument();
  });
});
```

## Estándares de Código

### Nomenclatura
- **Componentes:** PascalCase (`MovieCard.jsx`)
- **Hooks:** camelCase con prefijo `use` (`useDebounce.js`)
- **Casos de Uso:** PascalCase con sufijo `UseCase` (`GetMoviesUseCase.js`)
- **Constantes:** UPPER_SNAKE_CASE (`API_KEY`)

### Estructura de Archivos
```
ComponentName/
├── ComponentName.jsx
├── ComponentName.styles.js
└── ComponentName.test.jsx
```

### Imports
```javascript
// 1. Librerías externas
import { useState, useEffect } from 'react';
import styled from 'styled-components';

// 2. Contextos y hooks
import { useApp } from '../../context/AppContext';

// 3. Componentes
import { MovieCard } from '../MovieCard/MovieCard';

// 4. Estilos
import { Container, Title } from './Component.styles';
```

### Comentarios
```javascript
// ✅ Buenos comentarios
// Excluir películas ya vistas para evitar duplicados
const availableMovies = movies.filter(m => !seenIds.includes(m.id));

// ❌ Malos comentarios
// Filtrar películas
const availableMovies = movies.filter(m => !seenIds.includes(m.id));
```

## Convenciones de Commits

Usamos [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: agregar filtro por director
fix: corregir error en búsqueda
docs: actualizar README
style: formatear código
refactor: reorganizar componentes
test: agregar tests para favoritos
chore: actualizar dependencias
```

## Checklist de Pull Request

- [ ] El código sigue la arquitectura hexagonal
- [ ] Se agregaron tests para nuevas funcionalidades
- [ ] Los tests existentes pasan
- [ ] El código está documentado
- [ ] Se actualizó el README si es necesario
- [ ] No hay console.logs innecesarios
- [ ] El código está formateado correctamente
- [ ] Se probó en mobile y desktop

## Preguntas Frecuentes

### ¿Dónde pongo la lógica de negocio?
En los casos de uso (`src/application/useCases/`)

### ¿Dónde pongo las llamadas a API?
En los repositorios de infraestructura (`src/infrastructure/repositories/`)

### ¿Dónde pongo los componentes de UI?
En la capa de presentación (`src/presentation/components/`)

### ¿Cómo agrego un nuevo modelo?
Créalo en `src/domain/models/` siguiendo el patrón de `Movie.js`

### ¿Cómo cambio los estilos?
Modifica los archivos `.styles.js` o las variables CSS en `src/index.css`

## Recursos

- [Arquitectura Hexagonal](./ARCHITECTURE.md)
- [Características](./FEATURES.md)
- [Configuración](./SETUP.md)
- [TMDB API Docs](https://developers.themoviedb.org/3)

## Contacto

Si tienes preguntas, abre un issue en GitHub.
