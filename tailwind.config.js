/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './index.tsx',
    './App.tsx',
    './ProductDemo.tsx',
    './constants.ts',
    './vite-plugin-bodybake.ts',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Newsreader Variable"', 'Newsreader', 'Georgia', 'serif'],
        sans: ['"IBM Plex Sans Variable"', '"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono Variable"', '"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        navy: {
          950: '#020B29',
          900: '#07143A',
          800: '#0E1F4F',
        },
        copper: {
          light: '#FFC08B',
          soft: '#F0975A',
          DEFAULT: '#E68249',
          dark: '#B95122',
          deep: '#993F17',
        },
      },
    },
  },
  plugins: [],
};
