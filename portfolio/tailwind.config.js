/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Nord-inspired palette
        nord: {
          dark: '#2E3440',
          darker: '#242933',
          surface: '#3B4252',
          highlight: '#434C5E',
          text: '#D8DEE9',
          subtext: '#E5E9F0',
          accent: '#88C0D0', // Frost
          primary: '#81A1C1', // Frost Blue
          success: '#A3BE8C', // Aurora Green
          warning: '#EBCB8B', // Aurora Yellow
          error: '#BF616A', // Aurora Red
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
