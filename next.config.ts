import type {NextConfig} from 'next';

const isProd = process.env.NODE_ENV === 'production';
const repoName = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[1] : '';

const nextConfig: NextConfig = {
  // Configure Next.js to generate a static site
  output: 'export',
  
  // Set the base path for GitHub Pages
  basePath: isProd ? `/${repoName}` : '',
  
  // Set the asset prefix for GitHub Pages
  assetPrefix: isProd ? `/${repoName}/` : '',

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // Un-optimize images for static export
    unoptimized: true, 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
