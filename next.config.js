/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  basePath: process.env.PRODUCTION ? "/basecamp" : undefined,
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
};

export default nextConfig;
