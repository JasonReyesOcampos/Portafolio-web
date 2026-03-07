/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,js}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#00d4aa',
        'brand-dark': '#00a887',
        'dark-base': '#040d0c',
        'dark-100': '#0d1f1c',
        'dark-200': '#162e2a',
        'dark-300': '#1f3d38',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
