/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage:{
heroimg: "url('./src/assets/images/hero-img.jpg')"
      },
      fontFamily:{
        bebas: ['BebasFont']
      }
    },
  },
  plugins: [],
};