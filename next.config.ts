import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imagedelivery.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.localsitegrowth.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'landingsite-app-public.s3.us-east-2.amazonaws.com',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
