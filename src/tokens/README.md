# Design Tokens Usage Guide

This directory contains the design token system following the three-tier architecture from Figma:

**Brand (Primitives) → Alias (Semantic) → Mapped (Component-Specific)**

## Architecture

### 1. Brand Tokens (`brand.ts`)
Foundation tokens with raw values. **Do not use directly in components.**

- Colors: Brand-specific colors (yellow, pink, blue, white)
- Typography: Font family, sizes, weights
- Spacing: Base values, gaps, padding
- Borders: Colors and stroke widths
- Radius: Border radius values

### 2. Alias Tokens (`alias.ts`)
Semantic tokens that reference Brand tokens. **Use these for semantic meaning.**

- Colors: Foreground, background, interface colors
- Typography: Complete type styles (display, heading, body, caption)

### 3. Mapped Tokens (`mapped.ts`)
Component-specific tokens that reference Alias tokens. **Use these in components.**

- Colors: Component-specific color mappings
- Spacing: Component-specific spacing (when needed)

## Usage

### Importing Tokens

```typescript
import { tokens } from './tokens';
import { aliasTokens } from './tokens';
import { getTypographyCSS } from './tokens';
```

### Using Colors

```typescript
// ✅ Good - Use Alias or Mapped tokens
const primaryColor = tokens.alias.color.foreground.primary;
const surfaceColor = tokens.mapped.color.surface;

// ❌ Bad - Don't use Brand tokens directly
const whiteColor = tokens.brand.color['brand/white/0']; // Don't do this
```

### Using Typography

```typescript
import { getTypographyCSS } from './tokens';

// Get CSS properties for a typography token
const headingStyles = getTypographyCSS(tokens.alias.typography['heading-regular']);

// Use in component
<div style={headingStyles}>Heading Text</div>
```

### Using Spacing

```typescript
// Use spacing tokens
const gap = tokens.brand.spacing.gap.M; // 8
const padding = tokens.brand.spacing.padding.L; // 16
```

### Using with Tailwind CSS

The tokens are automatically available in Tailwind via the theme configuration:

```tsx
// Colors
<div className="bg-background-primary text-foreground-primary">
  Content
</div>

// Typography
<h1 className="text-heading-regular font-bold">
  Heading
</h1>

// Spacing
<div className="gap-gap-m p-padding-l">
  Content
</div>

// Border
<div className="border-stroke border-color-medium rounded-s">
  Content
</div>
```

### Using CSS Custom Properties

CSS custom properties are available in `:root`:

```css
.my-component {
  color: var(--color-foreground-primary);
  background-color: var(--color-background-secondary);
  padding: var(--spacing-padding-m);
  border-radius: var(--radius-s);
}
```

## Token Path Reference

### Brand Tokens
- `tokens.brand.color['brand/yellow/800']`
- `tokens.brand.typography.fontFamily`
- `tokens.brand.spacing.gap.M`
- `tokens.brand.border.strong`
- `tokens.brand.radius.S`

### Alias Tokens
- `tokens.alias.color.foreground.primary`
- `tokens.alias.color.background.secondary`
- `tokens.alias.typography['heading-regular']`
- `tokens.alias.typography['body-regular']`

### Mapped Tokens
- `tokens.mapped.color.surface`
- `tokens.mapped.color['input-field/foreground']`
- `tokens.mapped.color['panel/level1']`

## Helper Functions

### `getToken(path: string)`
Get a token by dot-notation path:

```typescript
import { getToken } from './tokens';

const color = getToken('alias.color.foreground.primary');
```

### `getCSSCustomProperties()`
Get all tokens as CSS custom properties object:

```typescript
import { getCSSCustomProperties } from './tokens';

const cssProps = getCSSCustomProperties();
// Use in inline styles or inject into document
```

### `getTypographyCSS(token)`
Get CSS properties for a typography token:

```typescript
import { getTypographyCSS, aliasTokens } from './tokens';

const styles = getTypographyCSS(aliasTokens.typography['heading-regular']);
```

## Best Practices

1. **Never use Brand tokens directly** - Always use Alias or Mapped tokens
2. **Use semantic names** - Prefer `foreground.primary` over `brand.white.0`
3. **Use Mapped tokens for components** - When component-specific tokens exist, use them
4. **Maintain the hierarchy** - Changes to Brand tokens cascade through the system
5. **Type safety** - Use TypeScript types to ensure correct token usage

## Adding New Tokens

1. **Brand tokens**: Add to `brand.ts` as raw values
2. **Alias tokens**: Add to `alias.ts`, referencing Brand tokens
3. **Mapped tokens**: Add to `mapped.ts`, referencing Alias tokens
4. **Update Tailwind**: Add to `tailwind-theme.js` if needed for Tailwind usage
5. **Update CSS**: Add CSS custom properties to `src/index.css` if needed

## Type Safety

All tokens are fully typed. Use TypeScript autocomplete to discover available tokens:

```typescript
tokens.alias.color.foreground. // Autocomplete shows: primary, tertiary, default, accent
```
