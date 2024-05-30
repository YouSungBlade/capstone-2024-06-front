const { createProxyMiddleware } = require('http-proxy-middleware');


/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["three"],
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: '/what-desk-api/:path*',
        destination: `${process.env.Localhost}/:path*`
      },
      // {
      //   source: '/ws/:path*',
      //   destination: `ws://${process.env.Localhosts}/:path*`
      // }
    ]
  },
  env: {
    Localhost: `${process.env.Localhost}`,
    OnlyiP : `${process.env.Localhosts}`,
  },
  images: {
    domains: ['t1.kakaocdn.net', `${process.env.Localhosts}`, 'k.kakaocdn.net' , '10.223.115.184'], 

    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", 
      },
    ],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

module.exports = nextConfig;
