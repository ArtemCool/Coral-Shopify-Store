/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/*.liquid",
    "./layout/*.liquid",
    "./sections/*.liquid",
    "./snippets/*.liquid",
    "./templates/*.liquid",
    "./templates/customers/*.liquid"
  ],
  theme: {
    extend: {
      colors: {
        main: '#f1f1f1',
        border: '#E3E3E3',
        collection_description: '#1E2832',
        hot_background: '#FF6F61'
      },
      fontFamily: {
        'poppins': ['Poppins'],
        'open_sans': ['"Open Sans"'],
        'roboto': ['Roboto']
      },
      height: {
        '105': '30rem',
        '58': '14.6rem'
      }
    }
  },
  plugins: [],
}
