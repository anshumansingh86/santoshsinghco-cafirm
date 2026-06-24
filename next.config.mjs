/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    // Static export requires unoptimized images when deploying to Cloudflare/Netlify
    unoptimized: true,
  },
}

export default nextConfig
