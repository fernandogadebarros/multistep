/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    HOSTNAME: process.env.HOSTNAME
  },
  typescript: {
    ignoreBuildErrors: true
  },
  pageExtensions: [
    'page.tsx',
    'page.ts',
    'page.jsx',
    'page.js',
    'mdx',
    'md',
    'jsx',
    'js',
    'tsx',
    'ts'
  ]
};

module.exports = nextConfig;
