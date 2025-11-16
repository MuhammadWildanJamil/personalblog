// di /app/page.tsx (Server Component)


import PillNav from "@/components/PillNav";
import RotatingText from "@/components/RotatingText";
import LogoLoop from "@/components/LogoLoop";

import ServiceAccordion from "@/components/ServiceAccordion";
import { Code, Smartphone, PenTool } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import { Github, Linkedin, Mail } from "lucide-react";
import LikeButton from "@/components/LikeButton";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from 'framer-motion';
import DocumentationCards from '@/components/DocumentationCards';





const companyLogos = [
  // Ganti dengan path logo perusahaan Anda
  {
    src: "/kkp.png",
    alt: "Kementrian Kelautan Dan Perikanan",
    href: "https://kkp.go.id",
    title: "KKP",
    width: 120, // Atur lebar logo
    height: 60, // Atur tinggi logo
  },
  {
    src: "/era.png",
    alt: "Era Matrix",
    href: "https://eramatrix.co.id",
    title: "Era Matrix",
    width: 150,
    height: 60,
  },
  {
    src: "/hippindo.png",
    alt: "Hippindo",
    href: "https://hippindo.com/",
    title: "Hippindo",
    width: 100,
    height: 60,
  },
  // Tambahkan lebih banyak logo di sini
];

const projects = [
  // DIBAWAH UNTUK WEBSITE
  {
    title: "Arsipku",
    description:
      "Sebuah website arsip digital yang dibangun dengan PHP dan MYSQL.",
    tags: ["PHP", "CSS", "MYSQL"],
    href: "https://arsipku.wildanjamil.my.id",
    imageSrc: "/arsipku.png", // 🚨 TAMBAHKAN PATH GAMBAR
  },
  {
    title: "ERA Matrix",
    description:
      "Sebuah website agen properti manajemen yang dibangun dengan PHP dan MYSQL yang terintegrasi dengan admin dan agen. ",
    tags: ["React", "Framer Motion", "GSAP"],
    href: "https://eramatrix.my.id",
    imageSrc: "/eramatrix.png", // 🚨 TAMBAHKAN PATH GAMBAR
  },
  {
        title: "Portofolio v1",
        description: "Personal website saya yang menggunakan framer-motion.",
        tags: ["HTML", "CSS", "JavaScript"],
        href: "",
        imageSrc: "/portofolio.png", // Pastikan gambar ada
        isLarge: true // Dibuat large agar mengisi satu baris penuh
  },
  // DIBAWAH UNTUK DESIGN GRAFIS
 // {
   //     title: "Company Profile : VICNIS",
     //   description: "Desain identitas visual lengkap untuk company profile.",
       // tags: ["Branding", "Photoshop"],
        //href: "/app/project/vicnis/page.tsx",
        //imageSrc: "/vicnis.png",
        //isLarge: false // Akan berada di samping proyek E-Commerce
  //},
  // DIBAWAH UNTUK VIDIO EDITING
  //{
       // title: "Promo Video: Startup Launch",
        //description: "Video promosi berdurasi 60 detik untuk peluncuran startup teknologi, mencakup motion graphics.",
       // tags: ["Video Editing", "After Effects", "Premiere Pro"],
       // href: "https://youtube.com/link-to-video", // Tautkan ke YouTube/Vimeo
       // imageSrc: "/images/video-promo.jpg",
       // isLarge: true // Dibuat large agar menonjol di baris baru
   // },
  // ... proyek lainnya
];

const documentation = [
    {
        title: "Serah Terima Era Matrix",
        date: "24 September 2024",
        type: "Berita Acara",
        description: "Website final serah terima dan pelatihan penggunaan sistem manajemen agen properti ke bu diana selaku principal.",
        link: "/dokumen/serah-terima-ecommerce.pdf",
        imageSrc: "/potoera.jpg", // 🚨 Tambahkan ini
        tags: ["Agen Properti", "Manajemen", "Website"],
    },
    {
        title: "Dokumentasi Project Arsipku di Kementrian Kelautan dan Perikanan",
        date: "12 Oktober 2024",
        type: "Dokumentasi",
        description: "Dokumentasi terkait project arsipku.",
        link: "/dokumen/vicnis-tech-doc.pdf",
        imageSrc: "/potokkp.jpg", // 🚨 Tambahkan ini
        tags: ["Technical", "Website", "Archived"],
    },
    
    // Tambahkan lebih banyak data jika perlu
];




export default function Home() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Me", href: "/about" },
    { label: "Template", href: "/template" },
    { label: "Contact", href: "/contact" },
  ];

  const services = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Web Development",
      items: [
        "Single Page Applications (SPAs)",
        "Landing pages and business websites",
        "Portfolio websites",
        "Dashboard",
        "E-Commerce"
      ],
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Development",
      items: [
        "Cross-platform app development",
        "PWA implementation",
        "React Native projects",
      ],
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "UI/UX Design & Prototyping",
      items: [
        "Figma prototyping",
        "User research and testing",
        "Design system creation",
      ],
    },
  ];

  <main className="w-full bg-zinc-50 font-sans relative"></main>;

  return (
    
    // Wrapper Utama: min-h-screen dihapus agar konten baru bisa di-scroll
    <main className="w-full bg-zinc-50 font-sans relative">
      {/* 1. NAVBAR (TETAP ABSOLUTE) */}
      <div className="absolute top-4 w-full flex justify-center z-10">
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

      {/* 2. HERO SECTION (Black Background - Min Tinggi Layar) */}
      
      <div className="flex w-full min-h-screen items-center justify-center bg-[#080808] text-white dark:bg-bg-black px-4 sm:px-8">
        {/* CONTAINER LAYOUT DUA KOLOM */}
        
        <div className="max-w-6xl mx-auto w-full z-10 grid grid-cols-1 md:grid-cols-2 gap-12 py-16">
          <div className="flex flex-col justify-center text-left px-4 md:px-0">
            
            <p className="text-xl text-gray-400 mb-2">
              Muhammad Wildan Jamil
            </p>
            <h1 className="text-6xl sm:text-4xl lg:text-8xl font-extrabold leading-none mb-6">
              Software <br /> Developer
            </h1>

            {/* Teks Animasi RotatingText */}
            <RotatingText
              texts={[
                "Lets be creative!",
                "Do something!",
                "Lets create something great!",
              ]}
              mainClassName="text-xl text-gray-400"
              staggerFrom="last"
              initial={{ y: "100%" }}
              exit={{ y: "-100%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={3000}
            />
            {/* 4. Sosial Media Icons (Bottom Left) */}
            <div className="flex space-x-4 mt-8">
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
              
            </div>
          </div>

          <div className="flex items-start justify-start pt-20">
            <p className="text-2xl text-gray-400 ">
              Transforming ideas into interactive and seamless <br /> digital
              experiences with cutting-edge{" "}
              <span className="text-purple-400">
                frontend and backend development
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    
      <div className="w-full bg-white py-16 px-4 sm:px-8 text-black border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Perusahaan yang Pernah Bekerja Sama
          </h2>

          {/* Wrapper LogoLoop Perusahaan */}
          <div
            style={{ height: "80px", position: "relative", overflow: "hidden" }}
            className="mt-10 mb-10"
          >
            <LogoLoop
              logos={companyLogos} // Menggunakan data perusahaan
              speed={80} // Kecepatan sedikit lebih lambat
              direction="right"
              logoHeight={60} // Lebih tinggi dari logo skill
              gap={60}
              pauseOnHover
              scaleOnHover={false}
              fadeOut
            />
          </div>
        </div>
      </div>
      
      
      
      

      <div className="w-full bg-[#080808] py-20 px-4 sm:px-8 text-white">
        <div className="max-w-6xl mx-auto">
          {/* Judul Bagian */}
          {/* 🚨 PERBAIKAN: Hapus px-4 dan sesuaikan dengan layout accordion */}
          <h3 className="text-4xl sm:text-5xl font-extrabold mb-10 text-left">
            What I do?
          </h3>

          {/* Loop ServiceAccordion */}
          {/* 🚨 PERBAIKAN: Hapus max-w-2xl agar sejajar dengan heading */}
          <div className="w-full">
            {services.map((service, index) => (
              <ServiceAccordion
                key={index}
                icon={service.icon}
                title={service.title}
                items={service.items}
              />
            ))}
          </div>
        </div>
      </div>

  

      <div className="w-full bg-[#080808] py-16 px-4 sm:px-8 text-white border-t border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          {/* Judul Proyek */}
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 text-left px-4">
            Featured Work/Project
          </h2>

          {/* Grid Proyek */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard 
                    key={index}
                    // 🚨 KUNCI: Gunakan class span-2 jika isLarge true untuk membuat kartu 100% lebar
                    className={project.isLarge ? "md:col-span-2" : ""}
                    title={project.title}
                    description={project.description}
                    tags={project.tags}
                    href={project.href}
                    imageSrc={project.imageSrc}
                />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-[#333]"></div> 

      <div className="w-full bg-[#080808] py-16 px-4 sm:px-8 text-white border-t border-[#1a1a1a]">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 text-left">
                  Dokumentasi & Berita Acara
                </h2>

                {/* 🚨 GANTI SELURUH LOOP DENGAN KOMPONEN BARU */}
                <DocumentationCards documentation={documentation} /> 

            </div>
        </div>
      
      

      <footer className="w-full bg-[#080808] py-16 px-4 sm:px-8 text-white border-t border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12 border-b border-[#333] pb-10 mb-8">
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

            {/* Kolom Kanan: Pemutar Musik (Placeholder) */}
            <div className="mt-6 md:mt-0">
              {/* 🚨 REVISI: Ganti Placeholder dengan Spotify Iframe */}
              <iframe
                // 🚨 GANTI 'src' DENGAN LINK PLAYLIST/SONG/ALBUM SPOTIFY ANDA
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator&theme=0"
                width="300" // Sesuaikan lebar agar sesuai dengan layout Anda
                height="152" // Tinggi standar untuk pemutar Spotify
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* FOOTER BOTTOM: Hak Cipta */}
          <div className="text-center text-sm text-gray-500 pt-4">
            Copyright © 2025 Muhammad Wildan Jamil. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
