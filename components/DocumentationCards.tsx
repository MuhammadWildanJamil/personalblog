// /components/DocumentationCards.tsx

"use client"; // 🚨 Tandai sebagai Client Component

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'; // Pastikan Image diimpor jika digunakan
import { ArrowRight } from 'lucide-react'; // Asumsi ArrowRight atau ikon lainnya

// Definisikan tipe data item dokumentasi
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

const docCardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    
}


const DocumentationCards: React.FC<DocumentationCardsProps> = ({ documentation }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {documentation.map((doc, index) => (
                <motion.a 
                    key={index}
                    href={doc.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    // Terapkan varian animasi
                    variants={docCardVariants}
                    initial="hidden"
                    whileInView="visible" // Animasi saat kartu masuk ke viewport
                    viewport={{ once: true, amount: 0.2 }}
                    whileHover="hover"
                    whileTap="tap"
                    className="flex flex-col p-0 rounded-xl border border-gray-300 bg-gray-50 hover:bg-gray-100 transition-colors duration-300 group overflow-hidden"
                >
                    {/* Markup Kartu Anda */}
                    <div className="relative w-full h-80 bg-gray-200 overflow-hidden">
                        <Image src={doc.imageSrc} alt={doc.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="33vw" />
                    </div>

                    <div className="p-6 flex flex-col ">
                        <p className="text-sm font-semibold text-purple-600 mb-1">{doc.date}</p>
                        <h3 className="text-xl font-bold mb-2">{doc.title}</h3>
                        <p className="text-gray-600 mb-4 text-base ">{doc.description}</p>
                        <div className="flex flex-wrap items-center gap-2 mt-auto">
                            {doc.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-800">{tag}</span>
                            ))}
                            <span className="ml-auto text-purple-600 group-hover:text-purple-800 flex items-center text-sm">
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