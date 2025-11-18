# 📝 Changelog

## [1.0.0] - 2024-11-17

### ✨ Initial Features

#### Core Functionalities
- ✅ Real-time search with debounce (300ms)
- ✅ Advanced combinable filters (genre, year, rating, language)
- ✅ Favorites system with LocalStorage
- ✅ Random movie match
- ✅ Pagination with incremental loading
- ✅ Movie details modal
- ✅ Navigation between views

#### Architecture
- ✅ Hexagonal architecture implemented
- ✅ Layer separation (Domain, Application, Infrastructure, Presentation)
- ✅ Dependency injection
- ✅ Basic unit tests

#### UI/UX
- ✅ Mobile-first responsive design
- ✅ Loading and error states
- ✅ Empty state messages
- ✅ Smooth transitions
- ✅ Styled Components for styling

#### API Integration
- ✅ **Bearer Token Authentication (Read Access Token)**
- ✅ TMDB client with authorization headers
- ✅ API error handling
- ✅ Spanish language support

### 🔧 Configuration

#### Environment Variables
```env
VITE_TMDB_ACCESS_TOKEN=      # Read Access Token (JWT)
VITE_TMDB_BASE_URL=          # https://api.themoviedb.org/3
VITE_TMDB_IMAGE_BASE_URL=    # https://image.tmdb.org/t/p
```

### 📚 Documentation
- ✅ Complete README.md
- ✅ LEEME.md (Spanish version)
- ✅ SETUP.md with configuration guide
- ✅ QUICK_START.md for quick start
- ✅ FEATURES.md with detailed features
- ✅ ARCHITECTURE.md explaining architecture
- ✅ CONTRIBUTING.md for contributors
- ✅ PROJECT_SUMMARY.md with project summary
- ✅ INSTALL.txt with visual instructions
- ✅ English versions of all documentation

### 🛠️ Tech Stack
- React 18.3.1
- Vite 5.4.0
- Styled Components 6.1.12
- React Router DOM 6.26.0
- Vitest 2.0.5
- Testing Library 16.0.0

### 📝 Important Notes

#### TMDB Authentication
This project uses TMDB's **Read Access Token** (Bearer token) instead of API Key v3.

**Advantages:**
- ✅ Better security
- ✅ Access to more endpoints
- ✅ Recommended method by TMDB
- ✅ Doesn't require passing key in URL

**How to get the token:**
1. Go to https://www.themoviedb.org/settings/api
2. Copy the "Read Access Token" (starts with "eyJ...")
3. Add it to the `.env` file

#### Token Structure
The token is a JWT (JSON Web Token) that contains:
- Application identifier
- Read permissions
- Expiration date
- Security signature

### 🔄 Migration from API Key v3

If you had a previous version with API Key:

**Before:**
```javascript
url.searchParams.append('api_key', API_KEY);
```

**Now:**
```javascript
headers: {
  'Authorization': `Bearer ${ACCESS_TOKEN}`,
}
```

### 🚀 Potential Future Improvements

- [ ] User authentication with TMDB
- [ ] Custom lists
- [ ] Share favorites
- [ ] Personalized recommendations
- [ ] Dark/light mode
- [ ] Internationalization (i18n)
- [ ] PWA (Progressive Web App)
- [ ] Infinite scroll
- [ ] Data caching
- [ ] YouTube trailers
- [ ] Social network integration

### 🐛 Known Issues

None reported so far.

### 🤝 Contributions

See [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution guide.

---

**Version format:** [MAJOR.MINOR.PATCH]
- MAJOR: Breaking changes
- MINOR: New compatible features
- PATCH: Bug fixes
