/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage:{
heroimg: "url('/images/hero-img.jpg')"
      },
      fontFamily:{
        bebas: ['BebasFont'],
         textBasic: ['Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
};
