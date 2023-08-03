/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  basePath: process.env.NODE_ENV == "production" ? "/basecamp" : undefined,
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
};

export default nextConfig;
