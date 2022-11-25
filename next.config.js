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
  poweredByHeader: false,
};

module.exports = nextConfig;
