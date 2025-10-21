import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dominios permitidos para las imágenes
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "covers.openlibrary.org",
        port: "",
        pathname: "/b/id/**",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/*",
      },
    ],
  },
};

export default nextConfig;
