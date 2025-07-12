/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': '#D32F2F',
        'brand-yellow': '#E4B460',
        'brand-cream': '#F3EFE0',
        'brand-dark': '#2C2A2A',
        primary: {
          DEFAULT: '#D32F2F',
          dark: '#B71C1C',
        },
        accent: {
          DEFAULT: '#E4B460',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        arabic: ['Tajawal', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}; 