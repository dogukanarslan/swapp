/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#ffe81f',
      },
      fontFamily: {
        body: 'Roboto',
      },
    },
  },
  plugins: [],
}
