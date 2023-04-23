/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pl"],
  },
  reactStrictMode: true,
  swcMinify: true,
  env: {
    GA_TAG: process.env.GA_TAG,
  },
};

module.exports = nextConfig;
