# ✅ Checklist de Deployment a GitHub Pages

## Pasos para Deployar

### 1. Configurar Secrets en GitHub (IMPORTANTE)

Antes de hacer push, configura estos secrets en tu repositorio:

1. Ve a: `https://github.com/[tu-usuario]/moviesearch/settings/secrets/actions`
2. Haz clic en "New repository secret"
3. Agrega estos 3 secrets:

```
Nombre: VITE_TMDB_API_KEY
Valor: [tu API key de TMDB]

Nombre: VITE_TMDB_BASE_URL
Valor: https://api.themoviedb.org/3

Nombre: VITE_TMDB_IMAGE_BASE_URL
Valor: https://image.tmdb.org/t/p
```

### 2. Habilitar GitHub Pages

1. Ve a: `https://github.com/[tu-usuario]/moviesearch/settings/pages`
2. En "Source", selecciona: **GitHub Actions**
3. Guarda

### 3. Configurar Permisos de Workflow

1. Ve a: `https://github.com/[tu-usuario]/moviesearch/settings/actions`
2. En "Workflow permissions", selecciona: **Read and write permissions**
3. Marca: **Allow GitHub Actions to create and approve pull requests**
4. Guarda

### 4. Push a GitHub

```bash
git push origin Featuresv1
```

### 5. Verificar el Deploy

1. Ve a la pestaña "Actions" en tu repositorio
2. Verás el workflow "Deploy to GitHub Pages" ejecutándose
3. Espera a que termine (tarda ~2-3 minutos)
4. Tu app estará en: `https://[tu-usuario].github.io/moviesearch/`

## Opciones de Deploy

### Opción A: Deploy Automático (Recomendado)

Cada vez que hagas `git push` a las ramas `main` o `Featuresv1`, se desplegará automáticamente.

### Opción B: Deploy Manual desde GitHub

1. Ve a Actions → Deploy to GitHub Pages
2. Haz clic en "Run workflow"
3. Selecciona la rama
4. Haz clic en "Run workflow"

### Opción C: Deploy Manual desde tu PC

```bash
npm run deploy
```

## Verificación Post-Deploy

✅ La aplicación carga correctamente
✅ Las imágenes de películas se muestran
✅ El infinite scroll funciona
✅ El tema light/dark funciona
✅ El random match funciona
✅ La búsqueda funciona
✅ Los filtros funcionan

## Troubleshooting

### ❌ Error: "Secrets not found"
→ Configura los secrets en GitHub (Paso 1)

### ❌ Error: "Permission denied"
→ Configura los permisos del workflow (Paso 3)

### ❌ Error: "404 Not Found"
→ Verifica que GitHub Pages esté habilitado (Paso 2)

### ❌ Las imágenes no cargan
→ Verifica que los secrets estén correctamente configurados

### ❌ El workflow falla
→ Revisa los logs en la pestaña Actions

## Archivos Configurados

✅ `vite.config.js` - Base path configurado
✅ `package.json` - Scripts de deploy agregados
✅ `.github/workflows/deploy.yml` - Workflow de GitHub Actions
✅ `DEPLOY.md` - Guía detallada de deployment
✅ `gh-pages` - Dependencia instalada

## Próximos Pasos

1. ✅ Configurar secrets (Paso 1)
2. ✅ Habilitar GitHub Pages (Paso 2)
3. ✅ Configurar permisos (Paso 3)
4. ✅ Push a GitHub (Paso 4)
5. ✅ Verificar deploy (Paso 5)

## URL Final

Tu aplicación estará disponible en:
```
https://[tu-usuario].github.io/moviesearch/
```

Reemplaza `[tu-usuario]` con tu nombre de usuario de GitHub.
