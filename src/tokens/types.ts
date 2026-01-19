/**
 * Design Token Type Definitions
 * 
 * This file defines the TypeScript types for the three-tier token architecture:
 * Brand (Primitives) → Alias (Semantic) → Mapped (Component-Specific)
 */

// Brand Token Types
export type BrandColorToken = string;
export type BrandTypographyToken = string | number;
export type BrandSpacingToken = number;
export type BrandBorderToken = string | number;
export type BrandRadiusToken = number;

// Alias Token Types
export type AliasColorToken = string;
export type AliasTypographyToken = {
  family: string;
  size: number;
  weight: number;
  lineHeight: number;
  letterSpacing: number;
};

// Mapped Token Types
export type MappedColorToken = string;
export type MappedSpacingToken = number;

// Token Collection Types
export interface BrandTokens {
  color: Record<string, BrandColorToken>;
  typography: {
    fontFamily: BrandTypographyToken;
    fontSizes: Record<string, BrandTypographyToken>;
    fontWeights: Record<string, BrandTypographyToken>;
  };
  spacing: {
    base: Record<string, BrandSpacingToken>;
    gap: Record<string, BrandSpacingToken>;
    padding: Record<string, BrandSpacingToken>;
  };
  border: Record<string, BrandBorderToken>;
  radius: Record<string, BrandRadiusToken>;
  other: Record<string, number>;
}

export interface AliasTokens {
  color: {
    foreground: Record<string, AliasColorToken>;
    background: Record<string, AliasColorToken>;
    interface: Record<string, AliasColorToken>;
  };
  typography: Record<string, AliasTypographyToken>;
}

export interface MappedTokens {
  color: Record<string, MappedColorToken>;
  spacing: Record<string, MappedSpacingToken>;
}

// Complete Token System Type
export interface DesignTokens {
  brand: BrandTokens;
  alias: AliasTokens;
  mapped: MappedTokens;
}
