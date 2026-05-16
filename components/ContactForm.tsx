// /components/ContactForm.tsx

"use client";

import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // --- LOGIKA SUBMIT ANDA DI SINI ---
        // Contoh: Kirim data ke API atau layanan email

        setTimeout(() => {
            alert(`Pesan dari ${formData.name} diterima!`);
            setIsSubmitting(false);
            setFormData({ name: '', email: '', message: '' });
        }, 1500);
    };

    const inputClasses = "w-full p-3 mb-4 rounded-lg bg-[#1A1A1A] border border-transparent focus:border-purple-500 focus:outline-none transition-colors duration-200 text-white";

    return (
        <form onSubmit={handleSubmit} className="w-full">
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className={inputClasses}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className={inputClasses}
            />
            <textarea
                name="message"
                placeholder="Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className={`${inputClasses} resize-none`}
            />
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 mt-4 rounded-lg bg-[#333] hover:bg-[#555] text-white font-semibold transition-colors duration-200 disabled:opacity-50"
            >
                {isSubmitting ? 'Mengirim...' : 'Submit'}
            </button>
        </form>
    );
};

export default ContactForm;