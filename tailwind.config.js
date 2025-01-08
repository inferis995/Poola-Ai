/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFD700', // Yellow
          hover: '#FFC000',
        },
        secondary: {
          DEFAULT: '#22C55E', // Green
          hover: '#16A34A',
        }
      }
    },
  },
  plugins: [],
};