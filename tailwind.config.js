const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'tabs': ['AT Arges Black Cond', 'ui-sans-serif', 'system-ui'],
    },
    backgroundImage: {
      'button': "url('./assets/button.svg')"
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      gray: {
        60: '#757575',
        70: '#808080',
        500: '#171617',
      },
      indigo: colors.indigo,
      red: colors.red,
      yellow: colors.amber,
      green: {
        50: '#00FFC2',
        '50h': 'rgba(0,255,194,0.5)',
      },
      pink: {
        50: '#FF79C9',
        70: '#AC0167',
        80: '#98015B',
        '80h': 'rgba(152,1,91,0.5)',
      },
      blue: colors.blue,
      orange: colors.orange,
      black: colors.black,
      red: colors.red,
    },
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      zIndex: {
        '-10': '-10',
        '999': '999',
        '1100': '1100',
      },
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
      navbar: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '15': '15px',
      '12': '12px',
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked', 'active', 'hover'],
      borderColor: ['checked'],
    },
  },
  plugins: [],
}
