// next.config.ts
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  
  // 🚨 TAMBAHKAN INI: Menonaktifkan cache Next.js
  experimental: {
    // Memaksa Next.js untuk TIDAK menulis cache ke disk
    appDir: true, 
    externalDir: true,
    esmExternals: true,
  },
  cacheMaxMemorySize: 0, // Set cache memory ke 0
  
  // Ini adalah solusi lingkungan yang lebih eksplisit
  env: {
    NEXT_DISABLE_CACHE: 'true',
  },
};

module.exports = nextConfig;