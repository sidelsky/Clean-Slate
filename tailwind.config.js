/** @type {import('tailwindcss').Config} */
import tailwindTheme from './src/tokens/tailwind-theme.js';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: tailwindTheme,
  },
  plugins: [],
}
