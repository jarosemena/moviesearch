# Design Document - Light Theme Improvements

## Overview

This design enhances the light theme implementation to provide a polished, accessible, and visually appealing experience. The improvements focus on color palette refinement, component-specific styling, accessibility compliance, smooth transitions, and proper image handling.

## Architecture

### Theme System Structure

```
Theme Model (Domain)
    ↓
ManageThemeUseCase (Application)
    ↓
LocalStorageThemeRepository (Infrastructure)
    ↓
ThemeContext (Presentation)
    ↓
CSS Variables (Applied to :root)
    ↓
Styled Components (Consume variables)
```

The theme system uses a layered architecture where:
- Domain layer defines theme colors and modes
- Application layer manages theme state and persistence
- Infrastructure layer handles storage
- Presentation layer applies themes via CSS variables

## Components and Interfaces

### 1. Enhanced Theme Model

**Location:** `src/domain/models/Theme.js`

**Changes:**
- Expand light theme color palette with additional variables
- Add border, shadow, and overlay colors
- Include hover state colors

**New Color Variables for Light Theme:**
```javascript
{
  primary: '#e50914',           // Netflix red (unchanged)
  secondary: '#f8f8f8',         // Lighter gray for cards
  background: '#ffffff',        // Pure white background
  text: '#1a1a1a',             // Near black for text
  textSecondary: '#666666',    // Medium gray for secondary text
  cardBg: '#ffffff',           // White cards
  cardBorder: '#e0e0e0',       // Light gray borders
  cardShadow: 'rgba(0, 0, 0, 0.08)', // Subtle shadows
  hoverBg: '#f5f5f5',          // Light gray hover
  inputBorder: '#d0d0d0',      // Input borders
  inputFocus: '#e50914',       // Focus state (primary)
  overlay: 'rgba(0, 0, 0, 0.6)', // Modal overlay
  skeletonBase: '#f0f0f0',     // Skeleton loading base
  skeletonHighlight: '#f8f8f8', // Skeleton loading highlight
}
```

### 2. CSS Variable Mapping

**Location:** `src/presentation/context/ThemeContext.jsx`

**Enhancement:**
Update the CSS variable mapping to handle new color properties:

```javascript
const cssVarMapping = {
  primary: '--primary-color',
  secondary: '--secondary-color',
  background: '--background-color',
  text: '--text-color',
  textSecondary: '--text-secondary',
  cardBg: '--card-bg',
  cardBorder: '--card-border',
  cardShadow: '--card-shadow',
  hoverBg: '--hover-bg',
  inputBorder: '--input-border',
  inputFocus: '--input-focus',
  overlay: '--overlay-color',
  skeletonBase: '--skeleton-base',
  skeletonHighlight: '--skeleton-highlight',
};
```

### 3. Component-Specific Styling Updates

#### MovieCard Component
**Location:** `src/presentation/components/MovieCard/MovieCard.styles.js`

**Changes:**
- Add border in light theme using `var(--card-border)`
- Adjust shadow to use `var(--card-shadow)`
- Ensure hover states use `var(--hover-bg)`

#### Navigation Component
**Location:** `src/presentation/components/Navigation/Navigation.styles.js`

**Changes:**
- Update background to use theme-aware colors
- Adjust active state styling for better visibility in light theme
- Add subtle border-bottom for separation

#### SearchBar Component
**Location:** `src/presentation/components/SearchBar/SearchBar.styles.js`

**Changes:**
- Use `var(--input-border)` for borders
- Use `var(--input-focus)` for focus states
- Adjust placeholder text color for light theme

#### Filters Component
**Location:** `src/presentation/components/Filters/Filters.styles.js`

**Changes:**
- Update select and input borders
- Improve active/inactive genre chip contrast
- Add hover states for better interactivity

#### RandomMatchModal Component
**Location:** `src/presentation/components/RandomMatchModal/RandomMatchModal.styles.js`

**Changes:**
- Use `var(--overlay-color)` for modal overlay
- Ensure modal content background adapts to theme
- Update button styling for light theme visibility

#### Skeleton Components
**Location:** `src/presentation/components/Skeleton/*.styles.js`

**Changes:**
- Use `var(--skeleton-base)` and `var(--skeleton-highlight)`
- Adjust animation for light theme visibility

### 4. Transition System

**Location:** `src/index.css`

**Implementation:**
Add transition properties to CSS variables:

```css
:root {
  /* ... color variables ... */
  --transition-duration: 300ms;
  --transition-timing: ease-in-out;
}

* {
  transition: background-color var(--transition-duration) var(--transition-timing),
              color var(--transition-duration) var(--transition-timing),
              border-color var(--transition-duration) var(--transition-timing),
              box-shadow var(--transition-duration) var(--transition-timing);
}
```

## Data Models

### Theme Color Schema

```typescript
interface ThemeColors {
  // Core colors
  primary: string;
  secondary: string;
  background: string;
  text: string;
  textSecondary: string;
  
  // Component colors
  cardBg: string;
  cardBorder: string;
  cardShadow: string;
  hoverBg: string;
  
  // Input colors
  inputBorder: string;
  inputFocus: string;
  
  // Overlay colors
  overlay: string;
  
  // Loading colors
  skeletonBase: string;
  skeletonHighlight: string;
}

interface Theme {
  mode: 'light' | 'dark';
  colors: ThemeColors;
}
```

## Error Handling

### Theme Application Errors

**Scenario:** CSS variable application fails
**Handling:** 
- Log error to console
- Fall back to default dark theme
- Display user-friendly message if theme toggle fails

**Scenario:** Invalid theme mode in localStorage
**Handling:**
- Validate mode on load
- Default to 'dark' if invalid
- Clear invalid localStorage entry

## Testing Strategy

### Unit Tests

1. **Theme Model Tests**
   - Test light theme color generation
   - Test theme toggle functionality
   - Test mode validation

2. **ThemeContext Tests**
   - Test CSS variable application
   - Test theme persistence
   - Test theme toggle

### Visual Regression Tests

1. **Component Screenshots**
   - Capture screenshots of all major components in light theme
   - Compare against baseline images
   - Flag any unexpected visual changes

### Accessibility Tests

1. **Contrast Ratio Tests**
   - Verify all text meets WCAG AA standards (4.5:1 for normal text)
   - Verify large text meets WCAG AA standards (3:1)
   - Test focus indicators visibility

2. **Manual Testing Checklist**
   - Test all interactive elements in light theme
   - Verify readability of all text
   - Check hover and focus states
   - Test modal overlays
   - Verify image borders and shadows

## Implementation Notes

### Color Selection Rationale

**Light Theme Colors:**
- **Background (#ffffff):** Pure white provides maximum brightness and clean appearance
- **Card Background (#ffffff):** White cards with borders create definition without heavy shadows
- **Card Border (#e0e0e0):** Light gray borders provide subtle separation
- **Text (#1a1a1a):** Near-black ensures excellent readability (contrast ratio ~16:1)
- **Secondary Text (#666666):** Medium gray for less important text (contrast ratio ~5.7:1)
- **Shadows (rgba(0,0,0,0.08)):** Very subtle shadows prevent harsh appearance

### Performance Considerations

- CSS variable updates are performant (no re-render required)
- Transition duration of 300ms balances smoothness and speed
- Avoid transitioning layout properties (only colors)

### Browser Compatibility

- CSS variables supported in all modern browsers
- Fallback values provided for older browsers
- Graceful degradation to dark theme if light theme fails

## Design Decisions

### Decision 1: White Cards with Borders vs. Gray Cards
**Choice:** White cards with light gray borders
**Rationale:** 
- Provides cleaner, more modern appearance
- Better contrast with movie posters
- Reduces visual noise compared to gray cards

### Decision 2: Subtle Shadows vs. Strong Shadows
**Choice:** Very subtle shadows (0.08 opacity)
**Rationale:**
- Prevents harsh appearance in bright environments
- Maintains depth perception without overwhelming
- Aligns with modern design trends

### Decision 3: Transition All Color Properties
**Choice:** Apply transitions to background, color, border, and shadow
**Rationale:**
- Creates smooth, polished theme switching experience
- Prevents jarring color changes
- Minimal performance impact

### Decision 4: Maintain Primary Red Color
**Choice:** Keep Netflix red (#e50914) in both themes
**Rationale:**
- Maintains brand identity
- Provides consistent accent color
- Works well in both light and dark contexts
