# 🏗️ Project Architecture

## Overview

This project implements a **Hexagonal Architecture** (also known as Ports and Adapters), which separates business logic from implementation details.

## Architecture Layers

```
┌─────────────────────────────────────────────────────────┐
│                    PRESENTATION                          │
│  (React Components, Pages, Hooks, Context)              │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│                    APPLICATION                           │
│              (Use Cases / Business Logic)                │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│                      DOMAIN                              │
│         (Entities, Value Objects, Interfaces)            │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│                  INFRASTRUCTURE                          │
│    (API Clients, Repositories, External Services)       │
└─────────────────────────────────────────────────────────┘
```

## 1. Domain Layer

**Responsibility:** Defines business entities and interfaces (ports).

### Models
- `Movie.js` - Movie entity with properties and business methods
- `Genre.js` - Genre entity

### Repositories (Interfaces)
- `MovieRepository.js` - Contract for movie operations
- `FavoritesRepository.js` - Contract for favorites management

**Principle:** This layer does NOT depend on any other layer. It's the business core.

## 2. Application Layer

**Responsibility:** Implements application use cases.

### Use Cases
- `GetMoviesUseCase.js` - Get movies with filters
- `SearchMoviesUseCase.js` - Search movies by text
- `ManageFavoritesUseCase.js` - Manage favorites
- `GetRandomMovieUseCase.js` - Get random movie

**Principle:** Orchestrates business logic without knowing implementation details.

## 3. Infrastructure Layer

**Responsibility:** Implements adapters for external services.

### API Clients
- `tmdbClient.js` - HTTP client for TMDB API

### Repositories (Implementations)
- `TMDBMovieRepository.js` - Concrete implementation using TMDB API
- `LocalStorageFavoritesRepository.js` - Implementation using LocalStorage

**Principle:** Implements interfaces defined in the domain.

## 4. Presentation Layer

**Responsibility:** User interface and UI state management.

### Components
- `MovieCard/` - Movie card
- `MovieGrid/` - Movie grid
- `SearchBar/` - Search bar
- `Filters/` - Advanced filters
- `MovieDetail/` - Details modal
- `Navigation/` - Navigation
- `Loading/` - Loading indicator

### Pages
- `Home/` - Main page with search and filters
- `Favorites/` - Favorites page

### Context
- `AppContext.jsx` - Global context with dependency injection

### Hooks
- `useDebounce.js` - Hook for search debounce

## Data Flow

```
User Action (UI)
    ↓
Component Event Handler
    ↓
Use Case (via Context)
    ↓
Repository Interface
    ↓
Repository Implementation
    ↓
External Service (TMDB API / LocalStorage)
    ↓
Data flows back up
```

## Advantages of this Architecture

### 1. Testability
- Each layer can be tested independently
- Use cases don't depend on React
- Easy to create repository mocks

### 2. Maintainability
- Clear separation of responsibilities
- UI changes don't affect business logic
- Easy to add new features

### 3. Flexibility
- Changing from TMDB to another API only requires creating a new repository
- Changing from LocalStorage to IndexedDB is trivial
- Migrating from React to another framework is easier

### 4. Scalability
- Clear structure for large teams
- Easy to divide work by layers
- More organized and predictable code

## SOLID Principles Applied

### Single Responsibility
Each class/module has a single responsibility:
- `Movie` only represents a movie
- `GetMoviesUseCase` only gets movies
- `TMDBClient` only makes HTTP requests

### Open/Closed
Open for extension, closed for modification:
- New repositories without modifying use cases
- New use cases without modifying repositories

### Liskov Substitution
Implementations are interchangeable:
- Any `MovieRepository` can be used
- Any `FavoritesRepository` can be used

### Interface Segregation
Specific and small interfaces:
- `MovieRepository` only for movies
- `FavoritesRepository` only for favorites

### Dependency Inversion
Dependencies point to abstractions:
- Use cases depend on interfaces, not implementations
- Dependency injection in `AppContext`

## Design Patterns Used

### Repository Pattern
Abstracts data access behind an interface.

### Use Case Pattern
Encapsulates business logic in specific use cases.

### Dependency Injection
Dependencies are injected through React context.

### Factory Pattern
Context acts as factory to create instances.

## Testing Strategy

```
Unit Tests
├── Domain Models
├── Use Cases (with mocks)
└── Repositories

Integration Tests
├── Use Cases + Real Repositories
└── Components + Context

E2E Tests
└── Full user flows
```

## Extensibility

### Add new data source
1. Create new repository implementing the interface
2. Inject in context
3. Done! Use cases work without changes

### Add new functionality
1. Create model in Domain (if necessary)
2. Create use case in Application
3. Create component in Presentation
4. Connect in context

### Migrate to another framework
1. Keep Domain, Application and Infrastructure
2. Rewrite only Presentation layer
3. Business logic remains intact

## Conclusion

This architecture provides a solid and scalable foundation for the project, facilitating maintenance, testing and long-term code evolution.
