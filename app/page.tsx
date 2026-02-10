"use client";
import React, { useState } from 'react';

// Data Kartu - Kamu bisa tambah atau ubah kata-katanya di sini
const flashcards = [
  { id: 1, english: "Archipelago", indonesia: "Kepulauan", hint: "Indonesia adalah negara kepulauan terbesar." },
  { id: 2, english: "Hospitality", indonesia: "Keramahtamahan", hint: "Orang Indonesia dikenal sangat ramah." },
  { id: 3, english: "Heritage", indonesia: "Warisan Budaya", hint: "Batik adalah warisan budaya dunia (UNESCO)." },
  { id: 4, english: "Biodiversity", indonesia: "Keanekaragaman Hayati", hint: "Hutan kita punya banyak jenis flora & fauna." },
  { id: 5, english: "Spices", indonesia: "Rempah-rempah", hint: "Cengkeh dan pala adalah contoh rempah asli kita." },
  { id: 6, english: "Teacher", indonesia: "Guru", hint: "Seseorang yang membagikan ilmu di sekolah." },
  { id: 7, english: "School", indonesia: "Sekolah", hint: "Tempat kita belajar dan bertemu teman-teman." },
];

export default function BrillianApp() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Fungsi navigasi
  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % flashcards.length);
    }, 150);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length);
    }, 150);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-6 font-sans text-slate-900">
      
      {/* Judul Website */}
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-indigo-900">
          Brillian<span className="text-blue-600">.</span>
        </h1>
        <p className="mt-2 text-indigo-600 font-medium">Kartu Belajar Dwibahasa Interaktif</p>
      </header>

      {/* Area Kartu */}
      <div className="w-full max-w-md">
        <div 
          onClick={() => setIsFlipped(!isFlipped)}
          className="group h-72 w-full [perspective:1000px] cursor-pointer"
        >
          <div className={`relative h-full w-full rounded-3xl shadow-2xl transition-all duration-500 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
            
            {/* Sisi Depan (Inggris) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center
