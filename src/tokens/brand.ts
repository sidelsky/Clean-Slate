/**
 * Brand Collection (Primitives)
 * 
 * The foundational design tokens - raw values that define the core design language.
 * These tokens should NOT be used directly in components. Use Alias or Mapped tokens instead.
 */

import type { BrandTokens } from './types';

export const brandTokens: BrandTokens = {
  color: {
    // Brand Colors
    'brand/yellow/800': '#ffd67d',
    'brand/pink/800': '#f0b5e8',
    'brand/blue/800': '#82c7ff',
    'brand/white/0': '#ffffff',
  },

  typography: {
    fontFamily: 'Kollektif',
    
    fontSizes: {
      'display/1': 80,
      'caption/1': 14,
      'caption/2': 12,
      'heading/medium': 36,
      'heading/x-small': 24,
      'body/medium': 16,
      'caption/medium': 12,
      'caption/large': 14,
    },

    fontWeights: {
      'display/1': 700, // Bold
      'caption/1': 400, // Regular
      'caption/2': 400, // Regular
      'heading/large': 700, // Bold
      'heading/x-small': 700, // Bold
      'body/medium': 400, // Regular
      'caption/medium': 400, // Regular
      bold: 700,
      regular: 400,
    },
  },

  spacing: {
    base: {
      'size-4': 4,
      'size-8': 8,
      'size-12': 12,
    },

    gap: {
      S: 4,
      M: 8,
      L: 12,
      XL: 16,
      XXL: 32,
      '3XL': 48,
    },

    padding: {
      S: 8,
      M: 12,
      L: 16,
      XL: 32,
      XXL: 48,
    },
  },

  border: {
    strong: '#bebec0',
    medium: '#5a666d',
    stroke: 2,
  },

  radius: {
    S: 2,
    full: 9999,
  },

  other: {
    'icon-size': 32,
    'min-height': 48,
  },
};

// Helper function to get brand tokens (for internal use only)
export const getBrandToken = (path: string): string | number | undefined => {
  const parts = path.split('/');
  let value: any = brandTokens;

  for (const part of parts) {
    if (value && typeof value === 'object' && part in value) {
      value = value[part as keyof typeof value];
    } else {
      return undefined;
    }
  }

  return value;
};
