# 🎬 Movie Explorer - React App with TMDB API

> Modern React application to discover movies using TMDB API. Implements hexagonal architecture with advanced search, filtering and favorites management features.

[Versión en Español](./README.md) | [Complete Documentation](./PROJECT_SUMMARY_EN.md)

## ✨ Main Features

### 🔍 Search and Filtering
- ✅ Real-time search with debounce (300ms)
- ✅ Combinable filters: genre, year, rating, language
- ✅ Multiple sorting (popularity, rating, date)
- ✅ Pagination with incremental loading

### ❤️ Favorites System
- ✅ Add/remove movies with one click
- ✅ LocalStorage persistence
- ✅ Dedicated favorites view
- ✅ Sync across the entire app

### 🎲 Random Match
- ✅ Random movie suggestion
- ✅ Excludes watched/favorite movies
- ✅ Complete details in modal

### 🎨 User Experience
- ✅ Mobile-first responsive design
- ✅ Loading and error states
- ✅ Empty state messages
- ✅ Smooth transitions

## 🏗️ Architecture

Implements **Hexagonal Architecture** with layer separation:

```
src/
├── domain/              # Entities and contracts
│   ├── models/         # Movie, Genre
│   └── repositories/   # Interfaces
├── application/         # Use cases
│   └── useCases/       # GetMovies, Search, Favorites, Random
├── infrastructure/      # Implementations
│   ├── api/           # TMDB Client
│   └── repositories/  # TMDB, LocalStorage
└── presentation/        # React Components
    ├── components/    # UI Components
    ├── pages/        # Home, Favorites
    ├── context/      # AppContext
    └── hooks/        # useDebounce
```

## 🚀 Quick Installation

### 1. Install dependencies
```bash
npm install
```

### 2. Configure Access Token
1. Get your Access Token (Read Access Token) at [TMDB](https://www.themoviedb.org/settings/api)
2. Edit the `.env` file:

```env
VITE_TMDB_ACCESS_TOKEN=your_access_token_here
VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
VITE_TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p
```

**⚠️ Important:** Use the "Read Access Token" (JWT starting with "eyJ..."), NOT the API Key v3

### 3. Verify connection (Optional)
```bash
node test-api.js
```

### 4. Run
```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

## 📚 Documentation

| File | Description |
|------|-------------|
| [QUICK_START_EN.md](./QUICK_START_EN.md) | Quick start guide |
| [SETUP_EN.md](./SETUP_EN.md) | Detailed setup |
| [FEATURES_EN.md](./FEATURES_EN.md) | Detailed features |
| [ARCHITECTURE_EN.md](./ARCHITECTURE_EN.md) | Architecture explanation |
| [CONTRIBUTING_EN.md](./CONTRIBUTING_EN.md) | Contributing guide |
| [API_AUTHENTICATION_EN.md](./API_AUTHENTICATION_EN.md) | TMDB Authentication |
| [PROJECT_SUMMARY_EN.md](./PROJECT_SUMMARY_EN.md) | Project summary |

## 🎯 Usage

### Search and Filtering
1. Type in the search bar to find movies
2. Use filters to refine results:
   - Select genres (multiple)
   - Define year range (1990-2024)
   - Set minimum rating (0-10)
   - Filter by original language
   - Sort by popularity, rating or date

### Favorites
- Click 🤍 to add to favorites
- Click ❤️ to remove from favorites
- Access "❤️ Favorites" in the menu to see your list

### Random Match
- Click "🎲 I don't know what to watch" to get a suggestion
- System excludes already watched and favorite movies

### Details
- Click on any movie to see complete details
- View backdrop, synopsis and metadata
- Manage favorites from the modal

## 🛠️ Tech Stack

- **React 18.3.1** - UI Library
- **Vite 5.4.0** - Build tool and dev server
- **Styled Components 6.1.12** - CSS-in-JS styling
- **React Router 6.26.0** - Navigation
- **Vitest 2.0.5** - Testing framework
- **Testing Library 16.0.0** - Testing utilities
- **TMDB API v3** - Movie data source

## 📱 Responsive

Optimized for:
- 📱 Mobile (< 768px) - 2 column grid
- 💻 Tablets and Desktop (≥ 768px) - 3-6 column grid

## 🧪 Testing

```bash
npm test              # Run tests
npm test -- --watch   # Watch mode
npm test -- --coverage # With coverage (99.4%)
```

**Coverage:** 99.4% statements | 94.87% branches | 100% functions | 99.4% lines

## 🎯 Available Commands

```bash
npm run dev      # Development server
npm run build    # Production build
npm run preview  # Preview build
npm test         # Run tests
```

## 🆘 Common Issues

### API Error 401
- Verify your Access Token is in `.env`
- Make sure to use the "Read Access Token" (JWT)
- Restart server with `Ctrl+C` and `npm run dev`

### Modules not found
```bash
npm install
```

### Blank page
- Open DevTools (F12)
- Check console for errors
- Confirm `.env` exists and has the token

## 🎨 Customization

### Change colors
Edit `src/index.css`:
```css
:root {
  --primary-color: #e50914;      /* Primary color */
  --background-color: #141414;   /* Background */
  --text-color: #ffffff;         /* Text */
}
```

### Change API language
Edit `src/infrastructure/api/tmdbClient.js`:
```javascript
url.searchParams.append('language', 'en-US'); // Change to 'en-US', 'fr-FR', etc.
```

## 🤝 Contributing

Contributions are welcome:

1. Fork the project
2. Create a branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -m 'feat: new feature'`)
4. Push (`git push origin feature/new-feature`)
5. Open a Pull Request

See [CONTRIBUTING_EN.md](./CONTRIBUTING_EN.md) for more details.

## 📄 License

MIT

## 🎉 Acknowledgments

- [TMDB](https://www.themoviedb.org/) for providing the API
- React community for tools and libraries

## 📧 Contact

For questions or suggestions, open an issue on GitHub.

---

**Developed with ❤️ using React and TMDB API**
