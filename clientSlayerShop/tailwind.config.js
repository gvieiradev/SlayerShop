/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        "blackDemon": "#18272a",
        "redDemon": "#c7475a",
        "whiteDemon": "#e8ddd0",
        "violetDemon": "#582533",
        "roseDemon": "#c287c2"
      },
      height:{
        "500": "500px",
        "600": "635px",
        "200": "272px",
        "300": "315px",
        "75": "75%",
        "22": "22rem",
      },
      width:{
        "320":"327.515px",
        "60":"60%"
      }
    },
  },
  plugins: [],
}

