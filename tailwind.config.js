/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"], 
      },
      colors: {
        "sky-blue": "rgb(96, 165, 250)",
        "cold-blue": "rgb(64,110,131)",
        "deep-blue": "rgb(13,57,84)",
        "dusty-navy": "rgb(45, 75, 88)",
        "material-blue-500": "rgb(33, 150, 243)",
        "light-blue": "rgb(0, 71, 138)",
        "deeper-magenta ": "rgb(190, 24, 93)",
        "deep-gray": "rgb(17, 24, 39)",
        "lighter-gray": "rgba(229, 231, 235,1)",
        "light-gray": "rgb(128, 128, 128)",
        "slate-gray":"rgb(55, 65, 81)",
        "charcoal-gray":"rgb(31, 41, 55)",
        grey: "rgb(75, 85, 99)",
        lavender: "rgb(138, 101, 179)",
        "light-green": "rgba(5, 150, 105, 1)",
        "seafoam-green": "rgb(10, 164, 133)",
        "yellow-cream": "rgb(255, 253, 231)",
        yellow: "rgb(255, 200, 50)",
        "light-yellow": "rgb(255, 241, 118)",
        purple: "rgb(106, 27, 154)",
        "dark-muted-red": "rgb(192,57,43)",
        "light-red": "rgba(248, 113, 113, 1)",
        "dark-red": "rgb(183, 28, 28)",
        "deep-amber": "rgb(120, 53, 15)",
        "dark-violet": "rgb(100, 0, 128)",
        "deep-tealGreen": "rgb(4, 78, 65)",
      },
      backgroundImage: {
        "navbar-bgGradient":
          "linear-gradient(to bottom right, rgb(96, 165, 250), rgb(190, 24, 93))",
      },
      boxShadow: {
        "custom-inset1":
          "inset -5px -5px 14px #044235, inset 5px 5px 14px #10ffd5",
        "custom-inset2":
          "inset -5px -5px 22px #02153b, inset 5px 5px 22px #0000",
      },
      screens: {
        xsm: "425px",
      },
    },
  },
  plugins: [],
};
