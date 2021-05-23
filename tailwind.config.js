module.exports = {
  important: true,
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '30': '7.5rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
 };
