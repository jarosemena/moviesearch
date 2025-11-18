# ✨ Detailed Features

## 🔍 Real-Time Search

### How it Works
- Search with **300ms debounce** to optimize requests
- Search as you type without pressing Enter
- Quick clear with the ✕ button

### Usage Example
```
1. Type "matrix" in the search bar
2. Wait 300ms
3. Results appear automatically
4. Click ✕ to clear and return to popular movies
```

## 🎛️ Advanced Filters

### Sorting
- **Most popular** - By descending popularity
- **Best rated** - By descending rating
- **Most recent** - By descending release date
- **Oldest** - By ascending release date

### Genre Filter
- Multiple genre selection
- Genres are combined with AND (movie must have all selected genres)
- Available genres: Action, Adventure, Animation, Comedy, Crime, Documentary, Drama, Family, Fantasy, History, Horror, Music, Mystery, Romance, Science Fiction, TV Movie, Thriller, War, Western

### Year Filter
- Customizable range from 1990 to current year
- You can specify only start year, only end year, or both
- Example: 2010-2020 shows movies from that decade

### Rating Filter
- Slider from 0 to 10
- Only shows movies with at least 100 votes (to avoid unreliable ratings)
- Example: Minimum rating 8.0 shows only highly rated movies

### Language Filter
- Filter by movie's original language
- Options: All, Spanish, English, French, Italian, Japanese, Korean
- Useful for finding movies in your preferred language

## ❤️ Favorites System

### Features
- **Local persistence** - Your favorites are saved in the browser
- **Real-time sync** - Changes reflect immediately
- **Visible counter** - Badge in menu shows number of favorites
- **Quick access** - Heart button on each card

### How to Use
```
Add to favorites:
1. Click the white heart 🤍 on any movie
2. The heart turns red ❤️
3. The movie is saved automatically

Remove from favorites:
1. Click the red heart ❤️
2. The heart turns white 🤍
3. The movie is removed from favorites

View favorites:
1. Click "❤️ Favorites" in the menu
2. You'll see all your saved movies
3. Click "← Back" to return
```

## 🎲 Random Match

### How it Works
- Selects a random movie from the most popular
- **Automatically excludes:**
  - Movies already in your favorites
  - Movies you've seen in the current session
- Shows complete movie details

### When to Use
- You don't know what to watch
- You want to discover something new
- You're looking for a quick recommendation

### Usage Example
```
1. Click "🎲 I don't know what to watch"
2. The system searches for a random movie
3. The modal opens with details
4. You can add it to favorites or close and search for another
```

## 📄 Pagination

### Features
- Initial load of 20 movies
- "Load more" button at the end of the list
- Incremental loading without losing previous movies
- Loading indicator while fetching more results

### How it Works
```
1. Scroll to the end of the page
2. Click "Load more"
3. 20 additional movies are loaded
4. Button disappears when there are no more results
```

## 🎬 Movie Details

### Information Displayed
- **Backdrop** - High-quality background image
- **Title** - Full movie name
- **Rating** - Average score with ⭐
- **Year** - Release year with 📅
- **Language** - Original language with 🗣️
- **Synopsis** - Complete plot description
- **Favorites button** - Add/remove from favorites

### How to Access
```
1. Click on any movie card
2. A modal opens with details
3. Click outside the modal or on ✕ to close
```

## 📱 Responsive Design

### Mobile (< 768px)
- 2-column grid
- Adapted navigation
- Collapsible filters
- Full-screen modal
- Full-width buttons

### Tablet/Desktop (≥ 768px)
- 3-6 column grid (depending on width)
- Horizontal navigation
- Expandable filters
- Centered modal with overlay
- Auto-width buttons

## 🎨 UI States

### Loading
- Animated spinner
- "Loading..." text
- Button disabling during load

### Error
- Error message in red
- Problem description
- Solution suggestion

### Empty
- Movie icon 🎬
- Contextual message depending on situation:
  - "No movies found with these filters"
  - "No results found for 'search'"
  - "You don't have favorite movies yet"

## 🔄 Synchronization

### Favorites
- Favorites automatically sync between:
  - Main page
  - Favorites page
  - Details modal
  - Navigation counter

### Filters
- Filters apply immediately
- Search combines with active filters
- Clearing search maintains filters

## ⚡ Optimizations

### Performance
- Lazy loading of images
- Search debounce
- Pagination to avoid loading everything
- Component memoization

### UX
- Smooth transitions
- Immediate visual feedback
- Clear loading states
- Helpful error messages

## 🎯 Common Use Cases

### Search for a specific movie
```
1. Type the name in the search bar
2. Wait for results
3. Click on the movie to see details
```

### Discover recent action movies
```
1. Open filters
2. Select "Action" genre
3. Set year from 2020
4. Sort by "Most recent"
```

### Find highly rated movies
```
1. Open filters
2. Set minimum rating to 8.0
3. Sort by "Best rated"
```

### Create a watch list
```
1. Browse through movies
2. Add the ones you're interested in to favorites
3. Go to "❤️ Favorites" to see your list
```

### Discover something new
```
1. Click "🎲 I don't know what to watch"
2. Review the suggestion
3. Add it to favorites or search for another
```
