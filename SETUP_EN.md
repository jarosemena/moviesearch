# 🚀 Quick Setup Guide

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Get TMDB Access Token

1. Go to [TMDB](https://www.themoviedb.org/)
2. Create an account or sign in
3. Go to **Settings** → **API**
4. Copy your **Read Access Token** (v4 auth)
5. The token starts with "eyJ..." and is a JWT

## Step 3: Configure Environment Variables

Open the `.env` file in the project root and add your Access Token:

```env
VITE_TMDB_ACCESS_TOKEN=your_access_token_here
VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
VITE_TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p
```

**⚠️ IMPORTANT:** 
- Replace `your_access_token_here` with your actual TMDB Access Token
- Use the "Read Access Token", NOT the API Key v3
- The token is a long JWT that starts with "eyJ..."

## Step 4: Start the Application

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Verification

If everything is configured correctly, you should see:
- ✅ Popular movies on the main page
- ✅ Working search bar
- ✅ Available filters
- ✅ "I don't know what to watch" button

## Common Issues

### Error: "TMDB API Error: 401"
- **Cause:** Invalid or unconfigured Access Token
- **Solution:** Verify that your Access Token is correctly copied in the `.env` file
- **Note:** Make sure to use the "Read Access Token" (JWT), not the API Key v3

### Error: "Cannot find module"
- **Cause:** Dependencies not installed
- **Solution:** Run `npm install` again

### Blank page
- **Cause:** Vite configuration error
- **Solution:** Verify that the `.env` file is in the project root

### Images not loading
- **Cause:** Incorrect environment variables
- **Solution:** Verify that `VITE_TMDB_IMAGE_BASE_URL` is configured correctly

## Useful Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Preview build
npm run preview

# Run tests
npm test

# Clean node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## Next Step

Once the application is running, check the [README.md](./README.md) to learn about all available features.
