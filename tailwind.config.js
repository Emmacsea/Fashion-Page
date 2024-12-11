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
        'headerhme-img': `url(${path.resolve(__dirname, 'src/assets/FASHION JPG/clarisse-meyer-d6pLNFVZt_4-unsplash.jpg')})`,
        'home-img': `url(${path.resolve(__dirname, 'src/assets/FASHION JPG/tamara-bellis-IwVRO3TLjLc-unsplash.jpg')})`,
        'home2-img': `url(${path.resolve(__dirname, 'src/assets/FASHION JPG/freestocks-_3Q3tsJ01nc-unsplash.jpg')})`,
        'homefoot-img': `url(${path.resolve(__dirname, 'src/assets/FASHION JPG/thom-bradley-mwa_nzFpnJw-unsplash.jpg')})`,
        'headerabt-img': `url(${path.resolve(__dirname, 'src/assets/FASHION JPG/alyssa-strohmann-TS--uNw-JqE-unsplash.jpg')})`,
        'about-img': `url(${path.resolve(__dirname, 'src/assets/FASHION JPG/bryanfoto-Z2u8hseVlZc-unsplash.jpg')})`,
        'headercont-img': `url(${path.resolve(__dirname, 'src/assets/FASHION JPG/marcus-loke-xXJ6utyoSw0-unsplash.jpg')})`,
        'cont-map': `url(${path.resolve(__dirname, 'src/assets/FASHION JPG/map.png')})`,
        'footer-img': `url(${path.resolve(__dirname, 'src/assets/FASHION JPG/farol-106-JlriaTaLavA-unsplash.jpg')})`,
      }
    },
  },
  plugins: [],
}