/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./public/img/**/*.{png, jpg}"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['Plus Jakarta Sans', 'sans-serif']
      },
      colors: {
        'links': '#9A9EA6',
        'mainblue': '#4475F2',
        'secondblue': '#E3EBFD',
        'lightblue': '#23A6F0',
        'violetblue': '#4372EB',
        'inputfield': '#F0F1F2',
        'body': '#5E6282',
        'bodydark': '#252B42',
        'bodydark2': '#d3d3d3',
        'iconbox': '#EFE0B4',
        'iconbox2': '#EFF2F6'
      },
      padding: {
        'main': '22px 120px'
      },
    },
  },
  plugins: [],
}

