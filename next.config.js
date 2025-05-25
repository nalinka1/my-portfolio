/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  experimental: {
    forceSwcTransforms: false,
  },
  output: 'standalone',
  images: {
    domains: ['localhost'],
  },
}

module.exports = nextConfig 