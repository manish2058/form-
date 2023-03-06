/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        clr_Primary: "hsl(0, 100%, 74%)",
        clr_Secondary: "hsl(154, 59%, 51%)",
        clr_Accent: "hsl(248, 32%, 49%)",
        clr_Netural_1: "hsl(249, 10%, 26%)",
        clr_Netural_2: "hsl(246, 25%, 77%)",
      },

      fontFamily: {
        popins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
