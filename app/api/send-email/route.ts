// /app/api/send-email/route.ts

import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer'; // Modul Nodemailer

// Buat transporter Nodemailer di luar fungsi handler untuk efisiensi
const transporter = nodemailer.createTransport({
    // 🚨 PENTING: GANTI DENGAN KREDENSIAL DAN LAYANAN EMAIL ANDA
    host: 'smtp.gmail.com', // Contoh: Jika menggunakan Gmail
    port: 465, // Port SMTP yang aman
    secure: true, // Gunakan TLS
    auth: {
        // Ganti dengan email dan Sandi Aplikasi (App Password) Gmail atau penyedia SMTP Anda
        user: 'cpwildanjamil@gmail.com', 
        pass: 'aoma nckn lecf jelv', 
    },
});

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();
        const { name, email, message } = data; // Ambil data dari frontend

        // Cek data yang diperlukan
        if (!name || !email || !message) {
            return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
        }

        // Kirim email
        await transporter.sendMail({
            from: `"${name}" <${email}>`, // Alamat pengirim (nama pengirim adalah nama user)
            to: 'cpwildanjamil@gmail.com', // 🚨 ALAMAT EMAIL TUJUAN ANDA
            subject: `Pesan Baru dari Website - ${name}`,
            html: `
                <h3>Pesan Baru dari Formulir Kontak</h3>
                <p><strong>Nama:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Pesan:</strong> ${message}</p>
            `,
        });

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });

    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
    }
}