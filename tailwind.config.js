const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './pages/**/*.{js,jsx,tsx}',
    './components/**/*.{js,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#D1D5DB',
          300: '#2D2F34',
          400: '#292B2F',
          500: '#202225',
          600: '#1A1C1E',
          700: '#16181A',
        },
        burple: '#7289da'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif', ...defaultTheme.fontFamily.sans]
      }
    },
  }
}
