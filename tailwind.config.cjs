/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class', // ← CRITICAL: enable dark mode with class strategy
  theme: {
    extend: {},
  },
  plugins: [],
};
