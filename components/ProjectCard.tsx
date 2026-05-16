// /components/ProjectCard.tsx

"use client";

import React from 'react';
import { motion } from 'framer-motion'; 
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image'; // 🚨 IMPORT IMAGE DARI NEXT.JS

interface ProjectCardProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  description: string;
  tags: string[];
  href: string;
  imageSrc: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, href, imageSrc }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -5, boxShadow: "0 15px 25px rgba(0, 0, 0, 0.4)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="flex flex-col p-6 rounded-xl border border-[#333] bg-[#1A1A1A] text-white no-underline cursor-pointer transition-colors duration-300"
    >
      
      {/* 🚨 TEMPAT GAMBAR PROYEK */}
      <div className="relative w-full h-40 mb-4 overflow-hidden rounded-lg">
        <Image
          src={imageSrc}
          alt={title}
          width={600} // Lebar yang cukup untuk mengisi container (akan disesuaikan oleh object-cover)
          height={600} // 🚨 Ini adalah KUNCI untuk membuatnya potret. Sesuaikan dengan rasio yang Anda inginkan
          className="w-full h-[200px] object-cover rounded-lg" // 🚨 Menggunakan h-[300px] untuk tinggi statis
          // Atau, jika Anda ingin rasio potret yang lebih spesifik, misal: h-[400px] untuk gambar yang lebih tinggi
        />
      </div>
      
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold">{title}</h3>
        <ArrowUpRight className="w-6 h-6 text-purple-400 shrink-0" />
      </div>
      
      <p className="text-gray-400 mb-4 flex-grow">{description}</p>
      
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="px-3 py-1 text-sm rounded-full bg-purple-700/30 text-purple-300">
            {tag}
          </span>
        ))}
      </div>
    </motion.a>
  );
};

export default ProjectCard;