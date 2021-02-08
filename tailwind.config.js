const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // primary: {
        //   light: '#5e6dcb',
        //   DEFAULT: '#5e6dcb',
        //   dark: '#5e6dcb',
        // },
        primary: {
          light: '#4597d8',
          DEFAULT: '#4597d8',
          dark: '#4597d8',
        },
        darkbackg: {
          light: '#131313',
          DEFAULT: '#131313',
          dark: '#131313',
        },
        blogbackg: {
          light: '#000',
          DEFAULT: '#000',
          dark: '#000',
        },
      }
    }
  },
  corePlugins: {
  },
  variants: {
    extend: {},
  },
  plugins: [],

}
