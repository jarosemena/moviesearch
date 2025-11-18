# ⚡ Quick Start - Movie Explorer

## 🚀 In 3 Steps

### Step 1: Install
```bash
npm install
```

### Step 2: Configure Access Token
1. Open the `.env` file
2. Replace `VITE_TMDB_ACCESS_TOKEN=` with your TMDB Access Token
3. Save the file

**Don't have an Access Token?** → [Get TMDB Access Token](https://www.themoviedb.org/settings/api) (it's free)

### Step 3: Run
```bash
npm run dev
```

**Done!** Open your browser at `http://localhost:5173`

---

## 🎬 First Steps in the App

### 1️⃣ Explore Popular Movies
When you open the app, you'll see the most popular movies of the moment.

### 2️⃣ Search for a Movie
Type in the search bar (e.g., "Matrix") and wait 300ms to see results.

### 3️⃣ Apply Filters
1. Click on "▶ Filters"
2. Select genres, years, rating, etc.
3. Results update automatically

### 4️⃣ Add to Favorites
Click the 🤍 heart on any movie to save it.

### 5️⃣ View Favorites
Click on "❤️ Favorites" in the top menu.

### 6️⃣ Random Match
Click on "🎲 I don't know what to watch" to get a suggestion.

---

## 🎯 Usage Examples

### Search for recent action movies
```
1. Click on "▶ Filters"
2. Select "Action" genre
3. Set year from: 2020
4. Sort by: "Most recent"
```

### Find highly rated movies
```
1. Click on "▶ Filters"
2. Move rating slider to 8.0
3. Sort by: "Best rated"
```

### Create your movie list
```
1. Browse through movies
2. Click 🤍 to add to favorites
3. Click "❤️ Favorites" to see your list
```

---

## 🆘 Troubleshooting

### ❌ Error: "TMDB API Error: 401"
**Solution:** Your Access Token is not configured correctly.
1. Verify that the `.env` file exists
2. Verify that `VITE_TMDB_ACCESS_TOKEN` has your complete Access Token
3. Make sure to use the "Read Access Token" (JWT), not the API Key v3
4. Restart the server (`Ctrl+C` then `npm run dev`)

### ❌ Images not loading
**Solution:** Verify environment variables in `.env`:
```env
VITE_TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p
```

### ❌ Blank page
**Solution:** 
1. Open browser console (F12)
2. Look for errors in red
3. Verify all dependencies are installed: `npm install`

### ❌ "Cannot find module"
**Solution:** Reinstall dependencies:
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 📱 Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Open DevTools | `F12` |
| Reload page | `Ctrl+R` / `Cmd+R` |
| Clear cache | `Ctrl+Shift+R` / `Cmd+Shift+R` |

---

## 🎨 Quick Customization

### Change colors
Edit `src/index.css`:
```css
:root {
  --primary-color: #e50914;  /* Primary color */
  --background-color: #141414;  /* Background */
}
```

### Change API language
Edit `src/infrastructure/api/tmdbClient.js`:
```javascript
url.searchParams.append('language', 'en-US'); // Change to 'en-US', 'fr-FR', etc.
```

---

## 📚 More Information

- **Complete documentation:** [README.md](./README.md)
- **Installation guide:** [SETUP_EN.md](./SETUP_EN.md)
- **Features:** [FEATURES_EN.md](./FEATURES_EN.md)
- **Architecture:** [ARCHITECTURE_EN.md](./ARCHITECTURE_EN.md)
- **Contributing:** [CONTRIBUTING_EN.md](./CONTRIBUTING_EN.md)

---

## 💡 Tips

✅ **Use combined filters** for more precise searches
✅ **Add to favorites** movies you want to watch later
✅ **Try random match** when you don't know what to watch
✅ **Load more movies** with the button at the end of the page
✅ **Click on cards** to see complete details

---

## 🎉 Enjoy exploring movies!

If you have problems, check the documentation or open an issue on GitHub.
