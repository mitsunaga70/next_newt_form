/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['blog-739442.assets.newt.so'],
    formats: ['image/webp'],
  },

}

module.exports = nextConfig