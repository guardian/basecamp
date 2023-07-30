/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  basePath: "/basecamp",
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
};

export default nextConfig;
