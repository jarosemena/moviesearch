# 🎬 Movie Explorer - Aplicación React con TMDB API

> Aplicación React moderna para descubrir películas usando la API de TMDB. Implementa arquitectura hexagonal con funcionalidades avanzadas de búsqueda, filtrado y gestión de favoritos.

[English Version](./README_EN.md) | [Documentación Completa](./PROJECT_SUMMARY.md)

## ✨ Características Principales

### 🔍 Búsqueda y Filtrado
- ✅ Búsqueda en tiempo real con debounce (300ms)
- ✅ Filtros combinables: género, año, rating, idioma
- ✅ Ordenamiento múltiple (popularidad, rating, fecha)
- ✅ Paginación con carga incremental

### ❤️ Sistema de Favoritos
- ✅ Agregar/remover películas con un clic
- ✅ Persistencia en LocalStorage
- ✅ Vista dedicada de favoritos
- ✅ Sincronización en toda la app

### 🎲 Match Aleatorio
- ✅ Sugerencia de película random
- ✅ Excluye películas vistas/favoritas
- ✅ Detalles completos en modal

### 🎨 Experiencia de Usuario
- ✅ Diseño responsive mobile-first
- ✅ Estados de carga y error
- ✅ Mensajes para estados vacíos
- ✅ Transiciones suaves

## 🏗️ Arquitectura

Implementa **Arquitectura Hexagonal** con separación en capas:

```
src/
├── domain/              # Entidades y contratos
│   ├── models/         # Movie, Genre
│   └── repositories/   # Interfaces
├── application/         # Casos de uso
│   └── useCases/       # GetMovies, Search, Favorites, Random
├── infrastructure/      # Implementaciones
│   ├── api/           # Cliente TMDB
│   └── repositories/  # TMDB, LocalStorage
└── presentation/        # Componentes React
    ├── components/    # UI Components
    ├── pages/        # Home, Favorites
    ├── context/      # AppContext
    └── hooks/        # useDebounce
```

## 🚀 Instalación Rápida

### 1. Instalar dependencias
```bash
npm install
```

### 2. Configurar Access Token
1. Obtén tu Access Token (Read Access Token) en [TMDB](https://www.themoviedb.org/settings/api)
2. Edita el archivo `.env`:

```env
VITE_TMDB_ACCESS_TOKEN=tu_access_token_aqui
VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
VITE_TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p
```

**⚠️ Importante:** Usa el "Read Access Token" (JWT que comienza con "eyJ..."), NO la API Key v3

### 3. Verificar conexión (Opcional)
```bash
node test-api.js
```

### 4. Ejecutar
```bash
npm run dev
```

Abre `http://localhost:5173` en tu navegador.

## 📚 Documentación

| Archivo | Descripción |
|---------|-------------|
| [QUICK_START.md](./QUICK_START.md) | Guía de inicio rápido |
| [SETUP.md](./SETUP.md) | Configuración detallada |
| [FEATURES.md](./FEATURES.md) | Características detalladas |
| [ARCHITECTURE.md](./ARCHITECTURE.md) | Explicación de arquitectura |
| [CONTRIBUTING.md](./CONTRIBUTING.md) | Guía para contribuir |
| [API_AUTHENTICATION.md](./API_AUTHENTICATION.md) | Autenticación con TMDB |
| [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md) | Resumen del proyecto |

## 🎯 Uso

### Búsqueda y Filtrado
1. Escribe en la barra de búsqueda para encontrar películas
2. Usa los filtros para refinar resultados:
   - Selecciona géneros (múltiple)
   - Define rango de años (1990-2024)
   - Establece rating mínimo (0-10)
   - Filtra por idioma original
   - Ordena por popularidad, rating o fecha

### Favoritos
- Click en 🤍 para agregar a favoritos
- Click en ❤️ para remover de favoritos
- Accede a "❤️ Favoritas" en el menú para ver tu lista

### Match Aleatorio
- Click en "🎲 No sé qué ver" para obtener una sugerencia
- El sistema excluye películas ya vistas y favoritas

### Detalles
- Click en cualquier película para ver detalles completos
- Visualiza backdrop, sinopsis y metadatos
- Gestiona favoritos desde el modal

## 🛠️ Stack Tecnológico

- **React 18.3.1** - Biblioteca UI
- **Vite 5.4.0** - Build tool y dev server
- **Styled Components 6.1.12** - Estilos CSS-in-JS
- **React Router 6.26.0** - Navegación
- **Vitest 2.0.5** - Framework de testing
- **Testing Library 16.0.0** - Utilidades de testing
- **TMDB API v3** - Fuente de datos de películas

## 📱 Responsive

Optimizado para:
- 📱 Móviles (< 768px) - Grid 2 columnas
- 💻 Tablets y Desktop (≥ 768px) - Grid 3-6 columnas

## 🧪 Testing

```bash
npm test              # Ejecutar tests
npm test -- --watch   # Modo watch
npm test -- --coverage # Con cobertura (99.4%)
```

**Coverage:** 99.4% statements | 94.87% branches | 100% functions | 99.4% lines

## 🎯 Comandos Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build para producción
npm run preview  # Preview del build
npm test         # Ejecutar tests
```

## 🆘 Problemas Comunes

### Error 401 de API
- Verifica que tu Access Token esté en `.env`
- Asegúrate de usar el "Read Access Token" (JWT)
- Reinicia el servidor con `Ctrl+C` y `npm run dev`

### Módulos no encontrados
```bash
npm install
```

### Página en blanco
- Abre DevTools (F12)
- Verifica errores en consola
- Confirma que `.env` existe y tiene el token

## 🎨 Personalización

### Cambiar colores
Edita `src/index.css`:
```css
:root {
  --primary-color: #e50914;      /* Color principal */
  --background-color: #141414;   /* Fondo */
  --text-color: #ffffff;         /* Texto */
}
```

### Cambiar idioma de la API
Edita `src/infrastructure/api/tmdbClient.js`:
```javascript
url.searchParams.append('language', 'en-US'); // Cambiar a 'en-US', 'fr-FR', etc.
```

## 🤝 Contribuir

Las contribuciones son bienvenidas:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -m 'feat: nueva funcionalidad'`)
4. Push (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

Ver [CONTRIBUTING.md](./CONTRIBUTING.md) para más detalles.

## 📄 Licencia

MIT

## 🎉 Agradecimientos

- [TMDB](https://www.themoviedb.org/) por proporcionar la API
- Comunidad de React por las herramientas y librerías

## 📧 Contacto

Para preguntas o sugerencias, abre un issue en GitHub.

---

**Desarrollado con ❤️ usando React y TMDB API**
