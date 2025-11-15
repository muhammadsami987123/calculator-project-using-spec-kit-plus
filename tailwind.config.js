/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        darkBackground: '#1a1a2e',
        darkCard: '#16213e',
        darkText: '#e0e0e0',
        darkAccent: '#0f3460',
        darkHighlight: '#e94560',
      },
    },
  },
  plugins: [],
}