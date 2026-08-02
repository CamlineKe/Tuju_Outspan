import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Static export for simple hosting
  distDir: 'dist',
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // /about/ instead of /about
  compress: true,
  poweredByHeader: false, // Remove X-Powered-By header
};

export default nextConfig;
