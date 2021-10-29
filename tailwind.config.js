module.exports = {
  purge: {
    content: [
      './components/**/*.vue',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './validators/*.js',
      './slices/**/*.vue',
    ],
  },
  theme: {
    inset: {
      0: 0,
      10: '10px',
      50: '50px',
      '1/2': '50%',
    },
    extend: {
      fontFamily: {
        display: ['EB Garamond', 'serif'],
        body: ['EB Garamond', 'serif'],
      },
      colors: {
        primary: {
          100: '#edece9',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#161619',
          1000: '#0e0e0e',
        },
        minHeight: {
          0: '0',
          '1/4': '25vh',
          '1/2': '50vh',
          '3/4': '75vh',
          full: '100vh',
        },
      },
      fill: {
        none: 'none',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked', 'even'],
      borderColor: ['checked'],
    },
    opacity: ({ after }) => after(['disabled']),
    borderStyle: ['last', 'first'],
    borderWidth: ['first'],
  },
}