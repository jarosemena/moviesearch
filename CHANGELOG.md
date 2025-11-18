# 📝 Changelog

## [1.0.0] - 2024-11-17

### ✨ Características Iniciales

#### Funcionalidades Core
- ✅ Búsqueda en tiempo real con debounce (300ms)
- ✅ Filtros avanzados combinables (género, año, rating, idioma)
- ✅ Sistema de favoritos con LocalStorage
- ✅ Match aleatorio de películas
- ✅ Paginación con carga incremental
- ✅ Modal de detalles de película
- ✅ Navegación entre vistas

#### Arquitectura
- ✅ Arquitectura hexagonal implementada
- ✅ Separación en capas (Domain, Application, Infrastructure, Presentation)
- ✅ Inyección de dependencias
- ✅ Tests unitarios básicos

#### UI/UX
- ✅ Diseño responsive mobile-first
- ✅ Estados de carga y error
- ✅ Mensajes para estados vacíos
- ✅ Transiciones suaves
- ✅ Styled Components para estilos

#### Integración API
- ✅ **Autenticación con Bearer Token (Read Access Token)**
- ✅ Cliente TMDB con headers de autorización
- ✅ Manejo de errores de API
- ✅ Soporte para idioma español

### 🔧 Configuración

#### Variables de Entorno
```env
VITE_TMDB_ACCESS_TOKEN=      # Read Access Token (JWT)
VITE_TMDB_BASE_URL=          # https://api.themoviedb.org/3
VITE_TMDB_IMAGE_BASE_URL=    # https://image.tmdb.org/t/p
```

### 📚 Documentación
- ✅ README.md completo
- ✅ LEEME.md (versión en español)
- ✅ SETUP.md con guía de configuración
- ✅ QUICK_START.md para inicio rápido
- ✅ FEATURES.md con características detalladas
- ✅ ARCHITECTURE.md explicando la arquitectura
- ✅ CONTRIBUTING.md para contribuidores
- ✅ PROJECT_SUMMARY.md con resumen del proyecto
- ✅ INSTALL.txt con instrucciones visuales

### 🛠️ Stack Tecnológico
- React 18.3.1
- Vite 5.4.0
- Styled Components 6.1.12
- React Router DOM 6.26.0
- Vitest 2.0.5
- Testing Library 16.0.0

### 📝 Notas Importantes

#### Autenticación TMDB
Este proyecto usa el **Read Access Token** (Bearer token) de TMDB en lugar de la API Key v3. 

**Ventajas:**
- ✅ Mayor seguridad
- ✅ Acceso a más endpoints
- ✅ Método recomendado por TMDB
- ✅ No requiere pasar la key en la URL

**Cómo obtener el token:**
1. Ve a https://www.themoviedb.org/settings/api
2. Copia el "Read Access Token" (comienza con "eyJ...")
3. Agrégalo al archivo `.env`

#### Estructura del Token
El token es un JWT (JSON Web Token) que contiene:
- Identificador de la aplicación
- Permisos de lectura
- Fecha de expiración
- Firma de seguridad

### 🔄 Migración desde API Key v3

Si tenías una versión anterior con API Key:

**Antes:**
```javascript
url.searchParams.append('api_key', API_KEY);
```

**Ahora:**
```javascript
headers: {
  'Authorization': `Bearer ${ACCESS_TOKEN}`,
}
```

### 🚀 Próximas Mejoras Potenciales

- [ ] Autenticación de usuario con TMDB
- [ ] Listas personalizadas
- [ ] Compartir favoritos
- [ ] Recomendaciones personalizadas
- [ ] Modo oscuro/claro
- [ ] Internacionalización (i18n)
- [ ] PWA (Progressive Web App)
- [ ] Infinite scroll
- [ ] Caché de datos
- [ ] Trailers de YouTube
- [ ] Integración con redes sociales

### 🐛 Problemas Conocidos

Ninguno reportado hasta el momento.

### 🤝 Contribuciones

Ver [CONTRIBUTING.md](./CONTRIBUTING.md) para guía de contribución.

---

**Formato de versiones:** [MAJOR.MINOR.PATCH]
- MAJOR: Cambios incompatibles con versiones anteriores
- MINOR: Nuevas funcionalidades compatibles
- PATCH: Correcciones de bugs
