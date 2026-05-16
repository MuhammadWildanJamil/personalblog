// /components/ServiceAccordion.tsx

"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion'; 

interface AccordionItemProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

const ServiceAccordion: React.FC<AccordionItemProps> = ({ icon, title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full mb-4 rounded-xl bg-[#1A1A1A] p-4 text-white shadow-xl border border-[#2A2A2A]">
      
      {/* Header Accordion */}
      <button
        className="flex w-full justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="flex items-center text-xl font-semibold text-purple-400">
          {icon}
          {/* Pastikan teks judul selalu putih dan terlihat */}
          <span className="ml-3 text-white">{title}</span> 
        </div>
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? <ChevronUp className="w-6 h-6 text-purple-400" /> : <ChevronDown className="w-6 h-6 text-purple-400" />}
        </motion.div>
      </button>

      {/* Konten Accordion dengan Animasi */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.ul
            // Animasi: height: 'auto' dan opacity
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            
            // 🚨 REVISI UL: Menggunakan Flexbox, memastikan p-0, m-0, dan list-none
            className="mt-4 flex flex-wrap gap-2 border-t border-[#333] pt-4 overflow-hidden list-none p-0 m-0" 
          >
            {items.map((item, index) => (
              <li 
                key={index} 
                // 🚨 REVISI LI: flex-none, my-0, dan Teks Putih (text-white) untuk background gelap
                className="flex-none px-3 py-1 bg-purple-700/30 text-white text-sm rounded-full whitespace-nowrap my-0" 
              >
                {item}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServiceAccordion;