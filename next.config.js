/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "image.tmdb.org", "*"],
  },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/movie",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
