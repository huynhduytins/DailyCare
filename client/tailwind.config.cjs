/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: ["open sans"],
    },
    screens: {
      lg: "992px",
      md: "825px",
    },
    extend: {},
  },
  plugins: [],
};
