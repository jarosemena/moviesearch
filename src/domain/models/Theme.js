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
        primary: '#e50914',
        secondary: '#f5f5f5',
        background: '#ffffff',
        text: '#1a1a1a',
        textSecondary: '#666666',
        cardBg: '#f9f9f9',
      };
    }

    return {
      primary: '#e50914',
      secondary: '#221f1f',
      background: '#141414',
      text: '#ffffff',
      textSecondary: '#b3b3b3',
      cardBg: '#2f2f2f',
    };
  }

  toggle() {
    const newMode = this.mode === 'dark' ? 'light' : 'dark';
    return new Theme(newMode);
  }
}
