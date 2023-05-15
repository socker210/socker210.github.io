const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['src/**/*.tsx'],
  darkMode: false,
  theme: {
    fontFamily: {
      primary: ['Poppins', ...defaultTheme.fontFamily.sans],
      secondary: [...defaultTheme.fontFamily.sans],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        DEFAULT: '#d30cb8',
        dark: '#9d0088',
        light: '#ff59eb',
      },
      secondary: {
        DEFAULT: '#6df1d8',
        dark: '#2ebea7',
        light: '#a4ffff',
      },
      background: '#b8aec8',
      surface: '#b8aec8',
      error: '#b00020',
      on: {
        primary: {
          DEFAULT: '#ffffff',
          dark: '#000000',
          light: '#ffffff',
        },
        secondary: {
          DEFAULT: '#000000',
          dark: '#000000',
          light: '#000000',
        },
        background: '#000000',
        surface: '#000000',
        error: '#ffffff',
      },
    },
    extend: {
      zIndex: {
        '-1': '-1',
      },
      boxShadow: {
        'secondary-lg': '0 0 20px rgb(109, 241, 216, 0.5)',
      },
      transitionProperty: {
        'height': 'height',
      },
    },
  },
  variants: {
    extend: {},
  },
}
