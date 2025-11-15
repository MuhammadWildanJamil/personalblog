// /app/projects/[slug]/page.tsx

"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { getProjectBySlug, ProjectDetail } from '@/lib/ProjectData';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface ProjectPageProps {
  params: { slug: string; };
}

// Komponen Pembantu untuk Menampilkan Detail Teks
const DetailSection = ({ title, content }: { title: string, content: string }) => (
  <div className="mb-8">
    <h3 className="text-3xl font-bold text-purple-400 mb-3">{title}</h3>
    <p className="text-gray-300 text-lg whitespace-pre-wrap">{content}</p>
  </div>
);

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const router = useRouter();
  const [project, setProject] = useState<ProjectDetail | null>(null);

  useEffect(() => {
    const data = getProjectBySlug(params.slug);
    setProject(data || null);
  }, [params.slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <h1 className="text-4xl font-bold">404 | Proyek Tidak Ditemukan</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-20 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto py-12">
        
        {/* Tombol Kembali */}
        <button 
          onClick={() => router.back()} 
          className="flex items-center text-lg mb-8 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" /> Kembali ke Daftar Proyek
        </button>

        {/* Hero Proyek */}
        <div className="relative w-full h-[400px] mb-10 overflow-hidden rounded-xl">
          <Image src={project.heroImage} alt={project.title} fill className="object-cover" />
          <h1 className="absolute inset-0 flex items-center justify-center text-white text-5xl font-extrabold bg-black/40">
            {project.title}
          </h1>
        </div>

        {/* Stack & URL */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-[#333] pb-4 mb-8">
          <div>
            <span className="font-semibold text-purple-400 mr-2">Stack:</span>
            {project.stack.map(tag => (
              <span key={tag} className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-sm mr-2">{tag}</span>
            ))}
          </div>
          {project.url && (
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-purple-400 hover:text-purple-300 font-semibold transition-colors mt-4 md:mt-0">
              Lihat Proyek <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          )}
        </div>

        {/* Konten Detail: Ringkasan & Peran */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <DetailSection title="Ringkasan" content={project.summary} />
          <DetailSection title="Peran Saya" content={project.role} />
          <div className="md:col-span-2">
            <DetailSection title="Tantangan & Solusi" content={project.challenge + " " + project.solution} />
          </div>
        </div>

        {/* 🚨 BAGIAN DETAIL LEGAL / PERUSAHAAN (Hanya untuk VICNIS) */}
        {project.legalDetails && (
            <div className="mt-16 bg-[#1a1a1a] p-8 rounded-xl shadow-lg border border-[#333] md:col-span-2">
                <h3 className="text-4xl font-extrabold text-purple-400 mb-6">Detail Dokumen Perusahaan</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 text-sm">
                    <p><span className="font-semibold text-gray-300">SK Menkumham RI:</span> {project.legalDetails.skMenkumham}</p>
                    <p><span className="font-semibold text-gray-300">Nomor Induk Berusaha (NIB):</span> {project.legalDetails.nib}</p>
                    <p><span className="font-semibold text-gray-300">NPWP Perusahaan:</span> {project.legalDetails.npwp}</p>
                    <p><span className="font-semibold text-gray-300">Direktur Marketing:</span> {project.legalDetails.director}</p>
                </div>
            </div>
        )}

        {/* GALERI GAMBAR (Fokus Desain Grafis) */}
        {project.images && project.images.length > 0 && (
          <div className="mt-16 md:col-span-2">
            <h3 className="text-4xl font-bold mb-8">Galeri Desain</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.images.map((image, index) => (
                <div key={index} className="relative w-full aspect-square overflow-hidden rounded-lg shadow-2xl">
                    <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}