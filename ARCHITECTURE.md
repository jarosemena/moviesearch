# 🏗️ Arquitectura del Proyecto

## Visión General

Este proyecto implementa una **Arquitectura Hexagonal** (también conocida como Puertos y Adaptadores), que separa la lógica de negocio de los detalles de implementación.

## Capas de la Arquitectura

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

## 1. Domain Layer (Dominio)

**Responsabilidad:** Define las entidades de negocio y las interfaces (puertos).

### Modelos
- `Movie.js` - Entidad de película con propiedades y métodos de negocio
- `Genre.js` - Entidad de género

### Repositorios (Interfaces)
- `MovieRepository.js` - Contrato para operaciones con películas
- `FavoritesRepository.js` - Contrato para gestión de favoritos

**Principio:** Esta capa NO depende de ninguna otra capa. Es el núcleo del negocio.

## 2. Application Layer (Aplicación)

**Responsabilidad:** Implementa los casos de uso de la aplicación.

### Casos de Uso
- `GetMoviesUseCase.js` - Obtener películas con filtros
- `SearchMoviesUseCase.js` - Buscar películas por texto
- `ManageFavoritesUseCase.js` - Gestionar favoritos
- `GetRandomMovieUseCase.js` - Obtener película aleatoria

**Principio:** Orquesta la lógica de negocio sin conocer detalles de implementación.

## 3. Infrastructure Layer (Infraestructura)

**Responsabilidad:** Implementa los adaptadores para servicios externos.

### API Clients
- `tmdbClient.js` - Cliente HTTP para TMDB API

### Repositorios (Implementaciones)
- `TMDBMovieRepository.js` - Implementación concreta usando TMDB API
- `LocalStorageFavoritesRepository.js` - Implementación usando LocalStorage

**Principio:** Implementa las interfaces definidas en el dominio.

## 4. Presentation Layer (Presentación)

**Responsabilidad:** Interfaz de usuario y gestión de estado de UI.

### Componentes
- `MovieCard/` - Tarjeta de película
- `MovieGrid/` - Grid de películas
- `SearchBar/` - Barra de búsqueda
- `Filters/` - Filtros avanzados
- `MovieDetail/` - Modal de detalles
- `Navigation/` - Navegación
- `Loading/` - Indicador de carga

### Pages
- `Home/` - Página principal con búsqueda y filtros
- `Favorites/` - Página de favoritos

### Context
- `AppContext.jsx` - Contexto global con inyección de dependencias

### Hooks
- `useDebounce.js` - Hook para debounce de búsqueda

## Flujo de Datos

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

## Ventajas de esta Arquitectura

### 1. Testabilidad
- Cada capa puede testearse independientemente
- Los casos de uso no dependen de React
- Fácil crear mocks de repositorios

### 2. Mantenibilidad
- Separación clara de responsabilidades
- Cambios en UI no afectan lógica de negocio
- Fácil agregar nuevas features

### 3. Flexibilidad
- Cambiar de TMDB a otra API solo requiere crear un nuevo repositorio
- Cambiar de LocalStorage a IndexedDB es trivial
- Migrar de React a otro framework es más sencillo

### 4. Escalabilidad
- Estructura clara para equipos grandes
- Fácil dividir trabajo por capas
- Código más organizado y predecible

## Principios SOLID Aplicados

### Single Responsibility
Cada clase/módulo tiene una única responsabilidad:
- `Movie` solo representa una película
- `GetMoviesUseCase` solo obtiene películas
- `TMDBClient` solo hace peticiones HTTP

### Open/Closed
Abierto para extensión, cerrado para modificación:
- Nuevos repositorios sin modificar casos de uso
- Nuevos casos de uso sin modificar repositorios

### Liskov Substitution
Las implementaciones son intercambiables:
- Cualquier `MovieRepository` puede usarse
- Cualquier `FavoritesRepository` puede usarse

### Interface Segregation
Interfaces específicas y pequeñas:
- `MovieRepository` solo para películas
- `FavoritesRepository` solo para favoritos

### Dependency Inversion
Dependencias apuntan hacia abstracciones:
- Casos de uso dependen de interfaces, no implementaciones
- Inyección de dependencias en `AppContext`

## Patrones de Diseño Utilizados

### Repository Pattern
Abstrae el acceso a datos detrás de una interfaz.

### Use Case Pattern
Encapsula la lógica de negocio en casos de uso específicos.

### Dependency Injection
Las dependencias se inyectan a través del contexto de React.

### Factory Pattern
El contexto actúa como factory para crear instancias.

## Testing Strategy

```
Unit Tests
├── Domain Models
├── Use Cases (con mocks)
└── Repositories

Integration Tests
├── Use Cases + Real Repositories
└── Components + Context

E2E Tests
└── Full user flows
```

## Extensibilidad

### Agregar nueva fuente de datos
1. Crear nuevo repositorio implementando la interfaz
2. Inyectar en el contexto
3. ¡Listo! Los casos de uso funcionan sin cambios

### Agregar nueva funcionalidad
1. Crear modelo en Domain (si es necesario)
2. Crear caso de uso en Application
3. Crear componente en Presentation
4. Conectar en el contexto

### Migrar a otro framework
1. Mantener Domain, Application e Infrastructure
2. Reescribir solo la capa de Presentation
3. La lógica de negocio permanece intacta

## Conclusión

Esta arquitectura proporciona una base sólida y escalable para el proyecto, facilitando el mantenimiento, testing y evolución del código a largo plazo.
