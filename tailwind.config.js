/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // The warm red from the logo background
        'brand-red': '#D32F2F',
        // The golden yellow from the smile accent
        'brand-yellow': '#E4B460',
        // The creamy off-white from the text
        'brand-cream': '#F3EFE0',
        // A dark text color for light backgrounds
        'brand-dark': '#2C2A2A',
        // Extended palette for consistency
        primary: {
          DEFAULT: '#D32F2F', // brand-red
          light: '#E57373',
          dark: '#B71C1C',
        },
        accent: {
          DEFAULT: '#E4B460', // brand-yellow
          light: '#FFD54F',
          dark: '#AF8C4F',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        arabic: ['Noto Sans Arabic', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 