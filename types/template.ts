// types/template.ts

// Tipe data untuk setiap template
export interface Template {
  id: number;
  name: string;
  description: string;
  link: string; // Tautan Demo (sudah ada)
  downloadLink: string; // <--- PROPERTI BARU DITAMBAHKAN
  // Kategori yang akan digunakan untuk filtering
  category: 'SaaS' | 'Portfolio' | 'E-Commerce' | 'Blog' | 'Dashboard' | 'Landing Page';
}

// Data Dummy Template
export const TEMPLATE_DATA: Template[] = [
  { 
    id: 1, 
    name: 'Portfolio V1', 
    description: 'Portfolio minimalis dengan efek loading dan animasi scroll halus', 
    link: 'https://portfolio.wildanjamil.my.id', // <--- Contoh link demo
    downloadLink: 'https://github.com/wildanjamil/portfolio-v1/archive/refs/heads/main.zip', // <--- Contoh link download
    category: 'Portfolio' 
  },
  { 
    id: 2, 
    name: 'Dashboard Arsip Digital', 
    description: 'Sebuah penyimpanan arsip digital dengan fungsi CRUD', 
    link: 'https://arsipku.wildanjamil.my.id', 
    downloadLink: 'https://github.com/wildanjamil/arsip-digital-dashboard/archive/refs/heads/main.zip', // <--- Contoh link download
    category: 'Dashboard' 
  },
  { 
    id: 3, 
    name: 'Sistem Manajemen Agen Properti', 
    description: 'Sebuah Manajemen Agen Properti dengan fungsi dashboard dan CRUD.', 
    link: 'https://eramatrix.my.id', 
    downloadLink: 'https://github.com/wildanjamil/era-matrix-management/archive/refs/heads/main.zip', 
    category: 'Dashboard'
  },
];

// Daftar semua kategori yang tersedia, disesuaikan dengan data Anda
export const CATEGORIES = [
  'All',  
  'Portfolio', 
  'Dashboard', 
  'E-Commerce',  
  'Landing Page'
] as const;