/**
 * Design Tokens - Main Export
 * 
 * Central export point for all design tokens following the three-tier architecture:
 * Brand (Primitives) → Alias (Semantic) → Mapped (Component-Specific)
 * 
 * Usage:
 *   import { tokens } from './tokens';
 *   const primaryColor = tokens.alias.color.foreground.primary;
 */

import type { DesignTokens } from './types';
import { brandTokens } from './brand';
import { aliasTokens } from './alias';
import { mappedTokens } from './mapped';

// Complete token system
export const tokens: DesignTokens = {
  brand: brandTokens,
  alias: aliasTokens,
  mapped: mappedTokens,
};

// Re-export individual collections for convenience
export { brandTokens } from './brand';
export { aliasTokens, getTypographyCSS } from './alias';
export { mappedTokens } from './mapped';
export type { DesignTokens, BrandTokens, AliasTokens, MappedTokens } from './types';

// Helper function to get a token by path (e.g., "alias.color.foreground.primary")
export const getToken = (path: string): string | number | object | undefined => {
  const parts = path.split('.');
  let value: any = tokens;

  for (const part of parts) {
    if (value && typeof value === 'object' && part in value) {
      value = value[part as keyof typeof value];
    } else {
      return undefined;
    }
  }

  return value;
};

// Helper function to get CSS custom properties object
export const getCSSCustomProperties = (): Record<string, string> => {
  const props: Record<string, string> = {};

  // Brand colors
  Object.entries(tokens.brand.color).forEach(([key, value]) => {
    props[`--color-brand-${key.replace(/\//g, '-')}`] = value;
  });

  // Alias colors
  Object.entries(tokens.alias.color.foreground).forEach(([key, value]) => {
    props[`--color-foreground-${key}`] = value;
  });
  Object.entries(tokens.alias.color.background).forEach(([key, value]) => {
    props[`--color-background-${key}`] = value;
  });
  Object.entries(tokens.alias.color.interface).forEach(([key, value]) => {
    props[`--color-interface-${key.replace(/\//g, '-')}`] = value;
  });

  // Mapped colors
  Object.entries(tokens.mapped.color).forEach(([key, value]) => {
    props[`--color-mapped-${key.replace(/\//g, '-')}`] = value;
  });

  // Spacing
  Object.entries(tokens.brand.spacing.gap).forEach(([key, value]) => {
    props[`--spacing-gap-${key.toLowerCase()}`] = `${value}px`;
  });
  Object.entries(tokens.brand.spacing.padding).forEach(([key, value]) => {
    props[`--spacing-padding-${key.toLowerCase()}`] = `${value}px`;
  });

  // Border
  Object.entries(tokens.brand.border).forEach(([key, value]) => {
    if (typeof value === 'string') {
      props[`--border-${key}`] = value;
    } else {
      props[`--border-${key}`] = `${value}px`;
    }
  });

  // Radius
  Object.entries(tokens.brand.radius).forEach(([key, value]) => {
    props[`--radius-${key.toLowerCase()}`] = `${value}px`;
  });

  return props;
};
