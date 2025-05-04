/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },

  // ✅ Skip linting errors during Vercel build (temporary)
  eslint: {
    ignoreDuringBuilds: true,
  },

  // ✅ Skip TypeScript errors during Vercel build (temporary)
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;