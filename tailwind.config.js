/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "conic-gradient":
          "conic-gradient(from 90deg at 50% 50%, rgba(231, 129, 107, 0.0001) 0deg, #E7816B 359.74deg, rgba(231, 129, 107, 0.0001) 360deg)",
        "bg-pattern-intro-web": "url('/web-design/bg-pattern-intro-web.svg')",
      },
      colors: {
        peach: "#E7816B",
        black: "#1D1C1E",
        white: "#FFFFFF",
        light_peach: "#FFAD9B",
        dark_grey: "#333136",
        light_grey: "#DFDFDF",
      },
    },
  },

  plugins: [],
};
