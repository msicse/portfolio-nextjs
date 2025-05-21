/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4F46E5', // indigo-600
          dark: '#6366F1', // indigo-500 for dark mode
        },
        secondary: {
          light: '#1F2937', // gray-800
          dark: '#F9FAFB', // gray-50 for dark mode
        },
        background: {
          light: '#FFFFFF',
          dark: '#111827', // gray-900 for dark mode
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}