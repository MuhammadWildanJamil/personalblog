// /app/about/page.tsx

"use client"; // Wajib untuk interaktivitas dan Framer Motion

import React, { FC } from "react";
import Image from "next/image";
// 🚨 REVISI: Impor 'type Variants' (huruf besar 'V')
import { motion, type Variants } from "framer-motion";
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Award,
} from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import ProfileCard from "@/components/ProfileCard";
import PillNav from "@/components/PillNav";
import LogoLoop from "@/components/LogoLoop";
import LikeButton from "@/components/LikeButton";

// ------------------------------------
// DATA STATIS
// ------------------------------------

const MY_NAME = "Muhammad Wildan Jamil";
const MY_ROLE = "Software Developer";
const MY_EMAIL = "cpwildanjamil@gmail.com";
const MY_PHONE = "+62 856-9106-3223";
const MY_LOCATION = "DKI Jakarta, Indonesia";
const EXPERIENCE_YEARS = 10;
const PROJECTS_COMPLETED = 300;
const CLIENT_SATISFACTION = 95;

const STATS_DATA = [
  { value: `+${EXPERIENCE_YEARS}`, label: "YEARS OF EXPERIENCE" },
  { value: `+${PROJECTS_COMPLETED}`, label: "PROJECTS COMPLETED" },
  { value: `+${CLIENT_SATISFACTION}%`, label: "CLIENT SATISFACTION" },
];

const SKILLS = [
  "PHP",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MYSQL",
  "Tailwind CSS",
  "Figma",
  "Adobe Illustrator",
  "Adobe Photoshop",
  "Git",
  "Adobe Premiere Pro",
  "Adobe After Effect",
];

const TIMELINE_DATA = [
  {
    title: "Full-Stack Developer",
    company: "PT Era Panen Raya ( Era Matrix )",
    date: "April 2025 - Mei 2025",
    description:
      "Projek membuat website company profile sekaligus sistem manajemen agen properti",
  },
  {
    title: "Full-Stack Developer",
    company: "Kementrian Keluatan dan Perikanan",
    date: "Sep 2024 - Jan 2025",
    description:
      "Membuat website arsip digital yang dimana sebelumnya dokumen atau informasi dari bentuk fisik atau elektronik yang sudah ada menjadi format digital yang terstruktur, aman, dan mudah di akses untuk keperluan penyimpanan jangka panjang dan penemuan kembali arsip yang diingiinkan. ",
  },
  {
    title: "Admin Social Media",
    company: "PT Era Panen Raya ( Era Marix )",
    date: "Nov 2022 - Mei 2023",
    description:
      "Membuat sebuah desain konten berupa vidio dan poster/gambar di instagram, facebook, dan youtube.",
  },
  {
    title: "Relawan Vaksin",
    company: "PT Hippindo Indonesia",
    date: "Sep 2020 - Feb 2021",
    description:
      "Disini saya sebagai Pcare atau bisa disebut input data vaksinasi, pada saat itu sedang dilanda virus Covid-19 maka dari itu PT Hippindo Indonesia membuka vaksinasi di daerah pancoran dan sekitarnya.",
  },
];

const EDUCATION_DATA = [
  {
    title: "S1 Sistem Informasi",
    company: "Universitas Bina Sarana Informatika",
    date: "2021 - 2025",
    description:
      "Fokus pada pengembangan web dan melatih individu untuk mengelola proyek-proyek teknologi/sistem informasi dari awal hingga akhir.",
  },
  {
    title: "Multimedia",
    company: "SMK Sejahtera Jakarta",
    date: "2018 - 2021",
    description:
      "Mempelajari dasar-dasar jaringan, perakitan PC, dan administrasi server dan pembuatan elemen visual statis seperti poster dan logo.",
  },
  // Tambahkan riwayat pendidikan lainnya di sini
];

const techLogos = [
  { node: <SiReact size={40} />, title: "React", href: "https://react.dev" },
  {
    node: <SiNextdotjs size={40} />,
    title: "Next.js",
    href: "https://nextjs.org",
  },
  {
    node: <SiTypescript size={40} />,
    title: "TypeScript",
    href: "https://typescriptlang.org",
  },
  {
    node: <SiTailwindcss size={40} />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    src: "/html.png",
    alt: "HTML",
    href: "",
    width: 50,
    height: 80,
    title: "Next JS",
  },
  {
    src: "/css.png",
    alt: "CSS",
    href: "",
    width: 80,
    height: 80,
    title: "Next JS",
  },
  {
    src: "/php.png",
    alt: "PHP",
    href: "https://www.php.net/",
    width: 50,
    height: 80,
    title: "PHP",
  },
  { src: "/js.png", alt: "JS", href: "", width: 50, height: 80, title: "JS" },
  {
    src: "/laravel.png",
    alt: "laravel",
    href: "https://laravel.com/",
    width: 50,
    height: 80,
    title: "Laravel",
  },
  {
    src: "/bootstrap.png",
    alt: "bootstrap",
    href: "https://getbootstrap.com/",
    width: 50,
    height: 80,
    title: "Bootstrap",
  },
];

const certificateItems = [
  {
    node: (
      // Ini adalah kartu sertifikat kustom
      <div className="w-[300px] h-[150px] p-6 bg-[#1A1A1A] border border-[#333] rounded-lg text-white flex flex-col justify-center">
        <Award className="w-6 h-6 text-purple-400 mb-2" />
        <h4 className="font-bold text-lg">
          PCAP : Programming Essentialsein Python
        </h4>
        <p className="text-sm text-gray-400">Python Institute - 2022</p>
      </div>
    ),
    href: "https://drive.google.com/file/d/19YeEOxeeunXgz7R_X6ju0JFhD5ac26TB/view?usp=sharing", // Opsional: Tautkan ke sertifikat jika ada
  },
  {
    node: (
      <div className="w-[300px] h-[150px] p-6 bg-[#1A1A1A] border border-[#333] rounded-lg text-white flex flex-col justify-center">
        <Award className="w-6 h-6 text-purple-400 mb-2" />
        <h4 className="font-bold text-lg">Sertifikat Toefl Prediction Test</h4>
        <p className="text-sm text-gray-400">Lembaga Bahasa UBSI - 2025</p>
      </div>
    ),
    href: "https://drive.google.com/file/d/1-k-H0NurLxSKysROs6VB-KIiY_JPdJYP/view?usp=sharing",
  },
  {
    node: (
      <div className="w-[300px] h-[150px] p-6 bg-[#1A1A1A] border border-[#333] rounded-lg text-white flex flex-col justify-center">
        <Award className="w-6 h-6 text-purple-400 mb-2" />
        <h4 className="font-bold text-lg">
          Sertifikat Kompetensi Analisis Program
        </h4>
        <p className="text-sm text-gray-400">BNSP LSP UBSI - 2022</p>
      </div>
    ),
    href: "#",
  },
  {
    node: (
      <div className="w-[300px] h-[150px] p-6 bg-[#1A1A1A] border border-[#333] rounded-lg text-white flex flex-col justify-center">
        <Award className="w-6 h-6 text-purple-400 mb-2" />
        <h4 className="font-bold text-lg">Sertifikat Kompetensi Multimedia</h4>
        <p className="text-sm text-gray-400">
            LSP SMK Sejahtera Jakarta - 2021
        </p>
      </div>
    ),
    href: "https://drive.google.com/file/d/1PSzLRievKT6D8ljwRuD0sZxfIeOCKTbh/view?usp=sharing",
  },
  {
    node: (
      <div className="w-[300px] h-[150px] p-6 bg-[#1A1A1A] border border-[#333] rounded-lg text-white flex flex-col justify-center">
        <Award className="w-6 h-6 text-purple-400 mb-2" />
        <h4 className="font-bold text-lg">
          Penghargaan Pengembangan Sistem Informasi Manajemen
        </h4>
        <p className="text-sm text-gray-400">Era Matrix - 2025</p>
      </div>
    ),
    href: "https://drive.google.com/file/d/1d5eGOhJW6BOMZDUDba6u-BthDJaRvFGj/view?usp=sharing",
  },
  {
    node: (
      <div className="w-[300px] h-[150px] p-6 bg-[#1A1A1A] border border-[#333] rounded-lg text-white flex flex-col justify-center">
        <Award className="w-6 h-6 text-purple-400 mb-2" />
        <h4 className="font-bold text-lg">Sertifikat Magang </h4>
        <p className="text-sm text-gray-400">
          Kementrian Kelautan dan Perikanan - 2025
        </p>
      </div>
    ),
    href: "https://drive.google.com/file/d/1xM6NS4xHys3cR-mvmJ492ZSp0h7nDwjJ/view?usp=sharing",
  },
  {
    node: (
      <div className="w-[300px] h-[150px] p-6 bg-[#1A1A1A] border border-[#333] rounded-lg text-white flex flex-col justify-center">
        <Award className="w-6 h-6 text-purple-400 mb-2" />
        <h4 className="font-bold text-lg">
          Penghargaan Sentra Vaksinasi Hippindo
        </h4>
        <p className="text-sm text-gray-400">
          Sentra Vaksinasi Hippindo - Kementrian Koperasi & UMKM - 2025
        </p>
      </div>
    ),
    href: "https://drive.google.com/file/d/12jLGMiTtonw4E0K7XPsYCZUh90EA5vFP/view?usp=sharing   ",
  },
  // Tambahkan lebih banyak kartu di sini
];

// ------------------------------------
// KOMPONEN PEMBANTU
// ------------------------------------

// Varian untuk section (Menggunakan tipe 'Variants' yang benar)
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

// Varian untuk item individual (Menggunakan tipe 'Variants' yang benar)
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Komponen Timeline Item
interface TimelineItemProps {
  // Hapus 'variants' dari sini
  title: string;
  company: string;
  date: string;
  description: string;
}

// 🚨 REVISI: Memperbaiki kesalahan sintaks (menghapus string ."use client"; yang salah)
const TimelineItem: FC<TimelineItemProps> = ({
  title,
  company,
  date,
  description,
}) => {
  return (
    <motion.div
      variants={itemVariants}
      className="mb-8 flex items-start relative pl-10"
    >
      <div className="absolute w-4 h-4 bg-purple-600 rounded-full -left-2 top-0 mt-1" />
      <div className="flex-grow">
        {" "}
        {/* 🚨 REVISI: flex-grow memastikan elemen mengambil ruang */}
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="text-lg font-semibold text-purple-400 mb-1">{company}</p>
        <p className="text-sm text-gray-400 mb-2">{date}</p>
        <p className="text-md text-gray-300 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

const navItems = [
  { label: "Home", href: "./" },
  { label: "About Me", href: "/" },
  { label: "Template", href: "/template" },
  { label: "Contact", href: "/contact" },
];

// ------------------------------------
// HALAMAN UTAMA ABOUT
// ------------------------------------

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#080808] text-white pt-20 px-4 sm:px-8 overflow-x-hidden">
      <div className="absolute top-4 w-full flex justify-center z-50">
        <PillNav
          logo="/logo.png"
          logoAlt="Company Logo"
          items={navItems}
          activeHref="/"
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#000000"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
        />
      </div>

      <div className="max-w-7xl mx-auto py-12">
        {/* 1. HEADER SECTION (Hero Baru, Tanpa Judul Besar Tumpang Tindih) */}
        <motion.section
          className="mb-24 md:mb-32 pt-16"
          variants={sectionVariants} // ✅ Tidak akan error lagi
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* GRID UTAMA: Konten Kiri (Teks) & Kanan (Card) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-4 items-start">
            {/* A. KOLOM KIRI: ABOUT ME & DESKRIPSI (Teks) */}
            <div className="pr-0 md:pr-10 lg:pr-16 z-10 order-2 lg:order-1">
              <motion.h2
                variants={itemVariants}
                className="text-4xl font-bold text-white mb-6 mt-8 lg:mt-0"
              >
                ABOUT ME
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-base text-gray-300 mb-4 leading-relaxed"
              >
                Saya Muhammad Wildan Jamil, seorang profesional yang berdedikasi
                di bidang pengembangan perangkat lunak dan desain, dengan
                pengalaman 1 tahun. Perjalanan saya dimulai dari ketertarikan
                pada bagaimana teknologi dapat memecahkan masalah sehari-hari
                hingga menjadi ahli dalam bidang website developer atau desain
                UI/UX.
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="text-base text-gray-300 mb-8 leading-relaxed"
              >
                Saya bangga dengan kemampuan saya untuk menerjemahkan ide-ide
                kompleks menjadi solusi yang fungsional dan indah. Selain itu
                saya juga punya kemampuan di bidang desain grafis, editing vidio
                dengan pengalaman saya sebagai admin social media selama 1
                tahun.
              </motion.p>

              {/* Ikon Sosial */}
              <motion.div
                variants={itemVariants}
                className="flex space-x-4 mt-8"
              >
                <motion.a
                  href="/Curiculum Vitae.pdf" // Tautan CV yang sebenarnya
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(168, 85, 247, 0.6)",
                  }} // Animasi hover glow
                  whileTap={{ scale: 0.95 }} // Animasi tap
                  className="flex items-center gap-2 px-6 py-3 text-lg font-bold rounded-xl text-white 
                               bg-purple-600 hover:bg-purple-700 transition duration-200 shadow-lg"
                >
                  Download CV <Download className="w-5 h-5" />
                </motion.a>
                <a
                  href="https://github.com/MuhammadWildanJamil"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="w-12 h-12 p-3 rounded-xl bg-[#1A1A1A] text-white hover:text-purple-400 transition-colors duration-200" />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-wildan-jamil-a38b53395/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-12 h-12 p-3 rounded-xl bg-[#1A1A1A] text-white hover:text-purple-400 transition-colors duration-200" />
                </a>
              </motion.div>
            </div>

            {/* B. KOLOM KANAN: PROFILE CARD (Diposisikan di Kanan) */}
            <div className="w-full h-auto flex justify-center lg:justify-end mt-8 lg:mt-0 order-1 lg:order-2 relative">
              <motion.div variants={itemVariants}>
                {/* 🚨 REVISI PROPS: Menyesuaikan dengan interface ProfileCardProps */}
                <ProfileCard
                  name="Muhammad Wildan Jamil S.Kom"
                  title="Software Developer"
                  handle="muhammad_wildan23"
                  status="Online"
                  contactText="Contact Me"
                  avatarUrl="profile.png"
                  showUserInfo={true}
                  enableTilt={true}
                  enableMobileTilt={false}
                  onContactClick={() => console.log("Contact clicked")}
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* 4. Section: Keterampilan Teknis (Skill Tags) */}
        <motion.section
          className="mb-24 bg-[#1a1a1a] p-10 rounded-2xl shadow-xl border border-[#333]"
          variants={sectionVariants} // ✅ Tidak akan error lagi
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl font-extrabold text-purple-400 mb-8 text-center">
            Keterampilan Teknis
          </h2>
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3"
          >
            {SKILLS.map((skill, index) => (
              <span
                key={index}
                className="px-5 py-2 bg-purple-700/30 text-purple-300 text-lg rounded-full font-semibold hover:bg-purple-600/50 transition-colors cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </motion.div>
          {" "}
          <motion.div
            variants={itemVariants}
            style={{ height: "80px", position: "relative", overflow: "hidden" }}
            className="w-full pt-4"
          >
            {" "}
            <LogoLoop
              logos={techLogos} // Menggunakan data techLogos yang sudah ada
              speed={100} // Kecepatan yang sesuai
              direction="left"
              logoHeight={40} // Ukuran ikon 40px
              gap={60}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#1a1a1a" // Warna background container
            />
          </motion.div>
        </motion.section>

        {/* 5. Section: Pengalaman Kerja & Pendidikan (Timeline) */}
        <motion.section
          className="mb-24"
          variants={sectionVariants} // ✅ Tidak akan error lagi
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl font-extrabold text-purple-400 mb-10 text-center">
            Pengalaman
          </h2>
          <div className="relative border-l-4 border-gray-700 ml-5 sm:ml-10 md:ml-20">
            {TIMELINE_DATA.map((item, index) => (
              <TimelineItem
                key={index}
                title={item.title}
                company={item.company}
                date={item.date}
                description={item.description}
              />
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mb-24"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl font-extrabold text-purple-400 mb-10 text-center">
            Pendidikan
          </h2>
          <div className="relative border-l-4 border-gray-700 ml-5 sm:ml-10 md:ml-20">
            {/* Menggunakan data EDUCATION_DATA baru */}
            {EDUCATION_DATA.map((item, index) => (
              <TimelineItem
                key={index}
                title={item.title}
                company={item.company} // Ini akan menampilkan nama Universitas/Sekolah
                date={item.date}
                description={item.description}
              />
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mb-24"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl font-extrabold text-purple-400 mb-10 text-center">
            Sertifikat & Pencapaian
          </h2>

          <div
            style={{
              height: "200px",
              position: "relative",
              overflow: "hidden",
            }}
            className="w-full"
          >
            <LogoLoop
              logos={certificateItems}
              speed={50}
              direction="left"
              logoHeight={150}
              gap={30}
              pauseOnHover
              scaleOnHover={false}
              fadeOut
              // 🚨 REVISI: Tambahkan warna hitam untuk fade out
              fadeOutColor="#000000"
            />
          </div>
        </motion.section>

        <motion.section
          className="mb-24"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <footer className="w-full bg-[#080808] py-8 px-4 sm:px-8 text-white border-t border-[#1a1a1a]">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12 border-b border-[#333] pb-6 mb-4">
              {/* Kolom Kiri: Sosial Media & Tombol */}
              <div className="flex flex-col items-start gap-4">
                <div className="flex space-x-6">
                  <a
                    href="https://github.com/MuhammadWildanJamil"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="w-6 h-6 text-white hover:text-purple-400 transition-colors duration-200" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/muhammad-wildan-jamil-a38b53395/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6 text-white hover:text-purple-400 transition-colors duration-200" />
                  </a>
                </div>
                <LikeButton />
              </div>

              {/* Kolom Tengah: Stack Teknologi */}
              <div className="flex flex-col items-start text-gray-400 mt-6 md:mt-0">
                <p className="mb-2">
                  Built with:{" "}
                  <span className="font-semibold text-white">Next JS</span>
                </p>
                <p className="mb-2">
                  Styled with:{" "}
                  <span className="font-semibold text-white">TailwindCSS</span>
                </p>
                <p>
                  Deployed on:{" "}
                  <span className="font-semibold text-white">HomeServer</span>
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
