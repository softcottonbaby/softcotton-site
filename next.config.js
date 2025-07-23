/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.steamstatic.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.rain.gg',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.betzynko.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
