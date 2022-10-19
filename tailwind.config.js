module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif']
      },
      colors: {
        'primary-color': {
            'light': '#5eead4',
            DEFAULT: '#2dd4bf',
            'dark': '#14b8a6'
        },
        'secondary-color': {
          DEFAULT: '#0c4a6e',
          '100': '#0a3a56'
        }
      }
    },
  },
  plugins: [],
}
