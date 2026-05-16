// components/TemplateCard.tsx

"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Download } from "lucide-react"; // Pastikan Download diimpor
import { Template } from '../types/template'; // Sesuaikan path jika perlu

interface TemplateCardProps {
  template: Template;
  index: number;
}

// ... (itemVariants tetap sama)

const TemplateCard: React.FC<TemplateCardProps> = ({ template, index }) => {
  const commonButtonClasses = `
    flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#0a0a0a] bg-cyan-400 
    rounded-full hover:bg-white transition duration-300 transform hover:scale-[1.03]
  `;
  
  return (
    <motion.div
      // ... (animasi kartu)
      className="relative p-6 bg-[#1A1A1A] border border-transparent hover:border-cyan-500/50 rounded-xl transition-all duration-300 group overflow-hidden"
    >
      {/* ... (Konten Kategori, Judul, Deskripsi) ... */}
      
      <div className="relative z-10">
        <span className="text-xs font-mono uppercase text-pink-500/80">{template.category}</span>
        <h3 className="text-xl font-bold text-cyan-400 mb-2 border-b border-cyan-400/50 pb-1 mt-1">
          {template.name}
        </h3>
        <p className="text-gray-400 text-sm mb-4 h-12 overflow-hidden">
          {template.description}
        </p>
        
        {/* KELOMPOK TOMBOL */}
        <div className="flex gap-4 mt-6"> 
          
          {/* TOMBOL 1: LIHAT DEMO (Gaya Solid Cyan) */}
          <a 
            href={template.link} 
            target="_blank"      
            rel="noopener noreferrer"
            className={commonButtonClasses}
          >
            Lihat Demo <ExternalLink className="w-4 h-4" />
          </a>
          
          {/* TOMBOL 2: DOWNLOAD (Gaya Solid Cyan, SAMA PERSIS) */}
          <a 
            href={template.downloadLink} // Menggunakan properti downloadLink
            target="_blank"
            rel="noopener noreferrer"
            className={commonButtonClasses} // <-- MENGGUNAKAN KELAS YANG SAMA
          >
            Download <Download className="w-4 h-4" />
          </a>
          
        </div>
      </div>
    </motion.div>
  );
}

export default TemplateCard;