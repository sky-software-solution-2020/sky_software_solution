/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  images: {
     remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
};


export default nextConfig;
