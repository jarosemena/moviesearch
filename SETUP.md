# 🚀 Guía de Configuración Rápida

## Paso 1: Instalar Dependencias

```bash
npm install
```

## Paso 2: Obtener Access Token de TMDB

1. Ve a [TMDB](https://www.themoviedb.org/)
2. Crea una cuenta o inicia sesión
3. Ve a **Configuración** → **API**
4. Copia tu **Read Access Token** (v4 auth)
5. El token comienza con "eyJ..." y es un JWT

## Paso 3: Configurar Variables de Entorno

Abre el archivo `.env` en la raíz del proyecto y agrega tu Access Token:

```env
VITE_TMDB_ACCESS_TOKEN=tu_access_token_aqui
VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
VITE_TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p
```

**⚠️ IMPORTANTE:** 
- Reemplaza `tu_access_token_aqui` con tu Access Token real de TMDB
- Usa el "Read Access Token", NO la API Key v3
- El token es un JWT largo que comienza con "eyJ..."

## Paso 4: Iniciar la Aplicación

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## Verificación

Si todo está configurado correctamente, deberías ver:
- ✅ La página principal con películas populares
- ✅ La barra de búsqueda funcionando
- ✅ Los filtros disponibles
- ✅ El botón "No sé qué ver"

## Problemas Comunes

### Error: "TMDB API Error: 401"
- **Causa:** Access Token inválido o no configurado
- **Solución:** Verifica que tu Access Token esté correctamente copiado en el archivo `.env`
- **Nota:** Asegúrate de usar el "Read Access Token" (JWT), no la API Key v3

### Error: "Cannot find module"
- **Causa:** Dependencias no instaladas
- **Solución:** Ejecuta `npm install` nuevamente

### La página está en blanco
- **Causa:** Error en la configuración de Vite
- **Solución:** Verifica que el archivo `.env` esté en la raíz del proyecto

### Las imágenes no cargan
- **Causa:** Variables de entorno incorrectas
- **Solución:** Verifica que `VITE_TMDB_IMAGE_BASE_URL` esté configurada correctamente

## Comandos Útiles

```bash
# Desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview

# Ejecutar tests
npm test

# Limpiar node_modules y reinstalar
rm -rf node_modules package-lock.json
npm install
```

## Siguiente Paso

Una vez que la aplicación esté funcionando, consulta el [README.md](./README.md) para conocer todas las funcionalidades disponibles.
