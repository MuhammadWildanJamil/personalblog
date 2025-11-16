// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Tetap Standalone
  output: 'standalone', 
  
  // Hapus/Komentari semua pengaturan path yang lama.
  // Pastikan tidak ada basepath atau assetPrefix di sini.
  // // assetPrefix: isProd ? './' : undefined, 
  // // basePath: '', 
};

module.exports = nextConfig;