/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      GilroyBold: ["Gilroy-Bold", "sans-serif"],
      GilroyBlack: ["Gilroy-Black", "sans-serif"],
    },
    colors: {
      gradColor1: "#0047FF",
      gradColor2: "#57048A",
      gradColorPink: "#fa26ca",
      gradColorBlue: "#712af9",
      white: "#fff",
      black: "#000",
      bgBlack: "#140C2D",
      lightGray: "#ddd6ed",
    },
    extend: {
      backgroundImage: {
        bgGradient1: "linear-gradient(135deg, var(--tw-gradient-stops))",
        bgGradient2: "linear-gradient(135deg, var(--tw-gradient-stops))",
        bgHeader: 'url("/images/banner-bg-2.jpg")',
      },
    },
  },
  plugins: [],
};
