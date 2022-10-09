/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        defaultLocale: "en", 
        locales: ["en", "pl"],
    },
    reactStrictMode: true,
    swcMinify: true,
};

module.exports = nextConfig;
