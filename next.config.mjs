/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        instrumentationHook: true,
    },
    serverExternalPackages: ['mongoose'],
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '3000',
                pathname: '/api/**',
            },
            {
                protocol: 'https',
                hostname: 'slidy-liard.vercel.app',
                port: '3000',
                pathname: '/api/**',
            },
            {
                protocol: 'https',
                hostname: 'slidy.space',
                port: '3000',
                pathname: '/api/**',
            },
        ],
    },
};

export default nextConfig;
