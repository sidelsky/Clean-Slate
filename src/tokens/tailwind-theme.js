/**
 * Tailwind Theme Configuration (JavaScript)
 * 
 * Maps design tokens to Tailwind CSS theme values.
 * This is a JavaScript version for compatibility with Tailwind config.
 */

// Import tokens - this will work if we use a bundler or if we compile first
// For now, we'll inline the values to ensure compatibility
// In production, you might want to use a build step to generate this file

const tailwindTheme = {
  colors: {
    // Brand colors
    brand: {
      yellow: {
        800: '#ffd67d',
      },
      pink: {
        800: '#f0b5e8',
      },
      blue: {
        800: '#82c7ff',
      },
      white: {
        0: '#ffffff',
      },
    },

    // Alias colors - foreground
    foreground: {
      primary: '#ffffff',
      tertiary: '#32373d',
      default: '#ffffff',
      accent: '#8fd6c9',
    },

    // Alias colors - background
    background: {
      primary: '#292e33',
      secondary: '#32373d',
      tertiary: '#3c454a',
    },

    // Alias colors - interface
    interface: {
      'primary-green': '#8ED6C9',
    },

    // Mapped colors
    'input-field': {
      foreground: '#ffffff',
    },
    panel: {
      level1: '#32373d',
    },
    surface: '#32373d',
  },

  fontFamily: {
    kollektif: ['Kollektif', 'sans-serif'],
  },

  fontSize: {
    // Display
    'display-1': [
      '80px',
      {
        lineHeight: '1.2',
        letterSpacing: '0px',
      },
    ],

    // Headings
    'heading-regular': [
      '36px',
      {
        lineHeight: '1.2',
        letterSpacing: '-2px',
      },
    ],
    'heading-x-small': [
      '24px',
      {
        lineHeight: '1.2',
        letterSpacing: '-2px',
      },
    ],

    // Body
    'body-regular': [
      '16px',
      {
        lineHeight: '1.2',
        letterSpacing: '-2px',
      },
    ],
    'body-bold': [
      '16px',
      {
        lineHeight: '1',
        letterSpacing: '-2px',
      },
    ],

    // Caption
    'caption-regular': [
      '14px',
      {
        lineHeight: '1.2',
        letterSpacing: '-1px',
      },
    ],
    'caption-small': [
      '12px',
      {
        lineHeight: '1.2',
        letterSpacing: '-2px',
      },
    ],
  },

  fontWeight: {
    regular: 400,
    bold: 700,
  },

  spacing: {
    // Base spacing
    'base-4': '4px',
    'base-8': '8px',
    'base-12': '12px',

    // Gap
    'gap-s': '4px',
    'gap-m': '8px',
    'gap-l': '12px',
    'gap-xl': '16px',
    'gap-xxl': '32px',
    'gap-3xl': '48px',

    // Padding
    'padding-s': '8px',
    'padding-m': '12px',
    'padding-l': '16px',
    'padding-xl': '32px',
    'padding-xxl': '48px',
  },

  borderColor: {
    strong: '#bebec0',
    medium: '#5a666d',
  },

  borderWidth: {
    stroke: '2px',
  },

  borderRadius: {
    s: '2px',
    full: '9999px',
  },
};

export default tailwindTheme;
