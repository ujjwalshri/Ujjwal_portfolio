/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        base : '#222831',
        textColor: '#EEEEEE',
        buttonColor: '#053B50',
        hoverColor: '#237c74'

      }
     
    },
  },
  plugins: [],
}

