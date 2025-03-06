/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Setting basePath for ivan0013/me repository
  basePath: "/me",
  // This ensures assets are properly referenced
  assetPrefix: "/me/",
}

module.exports = nextConfig

