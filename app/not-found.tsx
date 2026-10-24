'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Home, Briefcase, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#060c18] text-white flex flex-col justify-between relative overflow-hidden select-none">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Header Strip */}
      <header className="relative z-10 w-full px-6 py-6 max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20 p-1 bg-white/5">
            <Image
              src="/images/company/logo-emblem.png"
              alt="Palm Hills Gulf"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-sm tracking-wide text-white group-hover:text-sky-300 transition-colors">
              PALM HILLS GULF
            </span>
            <span className="text-[10px] text-sky-400 font-semibold" dir="rtl">
              شركة بالم هيلز جلف
            </span>
          </div>
        </Link>

        <Link href="/contact">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full liquid-glass-pill-dark border border-white/20 text-sky-300 hover:text-white transition-all">
            <Phone size={13} />
            <span>+966 54 709 3809</span>
          </span>
        </Link>
      </header>

      {/* Main 404 Centerpiece */}
      <main className="relative z-10 max-w-2xl mx-auto px-6 py-12 text-center my-auto">
        {/* Glow Number */}
        <div className="relative inline-block mb-4">
          <span className="text-8xl sm:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-400 tracking-tight select-none">
            404
          </span>
          <div className="absolute inset-0 blur-2xl bg-sky-500/20 pointer-events-none" />
        </div>

        {/* Bilingual Message */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
          Page Not Found • الصفحة غير موجودة
        </h1>

        <p className="text-sm sm:text-base text-slate-300 mb-2 leading-relaxed">
          The requested page could not be located or may have been moved.
        </p>
        <p className="text-sm sm:text-base text-slate-400 mb-8 leading-relaxed font-arabic" dir="rtl">
          عذراً، لم نتمكن من العثور على الصفحة المطلوبة أو قد تم نقلها لمسار آخر.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link href="/">
            <Button size="md" className="gap-2 shadow-xl">
              <Home size={16} />
              <span>Return Home • الرئيسية</span>
            </Button>
          </Link>

          <Link href="/projects">
            <Button size="md" variant="ghost" className="gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/25">
              <Briefcase size={16} />
              <span>Explore Projects • المشاريع</span>
            </Button>
          </Link>
        </div>
      </main>

      {/* Footer Note */}
      <footer className="relative z-10 w-full px-6 py-6 text-center text-xs text-slate-500 border-t border-white/10">
        &copy; 2026 Palm Hills Gulf Company Limited • شركة بالم هيلز جلف المحدودة
      </footer>
    </div>
  );
}
