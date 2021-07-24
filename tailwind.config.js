const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      bg: "#252525",
      text: "#E2DCC8",
      primary: "#B66449",
      inverted: "#5F646C",
    },
    extend: {
      fontFamily: {
        sans: ["HelveticaNeueCyr", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        picture: "url('noisy-background.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
