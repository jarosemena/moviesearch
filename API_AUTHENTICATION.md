# 🔐 Autenticación con TMDB API

## Método de Autenticación

Este proyecto usa **Bearer Token Authentication** (Read Access Token) en lugar de la API Key v3.

## ¿Por qué Bearer Token?

### Ventajas sobre API Key v3

| Característica | API Key v3 | Bearer Token |
|----------------|------------|--------------|
| **Seguridad** | Baja (en URL) | Alta (en headers) |
| **Método** | Query parameter | Authorization header |
| **Acceso** | Limitado | Completo |
| **Recomendado** | ❌ Obsoleto | ✅ Actual |
| **Funcionalidad** | Básica | Avanzada |

### Beneficios Específicos

1. **Mayor Seguridad**
   - El token no aparece en la URL
   - No queda registrado en logs del servidor
   - Más difícil de interceptar

2. **Mejor Funcionalidad**
   - Acceso a endpoints v4
   - Soporte para autenticación de usuario
   - Permisos granulares

3. **Estándar de la Industria**
   - OAuth 2.0 compatible
   - JWT (JSON Web Token)
   - Ampliamente soportado

## Implementación

### Configuración

```env
# .env
VITE_TMDB_ACCESS_TOKEN=eyJhbGciOiJIUzI1NiJ9...
VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
VITE_TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p
```

### Cliente HTTP

```javascript
// src/infrastructure/api/tmdbClient.js

const ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

export class TMDBClient {
  async get(endpoint, params = {}) {
    const url = new URL(`${BASE_URL}${endpoint}`);
    
    // Agregar parámetros de query
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        url.searchParams.append(key, value);
      }
    });

    // Hacer petición con Bearer token
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`TMDB API Error: ${response.status}`);
    }

    return response.json();
  }
}
```

### Ejemplo de Uso

```javascript
// Obtener películas populares
const client = new TMDBClient();
const movies = await client.get('/movie/popular', { page: 1 });

// Buscar películas
const results = await client.get('/search/movie', { query: 'Matrix' });

// Obtener detalles de película
const movie = await client.get('/movie/11');
```

## Obtener tu Access Token

### Paso a Paso

1. **Crear cuenta en TMDB**
   - Ve a https://www.themoviedb.org/
   - Regístrate o inicia sesión

2. **Acceder a configuración de API**
   - Ve a tu perfil → Configuración
   - Selecciona "API" en el menú lateral

3. **Copiar Read Access Token**
   - Busca la sección "API Read Access Token (v4 auth)"
   - Copia el token completo (comienza con "eyJ...")
   - **NO copies** la API Key (v3 auth)

4. **Configurar en el proyecto**
   - Pega el token en el archivo `.env`
   - Reinicia el servidor de desarrollo

### Verificación Visual

```
✅ Correcto (Read Access Token):
eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OWZjOTlhNTQ3NjYyMDdkMjFjZjU3YzQ4ZGRjOTM2MCIsIm5iZiI6MTc2MzQzMzEzOS40MzM5OTk4LCJzdWIiOiI2OTFiZGFiM2QxMWNiOGRlY2JjN2QxZjYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Uj-SFEvgADnZClHP2pJv9akkq9tQvrnGQobETr6c5nQ

❌ Incorrecto (API Key v3):
49fc99a54766207d21cf57c48ddc9360
```

## Estructura del Token

El Read Access Token es un JWT con tres partes:

```
eyJhbGciOiJIUzI1NiJ9           # Header (algoritmo)
.
eyJhdWQiOiI0OWZjOTlhNTQ3...    # Payload (datos)
.
Uj-SFEvgADnZClHP2pJv9akkq...   # Signature (firma)
```

### Contenido del Payload

```json
{
  "aud": "49fc99a54766207d21cf57c48ddc9360",  // API Key
  "sub": "691bdab3d11cb8decbc7d1f6",          // User ID
  "scopes": ["api_read"],                     // Permisos
  "version": 1                                // Versión
}
```

## Prueba de Conexión

### Script de Verificación

```bash
# Ejecutar test de API
node test-api.js
```

Este script verifica:
- ✅ Conexión con TMDB
- ✅ Autenticación correcta
- ✅ Acceso a endpoints
- ✅ Respuestas válidas

### Ejemplo de Salida

```
🔍 Probando conexión con TMDB API...

Test 1: Obtener detalles de película (ID: 11)
✅ Éxito!
   Película: Star Wars
   Rating: 8.2/10
   Año: 1977

Test 2: Obtener películas populares
✅ Éxito!
   Total de películas: 10000
   Primera película: Venom: El último baile

Test 3: Obtener lista de géneros
✅ Éxito!
   Géneros disponibles: 19
   Ejemplos: Acción, Aventura, Animación

🎉 ¡Todas las pruebas pasaron exitosamente!
```

## Solución de Problemas

### Error 401: Unauthorized

**Causa:** Token inválido o no configurado

**Solución:**
1. Verifica que el token esté en `.env`
2. Asegúrate de copiar el token completo
3. Usa el "Read Access Token", no la API Key
4. Reinicia el servidor (`Ctrl+C` y `npm run dev`)

### Error 404: Not Found

**Causa:** Endpoint incorrecto

**Solución:**
1. Verifica la URL base: `https://api.themoviedb.org/3`
2. Comprueba que el endpoint sea correcto
3. Consulta la documentación de TMDB

### Error de CORS

**Causa:** Petición desde navegador sin configuración

**Solución:**
- TMDB permite CORS por defecto
- Verifica que uses HTTPS en producción
- Comprueba la configuración de Vite

## Seguridad

### Buenas Prácticas

✅ **Hacer:**
- Guardar el token en variables de entorno
- Usar `.gitignore` para `.env`
- Rotar el token periódicamente
- Usar HTTPS en producción

❌ **No hacer:**
- Commitear el token en Git
- Compartir el token públicamente
- Usar el token en código del cliente
- Exponer el token en URLs

### Protección del Token

```gitignore
# .gitignore
.env
.env.local
.env.production
```

```env
# .env.example (para compartir)
VITE_TMDB_ACCESS_TOKEN=tu_access_token_aqui
```

## Migración desde API Key

Si tienes código antiguo con API Key:

### Antes (API Key v3)

```javascript
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
const response = await fetch(url);
```

### Después (Bearer Token)

```javascript
const url = 'https://api.themoviedb.org/3/movie/popular';
const response = await fetch(url, {
  headers: {
    'Authorization': `Bearer ${ACCESS_TOKEN}`,
  },
});
```

## Referencias

- [TMDB API Documentation](https://developers.themoviedb.org/3)
- [TMDB Authentication](https://developers.themoviedb.org/3/authentication)
- [JWT.io](https://jwt.io/) - Decodificar tokens
- [OAuth 2.0](https://oauth.net/2/) - Estándar de autenticación

## Preguntas Frecuentes

### ¿El token expira?

No, el Read Access Token no expira a menos que lo regeneres manualmente.

### ¿Puedo usar API Key v3?

Sí, pero no es recomendado. El Bearer Token es más seguro y funcional.

### ¿Necesito pagar por el token?

No, el Read Access Token es completamente gratuito.

### ¿Puedo usar el mismo token en múltiples proyectos?

Sí, pero es mejor crear un token por proyecto para mejor control.

### ¿Qué hago si mi token se compromete?

1. Ve a https://www.themoviedb.org/settings/api
2. Regenera tu token
3. Actualiza el archivo `.env`
4. Reinicia la aplicación

---

**Última actualización:** 2024-11-17
