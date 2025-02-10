/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}', 
    './public/index.html',
  ],
  theme: {
    extend: {
      colors:{
        primary:'#ff5252'
      }
    },
  },
  plugins: [],
}