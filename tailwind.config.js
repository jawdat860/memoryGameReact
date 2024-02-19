/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Montserrat: ["Montserrat"],
    },
    extend: {
      colors: {
        grey_me: "#343a40 ",
      },
    },
  },

  plugins: [],
};
