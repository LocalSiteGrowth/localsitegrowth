import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imagedelivery.net',
      },
      {
        protocol: 'https',
        hostname: 'www.localsitegrowth.com',
      },
      {
        protocol: 'https',
        hostname: 'landingsite-app-public.s3.us-east-2.amazonaws.com',
      },
    ],
  },
}

export default nextConfig
