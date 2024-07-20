/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        "primary": "#F4D1AE",
        "secondary": "#e8a565",
        "terceary": "#e65353",
        "cuarty": "#66101f",
        "quinty": "#ffffff"
      },
      height:{
        "136px": "136px",
      },
    },
  },
  plugins: [],
}

