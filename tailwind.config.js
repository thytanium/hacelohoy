import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
