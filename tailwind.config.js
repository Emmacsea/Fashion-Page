/** @type {import('tailwindcss').Config} */

const path = require(`path`);

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'headerabt-img': `url(${path.resolve(__dirname, 'src/assets/FASHION JPG/alyssa-strohmann-TS--uNw-JqE-unsplash.jpg')})`,
        'about-img': `url(${path.resolve(__dirname, 'src/assets/FASHION JPG/bryanfoto-Z2u8hseVlZc-unsplash.jpg')})`,
      }
    },
  },
  plugins: [],
}