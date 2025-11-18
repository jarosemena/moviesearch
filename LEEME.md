# 🎬 Movie Explorer - Aplicación React con TMDB API

## 📝 Descripción

Aplicación React moderna para descubrir películas usando la API de TMDB. Implementa arquitectura hexagonal con funcionalidades avanzadas de búsqueda, filtrado y gestión de favoritos.

## ✨ Características Principales

### 🔍 Búsqueda y Filtrado
- ✅ Búsqueda en tiempo real con debounce (300ms)
- ✅ Filtros combinables: género, año, rating, idioma
- ✅ Ordenamiento múltiple
- ✅ Paginación con carga incremental

### ❤️ Sistema de Favoritos
- ✅ Agregar/remover películas
- ✅ Persistencia en LocalStorage
- ✅ Vista dedicada de favoritos
- ✅ Sincronización en toda la app

### 🎲 Match Aleatorio
- ✅ Sugerencia de película random
- ✅ Excluye películas vistas/favoritas
- ✅ Detalles completos

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
├── application/         # Casos de uso
├── infrastructure/      # Implementaciones (API, Storage)
└── presentation/        # Componentes React
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
```
**Nota:** Usa el "Read Access Token" (JWT), no la API Key v3

### 3. Ejecutar
```bash
npm run dev
```

Abre `http://localhost:5173` en tu navegador.

## 📚 Documentación

| Archivo | Descripción |
|---------|-------------|
| [README.md](./README.md) | Documentación completa en inglés |
| [QUICK_START.md](./QUICK_START.md) | Guía de inicio rápido |
| [SETUP.md](./SETUP.md) | Configuración detallada |
| [FEATURES.md](./FEATURES.md) | Características detalladas |
| [ARCHITECTURE.md](./ARCHITECTURE.md) | Explicación de arquitectura |
| [CONTRIBUTING.md](./CONTRIBUTING.md) | Guía para contribuir |
| [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md) | Resumen del proyecto |
| [INSTALL.txt](./INSTALL.txt) | Instrucciones de instalación |

## 🛠️ Stack Tecnológico

- **React 18** - Biblioteca UI
- **Vite** - Build tool
- **Styled Components** - Estilos CSS-in-JS
- **React Router** - Navegación
- **Vitest** - Testing
- **TMDB API** - Datos de películas

## 📱 Responsive

Optimizado para:
- 📱 Móviles (< 768px)
- 💻 Tablets y Desktop (≥ 768px)

## 🧪 Testing

```bash
npm test              # Ejecutar tests
npm test -- --watch   # Modo watch
npm test -- --coverage # Con cobertura
```

## 🎯 Comandos

```bash
npm run dev      # Desarrollo
npm run build    # Build producción
npm run preview  # Preview build
npm test         # Tests
```

## 🆘 Problemas Comunes

### Error 401 de API
- Verifica que tu Access Token esté en `.env`
- Asegúrate de usar el "Read Access Token" (JWT)
- Reinicia el servidor

### Módulos no encontrados
```bash
npm install
```

### Página en blanco
- Abre DevTools (F12)
- Verifica errores en consola

## 🎨 Personalización

### Cambiar colores
Edita `src/index.css`:
```css
:root {
  --primary-color: #e50914;
  --background-color: #141414;
}
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -m 'feat: nueva funcionalidad'`)
4. Push (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

Ver [CONTRIBUTING.md](./CONTRIBUTING.md) para más detalles.

## 📄 Licencia

MIT

## 🎉 ¡Disfruta!

Si tienes preguntas o problemas, abre un issue en GitHub.

---

**Desarrollado con ❤️ usando React y TMDB API**
