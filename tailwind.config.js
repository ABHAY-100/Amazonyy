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
      backgroundImage: {
        'sports': "url('/assets/sports.png')",
        'laptop': "url('/assets/laptop.png')",
        'chair-2': "url('/assets/chair-2.png')",
        'lamp': "url('/assets/lamp.png')",
        'cam-2': "url('/assets/camera-2.png')",
        'chair-1': "url('/assets/chair-1.png')",
      },
    },
  },
  plugins: [],
}

