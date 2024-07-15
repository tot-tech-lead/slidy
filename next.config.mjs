/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        instrumentationHook: true,
    },
    serverExternalPackages: ['mongoose'],
};

export default nextConfig;
