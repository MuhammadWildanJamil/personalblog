// /app/contact/page.tsx
"use client"; 

import React, { useState, useRef } from "react"; 
import { motion, type Variants } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react"; 
import PillNav from "@/components/PillNav"; 

// ------------------------------------
// DATA & KONFIGURASI
// ------------------------------------

const MY_EMAIL = "cpwildanjamil@gmail.com";
const MY_PHONE = "+62 856-9106-3223";
const MY_LOCATION = "DKI Jakarta, Indonesia";

const navItems = [
    { label: "Home", href: "./" },
    { label: "About Me", href: "/about" },
    { label: "Template", href: "/template" },
    { label: "Contact", href: "/contact" },
];

// ------------------------------------
// VARIAN ANIMASI & KOMPONEN INFO CARD (TIDAK BERUBAH)
// ------------------------------------

const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.1 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

interface ContactInfoCardProps {
    icon: React.ReactNode;
    title: string;
    content: string;
}

const ContactInfoCard: React.FC<ContactInfoCardProps> = ({ icon, title, content }) => (
    <motion.div 
        variants={itemVariants} 
        className="flex items-center gap-4 p-6 bg-[#1a1a1a] rounded-xl border border-gray-700 hover:border-purple-600 transition-colors duration-300"
    >
        <div className="p-3 bg-purple-700/30 rounded-full text-purple-400">
            {icon}
        </div>
        <div>
            <h4 className="font-semibold text-lg text-white">{title}</h4>
            <p className="text-sm text-gray-400">{content}</p>
        </div>
    </motion.div>
);

// ------------------------------------
// FUNGSI SUBMIT DENGAN INTEGRASI API
// ------------------------------------

export default function ContactPage() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const formRef = useRef<HTMLFormElement>(null); 

    const handleSubmit = async (e: React.FormEvent) => { 
        e.preventDefault();

        if (!formRef.current) return;

        setStatus('loading');
        
        const formElement = formRef.current;
        const formData = new FormData(formElement);
        const data = Object.fromEntries(formData.entries());

        try {
            // KIRIM PERMINTAAN FETCH KE API ROUTE
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus('success');
                formElement.reset(); 
            } else {
                // Tangani error dari backend
                const errorData = await response.json();
                console.error("API Error Response:", errorData);
                setStatus('error');
            }
        } catch (error) {
            console.error('Network Error:', error);
            setStatus('error');
        }
    };

    return (
        <div className="min-h-screen bg-[#080808] text-white pt-32 px-4 sm:px-8">
            
            {/* Navigasi PillNav (Fixed - Koreksi class) */}
            <div className="absolute top-4 w-full flex justify-center z-50">
                <PillNav
                    logo="/logo.png"
                    logoAlt="Company Logo"
                    items={navItems}
                    activeHref="/contact"
                    className="custom-nav"
                    baseColor="#000000"
                    pillColor="#ffffff"
                    hoveredPillTextColor="#ffffff"
                    pillTextColor="#000000"
                />
            </div>

            <main className="max-w-7xl mx-auto py-12 pt-16">
                
                {/* HEADER SECTION */}
                <motion.header
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-2xl font-extrabold text-white leading-tight">
                        <span className="text-purple-400 block">Hubungi Saya</span>
                    </h1>
                    <p className="text-xl text-gray-300 mt-3">
                        Siap untuk kolaborasi? Kirim pesan melalui portal di bawah.
                    </p>
                </motion.header>

                {/* GRID UTAMA: INFO KONTAK & FORM */}
                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-12"
                >
                    {/* KOLOM 1: INFORMASI KONTAK */}
                    <div className="lg:col-span-1 space-y-6">
                        <ContactInfoCard icon={<Mail className="w-5 h-5" />} title="Email Utama" content={MY_EMAIL} />
                        <ContactInfoCard icon={<Phone className="w-5 h-5" />} title="Telepon/WhatsApp" content={MY_PHONE} />
                        <ContactInfoCard icon={<MapPin className="w-5 h-5" />} title="Lokasi" content={MY_LOCATION} />
                        <motion.p variants={itemVariants} className="mt-8 text-gray-500">
                            Saya akan membalas secepatnya dalam 1x24 jam.
                        </motion.p>
                    </div>

                    {/* KOLOM 2: FORM KONTAK */}
                    <div className="lg:col-span-2 p-8 md:p-12 bg-[#1a1a1a] rounded-2xl shadow-2xl border border-gray-800">
                        <motion.h2 variants={itemVariants} className="text-3xl font-bold text-purple-400 mb-6 flex items-center gap-2">
                            <MessageSquare className="w-6 h-6"/> Kirim Pesan
                        </motion.h2>

                        {status === 'success' ? (
                            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-green-700/30 text-green-300 p-6 rounded-lg text-center">
                                Pesan berhasil terkirim! Terima kasih.
                            </motion.div>
                        ) : status === 'error' ? (
                            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-red-700/30 text-red-300 p-6 rounded-lg text-center">
                                Gagal mengirim pesan. Silakan coba lagi atau hubungi langsung.
                            </motion.div>
                        ) : (
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                {/* Input fields... */}
                                <motion.div variants={itemVariants}>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Nama Lengkap</label>
                                    <input type="text" id="name" name="name" required placeholder="Masukkan Nama Anda" className="w-full p-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:ring-purple-500 focus:border-purple-500 transition duration-200" />
                                </motion.div>
                                <motion.div variants={itemVariants}>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                    <input type="email" id="email" name="email" required placeholder="Masukkan Email Anda" className="w-full p-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:ring-purple-500 focus:border-purple-500 transition duration-200" />
                                </motion.div>
                                <motion.div variants={itemVariants}>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Pesan</label>
                                    <textarea id="message" name="message" rows={4} required placeholder="Jelaskan kebutuhan Anda..." className="w-full p-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:ring-purple-500 focus:border-purple-500 transition duration-200"></textarea>
                                </motion.div>

                                {/* Tombol Submit */}
                                <motion.button variants={itemVariants} type="submit" disabled={status === 'loading'} className="w-full flex justify-center items-center gap-2 px-6 py-3 text-lg font-bold rounded-xl text-white bg-purple-600 hover:bg-purple-700 transition duration-300 transform hover:scale-[1.01] disabled:opacity-50">
                                    {status === 'loading' ? (
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                    ) : (
                                        <>Kirim Pesan <Send className="w-5 h-5"/></>
                                    )}
                                </motion.button>
                            </form>
                        )}
                    </div>
                </motion.section>
            </main>
        </div>
    );
}