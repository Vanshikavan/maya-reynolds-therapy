import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // The /clone route shows the original template's photos from its CDN.
    remotePatterns: [{ protocol: "https", hostname: "images.squarespace-cdn.com" }],
  },
};

export default nextConfig;
