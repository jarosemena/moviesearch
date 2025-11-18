# 🎬 Movie Explorer

Aplicación React moderna para descubrir películas usando la API de TMDB con funcionalidades avanzadas de búsqueda, filtrado y gestión de favoritos.

## ✨ Características

### Funcionalidades Principales

- **Búsqueda en tiempo real** con debounce (300ms)
- **Filtros avanzados combinables:**
  - Género (selección múltiple)
  - Rango de años (1990-2024)
  - Rating mínimo (0-10)
  - Idioma original
  - Ordenamiento por popularidad, rating o fecha
- **Sistema de favoritos** con persistencia en LocalStorage
- **Match aleatorio** - Botón "No sé qué ver" que sugiere películas
- **Paginación** con carga incremental
- **Diseño responsive** mobile-first
- **Estados de carga y error** bien manejados

## 🏗️ Arquitectura

El proyecto sigue una **arquitectura hexagonal** (puertos y adaptadores) con separación clara de responsabilidades:

```
src/
├── domain/              # Capa de dominio (entidades y contratos)
│   ├── models/         # Modelos de negocio
│   └── repositories/   # Interfaces de repositorios
├── application/        # Casos de uso
│   └── useCases/
├── infrastructure/     # Implementaciones concretas
│   ├── api/           # Cliente TMDB
│   └── repositories/  # Repositorios concretos
└── presentation/      # Capa de presentación
    ├── components/    # Componentes React
    ├── pages/        # Páginas
    ├── context/      # Contexto global
    └── hooks/        # Hooks personalizados
```

## 🚀 Instalación

### 1. Clonar e instalar dependencias

```bash
npm install
```

### 2. Configurar Access Token de TMDB

1. Obtén tu Access Token (Read Access Token) en [TMDB](https://www.themoviedb.org/settings/api)
2. Crea un archivo `.env` en la raíz del proyecto:

```env
VITE_TMDB_ACCESS_TOKEN=tu_access_token_aqui
VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
VITE_TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p
```

**Nota:** El Access Token es diferente a la API Key. Usa el "Read Access Token" que comienza con "eyJ..."

### 3. Verificar conexión (Opcional)

```bash
# Probar la conexión con TMDB API
node test-api.js
```

### 4. Ejecutar la aplicación

```bash
# Modo desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Ejecutar tests
npm test
```

## 🎯 Uso

### Búsqueda y Filtrado

1. Usa la barra de búsqueda para encontrar películas por título
2. Despliega los filtros para refinar tu búsqueda:
   - Selecciona uno o varios géneros
   - Define un rango de años
   - Establece un rating mínimo
   - Filtra por idioma original
   - Cambia el orden de los resultados

### Favoritos

- Haz clic en el corazón de cualquier película para agregarla a favoritos
- Accede a tu lista de favoritos desde el menú de navegación
- Los favoritos se guardan automáticamente en tu navegador

### Match Aleatorio

- Haz clic en "🎲 No sé qué ver" para obtener una sugerencia aleatoria
- El sistema excluye películas que ya están en tus favoritos
- Se muestra el detalle completo de la película sugerida

### Detalles de Película

- Haz clic en cualquier tarjeta de película para ver más información
- Visualiza el backdrop, sinopsis completa y metadatos
- Agrega o quita de favoritos directamente desde el modal

## 🛠️ Stack Tecnológico

- **React 18** - Biblioteca UI
- **Vite** - Build tool y dev server
- **Styled Components** - Estilos CSS-in-JS
- **Vitest** - Framework de testing
- **Testing Library** - Utilidades de testing
- **TMDB API** - Fuente de datos de películas

## 📱 Responsive Design

La aplicación está optimizada para:
- 📱 Móviles (< 768px)
- 💻 Tablets y Desktop (≥ 768px)

## 🧪 Testing

```bash
# Ejecutar tests
npm test

# Tests en modo watch
npm test -- --watch

# Coverage
npm test -- --coverage
```

## 🎨 Personalización

### Colores

Los colores principales se definen en `src/index.css`:

```css
:root {
  --primary-color: #e50914;
  --secondary-color: #221f1f;
  --background-color: #141414;
  --text-color: #ffffff;
  --text-secondary: #b3b3b3;
  --card-bg: #2f2f2f;
}
```

## 📝 Licencia

MIT

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📧 Contacto

Para preguntas o sugerencias, abre un issue en el repositorio.
