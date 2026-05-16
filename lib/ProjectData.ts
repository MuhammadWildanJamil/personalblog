// /lib/ProjectData.ts

export interface ProjectDetail {
    slug: string;
    title: string;
    heroImage: string;
    summary: string;
    challenge: string;
    solution: string;
    stack: string[];
    role: string;
    type: 'web' | 'design' | 'video'; // Tambahkan tipe
    url?: string;
    images?: { src: string; alt: string }[];
    legalDetails?: { // Tambahan untuk Proyek VICNIS
        skMenkumham: string;
        nib: string;
        npwp: string;
        director: string;
    };
}

// 🚨 DATA DETAIL PROYEK ANDA
export const ALL_PROJECTS: ProjectDetail[] = [
    {
        slug: "arsipku",
        title: "Sistem Arsip Digital Arsipku",
        heroImage: "/images/arsipku-preview.jpg",
        summary: "Pengembangan sistem manajemen arsip digital yang efisien menggunakan tumpukan PHP dan MySQL.",
        challenge: "Mengubah proses pengarsipan manual yang lambat dan rawan kesalahan menjadi sistem digital yang cepat dan terpusat.",
        solution: "Menerapkan dashboard yang intuitif dan fungsi pencarian yang kuat, didukung oleh Bootstrap dan PHP.",
        stack: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
        role: "Full-Stack Developer",
        type: 'web',
    },
    {
        slug: "era-matrix",
        title: "Website Manajemen Properti ERA Matrix",
        heroImage: "/images/era-matrix-preview.jpg",
        summary: "Membangun portal properti interaktif dengan fokus pada pengalaman pengguna agen dan admin.",
        challenge: "Integrasi sistem CRM internal dengan tampilan publik yang modern dan responsif.",
        solution: "Menggunakan React (Next.js) dengan animasi canggih (Framer Motion/GSAP) untuk menciptakan interaksi yang mulus.",
        stack: ["React", "Next.js", "GSAP", "MySQL", "Tailwind CSS"],
        role: "Frontend Specialist",
        type: 'web',
    },
    {
        slug: "design-branding-kit",
        title: "Branding Kit Lengkap: Coffee Shop",
        heroImage: "/images/design-coffeeshop.jpg",
        summary: "Pengembangan identitas visual yang modern dan konsisten untuk merek kedai kopi, dari logo hingga materi promosi.",
        challenge: "Menciptakan citra merek yang unik di tengah persaingan pasar kopi yang jenuh.",
        solution: "Mengembangkan palet warna yang berani, logo yang elegan, dan serangkaian mockup packaging dan media sosial.",
        stack: ["Adobe Illustrator", "Adobe Photoshop", "Prototyping"],
        role: "Visual & Branding Designer",
        type: 'design',
        images: [ 
            { src: "/images/design/coffeeshop-logo.jpg", alt: "Logo Utama" },
            { src: "/images/design/coffeeshop-packaging.jpg", alt: "Mockup Packaging" },
        ],
    },
    {
        slug: "vicnis-company-profile",
        title: "Company Profile: VICNIS",
        heroImage: "/images/vicnis-profile-hero.jpg", 
        type: 'design',
        summary: "VICNIS adalah proyek inovatif berbasis blockchain yang menawarkan solusi keuangan yang efisien, transparan, dan mudah diakses untuk UMKM.",
        challenge: "Memperkenalkan konsep blockchain ke audiens UMKM dan koperasi dengan cara yang sederhana dan meyakinkan.",
        solution: "Pengembangan dokumen profil perusahaan yang profesional dan ringkas, dengan fokus pada SK MENTERI HUKUM DAN HAM (SK MENKUMHAM RI) untuk kredibilitas.",
        stack: ["Branding", "Photoshop", "Dokumentasi"],
        role: "Desainer & Dokumenter",
        images: [ 
            { src: "/images/vicnis/legal-doc.jpg", alt: "Dokumen Legal Perusahaan" },
        ],
        // 🚨 DATA LEGAL KHUSUS
        legalDetails: {
            skMenkumham: "ahu-00774860.ah.01.Tahun 2024 (24 September 2024)",
            nib: "2809240042201",
            npwp: "27.198.683.8 - 905.000",
            director: "NAUFAL BAYAN M, SE (Direktur Marketing)",
        }
    },
];

export const getProjectBySlug = (slug: string) => {
    return ALL_PROJECTS.find(p => p.slug === slug);
};