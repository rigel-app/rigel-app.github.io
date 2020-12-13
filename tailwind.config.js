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
          light: '#1f2023',
          DEFAULT: '#1f2023',
          dark: '#1f2023',
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
