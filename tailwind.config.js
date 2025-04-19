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
        creamyTexture: "rgba(255, 239, 211, 1)",
        grey: "rgb(75, 85, 99)",
        blue: "rgb(96,165,250)",
        magenta: "rgb(255,99,130)",
        "deep-gray": "rgb(17, 24, 39)",
        "lighter-gray": "rgba(229, 231, 235,1)",
        "light-gray": "rgb(128, 128, 128)",
        "slate-gray": "rgb(55, 65, 81)",
        "charcoal-gray": "rgb(31, 41, 55)",
        "dark-muted-red": "rgb(192,57,43)",
      },
      backgroundImage: {
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
        "custom-gradient6":
          "linear-gradient(to bottom right, #60a5fa, #be185d)",
      },
      boxShadow: {
        "custom-inset1":
          "inset -5px -5px 14px #044235, inset 5px 5px 14px #10ffd5",
        "custom-inset2":
          "inset -5px -5px 22px #02153b, inset 5px 5px 22px #0000",
      },
      screens: {
        xsm: "425px",
        "3xl": "2560px",
      },
    },
  },
  plugins: [],
};
