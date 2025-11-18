# 🔐 TMDB API Authentication

## Authentication Method

This project uses **Bearer Token Authentication** (Read Access Token) instead of API Key v3.

## Why Bearer Token?

### Advantages over API Key v3

| Feature | API Key v3 | Bearer Token |
|---------|------------|--------------|
| **Security** | Low (in URL) | High (in headers) |
| **Method** | Query parameter | Authorization header |
| **Access** | Limited | Complete |
| **Recommended** | ❌ Obsolete | ✅ Current |
| **Functionality** | Basic | Advanced |

### Specific Benefits

1. **Better Security**
   - Token doesn't appear in URL
   - Not logged in server logs
   - Harder to intercept

2. **Better Functionality**
   - Access to v4 endpoints
   - Support for user authentication
   - Granular permissions

3. **Industry Standard**
   - OAuth 2.0 compatible
   - JWT (JSON Web Token)
   - Widely supported

## Implementation

### Configuration

```env
# .env
VITE_TMDB_ACCESS_TOKEN=eyJhbGciOiJIUzI1NiJ9...
VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
VITE_TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p
```

### HTTP Client

```javascript
// src/infrastructure/api/tmdbClient.js

const ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

export class TMDBClient {
  async get(endpoint, params = {}) {
    const url = new URL(`${BASE_URL}${endpoint}`);
    
    // Add query parameters
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        url.searchParams.append(key, value);
      }
    });

    // Make request with Bearer token
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

### Usage Example

```javascript
// Get popular movies
const client = new TMDBClient();
const movies = await client.get('/movie/popular', { page: 1 });

// Search movies
const results = await client.get('/search/movie', { query: 'Matrix' });

// Get movie details
const movie = await client.get('/movie/11');
```

## Get Your Access Token

### Step by Step

1. **Create TMDB account**
   - Go to https://www.themoviedb.org/
   - Sign up or log in

2. **Access API settings**
   - Go to your profile → Settings
   - Select "API" in side menu

3. **Copy Read Access Token**
   - Look for "API Read Access Token (v4 auth)" section
   - Copy the complete token (starts with "eyJ...")
   - **DO NOT copy** the API Key (v3 auth)

4. **Configure in project**
   - Paste token in `.env` file
   - Restart development server

### Visual Verification

```
✅ Correct (Read Access Token):
eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OWZjOTlhNTQ3NjYyMDdkMjFjZjU3YzQ4ZGRjOTM2MCIsIm5iZiI6MTc2MzQzMzEzOS40MzM5OTk4LCJzdWIiOiI2OTFiZGFiM2QxMWNiOGRlY2JjN2QxZjYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Uj-SFEvgADnZClHP2pJv9akkq9tQvrnGQobETr6c5nQ

❌ Incorrect (API Key v3):
49fc99a54766207d21cf57c48ddc9360
```

## Token Structure

The Read Access Token is a JWT with three parts:

```
eyJhbGciOiJIUzI1NiJ9           # Header (algorithm)
.
eyJhdWQiOiI0OWZjOTlhNTQ3...    # Payload (data)
.
Uj-SFEvgADnZClHP2pJv9akkq...   # Signature
```

### Payload Content

```json
{
  "aud": "49fc99a54766207d21cf57c48ddc9360",  // API Key
  "sub": "691bdab3d11cb8decbc7d1f6",          // User ID
  "scopes": ["api_read"],                     // Permissions
  "version": 1                                // Version
}
```

## Connection Test

### Verification Script

```bash
# Run API test
node test-api.js
```

This script verifies:
- ✅ Connection with TMDB
- ✅ Correct authentication
- ✅ Endpoint access
- ✅ Valid responses

### Example Output

```
🔍 Testing TMDB API connection...

Test 1: Get movie details (ID: 11)
✅ Success!
   Movie: Star Wars
   Rating: 8.2/10
   Year: 1977

Test 2: Get popular movies
✅ Success!
   Total movies: 10000
   First movie: Venom: The Last Dance

Test 3: Get genre list
✅ Success!
   Available genres: 19
   Examples: Action, Adventure, Animation

🎉 All tests passed successfully!
```

## Troubleshooting

### Error 401: Unauthorized

**Cause:** Invalid or unconfigured token

**Solution:**
1. Verify token is in `.env`
2. Make sure to copy complete token
3. Use "Read Access Token", not API Key
4. Restart server (`Ctrl+C` and `npm run dev`)

### Error 404: Not Found

**Cause:** Incorrect endpoint

**Solution:**
1. Verify base URL: `https://api.themoviedb.org/3`
2. Check endpoint is correct
3. Consult TMDB documentation

### CORS Error

**Cause:** Request from browser without configuration

**Solution:**
- TMDB allows CORS by default
- Verify using HTTPS in production
- Check Vite configuration

## Security

### Best Practices

✅ **Do:**
- Save token in environment variables
- Use `.gitignore` for `.env`
- Rotate token periodically
- Use HTTPS in production

❌ **Don't:**
- Commit token in Git
- Share token publicly
- Use token in client code
- Expose token in URLs

### Token Protection

```gitignore
# .gitignore
.env
.env.local
.env.production
```

```env
# .env.example (to share)
VITE_TMDB_ACCESS_TOKEN=your_access_token_here
```

## Migration from API Key

If you have old code with API Key:

### Before (API Key v3)

```javascript
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
const response = await fetch(url);
```

### After (Bearer Token)

```javascript
const url = 'https://api.themoviedb.org/3/movie/popular';
const response = await fetch(url, {
  headers: {
    'Authorization': `Bearer ${ACCESS_TOKEN}`,
  },
});
```

## References

- [TMDB API Documentation](https://developers.themoviedb.org/3)
- [TMDB Authentication](https://developers.themoviedb.org/3/authentication)
- [JWT.io](https://jwt.io/) - Decode tokens
- [OAuth 2.0](https://oauth.net/2/) - Authentication standard

## Frequently Asked Questions

### Does the token expire?

No, the Read Access Token doesn't expire unless you manually regenerate it.

### Can I use API Key v3?

Yes, but it's not recommended. Bearer Token is more secure and functional.

### Do I need to pay for the token?

No, the Read Access Token is completely free.

### Can I use the same token in multiple projects?

Yes, but it's better to create one token per project for better control.

### What do I do if my token is compromised?

1. Go to https://www.themoviedb.org/settings/api
2. Regenerate your token
3. Update `.env` file
4. Restart application

---

**Last updated:** 2024-11-17
