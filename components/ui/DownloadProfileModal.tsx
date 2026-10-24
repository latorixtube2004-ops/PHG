'use client';

import React, { useEffect } from 'react';
import { X, FileDown, CheckCircle2, ShieldCheck, Globe, Download } from 'lucide-react';
import { companyInfo } from '@/lib/data/company';

interface DownloadProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  locale?: 'en' | 'ar';
}

export function DownloadProfileModal({ isOpen, onClose, locale = 'en' }: DownloadProfileModalProps) {
  const isArabic = locale === 'ar';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div
        className="relative z-10 w-full max-w-2xl rounded-3xl liquid-glass-dark border border-white/20 p-6 sm:p-8 shadow-2xl text-white overflow-hidden"
        dir={isArabic ? 'rtl' : 'ltr'}
      >
        {/* Glow Halo */}
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 end-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-all"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs font-bold mb-3">
            <ShieldCheck size={15} />
            <span>{isArabic ? 'سجل التأهيل والاعتمادات الرسمية 2026' : 'Official Pre-Qualification Dossier 2026'}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
            {isArabic ? 'اختر نسخة الملف التعريفي للتحميل' : 'Select Company Profile Edition to Download'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
            {isArabic
              ? 'يتوفر الملف التعريفي بنسختين رسميتين كاملتين (16 صفحة) تشملان وثائق الاعتماد وسجل المشاريع.'
              : 'Our executive 16-page profile is available in both dedicated Arabic and dual bilingual editions.'}
          </p>
        </div>

        {/* 2 Edition Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          {/* Option 1: Arabic Dedicated */}
          <div className="rounded-2xl p-5 bg-gradient-to-b from-white/10 to-white/5 border border-white/15 hover:border-sky-400/50 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">🇸🇦</span>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  100% Arabic
                </span>
              </div>
              <h4 className="text-base font-extrabold text-white mb-1.5 font-arabic">
                النسخة العربية المعتمدة
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4 font-arabic">
                ملف تعريفي باللغة العربية بالكامل، منسق طبقاً لمتطلبات الجهات والمناقصات الحكومية السعودية.
              </p>

              <ul className="text-[11px] text-slate-400 space-y-1.5 mb-5 font-arabic">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                  <span>16 صفحة عريضة فائقة الدقة (A4)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                  <span>3 صفحات للمستندات والاعتمادات</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                  <span>الحجم: 16.4 ميجابايت (PDF)</span>
                </li>
              </ul>
            </div>

            <a
              href={companyInfo.downloads.companyProfileAr}
              download="Palm-Hills-Gulf-Company-Profile-AR.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileDown size={15} />
              <span>تحميل النسخة العربية (PDF)</span>
            </a>
          </div>

          {/* Option 2: Bilingual Edition */}
          <div className="rounded-2xl p-5 bg-gradient-to-b from-white/10 to-white/5 border border-white/15 hover:border-sky-400/50 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">🌐</span>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30">
                  English &amp; Arabic
                </span>
              </div>
              <h4 className="text-base font-extrabold text-white mb-1.5">
                Bilingual Edition (EN &amp; AR)
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Dual-language executive dossier tailored for multinational EPC partners, consultants, and international developers.
              </p>

              <ul className="text-[11px] text-slate-400 space-y-1.5 mb-5">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-sky-400 shrink-0" />
                  <span>16 Executive Landscape Pages</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-sky-400 shrink-0" />
                  <span>3-Page High-Res Verified Appendices</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-sky-400 shrink-0" />
                  <span>File Size: 15.0 MB (PDF)</span>
                </li>
              </ul>
            </div>

            <a
              href={companyInfo.downloads.companyProfile}
              download="Palm-Hills-Gulf-Company-Profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs bg-sky-600 hover:bg-sky-500 text-white shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileDown size={15} />
              <span>Download Bilingual (PDF)</span>
            </a>
          </div>
        </div>

        {/* Footer info */}
        <div className="text-center text-[10px] text-slate-400 pt-2 border-t border-white/10">
          Saudi Aramco Code: 10119967 • MODON Code: 6619 • CR: 7052685323 • SBC Compliant
        </div>
      </div>
    </div>
  );
}
