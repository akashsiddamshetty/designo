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
        "bg-pattern-intro-web":
          "url('/web-design/desktop/bg-pattern-intro-web.svg')",
        "home-banner-bg": "url('/home/desktop/bg-pattern-hero-home.svg')",
        "mobile-image-web-design": "url('/home/mobile/image-web-design.jpg')",
        "mobile-image-graphic-design":
          "url('/home/mobile/image-graphic-design.jpg')",
        "mobile-image-app-design": "url('/home/mobile/image-app-design.jpg')",
        "tablet-image-web-design": "url('/home/tablet/image-web-design.jpg')",
        "tablet-image-app-design": "url('/home/tablet/image-app-design.jpg')",
        "tablet-image-graphic-design":
          "url('/home/tablet/image-graphic-design.jpg')",
        "desktop-image-web-design-small":
          "url('/home/desktop/image-web-design-small.jpg')",
        "desktop-image-web-design-large":
          "url('/home/desktop/image-web-design-large.jpg')",
        "desktop-image-app-design": "url('/home/desktop/image-app-design.jpg')",
        "desktop-image-graphic-design":
          "url('/home/desktop/image-graphic-design.jpg')",
        "background-img-here": "url('/home/desktop/bg-pattern-hero-home.svg')",
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
