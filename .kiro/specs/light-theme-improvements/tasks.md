# Implementation Plan - Light Theme Improvements

- [x] 1. Update Theme Model with enhanced color palette


  - Modify `src/domain/models/Theme.js` to include new color variables for light theme
  - Add cardBorder, cardShadow, hoverBg, inputBorder, inputFocus, overlay, skeletonBase, and skeletonHighlight colors
  - Ensure all colors meet WCAG AA contrast requirements
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 3.1, 3.2, 3.4_

- [x] 2. Update ThemeContext to apply new CSS variables


  - Modify `src/presentation/context/ThemeContext.jsx` to map new color properties to CSS variables
  - Ensure proper camelCase to kebab-case conversion for CSS variable names
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5_

- [x] 3. Add global transition styles



  - Update `src/index.css` to add transition properties for color changes
  - Add CSS variables for transition duration and timing function
  - Apply transitions to background-color, color, border-color, and box-shadow properties
  - _Requirements: 4.1, 4.2, 4.3_

- [x] 4. Update MovieCard component styling


  - Modify `src/presentation/components/MovieCard/MovieCard.styles.js`
  - Add border using `var(--card-border)` for light theme definition
  - Update box-shadow to use `var(--card-shadow)`
  - Adjust hover state to use `var(--hover-bg)` for background
  - _Requirements: 2.2, 5.1_

- [x] 5. Update Navigation component styling


  - Modify `src/presentation/components/Navigation/Navigation.styles.js`
  - Update background color to use theme-aware variables
  - Improve active state styling for better visibility in light theme
  - Add subtle border-bottom for visual separation
  - _Requirements: 2.1_

- [x] 6. Update SearchBar component styling


  - Modify `src/presentation/components/SearchBar/SearchBar.styles.js`
  - Use `var(--input-border)` for input borders
  - Use `var(--input-focus)` for focus state borders
  - Adjust placeholder text color for better visibility in light theme
  - _Requirements: 2.3, 3.3_

- [x] 7. Update Filters component styling


  - Modify `src/presentation/components/Filters/Filters.styles.js`
  - Update select and input borders to use `var(--input-border)`
  - Improve active/inactive genre chip contrast
  - Add hover states using `var(--hover-bg)`
  - Ensure focus states are visible with `var(--input-focus)`
  - _Requirements: 2.4, 3.3_

- [ ] 8. Update RandomMatchModal component styling
  - Modify `src/presentation/components/RandomMatchModal/RandomMatchModal.styles.js`
  - Use `var(--overlay-color)` for modal overlay background
  - Ensure modal content background uses `var(--card-bg)`
  - Update button styling for better visibility in light theme
  - Add border to modal content using `var(--card-border)`
  - _Requirements: 2.5_

- [ ] 9. Update Skeleton component styling
  - Modify `src/presentation/components/Skeleton/MovieCardSkeleton.styles.js`
  - Use `var(--skeleton-base)` for base skeleton color
  - Use `var(--skeleton-highlight)` for shimmer highlight
  - Adjust animation for better visibility in light theme
  - _Requirements: 5.3_

- [ ] 10. Update MovieDetail component styling
  - Modify `src/presentation/components/MovieDetail/MovieDetail.styles.js`
  - Ensure backdrop overlays maintain text readability in light theme
  - Update close button styling for visibility
  - Adjust favorite button contrast
  - _Requirements: 5.2_

- [ ] 11. Update Home page styling
  - Modify `src/presentation/pages/Home/Home.styles.js`
  - Update RandomButton styling for light theme
  - Ensure LoadMoreButton has proper contrast
  - Adjust ErrorMessage styling
  - _Requirements: 2.1, 2.2, 2.3_

- [ ] 12. Update Favorites page styling
  - Modify `src/presentation/pages/Favorites/Favorites.styles.js`
  - Update ClearButton styling for light theme visibility
  - Ensure proper contrast for all text elements
  - _Requirements: 2.1, 2.2_

- [ ] 13. Update MovieCarousel component styling
  - Modify `src/presentation/components/MovieCarousel/MovieCarousel.styles.js`
  - Update carousel controls for light theme visibility
  - Adjust dot indicators contrast
  - Ensure title text is readable
  - _Requirements: 2.2_

- [ ] 14. Update Loading component styling
  - Modify `src/presentation/components/Loading/Loading.styles.js`
  - Adjust spinner colors for light theme visibility
  - Ensure loading text has proper contrast
  - _Requirements: 2.2_

- [ ] 15. Update LazyImage component styling
  - Modify `src/presentation/components/LazyImage/LazyImage.styles.js`
  - Update placeholder background to use `var(--skeleton-base)`
  - Ensure loading state is visible in light theme
  - _Requirements: 5.3_

- [ ] 16. Manual testing and accessibility verification
  - Test all components in light theme
  - Verify contrast ratios meet WCAG AA standards
  - Test focus indicators visibility
  - Verify smooth theme transitions
  - Test on different screen sizes
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 4.1, 4.2, 4.3_
