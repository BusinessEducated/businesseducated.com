// See https://tailwindcss.com/docs/configuration for details
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      colors: {
        BEred: '#FF0F0F',
        BEblack: '#0000',
        BEwhite: '#FFFFFF',
        cyan: colors.cyan,
        orange: colors.orange,
      },
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
    }),
  },
  variants: {
    backgroundColor: ['active'],
  },
  divideStyle: true,
  preflight: true,
  content: [
    './src/**/**/*.html',
    './src/**/**/*.js',
    './src/**/**/*.jsx',
    './public/**/**/*.html',
    './public/**/**/*.js',
    './public/**/**/*.jsx',
  ],
  // purge: ['./src/**/*.js'],
  // https://github.com/tailwindlabs/tailwindcss-forms
  plugins: [
    require('@tailwindcss/forms'),
    require('autoprefixer'),
    require('postcss'),
    require('tailwindcss'),
    // require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
