# ⚡ Inicio Rápido - Movie Explorer

## 🚀 En 3 Pasos

### Paso 1: Instalar
```bash
npm install
```

### Paso 2: Configurar Access Token
1. Abre el archivo `.env`
2. Reemplaza `VITE_TMDB_ACCESS_TOKEN=` con tu Access Token de TMDB
3. Guarda el archivo

**¿No tienes Access Token?** → [Obtener Access Token de TMDB](https://www.themoviedb.org/settings/api) (es gratis)
**Nota:** Usa el "Read Access Token" (JWT), no la API Key v3

### Paso 3: Ejecutar
```bash
npm run dev
```

**¡Listo!** Abre tu navegador en `http://localhost:5173`

---

## 🎬 Primeros Pasos en la App

### 1️⃣ Explorar Películas Populares
Al abrir la app verás las películas más populares del momento.

### 2️⃣ Buscar una Película
Escribe en la barra de búsqueda (ej: "Matrix") y espera 300ms para ver resultados.

### 3️⃣ Aplicar Filtros
1. Haz clic en "▶ Filtros"
2. Selecciona géneros, años, rating, etc.
3. Los resultados se actualizan automáticamente

### 4️⃣ Agregar a Favoritos
Haz clic en el corazón 🤍 de cualquier película para guardarla.

### 5️⃣ Ver Favoritos
Haz clic en "❤️ Favoritas" en el menú superior.

### 6️⃣ Match Aleatorio
Haz clic en "🎲 No sé qué ver" para obtener una sugerencia.

---

## 🎯 Ejemplos de Uso

### Buscar películas de acción recientes
```
1. Click en "▶ Filtros"
2. Selecciona género "Acción"
3. Establece año desde: 2020
4. Ordena por: "Más recientes"
```

### Encontrar películas bien valoradas
```
1. Click en "▶ Filtros"
2. Mueve el slider de rating a 8.0
3. Ordena por: "Mejor valoradas"
```

### Crear tu lista de películas
```
1. Navega por las películas
2. Click en 🤍 para agregar a favoritos
3. Click en "❤️ Favoritas" para ver tu lista
```

---

## 🆘 Solución de Problemas

### ❌ Error: "TMDB API Error: 401"
**Solución:** Tu Access Token no está configurado correctamente.
1. Verifica que el archivo `.env` existe
2. Verifica que `VITE_TMDB_ACCESS_TOKEN` tiene tu Access Token completo
3. Asegúrate de usar el "Read Access Token" (JWT), no la API Key v3
4. Reinicia el servidor (`Ctrl+C` y luego `npm run dev`)

### ❌ Las imágenes no cargan
**Solución:** Verifica las variables de entorno en `.env`:
```env
VITE_TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p
```

### ❌ Página en blanco
**Solución:** 
1. Abre la consola del navegador (F12)
2. Busca errores en rojo
3. Verifica que todas las dependencias estén instaladas: `npm install`

### ❌ "Cannot find module"
**Solución:** Reinstala las dependencias:
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 📱 Atajos de Teclado

| Acción | Atajo |
|--------|-------|
| Abrir DevTools | `F12` |
| Recargar página | `Ctrl+R` / `Cmd+R` |
| Limpiar caché | `Ctrl+Shift+R` / `Cmd+Shift+R` |

---

## 🎨 Personalización Rápida

### Cambiar colores
Edita `src/index.css`:
```css
:root {
  --primary-color: #e50914;  /* Color principal */
  --background-color: #141414;  /* Fondo */
}
```

### Cambiar idioma de la API
Edita `src/infrastructure/api/tmdbClient.js`:
```javascript
url.searchParams.append('language', 'en-US'); // Cambiar a 'en-US', 'fr-FR', etc.
```

---

## 📚 Más Información

- **Documentación completa:** [README.md](./README.md)
- **Guía de instalación:** [SETUP.md](./SETUP.md)
- **Características:** [FEATURES.md](./FEATURES.md)
- **Arquitectura:** [ARCHITECTURE.md](./ARCHITECTURE.md)
- **Contribuir:** [CONTRIBUTING.md](./CONTRIBUTING.md)

---

## 💡 Tips

✅ **Usa filtros combinados** para búsquedas más precisas
✅ **Agrega a favoritos** las películas que quieres ver después
✅ **Prueba el match aleatorio** cuando no sepas qué ver
✅ **Carga más películas** con el botón al final de la página
✅ **Haz clic en las tarjetas** para ver detalles completos

---

## 🎉 ¡Disfruta explorando películas!

Si tienes problemas, consulta la documentación o abre un issue en GitHub.
