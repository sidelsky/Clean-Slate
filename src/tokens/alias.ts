/**
 * Alias Collection (Semantic Tokens)
 * 
 * Provides semantic meaning by referencing Brand tokens.
 * These tokens create an abstraction layer that allows for easier theming and context-specific usage.
 */

import type { AliasTokens } from './types';
import { brandTokens } from './brand';

export const aliasTokens: AliasTokens = {
  color: {
    foreground: {
      primary: brandTokens.color['brand/white/0'], // #ffffff
      tertiary: '#32373d',
      default: brandTokens.color['brand/white/0'], // #ffffff
      accent: '#8fd6c9',
    },

    background: {
      primary: '#292e33',
      secondary: '#32373d',
      tertiary: '#3c454a',
    },

    interface: {
      'primary-green': '#8ED6C9',
    },
  },

  typography: {
    // Display Styles
    'display-1': {
      family: brandTokens.typography.fontFamily as string,
      size: brandTokens.typography.fontSizes['display/1'] as number,
      weight: brandTokens.typography.fontWeights['display/1'] as number,
      lineHeight: 1.2,
      letterSpacing: 0,
    },

    // Heading Styles
    'heading-regular': {
      family: brandTokens.typography.fontFamily as string,
      size: brandTokens.typography.fontSizes['heading/medium'] as number,
      weight: brandTokens.typography.fontWeights['heading/large'] as number,
      lineHeight: 1.2,
      letterSpacing: -2,
    },

    'heading-x-small': {
      family: brandTokens.typography.fontFamily as string,
      size: brandTokens.typography.fontSizes['heading/x-small'] as number,
      weight: brandTokens.typography.fontWeights['heading/x-small'] as number,
      lineHeight: 1.2,
      letterSpacing: -2,
    },

    // Body Styles
    'body-regular': {
      family: brandTokens.typography.fontFamily as string,
      size: brandTokens.typography.fontSizes['body/medium'] as number,
      weight: brandTokens.typography.fontWeights['body/medium'] as number,
      lineHeight: 1.2,
      letterSpacing: -2,
    },

    'body-bold': {
      family: brandTokens.typography.fontFamily as string,
      size: brandTokens.typography.fontSizes['body/medium'] as number,
      weight: brandTokens.typography.fontWeights.bold as number,
      lineHeight: 1,
      letterSpacing: -2,
    },

    // Caption Styles
    'caption-regular': {
      family: brandTokens.typography.fontFamily as string,
      size: brandTokens.typography.fontSizes['caption/large'] as number,
      weight: brandTokens.typography.fontWeights['caption/medium'] as number,
      lineHeight: 1.2,
      letterSpacing: -1,
    },

    'caption-small': {
      family: brandTokens.typography.fontFamily as string,
      size: brandTokens.typography.fontSizes['caption/medium'] as number,
      weight: brandTokens.typography.fontWeights['caption/medium'] as number,
      lineHeight: 1.2,
      letterSpacing: -2,
    },

    // Primitive Caption Styles (internal use)
    'caption-1': {
      family: brandTokens.typography.fontFamily as string,
      size: brandTokens.typography.fontSizes['caption/1'] as number,
      weight: brandTokens.typography.fontWeights['caption/1'] as number,
      lineHeight: 1.2,
      letterSpacing: 0,
    },

    'caption-2': {
      family: brandTokens.typography.fontFamily as string,
      size: brandTokens.typography.fontSizes['caption/2'] as number,
      weight: brandTokens.typography.fontWeights['caption/2'] as number,
      lineHeight: 1.2,
      letterSpacing: 0,
    },
  },
};

// Helper function to get CSS font properties from typography token
export const getTypographyCSS = (token: AliasTokens['typography'][string]) => {
  return {
    fontFamily: token.family,
    fontSize: `${token.size}px`,
    fontWeight: token.weight,
    lineHeight: token.lineHeight,
    letterSpacing: `${token.letterSpacing}px`,
  };
};
