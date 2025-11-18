# 📋 Lista de Tareas - Mejoras de UI/UX

## 🎯 Objetivo
Mejorar la experiencia de usuario con animaciones, temas y componentes interactivos avanzados, siguiendo arquitectura hexagonal y TDD.

## 🏗️ Principios de Desarrollo

### Arquitectura Hexagonal
- **Domain:** Entidades y lógica de negocio pura
- **Application:** Casos de uso (orquestación)
- **Infrastructure:** Implementaciones concretas (LocalStorage, APIs)
- **Presentation:** Componentes React (UI)

### TDD (Test-Driven Development)
1. ✍️ Escribir test primero (Red)
2. ✅ Implementar código mínimo (Green)
3. ♻️ Refactorizar (Refactor)

### Separación de Responsabilidades
- Lógica de negocio NO depende de React
- Componentes solo manejan UI y eventos
- Casos de uso orquestan la lógica
- Repositorios abstraen persistencia

---

## ✨ Tareas Pendientes

### 1. 🎨 Sistema de Temas (Dark/Light Mode)

#### 1.1 Domain Layer
- [ ] **TEST:** Crear `Theme.test.js` - Modelo de tema
- [ ] **CODE:** Crear modelo `Theme.js` (entidad)
  ```javascript
  class Theme {
    constructor(mode) { // 'light' | 'dark'
      this.mode = mode;
      this.colors = this.getColors();
    }
    getColors() { /* retorna paleta según mode */ }
    toggle() { /* retorna nuevo Theme con mode opuesto */ }
  }
  ```

#### 1.2 Domain - Repository Interface
- [ ] **TEST:** Crear `ThemeRepository.test.js` - Interface
- [ ] **CODE:** Crear `ThemeRepository.js` (interface)
  ```javascript
  class ThemeRepository {
    getTheme() { throw new Error('Not implemented'); }
    saveTheme(theme) { throw new Error('Not implemented'); }
  }
  ```

#### 1.3 Infrastructure Layer
- [ ] **TEST:** Crear `LocalStorageThemeRepository.test.js`
- [ ] **CODE:** Crear `LocalStorageThemeRepository.js`
  - Implementa `ThemeRepository`
  - Persiste en LocalStorage con key 'movie-explorer-theme'
  - Maneja errores de storage

#### 1.4 Application Layer
- [ ] **TEST:** Crear `ManageThemeUseCase.test.js`
- [ ] **CODE:** Crear `ManageThemeUseCase.js`
  ```javascript
  class ManageThemeUseCase {
    constructor(themeRepository) { }
    getCurrentTheme() { }
    toggleTheme() { }
  }
  ```

#### 1.5 Presentation Layer
- [ ] **CODE:** Crear `ThemeContext.jsx` (inyecta use case)
- [ ] **CODE:** Crear `ThemeToggle/ThemeToggle.jsx` (componente UI)
- [ ] **CODE:** Crear `ThemeToggle/ThemeToggle.styles.js`
- [ ] **CODE:** Actualizar `App.jsx` (integrar ThemeProvider)
- [ ] **CODE:** Actualizar `index.css` (variables CSS dinámicas)

**Archivos a crear:**
```
src/domain/models/Theme.js
src/domain/repositories/ThemeRepository.js
src/infrastructure/repositories/LocalStorageThemeRepository.js
src/application/useCases/ManageThemeUseCase.js
src/presentation/context/ThemeContext.jsx
src/presentation/components/ThemeToggle/
src/test/domain/Theme.test.js
src/test/domain/repositories/ThemeRepository.test.js
src/test/infrastructure/LocalStorageThemeRepository.test.js
src/test/application/ManageThemeUseCase.test.js
```

---

### 2. 🎭 Animaciones de Navegación

**Nota:** Esta tarea es principalmente de presentación (UI), no requiere lógica de negocio.

#### 2.1 Presentation Layer
- [ ] **CODE:** Simplificar `Navigation.jsx` a 2 opciones
- [ ] **CODE:** Actualizar `Navigation.styles.js` con animaciones
  - Hover effects
  - Active indicator animation
  - Transition effects
- [ ] **CODE:** Añadir animaciones de transición en `App.jsx`
  - Fade-in/fade-out entre rutas
  - Slide animations

**Archivos a modificar:**
```
src/presentation/components/Navigation/Navigation.jsx
src/presentation/components/Navigation/Navigation.styles.js
src/App.jsx
```

**Técnicas:**
- CSS transitions y keyframes
- React Transition Group (opcional)
- Framer Motion (opcional)

---

### 3. 📂 Animación de Expansión de Filtros

**Nota:** Tarea de presentación (UI), no requiere lógica de negocio.

#### 3.1 Presentation Layer
- [ ] **CODE:** Actualizar `Filters.jsx` con estado de animación
- [ ] **CODE:** Actualizar `Filters.styles.js` con animaciones
  - Smooth expand/collapse
  - Icon rotation (▶ → ▼)
  - Fade-in content
  - Stagger animation para filtros individuales
  - Performance optimization con `will-change`

**Archivos a modificar:**
```
src/presentation/components/Filters/Filters.jsx
src/presentation/components/Filters/Filters.styles.js
```

**Implementación:**
```javascript
const FiltersContent = styled.div`
  max-height: ${props => props.$isOpen ? '1000px' : '0'};
  overflow: hidden;
  transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${props => props.$isOpen ? '1' : '0'};
  will-change: max-height, opacity;
`;
```

---

### 4. 🎠 Carrusel de Películas

#### 4.1 Domain Layer (Opcional - Si hay lógica compleja)
- [ ] **TEST:** Crear `CarouselState.test.js` (si se necesita lógica de estado)
- [ ] **CODE:** Crear `CarouselState.js` (modelo para estado del carrusel)
  ```javascript
  class CarouselState {
    constructor(items, visibleCount = 6) { }
    getCurrentIndex() { }
    getVisibleItems() { }
    next() { }
    previous() { }
    goToIndex(index) { }
  }
  ```

#### 4.2 Presentation Layer - Hooks
- [ ] **TEST:** Crear `useCarousel.test.js` (custom hook)
- [ ] **CODE:** Crear `useCarousel.js`
  ```javascript
  const useCarousel = (items, options) => {
    // Lógica de navegación
    // Auto-play
    // Pause on hover
    return { currentIndex, next, prev, goTo, visibleItems };
  };
  ```

#### 4.3 Presentation Layer - Components
- [ ] **CODE:** Crear `MovieCarousel/MovieCarousel.jsx`
- [ ] **CODE:** Crear `MovieCarousel/MovieCarousel.styles.js`
- [ ] **CODE:** Crear `MovieCarousel/CarouselDots.jsx`
- [ ] **CODE:** Crear `MovieCarousel/CarouselControls.jsx`
- [ ] **CODE:** Integrar en `Home.jsx`

**Archivos a crear:**
```
src/domain/models/CarouselState.js (opcional)
src/presentation/hooks/useCarousel.js
src/presentation/components/MovieCarousel/
src/test/domain/CarouselState.test.js (opcional)
src/test/presentation/hooks/useCarousel.test.js
```

**Características:**
- 12 películas (6 visibles, 6 ocultas)
- Auto-scroll cada 5s (pausable en hover)
- 12 indicadores de navegación
- Navegación por flechas y puntos
- Touch/swipe support

---

### 5. 🖼️ Lazy Loading de Imágenes

**Nota:** Tarea de presentación (UI/Performance), no requiere lógica de negocio.

#### 5.1 Presentation Layer - Hooks
- [ ] **TEST:** Crear `useIntersectionObserver.test.js`
- [ ] **CODE:** Crear `useIntersectionObserver.js` (custom hook reutilizable)
  ```javascript
  const useIntersectionObserver = (ref, options) => {
    const [isInView, setIsInView] = useState(false);
    // Lógica de Intersection Observer
    return isInView;
  };
  ```

- [ ] **TEST:** Crear `useImageLoader.test.js`
- [ ] **CODE:** Crear `useImageLoader.js`
  ```javascript
  const useImageLoader = (src) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    // Lógica de carga de imagen
    return { isLoaded, error };
  };
  ```

#### 5.2 Presentation Layer - Components
- [ ] **CODE:** Crear `LazyImage/LazyImage.jsx`
- [ ] **CODE:** Crear `LazyImage/LazyImage.styles.js`
- [ ] **CODE:** Crear `Skeleton/MovieCardSkeleton.jsx`
- [ ] **CODE:** Crear `Skeleton/MovieCardSkeleton.styles.js`
- [ ] **CODE:** Actualizar `MovieCard.jsx` para usar LazyImage

**Archivos a crear:**
```
src/presentation/hooks/useIntersectionObserver.js
src/presentation/hooks/useImageLoader.js
src/presentation/components/LazyImage/
src/presentation/components/Skeleton/
src/test/presentation/hooks/useIntersectionObserver.test.js
src/test/presentation/hooks/useImageLoader.test.js
```

**Características:**
- Intersection Observer API
- Skeleton loader
- Blur-up effect
- Fade-in animation
- Error handling

---

### 6. 📜 Animación de Scroll Infinito

**Nota:** Combina lógica (detección de scroll) con presentación (animaciones).

#### 6.1 Presentation Layer - Hooks
- [ ] **TEST:** Crear `useInfiniteScroll.test.js`
- [ ] **CODE:** Crear `useInfiniteScroll.js`
  ```javascript
  const useInfiniteScroll = (callback, options) => {
    // Detecta cuando el usuario llega al final
    // Llama al callback para cargar más
    return { isLoading, hasMore };
  };
  ```

#### 6.2 Presentation Layer - Components
- [ ] **CODE:** Actualizar `Home.jsx` para usar `useInfiniteScroll`
- [ ] **CODE:** Actualizar `MovieGrid.jsx` con animaciones stagger
- [ ] **CODE:** Actualizar `MovieGrid.styles.js` con keyframes
- [ ] **CODE:** Crear `LoadingIndicator/LoadingIndicator.jsx`

**Archivos a modificar/crear:**
```
src/presentation/hooks/useInfiniteScroll.js
src/presentation/pages/Home/Home.jsx
src/presentation/components/MovieGrid/MovieGrid.jsx
src/presentation/components/MovieGrid/MovieGrid.styles.js
src/presentation/components/LoadingIndicator/
src/test/presentation/hooks/useInfiniteScroll.test.js
```

**Características:**
- Intersection Observer para detección
- Stagger animation (cards aparecen secuencialmente)
- Loading indicator
- Smooth scroll

---

### 7. 🎲 Animación "No sé qué ver" (Random Match)

#### 7.1 Application Layer
- [ ] **TEST:** Actualizar `GetRandomMovieUseCase.test.js`
- [ ] **CODE:** Actualizar `GetRandomMovieUseCase.js`
  ```javascript
  async executeWithCandidates() {
    // Retorna 4 películas: 3 candidatos + 1 final
    const candidates = await this.getMultipleRandomMovies(4);
    return {
      candidates: candidates.slice(0, 3),
      final: candidates[3]
    };
  }
  ```

#### 7.2 Presentation Layer - Hooks
- [ ] **TEST:** Crear `useRandomMatchAnimation.test.js`
- [ ] **CODE:** Crear `useRandomMatchAnimation.js`
  ```javascript
  const useRandomMatchAnimation = () => {
    // Controla el flujo de animación de 30s
    // Estados: searching, candidate1, candidate2, candidate3, selecting, final
    return { 
      currentState, 
      progress, 
      currentCandidate,
      finalMovie,
      cancel 
    };
  };
  ```

#### 7.3 Presentation Layer - Components
- [ ] **CODE:** Crear `RandomMatchModal/RandomMatchModal.jsx`
- [ ] **CODE:** Crear `RandomMatchModal/RandomMatchModal.styles.js`
- [ ] **CODE:** Crear `RandomMatchModal/CandidateCard.jsx`
- [ ] **CODE:** Crear `RandomMatchModal/ProgressBar.jsx`
- [ ] **CODE:** Actualizar `Home.jsx` para usar el modal

**Archivos a crear/modificar:**
```
src/application/useCases/GetRandomMovieUseCase.js (actualizar)
src/presentation/hooks/useRandomMatchAnimation.js
src/presentation/components/RandomMatchModal/
src/presentation/pages/Home/Home.jsx
src/test/application/GetRandomMovieUseCase.test.js (actualizar)
src/test/presentation/hooks/useRandomMatchAnimation.test.js
```

**Flujo (30 segundos):**
1. Searching animation (5s)
2. Candidato 1 reveal (5s)
3. Candidato 2 reveal (5s)
4. Candidato 3 reveal (5s)
5. Selection animation (5s)
6. Final reveal (5s)

**Características:**
- Barra de progreso
- Animaciones de flip/reveal
- Botón de cancelar
- Confetti effect (opcional)

---

## 🎨 Paletas de Colores Sugeridas

### Tema Oscuro (Actual)
```css
--primary-color: #e50914;
--secondary-color: #221f1f;
--background-color: #141414;
--text-color: #ffffff;
--text-secondary: #b3b3b3;
--card-bg: #2f2f2f;
```

### Tema Claro (Nuevo)
```css
--primary-color: #e50914;
--secondary-color: #f5f5f5;
--background-color: #ffffff;
--text-color: #1a1a1a;
--text-secondary: #666666;
--card-bg: #f9f9f9;
```

---

## 📦 Dependencias Adicionales Necesarias

```bash
# Para animaciones avanzadas
npm install framer-motion

# Para gestos touch en carrusel
npm install react-swipeable

# Para lazy loading de imágenes (opcional)
npm install react-lazy-load-image-component
```

---

## 🎯 Prioridades

### Alta Prioridad (Implementar primero)
1. ✅ Sistema de temas (Dark/Light)
2. ✅ Lazy loading de imágenes
3. ✅ Animación de filtros

### Media Prioridad
4. ✅ Carrusel de películas
5. ✅ Animaciones de navegación
6. ✅ Animación de scroll

### Baja Prioridad (Opcional)
7. ✅ Animación "No sé qué ver" (compleja)

---

## 📝 Notas de Implementación

### Performance
- Usar `will-change` para animaciones
- Implementar `React.memo` para componentes pesados
- Usar `useMemo` y `useCallback` donde sea necesario
- Lazy load de componentes con `React.lazy`

### Accesibilidad
- Añadir `prefers-reduced-motion` para usuarios sensibles a animaciones
- Mantener contraste adecuado en ambos temas
- Asegurar navegación por teclado en carrusel
- Añadir ARIA labels apropiados

### Testing
- Crear tests para ThemeContext
- Testear lazy loading con Intersection Observer mock
- Testear lógica de carrusel
- Testear animación de random match

---

## 🚀 Orden de Implementación Sugerido (TDD)

### Sprint 1: Sistema de Temas (Días 1-3)
**Siguiendo TDD y Arquitectura Hexagonal**

**Día 1: Domain + Infrastructure**
1. ✍️ TEST: `Theme.test.js` → ✅ CODE: `Theme.js`
2. ✍️ TEST: `ThemeRepository.test.js` → ✅ CODE: `ThemeRepository.js`
3. ✍️ TEST: `LocalStorageThemeRepository.test.js` → ✅ CODE: `LocalStorageThemeRepository.js`

**Día 2: Application**
4. ✍️ TEST: `ManageThemeUseCase.test.js` → ✅ CODE: `ManageThemeUseCase.js`

**Día 3: Presentation**
5. ✅ CODE: `ThemeContext.jsx` (inyecta use case)
6. ✅ CODE: `ThemeToggle` component
7. ✅ CODE: Actualizar `App.jsx` y `index.css`
8. ✅ Verificar coverage > 90%

---

### Sprint 2: Lazy Loading (Días 4-5)
**Enfoque en Hooks y Componentes**

**Día 4: Hooks con TDD**
1. ✍️ TEST: `useIntersectionObserver.test.js` → ✅ CODE: `useIntersectionObserver.js`
2. ✍️ TEST: `useImageLoader.test.js` → ✅ CODE: `useImageLoader.js`

**Día 5: Components**
3. ✅ CODE: `LazyImage` component
4. ✅ CODE: `MovieCardSkeleton` component
5. ✅ CODE: Integrar en `MovieCard`
6. ✅ Verificar coverage > 90%

---

### Sprint 3: Animaciones Simples (Día 6)
**Solo Presentation Layer**

1. ✅ CODE: Animación de filtros (CSS)
2. ✅ CODE: Animaciones de navegación (CSS)
3. ✅ CODE: Simplificar navegación a 2 opciones
4. ✅ Verificar performance (FPS > 60)

---

### Sprint 4: Carrusel (Días 7-9)
**Componente Complejo con TDD**

**Día 7: Lógica con TDD**
1. ✍️ TEST: `useCarousel.test.js` → ✅ CODE: `useCarousel.js`
2. ✍️ TEST: `CarouselState.test.js` (opcional) → ✅ CODE: `CarouselState.js`

**Día 8-9: Components**
3. ✅ CODE: `MovieCarousel` component
4. ✅ CODE: `CarouselDots` component
5. ✅ CODE: `CarouselControls` component
6. ✅ CODE: Integrar en `Home.jsx`
7. ✅ Verificar coverage > 90%

---

### Sprint 5: Scroll Infinito (Día 10)
**Hook + Animaciones**

**Día 10:**
1. ✍️ TEST: `useInfiniteScroll.test.js` → ✅ CODE: `useInfiniteScroll.js`
2. ✅ CODE: Integrar en `Home.jsx`
3. ✅ CODE: Animaciones stagger en `MovieGrid`
4. ✅ CODE: `LoadingIndicator` component
5. ✅ Verificar coverage > 90%

---

### Sprint 6: Random Match Animation (Días 11-13) - OPCIONAL
**Feature Compleja con TDD**

**Día 11: Application Layer**
1. ✍️ TEST: Actualizar `GetRandomMovieUseCase.test.js`
2. ✅ CODE: Actualizar `GetRandomMovieUseCase.js` (4 películas)

**Día 12: Hook con TDD**
3. ✍️ TEST: `useRandomMatchAnimation.test.js` → ✅ CODE: `useRandomMatchAnimation.js`

**Día 13: Components**
4. ✅ CODE: `RandomMatchModal` component
5. ✅ CODE: `CandidateCard` component
6. ✅ CODE: `ProgressBar` component
7. ✅ CODE: Integrar en `Home.jsx`
8. ✅ Verificar coverage > 90%

---

## 📊 Resumen por Prioridad

### 🔴 Alta Prioridad (Implementar primero)
1. ✅ **Sistema de Temas** (3 días) - Mejora UX significativa
2. ✅ **Lazy Loading** (2 días) - Mejora performance
3. ✅ **Animaciones Simples** (1 día) - Polish UI

### 🟡 Media Prioridad
4. ✅ **Carrusel** (3 días) - Feature atractiva
5. ✅ **Scroll Infinito** (1 día) - Mejora UX

### 🟢 Baja Prioridad (Opcional)
6. ✅ **Random Match Animation** (3 días) - Feature compleja/opcional

**Total: 10-13 días** (dependiendo si se implementa Random Match)

---

## ✅ Checklist de Calidad (Por Feature)

### Para cada feature completada, verificar:

#### 🧪 Testing (TDD)
- [ ] Tests escritos ANTES del código
- [ ] Coverage > 90% en lógica de negocio
- [ ] Coverage > 80% en hooks
- [ ] Todos los tests pasan
- [ ] Tests son legibles y mantenibles

#### 🏗️ Arquitectura
- [ ] Respeta arquitectura hexagonal
- [ ] Separación clara de responsabilidades
- [ ] Domain no depende de React
- [ ] Use cases orquestan correctamente
- [ ] Repositorios abstraen persistencia

#### 🎨 UI/UX
- [ ] Funciona en Chrome, Firefox y Safari
- [ ] Performance: FPS > 60 en animaciones
- [ ] Responsive: Mobile y Desktop
- [ ] Accesibilidad: WCAG 2.1 AA
- [ ] `prefers-reduced-motion` respetado

#### 📝 Documentación
- [ ] README actualizado
- [ ] Comentarios en código complejo
- [ ] JSDoc en funciones públicas
- [ ] CHANGELOG actualizado

#### 🔍 Code Review
- [ ] Código limpio y legible
- [ ] No hay console.logs
- [ ] No hay código comentado
- [ ] Nombres descriptivos
- [ ] Funciones pequeñas y enfocadas

---

## 📈 Métricas de Éxito

### Coverage Objetivo
- **Domain:** 100%
- **Application:** 100%
- **Infrastructure:** 95%+
- **Presentation (Hooks):** 80%+
- **Presentation (Components):** Opcional (requiere tests de integración)

### Performance
- **FPS:** > 60 en animaciones
- **LCP:** < 2.5s (Largest Contentful Paint)
- **FID:** < 100ms (First Input Delay)
- **CLS:** < 0.1 (Cumulative Layout Shift)

### Accesibilidad
- **Contraste:** Mínimo 4.5:1
- **Navegación por teclado:** Completa
- **Screen readers:** Compatible
- **ARIA labels:** Apropiados

---

**Fecha de creación:** 2024-11-17
**Última actualización:** 2024-11-17
**Estado:** 🔴 Pendiente

---

## 🎓 Recursos de Referencia

### TDD
- [Test-Driven Development](https://martinfowler.com/bliki/TestDrivenDevelopment.html)
- [Vitest Documentation](https://vitest.dev/)

### Arquitectura Hexagonal
- [Hexagonal Architecture](https://alistair.cockburn.us/hexagonal-architecture/)
- Ver `ARCHITECTURE.md` en este proyecto

### Performance
- [Web Vitals](https://web.dev/vitals/)
- [React Performance](https://react.dev/learn/render-and-commit)

### Accesibilidad
- [WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/)
- [A11y Project](https://www.a11yproject.com/)
