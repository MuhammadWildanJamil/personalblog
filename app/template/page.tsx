// /app/template/page.tsx
"use client"; // Wajib karena menggunakan useState, useMemo, dan Framer Motion

import React, { useState, useMemo, FC } from "react";
// Import tipe data dan data statis
import {
  TEMPLATE_DATA,
  Template,
  CATEGORIES,
} from "@/types/template"; // Sesuaikan path jika perlu

// Import komponen kustom
import TemplateCard from "@/components/TemplateCard"; 
import PillNav from "@/components/PillNav"; 
import {
  Github, // <--- INI YANG HILANG
  Linkedin, // <--- INI JUGA HILANG
  Mail, // <--- INI JUGA HILANG
} from "lucide-react";
import LikeButton from "@/components/LikeButton";

// Import Framer Motion
import { motion, type Variants } from "framer-motion";

// ------------------------------------
// KONFIGURASI NAVIGASI (Sama seperti AboutPage)
// ------------------------------------

const navItems = [
  { label: "Home", href: "./" },
  { label: "About Me", href: "/about" },
  { label: "Template", href: "/template" }, // Pastikan ini aktif
  { label: "Contact", href: "/contact" },
];

// ------------------------------------
// VARIAN ANIMASI (Konsisten dengan AboutPage)
// ------------------------------------

// Varian untuk seluruh section
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

// Varian untuk item individual (kartu)
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

// ------------------------------------
// HALAMAN UTAMA TEMPLATE GALLERY
// ------------------------------------

export default function TemplateGalleryPage() {
  const [activeCategory, setActiveCategory] = useState<'All' | Template['category']>('All');

  // Filtering Template menggunakan useMemo
  const filteredTemplates = useMemo(() => {
    if (activeCategory === 'All') {
      return TEMPLATE_DATA;
    }
    return TEMPLATE_DATA.filter(t => t.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-[#080808] text-white pt-20 px-4 sm:px-8">
      
      {/* Navigasi PillNav */}
      <div className="absolute top-4 w-full flex justify-center z-50">
        <PillNav
          logo="/logo.png"
          logoAlt="Company Logo"
          items={navItems}
          activeHref="/template"
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#000000"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
        />
      </div>

      <div className="max-w-7xl mx-auto py-12 pt-24">
        
        {/* HEADER SECTION - Judul Utama */}
        <motion.header
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
            <span className="text-purple-400 block">Template Archive</span>
          </h1>
          <p className="text-xl text-gray-300 mt-3">
            Jelajahi karya desain dan pengembangan terbaru saya.
          </p>
        </motion.header>

        {/* SECTION FILTER (Interaktif) */}
        <motion.section
          className="mb-12"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 p-4 bg-[#1a1a1a] rounded-xl border border-[#333]"
          >
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category as 'All' | Template['category'])}
                className={`px-5 py-2 text-md font-semibold rounded-full transition-all duration-300 
                  ${activeCategory === category
                    // Gaya aktif konsisten dengan aksen ungu
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/50' 
                    : 'bg-transparent text-gray-400 border border-gray-600 hover:border-purple-400 hover:text-purple-400' 
                  }`
                }
              >
                {category}
              </button>
            ))}
          </motion.div>
        </motion.section>

        {/* SECTION GALERI GRID */}
        <motion.section
          className="mb-24"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div
            key={activeCategory} // Key untuk me-reset animasi saat filter berubah
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredTemplates.length > 0 ? (
              filteredTemplates.map((template, index) => (
                <TemplateCard 
                  key={template.id} 
                  template={template} 
                  index={index} 
                />
              ))
            ) : (
              <motion.p 
                variants={itemVariants}
                className="col-span-full text-center text-gray-500 text-lg py-16"
              >
                Tidak ada template ditemukan di kategori <span className="text-purple-400 font-bold">'{activeCategory}'</span>.
              </motion.p>
            )}
          </motion.div>
        </motion.section>

        {/* FOOTER SECTION (Sama persis seperti di AboutPage) */}
        <motion.section
          className="mb-0" // Hapus margin bottom yang tinggi
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* ... (Kode Footer Anda dari AboutPage) ... */}
          <footer className="w-full bg-[#080808] py-8 px-4 sm:px-8 text-white border-t border-[#1a1a1a]">
            {/* ... (Isi Footer) ... */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12 border-b border-[#333] pb-6 mb-4">
              {/* Kolom Kiri: Sosial Media & Tombol */}
              <div className="flex flex-col items-start gap-4">
                <div className="flex space-x-6">
                  <a href="https://github.com/MuhammadWildanJamil" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="w-6 h-6 text-white hover:text-purple-400 transition-colors duration-200" />
                  </a>
                  <a href="https://www.linkedin.com/in/muhammad-wildan-jamil-a38b53395/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="w-6 h-6 text-white hover:text-purple-400 transition-colors duration-200" />
                  </a>
                  
                </div>
                <LikeButton />
              </div>

              {/* Kolom Tengah: Stack Teknologi */}
              <div className="flex flex-col items-start text-gray-400 mt-6 md:mt-0">
                <p className="mb-2">
                  Built with: <span className="font-semibold text-white">Next JS</span>
                </p>
                <p className="mb-2">
                  Styled with: <span className="font-semibold text-white">TailwindCSS</span>
                </p>
                <p>
                  Deployed on: <span className="font-semibold text-white">HomeServer</span>
                </p>
              </div>

              {/* Kolom Kanan: Pemutar Musik (Spotify) */}
              <div className="mt-6 md:mt-0">
                <iframe
                  style={{ borderRadius: "12px" }}
                  src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator&theme=0"
                  width="300"
                  height="152"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* FOOTER BOTTOM: Hak Cipta */}
            <div className="text-center text-sm text-gray-500 pt-2 pb-0">
              Copyright © 2025 Muhammad Wildan Jamil. All rights reserved.
            </div>
          </footer>
        </motion.section>
      </div>
    </div>
  );
}