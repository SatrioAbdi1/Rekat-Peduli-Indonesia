/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname: "**",
            hostname: "**",
            port: '',
          },
        ],
      },
};

export default nextConfig;
