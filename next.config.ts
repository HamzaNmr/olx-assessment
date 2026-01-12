import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.olx.com.lb'],
  },
  i18n: {
    locales: ["ar", "en"],
    defaultLocale: "en",
  }
};

export default nextConfig;
