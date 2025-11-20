export class Theme {
  constructor(mode = 'dark') {
    this.mode = this._validateMode(mode);
    this.colors = this._getColors();
  }

  _validateMode(mode) {
    return mode === 'light' || mode === 'dark' ? mode : 'dark';
  }

  _getColors() {
    if (this.mode === 'light') {
      return {
        // Core colors
        primary: '#e50914',
        secondary: '#f8f8f8',
        background: '#ffffff',
        text: '#1a1a1a',
        textSecondary: '#666666',
        
        // Component colors
        cardBg: '#ffffff',
        cardBorder: '#e0e0e0',
        cardShadow: 'rgba(0, 0, 0, 0.08)',
        hoverBg: '#f5f5f5',
        
        // Input colors
        inputBorder: '#d0d0d0',
        inputFocus: '#e50914',
        
        // Overlay colors
        overlay: 'rgba(0, 0, 0, 0.6)',
        
        // Loading colors
        skeletonBase: '#f0f0f0',
        skeletonHighlight: '#f8f8f8',
      };
    }

    return {
      // Core colors
      primary: '#e50914',
      secondary: '#221f1f',
      background: '#141414',
      text: '#ffffff',
      textSecondary: '#b3b3b3',
      
      // Component colors
      cardBg: '#2f2f2f',
      cardBorder: '#3f3f3f',
      cardShadow: 'rgba(0, 0, 0, 0.3)',
      hoverBg: '#3a3a3a',
      
      // Input colors
      inputBorder: '#4a4a4a',
      inputFocus: '#e50914',
      
      // Overlay colors
      overlay: 'rgba(0, 0, 0, 0.85)',
      
      // Loading colors
      skeletonBase: '#2a2a2a',
      skeletonHighlight: '#3a3a3a',
    };
  }

  toggle() {
    const newMode = this.mode === 'dark' ? 'light' : 'dark';
    return new Theme(newMode);
  }
}
