# Design Document - Infinite Scroll with Lazy Loading

## Overview

This design implements infinite scroll with lazy loading for the movie list using the Intersection Observer API. The solution provides automatic content loading as users scroll, animated loading states, and maintains high performance even with large lists.

## Architecture

### Component Structure

```
Home Page
    ↓
useInfiniteScroll Hook
    ↓
Intersection Observer API
    ↓
Sentinel Element (invisible div at bottom)
    ↓
Load More Trigger
    ↓
MovieGrid with Loading Skeletons
```

### Data Flow

```
User Scrolls
    ↓
Sentinel Element Visible
    ↓
useInfiniteScroll detects intersection
    ↓
Triggers loadMore callback
    ↓
Home Page fetches next page
    ↓
MovieGrid displays skeletons
    ↓
New movies loaded
    ↓
MovieGrid animates new cards in
    ↓
Observer reconnects
```

## Components and Interfaces

### 1. useInfiniteScroll Hook

**Location:** `src/presentation/hooks/useInfiniteScroll.js`

**Purpose:** Manages Intersection Observer and triggers loading when sentinel is visible

**Interface:**
```javascript
const {
  sentinelRef,
  isIntersecting
} = useInfiniteScroll({
  onLoadMore: () => void,
  hasMore: boolean,
  isLoading: boolean,
  threshold: number = 0.5,
  rootMargin: string = '200px'
});
```

**Implementation Details:**
- Creates Intersection Observer on mount
- Observes sentinel element
- Calls `onLoadMore` when sentinel intersects viewport
- Disconnects observer when loading or no more content
- Cleans up observer on unmount
- Supports custom threshold and root margin

### 2. Updated Home Page

**Location:** `src/presentation/pages/Home/Home.jsx`

**Changes:**
- Remove LoadMoreButton component
- Add sentinel element at bottom of MovieGrid
- Use useInfiniteScroll hook
- Add scroll position restoration logic
- Handle loading states for infinite scroll

**New State:**
```javascript
const [scrollPosition, setScrollPosition] = useState(0);
const [isInitialLoad, setIsInitialLoad] = useState(true);
```

### 3. Enhanced MovieGrid Component

**Location:** `src/presentation/components/MovieGrid/MovieGrid.jsx`

**Changes:**
- Accept `loadingMore` prop for infinite scroll loading state
- Display skeleton cards at bottom when loading more
- Add fade-in animation for new movies
- Support sentinel element placement

**New Props:**
```javascript
{
  movies: Movie[],
  onMovieClick: (movie) => void,
  isLoading: boolean,
  loadingMore: boolean,  // NEW
  emptyMessage: string,
  sentinelRef: RefObject  // NEW
}
```

### 4. Loading Skeleton Grid

**Location:** `src/presentation/components/MovieGrid/LoadingSkeletonGrid.jsx`

**Purpose:** Display animated skeleton cards during loading

**Implementation:**
- Render 6 skeleton cards in grid layout
- Match MovieCard dimensions
- Use shimmer animation
- Support reduced motion

### 5. End of Results Component

**Location:** `src/presentation/components/MovieGrid/EndOfResults.jsx`

**Purpose:** Display message when all movies are loaded

**Implementation:**
```jsx
<EndOfResults>
  <Icon>🎬</Icon>
  <Message>Has visto todas las películas disponibles</Message>
  <SubMessage>Intenta ajustar los filtros para ver más resultados</SubMessage>
</EndOfResults>
```

## Data Models

### Infinite Scroll State

```typescript
interface InfiniteScrollState {
  isIntersecting: boolean;
  isLoading: boolean;
  hasMore: boolean;
  currentPage: number;
  totalPages: number;
  error: Error | null;
}
```

### Scroll Position State

```typescript
interface ScrollPositionState {
  position: number;
  timestamp: number;
  page: number;
}
```

## Error Handling

### Network Errors

**Scenario:** API request fails while loading more movies
**Handling:**
- Display error message at bottom of list
- Provide "Retry" button
- Maintain current movies in list
- Log error for debugging

**Implementation:**
```jsx
{error && (
  <ErrorContainer>
    <ErrorMessage>Error al cargar más películas</ErrorMessage>
    <RetryButton onClick={handleRetry}>Reintentar</RetryButton>
  </ErrorContainer>
)}
```

### Offline Detection

**Scenario:** User loses network connection
**Handling:**
- Detect offline state using `navigator.onLine`
- Display offline message
- Pause infinite scroll
- Resume when connection restored

### Race Conditions

**Scenario:** Multiple load requests triggered simultaneously
**Handling:**
- Use loading flag to prevent concurrent requests
- Disconnect observer during loading
- Queue requests if needed
- Reconnect observer after completion

## Testing Strategy

### Unit Tests

1. **useInfiniteScroll Hook Tests**
   - Test observer creation and cleanup
   - Test intersection detection
   - Test loading state management
   - Test threshold and root margin configuration

2. **MovieGrid Tests**
   - Test skeleton rendering during loading
   - Test fade-in animation
   - Test sentinel element placement
   - Test end of results display

### Integration Tests

1. **Infinite Scroll Flow**
   - Test automatic loading on scroll
   - Test loading prevention during active request
   - Test end of results behavior
   - Test error handling and retry

2. **Scroll Position Restoration**
   - Test position save on navigation
   - Test position restore on return
   - Test page loading to reach position

### Performance Tests

1. **Scroll Performance**
   - Measure FPS during scroll with many items
   - Test memory usage with large lists
   - Verify no memory leaks
   - Test on low-end devices

2. **Loading Performance**
   - Measure time to first skeleton display
   - Test API request timing
   - Verify debouncing effectiveness

## Implementation Notes

### Intersection Observer Configuration

**Root Margin:** `200px`
- Triggers loading 200px before reaching bottom
- Provides smooth experience without waiting
- Adjustable based on testing

**Threshold:** `0.5`
- Sentinel must be 50% visible to trigger
- Prevents premature triggering
- Balances responsiveness and control

### Animation Timing

**Skeleton Display:** Immediate
- Show skeletons as soon as loading starts
- No delay for better perceived performance

**Fade-in Duration:** 300ms
- Smooth but not slow
- Matches other app transitions
- Uses ease-out timing function

**Stagger Delay:** 50ms per card
- Creates wave effect
- Makes loading feel more natural
- Maximum 6 cards staggered

### Scroll Position Restoration

**Storage:** Session Storage
- Persists during browser session
- Cleared when tab closes
- Keyed by route path

**Restoration Timing:**
- Restore after initial movies load
- Load additional pages if needed
- Scroll to position after DOM update

### Performance Optimizations

1. **Debouncing:** Not needed with Intersection Observer (built-in)
2. **Throttling:** Observer handles efficiently
3. **Virtualization:** Consider for lists > 100 items (future enhancement)
4. **Image Lazy Loading:** Already implemented in LazyImage component
5. **Request Cancellation:** Cancel pending requests on unmount

## Design Decisions

### Decision 1: Intersection Observer vs Scroll Event
**Choice:** Intersection Observer API
**Rationale:**
- Better performance (no scroll event listeners)
- Built-in throttling
- More declarative and maintainable
- Better browser support now

### Decision 2: Sentinel Element vs Scroll Position Calculation
**Choice:** Sentinel element at bottom
**Rationale:**
- Simpler implementation
- More reliable across different layouts
- Works with dynamic content heights
- Easier to test

### Decision 3: Automatic vs Manual Loading
**Choice:** Automatic with optional manual mode
**Rationale:**
- Modern UX expectation
- Reduces friction
- Still provide control for users who prefer it
- Can be toggled via settings

### Decision 4: Loading Skeleton Count
**Choice:** 6 skeleton cards
**Rationale:**
- Matches typical page size
- Fills viewport on most screens
- Not overwhelming
- Consistent with grid layout

### Decision 5: Root Margin Distance
**Choice:** 200px before bottom
**Rationale:**
- Provides smooth experience
- Accounts for network latency
- Not too aggressive (prevents excessive requests)
- Tested across different scroll speeds

## Accessibility Considerations

1. **Screen Readers:**
   - Announce when new content loads
   - Use aria-live region for status updates
   - Provide skip link to jump past loaded content

2. **Keyboard Navigation:**
   - Maintain focus when new content loads
   - Provide keyboard shortcut to load more manually
   - Ensure sentinel doesn't trap focus

3. **Reduced Motion:**
   - Disable shimmer animation
   - Use simple fade instead of stagger
   - Respect prefers-reduced-motion

4. **Loading Indicators:**
   - Provide text alternative for visual loading states
   - Announce loading status to screen readers
   - Clear indication of loading progress
