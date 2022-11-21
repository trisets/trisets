/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    reactRemoveProperties: process.env.NODE_ENV === 'production',
  },
  experimental: {
    esmExternals: false,
  },
};

module.exports = nextConfig;
