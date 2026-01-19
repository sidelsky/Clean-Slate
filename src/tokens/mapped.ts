/**
 * Mapped Collection (Component-Specific Tokens)
 * 
 * Contains tokens that are mapped to Alias tokens for use in specific component contexts.
 * These tokens provide the final layer of abstraction, connecting semantic tokens to actual component usage.
 */

import type { MappedTokens } from './types';
import { aliasTokens } from './alias';

export const mappedTokens: MappedTokens = {
  color: {
    // Input field tokens
    'input-field/foreground': aliasTokens.color.foreground.primary,
    
    // Panel tokens
    'panel/level1': aliasTokens.color.background.secondary,
    
    // Surface tokens
    surface: aliasTokens.color.background.secondary,
  },

  spacing: {
    // Component-specific spacing can be added here
    // These would reference alias or brand spacing tokens
  },
};
