/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['afrilearn-media.s3.eu-west-3.amazonaws.com'],
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: { and: [/\.(js|ts)x?$/] },

      use: ["@svgr/webpack"],
    });

    return config;
  },
};
