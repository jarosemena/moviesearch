# 🤝 Contributing Guide

## How to Contribute

### 1. Fork and Clone
```bash
git clone https://github.com/your-user/movie-explorer.git
cd movie-explorer
npm install
```

### 2. Create a Branch
```bash
git checkout -b feature/new-feature
```

### 3. Make Changes
- Follow the existing hexagonal architecture
- Write tests for new features
- Keep code clean and documented

### 4. Commit and Push
```bash
git add .
git commit -m "feat: feature description"
git push origin feature/new-feature
```

### 5. Create Pull Request
- Describe the changes made
- Include screenshots if applicable
- Make sure tests pass

## Extension Examples

### Add a New Filter

#### 1. Update Filters Component
```jsx
// src/presentation/components/Filters/Filters.jsx

// Add new state in parent component
const [filters, setFilters] = useState({
  ...initialFilters,
  newFilter: '', // New filter
});

// Add UI for new filter
<FilterGroup>
  <Label>New Filter</Label>
  <Select
    value={filters.newFilter}
    onChange={(e) => onChange({ ...filters, newFilter: e.target.value })}
  >
    <option value="">All</option>
    <option value="option1">Option 1</option>
  </Select>
</FilterGroup>
```

#### 2. Update Repository
```javascript
// src/infrastructure/repositories/TMDBMovieRepository.js

async discoverMovies(filters = {}) {
  const params = {
    // ... existing parameters
  };

  // Add new filter
  if (filters.newFilter) {
    params.new_filter_param = filters.newFilter;
  }

  // ... rest of code
}
```

### Add a New Data Source

#### 1. Create Client
```javascript
// src/infrastructure/api/newApiClient.js

export class NewAPIClient {
  async get(endpoint, params = {}) {
    const url = new URL(`${BASE_URL}${endpoint}`);
    // Implement request logic
    return response.json();
  }
}
```

#### 2. Create Repository
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
        // Map data from new API to Movie model
      })),
      totalPages: data.total_pages,
      totalResults: data.total_results,
      page: data.page,
    };
  }

  // Implement other methods...
}
```

#### 3. Inject in Context
```jsx
// src/presentation/context/AppContext.jsx

import { NewAPIClient } from '../../infrastructure/api/newApiClient';
import { NewMovieRepository } from '../../infrastructure/repositories/NewMovieRepository';

export const AppProvider = ({ children }) => {
  const newClient = new NewAPIClient();
  const movieRepository = new NewMovieRepository(newClient);
  
  // ... rest of code
};
```

### Add a New Use Case

#### 1. Create Use Case
```javascript
// src/application/useCases/GetTrendingMoviesUseCase.js

export class GetTrendingMoviesUseCase {
  constructor(movieRepository) {
    this.movieRepository = movieRepository;
  }

  async execute(timeWindow = 'week') {
    // Implement use case logic
    return await this.movieRepository.getTrending(timeWindow);
  }
}
```

#### 2. Add to Context
```jsx
// src/presentation/context/AppContext.jsx

const getTrendingMoviesUseCase = new GetTrendingMoviesUseCase(movieRepository);

return (
  <AppContext.Provider
    value={{
      // ... existing use cases
      getTrendingMoviesUseCase,
    }}
  >
    {children}
  </AppContext.Provider>
);
```

#### 3. Use in Components
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

### Add Tests

#### Use Case Test
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

#### Component Test
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

## Code Standards

### Naming
- **Components:** PascalCase (`MovieCard.jsx`)
- **Hooks:** camelCase with `use` prefix (`useDebounce.js`)
- **Use Cases:** PascalCase with `UseCase` suffix (`GetMoviesUseCase.js`)
- **Constants:** UPPER_SNAKE_CASE (`API_KEY`)

### File Structure
```
ComponentName/
├── ComponentName.jsx
├── ComponentName.styles.js
└── ComponentName.test.jsx
```

### Imports
```javascript
// 1. External libraries
import { useState, useEffect } from 'react';
import styled from 'styled-components';

// 2. Contexts and hooks
import { useApp } from '../../context/AppContext';

// 3. Components
import { MovieCard } from '../MovieCard/MovieCard';

// 4. Styles
import { Container, Title } from './Component.styles';
```

### Comments
```javascript
// ✅ Good comments
// Exclude already seen movies to avoid duplicates
const availableMovies = movies.filter(m => !seenIds.includes(m.id));

// ❌ Bad comments
// Filter movies
const availableMovies = movies.filter(m => !seenIds.includes(m.id));
```

## Commit Conventions

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add director filter
fix: fix search error
docs: update README
style: format code
refactor: reorganize components
test: add tests for favorites
chore: update dependencies
```

## Pull Request Checklist

- [ ] Code follows hexagonal architecture
- [ ] Tests added for new features
- [ ] Existing tests pass
- [ ] Code is documented
- [ ] README updated if necessary
- [ ] No unnecessary console.logs
- [ ] Code is properly formatted
- [ ] Tested on mobile and desktop

## Frequently Asked Questions

### Where do I put business logic?
In use cases (`src/application/useCases/`)

### Where do I put API calls?
In infrastructure repositories (`src/infrastructure/repositories/`)

### Where do I put UI components?
In presentation layer (`src/presentation/components/`)

### How do I add a new model?
Create it in `src/domain/models/` following the `Movie.js` pattern

### How do I change styles?
Modify `.styles.js` files or CSS variables in `src/index.css`

## Resources

- [Hexagonal Architecture](./ARCHITECTURE_EN.md)
- [Features](./FEATURES_EN.md)
- [Setup](./SETUP_EN.md)
- [TMDB API Docs](https://developers.themoviedb.org/3)

## Contact

If you have questions, open an issue on GitHub.
