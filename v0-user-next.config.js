/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // If you're deploying to a custom domain or GitHub user page, you don't need basePath
  // If you're deploying to a GitHub project page, uncomment and adjust the following line:
  // basePath: '/your-repo-name',
}

module.exports = nextConfig

