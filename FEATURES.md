# ✨ Características Detalladas

## 🔍 Búsqueda en Tiempo Real

### Funcionamiento
- Búsqueda con **debounce de 300ms** para optimizar peticiones
- Búsqueda mientras escribes sin necesidad de presionar Enter
- Limpieza rápida con el botón ✕

### Ejemplo de Uso
```
1. Escribe "matrix" en la barra de búsqueda
2. Espera 300ms
3. Los resultados aparecen automáticamente
4. Haz clic en ✕ para limpiar y volver a películas populares
```

## 🎛️ Filtros Avanzados

### Ordenamiento
- **Más populares** - Por popularidad descendente
- **Mejor valoradas** - Por rating descendente
- **Más recientes** - Por fecha de lanzamiento descendente
- **Más antiguas** - Por fecha de lanzamiento ascendente

### Filtro por Género
- Selección múltiple de géneros
- Los géneros se combinan con AND (película debe tener todos los géneros seleccionados)
- Géneros disponibles: Acción, Aventura, Animación, Comedia, Crimen, Documental, Drama, Familia, Fantasía, Historia, Terror, Música, Misterio, Romance, Ciencia Ficción, Película de TV, Suspense, Bélica, Western

### Filtro por Año
- Rango personalizable desde 1990 hasta el año actual
- Puedes especificar solo año inicial, solo año final, o ambos
- Ejemplo: 2010-2020 muestra películas de esa década

### Filtro por Rating
- Slider de 0 a 10
- Solo muestra películas con al menos 100 votos (para evitar ratings poco confiables)
- Ejemplo: Rating mínimo 8.0 muestra solo películas muy bien valoradas

### Filtro por Idioma
- Filtra por idioma original de la película
- Opciones: Todos, Español, Inglés, Francés, Italiano, Japonés, Coreano
- Útil para encontrar películas en tu idioma preferido

## ❤️ Sistema de Favoritos

### Características
- **Persistencia local** - Tus favoritos se guardan en el navegador
- **Sincronización en tiempo real** - Los cambios se reflejan inmediatamente
- **Contador visible** - Badge en el menú muestra cantidad de favoritos
- **Acceso rápido** - Botón de corazón en cada tarjeta

### Cómo Usar
```
Agregar a favoritos:
1. Haz clic en el corazón blanco 🤍 de cualquier película
2. El corazón se vuelve rojo ❤️
3. La película se guarda automáticamente

Quitar de favoritos:
1. Haz clic en el corazón rojo ❤️
2. El corazón se vuelve blanco 🤍
3. La película se elimina de favoritos

Ver favoritos:
1. Haz clic en "❤️ Favoritas" en el menú
2. Verás todas tus películas guardadas
3. Haz clic en "← Volver" para regresar
```

## 🎲 Match Aleatorio

### Funcionamiento
- Selecciona una película aleatoria de las más populares
- **Excluye automáticamente:**
  - Películas que ya están en tus favoritos
  - Películas que ya has visto en la sesión actual
- Muestra el detalle completo de la película sugerida

### Cuándo Usar
- No sabes qué ver
- Quieres descubrir algo nuevo
- Buscas una recomendación rápida

### Ejemplo de Uso
```
1. Haz clic en "🎲 No sé qué ver"
2. El sistema busca una película aleatoria
3. Se abre el modal con los detalles
4. Puedes agregarla a favoritos o cerrar y buscar otra
```

## 📄 Paginación

### Características
- Carga inicial de 20 películas
- Botón "Cargar más" al final de la lista
- Carga incremental sin perder las películas anteriores
- Indicador de carga mientras se obtienen más resultados

### Funcionamiento
```
1. Scroll hasta el final de la página
2. Haz clic en "Cargar más"
3. Se cargan 20 películas adicionales
4. El botón desaparece cuando no hay más resultados
```

## 🎬 Detalles de Película

### Información Mostrada
- **Backdrop** - Imagen de fondo de alta calidad
- **Título** - Nombre completo de la película
- **Rating** - Puntuación promedio con ⭐
- **Año** - Año de lanzamiento con 📅
- **Idioma** - Idioma original con 🗣️
- **Sinopsis** - Descripción completa de la trama
- **Botón de favoritos** - Agregar/quitar de favoritos

### Cómo Acceder
```
1. Haz clic en cualquier tarjeta de película
2. Se abre un modal con los detalles
3. Haz clic fuera del modal o en ✕ para cerrar
```

## 📱 Diseño Responsive

### Mobile (< 768px)
- Grid de 2 columnas
- Navegación adaptada
- Filtros colapsables
- Modal a pantalla completa
- Botones de ancho completo

### Tablet/Desktop (≥ 768px)
- Grid de 3-6 columnas (según ancho)
- Navegación horizontal
- Filtros expandibles
- Modal centrado con overlay
- Botones de ancho automático

## 🎨 Estados de UI

### Carga
- Spinner animado
- Texto "Cargando..."
- Deshabilitación de botones durante carga

### Error
- Mensaje de error en rojo
- Descripción del problema
- Sugerencia de solución

### Vacío
- Icono de película 🎬
- Mensaje contextual según la situación:
  - "No se encontraron películas con estos filtros"
  - "No se encontraron resultados para 'búsqueda'"
  - "No tienes películas favoritas aún"

## 🔄 Sincronización

### Favoritos
- Los favoritos se sincronizan automáticamente entre:
  - Página principal
  - Página de favoritos
  - Modal de detalles
  - Contador en navegación

### Filtros
- Los filtros se aplican inmediatamente
- La búsqueda se combina con los filtros activos
- Limpiar la búsqueda mantiene los filtros

## ⚡ Optimizaciones

### Performance
- Lazy loading de imágenes
- Debounce en búsqueda
- Paginación para evitar cargar todo
- Memoización de componentes

### UX
- Transiciones suaves
- Feedback visual inmediato
- Estados de carga claros
- Mensajes de error útiles

## 🎯 Casos de Uso Comunes

### Buscar una película específica
```
1. Escribe el nombre en la barra de búsqueda
2. Espera los resultados
3. Haz clic en la película para ver detalles
```

### Descubrir películas de acción recientes
```
1. Abre los filtros
2. Selecciona género "Acción"
3. Establece año desde 2020
4. Ordena por "Más recientes"
```

### Encontrar películas bien valoradas
```
1. Abre los filtros
2. Establece rating mínimo en 8.0
3. Ordena por "Mejor valoradas"
```

### Crear una lista de películas para ver
```
1. Navega por las películas
2. Agrega las que te interesen a favoritos
3. Ve a "❤️ Favoritas" para ver tu lista
```

### Descubrir algo nuevo
```
1. Haz clic en "🎲 No sé qué ver"
2. Revisa la sugerencia
3. Agrégala a favoritos o busca otra
```
