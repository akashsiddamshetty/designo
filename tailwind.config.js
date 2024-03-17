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
          "url('https://raw.githubusercontent.com/akashsiddamshetty/designo/d10556aad3c6de8bfe2eb55793dce403e00430b2/public/web-design/desktop/bg-pattern-intro-web.svg')",
        "home-banner-bg":
          "url('https://raw.githubusercontent.com/akashsiddamshetty/designo/d10556aad3c6de8bfe2eb55793dce403e00430b2/public/home/desktop/bg-pattern-hero-home.svg')",
        "mobile-image-web-design":
          "url('https://raw.githubusercontent.com/akashsiddamshetty/designo/main/public/home/mobile/image-web-design.jpg')",
        "mobile-image-graphic-design":
          "url('https://raw.githubusercontent.com/akashsiddamshetty/designo/main/public/home/mobile/image-graphic-design.jpg')",
        "mobile-image-app-design":
          "url('https://raw.githubusercontent.com/akashsiddamshetty/designo/main/public/home/mobile/image-app-design.jpg')",
        "tablet-image-web-design":
          "url('https://raw.githubusercontent.com/akashsiddamshetty/designo/main/public/home/tablet/image-web-design.jpg')",
        "tablet-image-app-design":
          "url('https://raw.githubusercontent.com/akashsiddamshetty/designo/main/public/home/tablet/image-app-design.jpg')",
        "tablet-image-graphic-design":
          "url('https://raw.githubusercontent.com/akashsiddamshetty/designo/main/public/home/tablet/image-graphic-design.jpg')",
        "desktop-image-web-design-small":
          "url('https://raw.githubusercontent.com/akashsiddamshetty/designo/main/public/home/desktop/image-web-design-small.jpg')",
        "desktop-image-web-design-large":
          "url('https://raw.githubusercontent.com/akashsiddamshetty/designo/main/public/home/desktop/image-web-design-large.jpg')",
        "desktop-image-app-design":
          "url('https://raw.githubusercontent.com/akashsiddamshetty/designo/main/public/home/desktop/image-app-design.jpg')",
        "desktop-image-graphic-design":
          "url('https://raw.githubusercontent.com/akashsiddamshetty/designo/main/public/home/desktop/image-graphic-design.jpg')",
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
