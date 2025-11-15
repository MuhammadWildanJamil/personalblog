// /components/LikeButton.tsx

"use client";

import React, { useState } from 'react';

// Nilai awal dari desain Anda
const INITIAL_LIKES = 2201; 

const LikeButton: React.FC = () => {
    const [likes, setLikes] = useState(INITIAL_LIKES);
    const [hasLiked, setHasLiked] = useState(false);

    const handleClick = () => {
        // Hanya izinkan like sekali per sesi
        if (!hasLiked) {
            setLikes(likes + 1);
            setHasLiked(true);
        } else {
            // Opsional: Hapus like jika diklik lagi
            // setLikes(likes - 1);
            // setHasLiked(false);
        }
    };

    return (
        <button 
            onClick={handleClick}
            disabled={hasLiked} // Menonaktifkan setelah diklik sekali
            className={`flex items-center justify-center h-12 px-6 rounded-full font-semibold transition-all duration-300 ${
                hasLiked 
                    ? 'bg-purple-700 hover:bg-purple-600 text-white shadow-lg' 
                    : 'bg-[#333] hover:bg-[#555] text-white'
            }`}
        >
            <span className="mr-2 transition-transform duration-300" 
                  style={{ transform: hasLiked ? 'scale(1.2)' : 'scale(1)' }}>
                {hasLiked ? '💖' : '❤️'}
            </span> 
            {likes} Likes
        </button>
    );
};

export default LikeButton;