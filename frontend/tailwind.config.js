// See https://tailwindcss.com/docs/configuration for details
const colors = require('tailwindcss/colors')
  
module.exports = {
   theme: {
      extend: {
        colors: {
          BEred: "#FF0F0F",
          BEblack: "#0000",
          BEwhite: "#FFFFFF",
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
  purge: ["./src/**/*.js"],
  // https://github.com/tailwindlabs/tailwindcss-forms
  plugins: [
    require("@tailwindcss/forms"),
    // require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
 