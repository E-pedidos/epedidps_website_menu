/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname: 'epedidosapp.info',
          },
        ],
      }
}

module.exports = nextConfig
