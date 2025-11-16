// /components/DocumentationCards.tsx
"use client"; 

import React from 'react';
import { motion, type Variants } from 'framer-motion'; 
import Image from 'next/image'; 
import { ArrowRight } from 'lucide-react'; 

// ------------------------------------
// INTERFACE & PROPS
// ------------------------------------
interface DocumentationItem {
    title: string;
    date: string;
    type: string;
    description: string;
    link: string;
    imageSrc: string;
    tags: string[];
}

interface DocumentationCardsProps {
    documentation: DocumentationItem[];
}

// ------------------------------------
// VARIANTS & EFFECTS
// ------------------------------------
const docCardVariants: Variants = {
    // Hanya state 'hidden' dan 'visible' untuk kepatuhan tipe Variants
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const HOVER_EFFECT = { 
    y: -5, 
    boxShadow: "0 0 15px rgba(168, 85, 247, 0.4)", // Ungu Glow
    scale: 1.01,
    transition: { type: "spring", stiffness: 300, damping: 20 }
};

const TAP_EFFECT = { scale: 0.99 };


// ------------------------------------
// KOMPONEN UTAMA
// ------------------------------------

const DocumentationCards: React.FC<DocumentationCardsProps> = ({ documentation }) => {
    return (
    // Pastikan hanya satu div pembuka dan penutup yang mengapit map
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"> 
        {documentation.map((doc, index) => (
            <motion.a 
                key={index}
                href={doc.link} 
                target="_blank" 
                rel="noopener noreferrer"
                
                variants={docCardVariants}
                initial="hidden"
                whileInView="visible" 
                viewport={{ once: true, amount: 0.2 }}
                whileHover={HOVER_EFFECT} 
                whileTap={TAP_EFFECT}
                
                className="flex flex-col p-0 rounded-xl border border-[#333] bg-[#1a1a1a] hover:bg-[#222] transition-colors duration-300 group overflow-hidden h-full"
            >
                {/* 1. HEADER GAMBAR */}
                <div className="relative w-full h-80 bg-gray-900 overflow-hidden">
                    <Image src={doc.imageSrc} alt={doc.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="33vw" />
                </div>

                {/* 2. KONTEN TEKS - flex-grow dan mt-auto (Kunci Alignment) */}
                <div className="p-6 flex flex-col flex-grow">
                    <p className="text-sm font-semibold text-purple-400 mb-1">{doc.date}</p>
                    <h3 className="text-xl font-bold mb-2 text-white">{doc.title}</h3>
                    <p className="text-gray-400 mb-4 text-base ">{doc.description}</p>
                    
                    {/* Tag dan Link - MT-AUTO untuk perataan bawah */}
                    <div className="flex flex-wrap items-center gap-2 mt-auto">
                        {doc.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 text-xs rounded-full bg-purple-700/30 text-purple-300">{tag}</span>
                        ))}
                        <span className="ml-auto text-purple-400 group-hover:text-purple-300 flex items-center text-sm">
                            Lihat <ArrowRight size={16} className="ml-1" />
                        </span>
                    </div>
                </div>
            </motion.a>
        ))}
    </div>
);
};

export default DocumentationCards;