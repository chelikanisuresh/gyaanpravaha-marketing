/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export if needed
  // output: 'export',
  
  // Redirect old SPA hash routes to proper pages
  async redirects() {
    return [
      { source: '/#about', destination: '/about', permanent: true },
      { source: '/#contact', destination: '/contact', permanent: true },
    ]
  },
}

module.exports = nextConfig
