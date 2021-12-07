module.exports = {
  purge: [
    "./pages/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./pages/**/**/*.{ts,tsx}",
    "./pages/**/**/**/*.{ts,tsx}",
    "./pages/**/**/**/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./components/**/**/*.{ts,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkgray: "#242424",
        darkcalmblue: "#2E51A2",
        calmblue: "#1B7AC2",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
