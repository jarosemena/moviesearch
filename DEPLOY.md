# Guía de Deploy a GitHub Pages

## Configuración Inicial

### 1. Configurar Secrets en GitHub

Ve a tu repositorio en GitHub → Settings → Secrets and variables → Actions → New repository secret

Agrega los siguientes secrets:

```
VITE_TMDB_API_KEY=tu_api_key_aqui
VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
VITE_TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p
```

### 2. Habilitar GitHub Pages

1. Ve a Settings → Pages
2. En "Source", selecciona "GitHub Actions"
3. Guarda los cambios

## Deploy Manual

### Opción 1: Usando npm (requiere gh-pages instalado)

```bash
# Instalar dependencias si no lo has hecho
npm install

# Deploy
npm run deploy
```

### Opción 2: Usando GitHub Actions (Recomendado)

El deploy se ejecuta automáticamente cuando:
- Haces push a la rama `main` o `Featuresv1`
- O manualmente desde Actions → Deploy to GitHub Pages → Run workflow

## Deploy Automático

Cada vez que hagas push a las ramas configuradas, GitHub Actions:

1. ✅ Instala las dependencias
2. ✅ Construye la aplicación con las variables de entorno
3. ✅ Despliega a GitHub Pages

## Verificar el Deploy

Después del deploy, tu aplicación estará disponible en:

```
https://[tu-usuario].github.io/moviesearch/
```

## Troubleshooting

### Error: Variables de entorno no definidas

Asegúrate de haber configurado los secrets en GitHub (paso 1)

### Error: 404 al cargar la página

Verifica que el `base` en `vite.config.js` coincida con el nombre de tu repositorio:

```javascript
base: '/moviesearch/'
```

### Error: Permisos insuficientes

Ve a Settings → Actions → General → Workflow permissions
Selecciona "Read and write permissions"

## Comandos Útiles

```bash
# Desarrollo local
npm run dev

# Build local (para probar antes de deploy)
npm run build

# Preview del build local
npm run preview

# Tests
npm test
```

## Notas Importantes

- El archivo `.env` NO se sube a GitHub por seguridad
- Las variables de entorno se configuran como secrets en GitHub
- El workflow de GitHub Actions las inyecta durante el build
- El base path `/moviesearch/` debe coincidir con el nombre del repositorio
