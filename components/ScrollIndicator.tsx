// /components/ScrollIndicator.tsx

"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react'; // Menggunakan ikon panah

const ScrollIndicator: React.FC = () => {
  return (
    <motion.div
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer p-2 z-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 2, ease: "easeOut" }} // Muncul setelah 2 detik
      onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })} // Scroll ke section berikutnya
    >
      <motion.p 
        className="text-gray-400 text-sm mb-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.5 }}
      >
        Scroll Down
      </motion.p>
      <motion.div
        className="text-white"
        animate={{ y: [0, 10, 0] }} // Animasi bergerak naik turun
        transition={{ 
          duration: 1.5, 
          repeat: Infinity, 
          repeatType: "loop", 
          ease: "easeInOut" 
        }}
      >
        <ChevronDown size={32} /> {/* Ikon panah ke bawah */}
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;