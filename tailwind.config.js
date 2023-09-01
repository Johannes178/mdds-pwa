/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "400px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        "gm-orange-500": "#FFA5000",
        "gm-black": "#FF00000",
        "gm-white": "#FFFFFF",
      },
    },
  },
  plugins: [],
};
