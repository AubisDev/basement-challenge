module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      mont: ["Montserrat", "sans-serif"],
    },
    extend: {
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": {transform: "translateX(0%)"},
          "100%": {transform: "translateX(-100%)"},
        },
        marquee2: {
          "0%": {transform: "translateX(100%)"},
          "100%": {transform: "translateX(0%)"},
        },
      },
      height: {
        hcard: "800px",
        cart: "600px",
      },
      width: {
        wd90: "90%",
      },
      colors: {
        shadcard: "#1a1a1a",
        shadcard2: "#131313",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
