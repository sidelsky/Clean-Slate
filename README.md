# React Button Component

A modern, reusable React button component with TypeScript support.

## Features

- Multiple variants: `primary`, `secondary`, `outline`
- Three sizes: `small`, `medium`, `large`
- Disabled state support
- TypeScript support
- Tailwind CSS styling (modern, accessible design)
- Fully customizable via className prop

## Usage

```tsx
import Button from './Button';

function App() {
  return (
    <Button onClick={() => console.log('Clicked!')} variant="primary">
      Click Me
    </Button>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | required | Button content |
| `onClick` | `() => void` | `undefined` | Click handler |
| `variant` | `'primary' \| 'secondary' \| 'outline'` | `'primary'` | Button style variant |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Button size |
| `disabled` | `boolean` | `false` | Disabled state |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | Button type |
| `className` | `string` | `''` | Additional CSS classes |

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```
