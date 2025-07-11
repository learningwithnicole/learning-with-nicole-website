import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === 'production' ? '/learning-with-nicole-website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/learning-with-nicole-website/' : '',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
