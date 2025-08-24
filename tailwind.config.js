/** @type {import('tailwindcss').Config} */

import { fontFamily } from 'tailwindcss/defaultTheme';

module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
    content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Modo claro
        'bg-primary': '#ffffff',
        'bg-secondary': '#f3f4f6',
        'bg-tertiary': '#e5e7eb',
        'text-primary': '#111827',
        'text-secondary': '#4b5563',
        'accent': '#2563eb',

        // Modo escuro
        'dark-bg-primary': '#0a0a0a',
        'dark-bg-secondary': '#1f2937',
        'dark-bg-tertiary': '#374151',
        'dark-text-primary': '#f3f4f6',
        'dark-text-secondary': '#9ca3af',
        'dark-accent': '#60a5fa',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', ...fontFamily.sans],
      },
    },
  },
  darkMode: 'class',
  safelist: [
  'bg-bg-primary',
  'bg-bg-secondary',
  'bg-bg-tertiary',
  'text-text-primary',
  'text-text-secondary',
  'text-accent',
  'dark:bg-dark-bg-primary',
  'dark:bg-dark-bg-secondary',
  'dark:bg-dark-bg-tertiary',
  'dark:text-dark-text-primary',
  'dark:text-dark-text-secondary',
  'dark:text-dark-accent',
],
  plugins: [],
};
