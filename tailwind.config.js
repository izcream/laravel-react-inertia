const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./resources/**/*.blade.php', './resources/**/*.ts', './resources/**/*.tsx'],
  theme: {
    fontFamily: {
      ...defaultTheme.fontFamily,
      sans: ["Outfit", "Noto Sans Thai", ...defaultTheme.fontFamily.sans]
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: colors.indigo[500],
          ...colors.indigo
        }
      }
    }
  },
  plugins: []
}
