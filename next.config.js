/** @type {import('next').NextConfig} */
const nextConfig = {
  staticPageGenerationTimeout: 120,
  async redirects() {
    return [
      { source: '/#about', destination: '/about', permanent: true },
      { source: '/#contact', destination: '/contact', permanent: true },
    ]
  },
}

module.exports = nextConfig
