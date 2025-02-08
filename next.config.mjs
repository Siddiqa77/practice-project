/** @type {import('next').NextConfig} */

const nextConfig = {
    env: {
      NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY,
    },
    images: {
      domains: ['cdn.sanity.io'],
    },
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
  };
  
  export default nextConfig;
  