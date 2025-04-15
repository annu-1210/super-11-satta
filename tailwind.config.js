/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"], // Add Roboto here
      },
      colors: {
        "sky-blue": "rgb(96, 165, 250)",
        "cold-blue": "rgb(64,110,131)",
        "deep-blue": "rgb(13,57,84)",
        "deeper-magenta ": "rgb(190, 24, 93)",
        "deep-gray": "rgb(17, 24, 39)",
        "lighter-gray": "rgba(229, 231, 235,1)",
        "light-gray": "rgb(128, 128, 128)",
        lavender: "rgb(138, 101, 179)",
        "light-green": "rgba(5, 150, 105, 1)",
        "yellow-cream": "rgb(255, 253, 231)",
        yellow: "rgb(255, 200, 50)",
        "light-yellow": "rgb(255, 241, 118)",
        purple: "rgb(106, 27, 154)",
        "dark-muted-red": "rgb(192,57,43)",
        "light-red": "rgba(248, 113, 113, 1)",
        "dark-red": "rgb(183, 28, 28)",
      },
      backgroundImage: {
        "navbar-bgGradient":
          "linear-gradient(to bottom right, rgb(96, 165, 250), rgb(190, 24, 93))",
      },
    },
  },
  plugins: [],
};
