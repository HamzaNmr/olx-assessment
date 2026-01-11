import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["ar", "en"],
    defaultLocale: "en",
  }
};

export default nextConfig;
