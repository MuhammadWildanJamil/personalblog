// next.config.js
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'standalone',

  // 🚨 TAMBAHKAN ATAU KOREKSI BARIS INI
  assetPrefix: isProd ? './' : undefined, // Menggunakan path relatif di produksi
};

module.exports = nextConfig;