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
      fb: "#4267b2",
      tw: "#1da1f3",
      yt: "#d03332",
    },
    extend: {
      backgroundImage: {
        bgGradient1: "linear-gradient(135deg, var(--tw-gradient-stops))",
        bgGradient2: "linear-gradient(135deg, var(--tw-gradient-stops))",
        bgGradient3:
          "linear-gradient(203.65deg, rgba(19, 7, 43, 0) 40.25%, rgba(19, 7, 43, 0.6) 86.29%)",
        bgGradient4: "linear-gradient(135deg, #3A285C 0%, #1A093A 100%)",
        bgHeader: 'url("/images/banner-bg-2.jpg")',
        bgFooter: 'url("/images/logo-2.png")',
      },
      keyframes: {
        spin: {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        spin: "spin 30s linear infinite",
      },
    },
  },
  plugins: [],
};
