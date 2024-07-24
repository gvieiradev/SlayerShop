/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        "cuarty": "#F4D1AE",
        "secondary": "#e8a565",
        "terceary": "#e65353",
        "primary": "#c81f26",
        "quinty": "#ffffff"
      },
      height:{
        "500": "500px",
      },
    },
  },
  plugins: [],
}

