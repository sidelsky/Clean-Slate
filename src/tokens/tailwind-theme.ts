/**
 * Tailwind Theme Configuration
 * 
 * Maps design tokens to Tailwind CSS theme values.
 * This file bridges our design token system with Tailwind's theme configuration.
 */

import { tokens } from './index';

// Helper to convert typography token to Tailwind font size format
const getFontSize = (size: number, lineHeight: number, letterSpacing: number) => [
  `${size}px`,
  {
    lineHeight: lineHeight.toString(),
    letterSpacing: `${letterSpacing}px`,
  },
];

export const tailwindTheme = {
  colors: {
    // Brand colors
    brand: {
      yellow: {
        800: tokens.brand.color['brand/yellow/800'],
      },
      pink: {
        800: tokens.brand.color['brand/pink/800'],
      },
      blue: {
        800: tokens.brand.color['brand/blue/800'],
      },
      white: {
        0: tokens.brand.color['brand/white/0'],
      },
    },

    // Alias colors - foreground
    foreground: {
      primary: tokens.alias.color.foreground.primary,
      tertiary: tokens.alias.color.foreground.tertiary,
      default: tokens.alias.color.foreground.default,
      accent: tokens.alias.color.foreground.accent,
    },

    // Alias colors - background
    background: {
      primary: tokens.alias.color.background.primary,
      secondary: tokens.alias.color.background.secondary,
      tertiary: tokens.alias.color.background.tertiary,
    },

    // Alias colors - interface
    interface: {
      'primary-green': tokens.alias.color.interface['primary-green'],
    },

    // Mapped colors
    'input-field': {
      foreground: tokens.mapped.color['input-field/foreground'],
    },
    panel: {
      level1: tokens.mapped.color['panel/level1'],
    },
    surface: tokens.mapped.color.surface,
  },

  fontFamily: {
    kollektif: [tokens.brand.typography.fontFamily as string, 'sans-serif'],
  },

  fontSize: {
    // Display
    'display-1': getFontSize(
      tokens.alias.typography['display-1'].size,
      tokens.alias.typography['display-1'].lineHeight,
      tokens.alias.typography['display-1'].letterSpacing
    ),

    // Headings
    'heading-regular': getFontSize(
      tokens.alias.typography['heading-regular'].size,
      tokens.alias.typography['heading-regular'].lineHeight,
      tokens.alias.typography['heading-regular'].letterSpacing
    ),
    'heading-x-small': getFontSize(
      tokens.alias.typography['heading-x-small'].size,
      tokens.alias.typography['heading-x-small'].lineHeight,
      tokens.alias.typography['heading-x-small'].letterSpacing
    ),

    // Body
    'body-regular': getFontSize(
      tokens.alias.typography['body-regular'].size,
      tokens.alias.typography['body-regular'].lineHeight,
      tokens.alias.typography['body-regular'].letterSpacing
    ),
    'body-bold': getFontSize(
      tokens.alias.typography['body-bold'].size,
      tokens.alias.typography['body-bold'].lineHeight,
      tokens.alias.typography['body-bold'].letterSpacing
    ),

    // Caption
    'caption-regular': getFontSize(
      tokens.alias.typography['caption-regular'].size,
      tokens.alias.typography['caption-regular'].lineHeight,
      tokens.alias.typography['caption-regular'].letterSpacing
    ),
    'caption-small': getFontSize(
      tokens.alias.typography['caption-small'].size,
      tokens.alias.typography['caption-small'].lineHeight,
      tokens.alias.typography['caption-small'].letterSpacing
    ),
  },

  fontWeight: {
    regular: tokens.brand.typography.fontWeights.regular as number,
    bold: tokens.brand.typography.fontWeights.bold as number,
  },

  spacing: {
    // Base spacing
    'base-4': `${tokens.brand.spacing.base['size-4']}px`,
    'base-8': `${tokens.brand.spacing.base['size-8']}px`,
    'base-12': `${tokens.brand.spacing.base['size-12']}px`,

    // Gap
    'gap-s': `${tokens.brand.spacing.gap.S}px`,
    'gap-m': `${tokens.brand.spacing.gap.M}px`,
    'gap-l': `${tokens.brand.spacing.gap.L}px`,
    'gap-xl': `${tokens.brand.spacing.gap.XL}px`,
    'gap-xxl': `${tokens.brand.spacing.gap.XXL}px`,
    'gap-3xl': `${tokens.brand.spacing.gap['3XL']}px`,

    // Padding
    'padding-s': `${tokens.brand.spacing.padding.S}px`,
    'padding-m': `${tokens.brand.spacing.padding.M}px`,
    'padding-l': `${tokens.brand.spacing.padding.L}px`,
    'padding-xl': `${tokens.brand.spacing.padding.XL}px`,
    'padding-xxl': `${tokens.brand.spacing.padding.XXL}px`,
  },

  borderColor: {
    strong: tokens.brand.border.strong as string,
    medium: tokens.brand.border.medium as string,
  },

  borderWidth: {
    stroke: `${tokens.brand.border.stroke}px`,
  },

  borderRadius: {
    s: `${tokens.brand.radius.S}px`,
    full: `${tokens.brand.radius.full}px`,
  },
};
