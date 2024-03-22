/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NEXT_PUBLI_EN === "producto" ? "/designo" : "",
  output: "export",
};

module.exports = nextConfig;
