/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "rgb(253, 200, 1)",
        secondary: "rgba(29, 29, 27, 1) ",
        tertiary: "rgba(233, 78, 27, 1)",
        tertiaryRed: "rgba(191, 47, 0, 1)",
        ironGray: "rgb(95, 94, 94)",
        glassMedium: "rgba(255, 255, 255, 0.4)",
        bodyBg: "rgba(242, 246, 249, 1)",
        "creamy-texture": "rgba(255, 239, 211, 1)",
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
        "slate-gray": "rgb(55, 65, 81)",
        "charcoal-gray": "rgb(31, 41, 55)",
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
        "custom-gradient":
          "linear-gradient(269.67deg, rgba(50, 50, 49, 0) -0.85%, rgba(29, 29, 27, 0.516785) 47.2%, #1D1D1B 100.71%)",
        "custom-gradient2":
          "linear-gradient(106.11deg, #E94E1B 0.6%, #FFFFFF 54.16%, #FDC801 98.88%)",
        "custom-gradient3":
          " linear-gradient(180deg, #E94E1B 0%, #FDC801 100%)",
        "custom-gradient4":
          "linear-gradient(106.11deg, #E94E1B 0.6%, #FFFFFF 54.16%, #FDC801 98.88%)",
        "custom-gradient5":
          "linear-gradient(101.49deg,rgb(235, 95, 49) 0.92%, #FDC801 96.93%)",
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
