/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage:{
        "bg-auth":"url('https://i.ibb.co/TWkf8wD/20231120101558-1-1.jpg')",
      },
      colors:{
        "blackDemon": "#18272a",
        "blackDemon-500": "#151B23",
        "redDemon": "#c7475a",
        "redDemon-500": "#bf4e5f",
        "whiteDemon": "#e8ddd0",
        "violetDemon": "#582533",
        "roseDemon": "#c287c2"
      },
      height:{
        "1056": "1056px",
        "500": "500px",
        "600": "635px",
        "400":"432px",
        "200": "272px",
        "253": "253.34px",
        "300": "315px",
        "75": "75%",
        "22": "22rem",
      },
      width:{
        "268":"268px",
        "320":"327.515px",
        "60":"60%"
      }
    },
  },
  plugins: [],
}

