/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.html'],
  theme: {
    extend: {
      colors: {
        primary:'#FF6363',
        secondary:
        {
          100:'#808080'
        }
      },
      fontFamily:{
        'body':['Nunito']

      }
    },
  },
  plugins: [],
}
