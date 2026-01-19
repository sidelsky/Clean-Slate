# Design Token Structure Summary
## SMARTY Design System - Clean Slate

### Overview
This document summarizes the design token structure from the Figma file, focusing on the connection points between variable collections: **Brand**, **Alias**, and **Mapped** collections.

---

## Variable Collection Architecture

### 1. Brand Collection (Primitives)
The **Brand Collection** contains the foundational design tokens - raw values that define the core design language.

#### Color Primitives
- **Brand Colors:**
  - `color/brand/yellow/800`: `#ffd67d`
  - `color/brand/pink/800`: `#f0b5e8`
  - `color/brand/blue/800`: `#82c7ff`
  - `color/brand/white/0`: `#ffffff`

#### Typography Primitives
- **Font Family:**
  - `typography/font-family`: `"Kollektif"`

- **Font Sizes:**
  - `typography/display/1/font-size`: `80`
  - `typography/caption/1/font-size`: `14`
  - `typography/caption/2/font-size`: `12`
  - `Heading/Medium/font-size`: `36`
  - `Heading/X-Small/font-size`: `24`
  - `Body/Medium/font-size`: `16`
  - `Caption/Medium/font-size`: `12`
  - `Caption/Large/font-size`: `14`

- **Font Weights:**
  - `typography/display/1/font-weight`: `Bold` (700)
  - `typography/caption/1/font-weight`: `Regular` (400)
  - `typography/caption/2/font-weight`: `Regular` (400)
  - `Heading/Large/font-weight`: `Bold` (700)
  - `Heading/X-Small/font-weight`: `Bold` (700)
  - `Body/Medium/font-weight`: `Regular` (400)
  - `Caption/Medium/font-weight`: `Regular` (400)

#### Spacing Primitives
- **Base Spacing:**
  - `spacing/base/size-4`: `4`
  - `spacing/base/size-8`: `8`
  - `spacing/base/size-12`: `12`

- **Gap Values:**
  - `gap/S`: `4`
  - `gap/M`: `8`
  - `gap/L`: `12`
  - `gap/XL`: `16`
  - `gap/XXL`: `32`
  - `gap/3XL`: `48`

- **Padding Values:**
  - `padding/S`: `8`
  - `padding/M`: `12`
  - `padding/L`: `16`
  - `padding/XL`: `32`
  - `padding/XXL`: `48`

#### Border Primitives
- `border/strong`: `#bebec0`
- `border/medium`: `#5a666d`
- `stroke`: `2`

#### Radius Primitives
- `cornerRadius/S`: `2`
- `cornerRadius/full`: `9999`

#### Other Primitives
- `icon-size`: `32`
- `min-height`: `48`

---

### 2. Alias Collection (Semantic Tokens)
The **Alias Collection** provides semantic meaning by referencing Brand tokens. These tokens create an abstraction layer that allows for easier theming and context-specific usage.

#### Semantic Color Aliases
- **Foreground:**
  - `foreground/primary`: `#ffffff` (maps to `color/brand/white/0`)
  - `foreground/tertiary`: `#32373d`
  - `foreground`: `#ffffff`
  - `foreground-accent`: `#8fd6c9`
  - `input field/foreground`: `#ffffff`

- **Background:**
  - `background/primary`: `#292e33`
  - `background/secondary`: `#32373d`
  - `background/tertiary`: `#3c454a`
  - `surface`: `#32373d`
  - `panel/level1`: `#32373d`

- **Interface Colors:**
  - `Interface/Primary Green`: `#8ED6C9` (similar to `foreground-accent`)

#### Typography Aliases (Composite Tokens)
Typography aliases combine multiple primitive tokens to create complete type styles:

- **Display Styles:**
  - `⛔️ _Primitives/Display 1`: 
    - References: `typography/font-family`, `typography/display/1/font-weight`, `typography/display/1/font-size`
    - Properties: `Font(family: "typography/font-family", style: typography/display/1/font-weight, size: typography/display/1/font-size, weight: 700, lineHeight: 1.2, letterSpacing: 0)`

- **Heading Styles:**
  - `Heading/Regular`: 
    - References: `typography/font-family`, `Heading/Large/font-weight`, `Heading/Medium/font-size`
    - Properties: `Font(family: "typography/font-family", style: Heading/Large/font-weight, size: Heading/Medium/font-size, weight: 700, lineHeight: 1.2, letterSpacing: -2)`
  
  - `Heading/X-Small`: 
    - References: `typography/font-family`, `Heading/X-Small/font-weight`, `Heading/X-Small/font-size`
    - Properties: `Font(family: "typography/font-family", style: Heading/X-Small/font-weight, size: Heading/X-Small/font-size, weight: 700, lineHeight: 1.2, letterSpacing: -2)`

- **Body Styles:**
  - `Body/Regular`: 
    - References: `typography/font-family`, `Body/Medium/font-weight`, `Body/Medium/font-size`
    - Properties: `Font(family: "typography/font-family", style: Body/Medium/font-weight, size: Body/Medium/font-size, weight: 400, lineHeight: 1.2, letterSpacing: -2)`
  
  - `Body/Regular (Bold)`: 
    - References: `typography/font-family`, `Bold`, `Body/Medium/font-size`
    - Properties: `Font(family: "typography/font-family", style: Bold, size: Body/Medium/font-size, weight: 700, lineHeight: 1, letterSpacing: -2)`

- **Caption Styles:**
  - `Caption/Regular`: 
    - References: `typography/font-family`, `Caption/Medium/font-weight`, `Caption/Large/font-size`
    - Properties: `Font(family: "typography/font-family", style: Caption/Medium/font-weight, size: Caption/Large/font-size, weight: 400, lineHeight: 1.2, letterSpacing: -1)`
  
  - `Caption/Small`: 
    - References: `typography/font-family`, `Caption/Medium/font-weight`, `Caption/Medium/font-size`
    - Properties: `Font(family: "typography/font-family", style: Caption/Medium/font-weight, size: Caption/Medium/font-size, weight: 400, lineHeight: 1.2, letterSpacing: -2)`

- **Primitive Caption Styles:**
  - `⛔️ _Primitives/Caption 1`: 
    - References: `typography/font-family`, `typography/caption/1/font-weight`, `typography/caption/1/font-size`
    - Properties: `Font(family: "typography/font-family", style: typography/caption/1/font-weight, size: typography/caption/1/font-size, weight: 400, lineHeight: 1.2, letterSpacing: 0)`
  
  - `⛔️ _Primitives/Caption 2`: 
    - References: `typography/font-family`, `typography/caption/2/font-weight`, `typography/caption/2/font-size`
    - Properties: `Font(family: "typography/font-family", style: typography/caption/2/font-weight, size: typography/caption/2/font-size, weight: 400, lineHeight: 1.2, letterSpacing: 0)`

---

### 3. Mapped Collection (Component-Specific Tokens)
The **Mapped Collection** contains tokens that are mapped to Alias tokens for use in specific component contexts. These tokens provide the final layer of abstraction, connecting semantic tokens to actual component usage.

#### Component Mapping Pattern
The mapping follows this hierarchy:
```
Brand (Primitives) → Alias (Semantic) → Mapped (Component-Specific)
```

**Example Flow:**
1. **Brand Level:** `color/brand/white/0` = `#ffffff`
2. **Alias Level:** `foreground/primary` → references `color/brand/white/0`
3. **Mapped Level:** `input field/foreground` → references `foreground/primary`

#### Component-Specific Mappings Observed
- `input field/foreground` → maps to `foreground/primary` → maps to `color/brand/white/0`
- `panel/level1` → maps to `background/secondary` → maps to `#32373d`
- `surface` → maps to `background/secondary` → maps to `#32373d`

---

## Connection Points Between Collections

### 1. Brand → Alias Connection
**Pattern:** Brand tokens provide raw values that Alias tokens reference semantically.

**Examples:**
- `color/brand/white/0` (`#ffffff`) → `foreground/primary`
- `typography/font-family` (`"Kollektif"`) → Used in all typography aliases
- `spacing/base/size-4` (`4`) → `gap/S`

### 2. Alias → Mapped Connection
**Pattern:** Alias tokens provide semantic meaning that Mapped tokens use in component contexts.

**Examples:**
- `foreground/primary` → `input field/foreground`
- `background/secondary` → `surface`, `panel/level1`

### 3. Typography Composite Pattern
**Pattern:** Typography tokens demonstrate a special multi-level reference pattern where composite tokens reference multiple primitives.

**Example:**
```
⛔️ _Primitives/Display 1
  ├─ family: typography/font-family (Brand)
  ├─ style: typography/display/1/font-weight (Brand)
  └─ size: typography/display/1/font-size (Brand)
```

---

## Token Naming Conventions

### Brand Collection
- Format: `category/subcategory/value` or `category/subcategory/level`
- Examples: `color/brand/yellow/800`, `typography/display/1/font-size`

### Alias Collection
- Format: `semantic-category/variant` or `Component/Style`
- Examples: `foreground/primary`, `Heading/Regular`, `Body/Medium`

### Mapped Collection
- Format: `component/attribute` or `context/attribute`
- Examples: `input field/foreground`, `panel/level1`

---

## Key Observations

1. **Three-Tier Architecture:** The system uses a clear three-tier structure (Brand → Alias → Mapped) that allows for:
   - Easy theming (change Brand values)
   - Semantic clarity (Alias provides meaning)
   - Component flexibility (Mapped provides context)

2. **Typography Complexity:** Typography tokens use a composite pattern where style tokens reference multiple primitive tokens (family, weight, size) and combine them with additional properties (lineHeight, letterSpacing).

3. **Color System:** The color system shows both direct brand colors and semantic aliases, with some interface-specific colors that may bridge between collections.

4. **Spacing System:** Spacing uses both base values and semantic names (gap, padding), suggesting a flexible spacing system that can be used contextually.

5. **Naming Indicators:** The `⛔️` emoji prefix on some primitive tokens suggests these are internal/primitives that may not be directly used in components but serve as building blocks.

---

## Recommendations for Implementation

1. **Maintain the Hierarchy:** When implementing in code, preserve the three-tier structure to maintain flexibility.

2. **Type Safety:** Create TypeScript types that enforce the token hierarchy and prevent direct use of Brand tokens in components.

3. **Documentation:** Document which Alias tokens map to which Brand tokens, and which Mapped tokens use which Alias tokens.

4. **Theming Support:** The Alias layer makes theming easier - changing Brand values will cascade through the system.

5. **Typography System:** Implement a typography system that can compose tokens similar to the Figma structure, allowing for easy creation of new type styles from primitives.

---

*Generated from Figma file: SMARTY-DS--CleanSlate-*
*Node ID: 2609:22398*
*Date: 2025*
