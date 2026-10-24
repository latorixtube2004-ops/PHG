'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Globe, Phone, FileDown } from 'lucide-react';

import { useLocale } from '@/lib/context/LocaleContext';
import { DownloadProfileModal } from '@/components/ui/DownloadProfileModal';
import { companyInfo } from '@/lib/data/company';

interface HeaderProps {
  locale?: 'en' | 'ar';
  onLocaleChange?: (locale: 'en' | 'ar') => void;
}

export function Header({ locale: propLocale, onLocaleChange: propOnLocaleChange }: HeaderProps = {}) {
  const context = useLocale();
  const locale = propLocale || context.locale;
  const onLocaleChange = propOnLocaleChange || context.setLocale;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isArabic = locale === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { href: '/', label: isArabic ? 'الرئيسية' : 'Home' },
    { href: '/about', label: isArabic ? 'من نحن' : 'About' },
    { href: '/services', label: isArabic ? 'الخدمات' : 'Services' },
    { href: '/projects', label: isArabic ? 'المشاريع' : 'Projects' },
    { href: '/capabilities', label: isArabic ? 'القدرات' : 'Capabilities' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        scrolled
          ? 'bg-white/85 backdrop-blur-2xl border-b border-white/80 shadow-md py-2.5'
          : 'bg-white/70 backdrop-blur-xl border-b border-white/50 shadow-xs py-3'
      }`}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group transition-transform duration-200 hover:scale-[1.02]"
            aria-label="Palm Hills Gulf Home"
          >
            <div className="relative h-10 w-40 sm:h-11 sm:w-48 flex items-center">
              <Image
                src="/images/company/logo-brand.png"
                alt="Palm Hills Gulf Company Limited"
                fill
                priority
                sizes="(max-width: 640px) 160px, 192px"
                className="object-contain object-left rtl:object-right"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 p-1 bg-white/40 backdrop-blur-md rounded-full border border-white/60 shadow-inner">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-1.5 text-xs xl:text-sm font-semibold rounded-full transition-all duration-200 relative ${
                    isActive
                      ? 'liquid-glass-btn-primary shadow-sm'
                      : 'text-slate-700 hover:text-sky-600 hover:bg-white/60'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Direct Phone Quick Link (Desktop) */}
            <a
              href="tel:+966547093809"
              className="hidden xl:flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-sky-600 px-3 py-1.5 rounded-full bg-white/50 border border-white/70 hover:bg-white/80 transition-all shadow-xs"
            >
              <Phone size={13} className="text-sky-500" />
              <span dir="ltr">+966 54 709 3809</span>
            </a>

            {/* Dual Segmented Language Switcher (EN | عربي) */}
            <div
              className="inline-flex items-center p-1 bg-sky-100/50 backdrop-blur-md rounded-full border border-white/70 shadow-xs"
              dir="ltr"
              role="group"
              aria-label="Language selection"
            >
              <button
                type="button"
                onClick={() => onLocaleChange('en')}
                className={`px-3 py-1 text-xs font-bold rounded-full transition-all duration-200 cursor-pointer ${
                  !isArabic
                    ? 'liquid-glass-btn-primary shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
                aria-pressed={!isArabic}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => onLocaleChange('ar')}
                className={`px-3 py-1 text-xs font-bold rounded-full transition-all duration-200 cursor-pointer font-cairo ${
                  isArabic
                    ? 'liquid-glass-btn-primary shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
                aria-pressed={isArabic}
              >
                عربي
              </button>
            </div>

            {/* Download Company Profile Pill */}
            <button
              type="button"
              onClick={() => setIsDownloadModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-sky-700 bg-sky-500/10 hover:bg-sky-500/20 border border-sky-300/40 hover:border-sky-400/60 transition-all shadow-xs cursor-pointer"
              title={isArabic ? 'تحميل الملف التعريفي للشركة (PDF)' : 'Download Company Profile (PDF)'}
            >
              <FileDown size={14} className="text-sky-600" />
              <span>{isArabic ? 'الملف التعريفي' : 'Profile PDF'}</span>
            </button>

            {/* Contact CTA */}
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center justify-center px-5 py-2 liquid-glass-btn-primary text-xs xl:text-sm font-bold shadow-md hover:shadow-lg"
            >
              {isArabic ? 'اتصل بنا' : 'Contact Us'}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-3 pt-4 pb-2 border-t border-white/60 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-1.5">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-2.5 rounded-xl text-base font-semibold transition-all ${
                      isActive
                        ? 'liquid-glass-btn-primary shadow-xs'
                        : 'text-slate-800 hover:bg-white/60'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="pt-3 mt-2 border-t border-white/60 flex flex-col gap-3">
                {/* Mobile Language Switcher */}
                <div className="bg-sky-100/60 backdrop-blur-md p-1 rounded-full border border-white/80 flex" dir="ltr">
                  <button
                    type="button"
                    onClick={() => {
                      onLocaleChange('en');
                      setIsMenuOpen(false);
                    }}
                    className={`flex-1 py-2 px-3 text-sm rounded-full font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      !isArabic
                        ? 'liquid-glass-btn-primary shadow-xs'
                        : 'text-slate-700 hover:bg-white/60'
                    }`}
                  >
                    <span>English</span>
                    {!isArabic && <span className="text-xs">✓</span>}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      onLocaleChange('ar');
                      setIsMenuOpen(false);
                    }}
                    className={`flex-1 py-2 px-3 text-sm rounded-full font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer font-cairo ${
                      isArabic
                        ? 'liquid-glass-btn-primary shadow-xs'
                        : 'text-slate-700 hover:bg-white/60'
                    }`}
                  >
                    <span>العربية</span>
                    {isArabic && <span className="text-xs">✓</span>}
                  </button>
                </div>

                <a
                  href="tel:+966547093809"
                  className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-slate-800 bg-white/60 rounded-full border border-white/80 shadow-xs"
                >
                  <Phone size={16} className="text-sky-500" />
                  <span dir="ltr">+966 54 709 3809</span>
                </a>
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 py-2.5 text-sm font-bold text-sky-700 bg-sky-50 rounded-full border border-sky-200 shadow-xs cursor-pointer w-full"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsDownloadModalOpen(true);
                  }}
                >
                  <FileDown size={16} className="text-sky-600" />
                  <span>{isArabic ? 'تحميل الملف التعريفي للشركة (PDF)' : 'Download Company Profile (PDF)'}</span>
                </button>
                <Link
                  href="/contact"
                  className="flex items-center justify-center px-6 py-3 liquid-glass-btn-primary text-sm font-bold shadow-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {isArabic ? 'اتصل بنا' : 'Contact Us'}
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Dual Language Profile Download Modal */}
      <DownloadProfileModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
        locale={locale}
      />
    </header>
  );
}
