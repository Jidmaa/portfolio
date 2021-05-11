const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#222A36",
      white: "#FFFFFF",
      secondary: "#3AAFC9",
      inverted: "#5F646C",
    },
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        picture: "url('picture.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
