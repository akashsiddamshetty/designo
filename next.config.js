/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NEXT_PUBLIC_ENV === "production" ? "/designo" : "",
  output: "export",
};

module.exports = nextConfig;
