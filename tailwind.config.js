/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'bg-white-main':'#f6f7f8',
        'primary-color':'#00abcf',
        'primary-black':'#2c3f50'
      },
      width:{
        '2/7':'25%'
      }
    },
  },
  plugins: [],
}