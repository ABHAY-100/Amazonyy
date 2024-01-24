/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        'red-hat-display': ['Red Hat Display', 'sans-serif'],
      },
      colors: {
        'amazon-not-black': '#221F1F',
        'amazon-pure-white': '#FFFFFF',
        'amazon-not-white': '#F9F9F9',
      },
    },
  },
  plugins: [],
}

