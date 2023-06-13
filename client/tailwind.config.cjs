/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: ["open sans"],
    },
    screens: {
      sm: "425px",
      lg: "992px",
      md: "825px",
      xl: "1200px",
      xxl: "1500px",
    },
    extend: {
      animation: {
        "updown-slow": "updown 2.5s infinite alternate",
        "updown-fast": "updown 1.5s infinite alternate",
        "left-right": "leftright 1.5s infinite alternate",
      },
      keyframes: {
        updown: {
          "0%": { transform: "translatey(0)" },
          "100%": { transform: "translatey(-10px)" },
        },
        leftright: {
          "0%": { transform: "translatex(0)" },
          "100%": { transform: "translatex(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
