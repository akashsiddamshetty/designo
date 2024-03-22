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
        "bg-pattern-intro-web": process.env.NEXT_PUBLIC_ENV
          ? "url('/designo/web-design/desktop/bg-pattern-intro-web.svg')"
          : "url('/web-design/desktop/bg-pattern-intro-web.svg')",
        "home-banner-bg": process.env.NEXT_PUBLIC_ENV
          ? "url('/designo/home/desktop/bg-pattern-hero-home.svg')"
          : "url('/home/desktop/bg-pattern-hero-home.svg')",
        "mobile-image-web-design": process.env.NEXT_PUBLIC_ENV
          ? "url('/designo/home/mobile/image-web-design.jpg')"
          : "url('/home/mobile/image-web-design.jpg')",
        "mobile-image-graphic-design": process.env.NEXT_PUBLIC_ENV
          ? "url('/designo/home/mobile/image-graphic-design.jpg')"
          : "url('/home/mobile/image-graphic-design.jpg')",
        "mobile-image-app-design": process.env.NEXT_PUBLIC_ENV
          ? "url('/designo/home/mobile/image-app-design.jpg')"
          : "url('/home/mobile/image-app-design.jpg')",
        "tablet-image-web-design": process.env.NEXT_PUBLIC_ENV
          ? "url('/designo/home/tablet/image-web-design.jpg')"
          : "url('/home/tablet/image-web-design.jpg')",
        "tablet-image-app-design": process.env.NEXT_PUBLIC_ENV
          ? "url('/designo/home/tablet/image-app-design.jpg')"
          : "url('/home/tablet/image-app-design.jpg')",
        "tablet-image-graphic-design": process.env.NEXT_PUBLIC_ENV
          ? "url('/designo/home/tablet/image-graphic-design.jpg')"
          : "url('/home/tablet/image-graphic-design.jpg')",
        "desktop-image-web-design-small": process.env.NEXT_PUBLIC_ENV
          ? "url('/designo/home/desktop/image-web-design-small.jpg')"
          : "url('/home/desktop/image-web-design-small.jpg')",
        "desktop-image-web-design-large": process.env.NEXT_PUBLIC_ENV
          ? "url('/designo/home/desktop/image-web-design-large.jpg')"
          : "url('/home/desktop/image-web-design-large.jpg')",
        "desktop-image-app-design": process.env.NEXT_PUBLIC_ENV
          ? "url('/designo/home/desktop/image-app-design.jpg')"
          : "url('/home/desktop/image-app-design.jpg')",
        "desktop-image-graphic-design": process.env.NEXT_PUBLIC_ENV
          ? "url('/designo/home/desktop/image-graphic-design.jpg')"
          : "url('/home/desktop/image-graphic-design.jpg')",
        "background-img-here": process.env.NEXT_PUBLIC_ENV
          ? "url('/designo/home/desktop/bg-pattern-hero-home.svg')"
          : "url('/home/desktop/bg-pattern-hero-home.svg')",
        "desktop-about-hero-img": process.env.NEXT_PUBLIC_ENV
          ? "url('/designo/about/desktop/image-about-hero.jpg')"
          : "url('/about/desktop/image-about-hero.jpg')",
        "tablet-about-hero-img": process.env.NEXT_PUBLIC_ENV
          ? "url('/designo/about/tablet/image-about-hero.jpg')"
          : "url('/about/tablet/image-about-hero.jpg')",
        "mobile-about-hero-img": process.env.NEXT_PUBLIC_ENV
          ? "url('/designo/about/mobile/image-about-hero.jpg')"
          : "url('/about/mobile/image-about-hero.jpg')",
      },
      colors: {
        peach: "#E7816B",
        black: "#1D1C1E",
        white: "#FFFFFF",
        light_peach: "#FFAD9B",
        dark_grey: "#333136",
        light_grey: "#DFDFDF",
        very_light_peach: "#FDF3F0",
      },
    },
  },

  plugins: [],
};
