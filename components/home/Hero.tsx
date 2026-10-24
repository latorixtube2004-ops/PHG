'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, FileDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Section, Container } from '@/components/ui/Section';
import { useLocale } from '@/lib/context/LocaleContext';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { BorderBeam } from '@/components/ui/BorderBeam';
import { DownloadProfileModal } from '@/components/ui/DownloadProfileModal';
import { companyInfo } from '@/lib/data/company';

interface HeroProps {
  locale?: 'en' | 'ar';
}

export function Hero({ locale: propLocale }: HeroProps = {}) {
  const context = useLocale();
  const locale = propLocale || context.locale;
  const isArabic = locale === 'ar';
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  return (
    <Section background="navy" className="min-h-[100dvh] flex items-center text-white relative overflow-hidden bg-pattern-dark pt-16 sm:pt-20 pb-12 sm:pb-16">
      {/* Background Ambient Fluid Glows (matching macOS / visionOS liquid light) */}
      <div className="absolute top-1/4 -start-20 w-[650px] h-[650px] bg-sky-500/20 rounded-full blur-[140px] pointer-events-none animate-pulse-subtle" />
      <div className="absolute bottom-10 -end-20 w-[550px] h-[550px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-sky-400/10 rounded-full blur-[150px] pointer-events-none" />

      <Container className="relative z-10 pt-2 pb-6 sm:pb-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center" dir={isArabic ? 'rtl' : 'ltr'}>
          {/* Left: Text Content */}
          <div className={isArabic ? 'lg:text-right' : 'lg:text-left'}>
            <AnimatedReveal delay={100} direction="up">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full liquid-glass-pill-dark text-xs font-bold mb-5 animate-float shadow-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-beacon shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                <span>
                  {isArabic
                    ? 'الريادة الهندسية المعتمدة • كود البناء السعودي'
                    : 'PREMIER ENGINEERING • SBC ACCREDITED'}
                </span>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={200} direction="up">
              <div className="flex items-center gap-4 sm:gap-6 mb-6">
                {/* Big Circle Logo Emblem */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 flex-shrink-0 rounded-full p-2 bg-white/10 backdrop-blur-xl border border-white/30 shadow-[0_0_35px_rgba(56,189,248,0.35)] hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/images/company/logo-emblem.png"
                    alt="Palm Hills Gulf Emblem"
                    fill
                    sizes="(max-width: 640px) 96px, (max-width: 1024px) 128px, 144px"
                    className="object-contain p-1 drop-shadow-xl"
                    priority
                  />
                </div>

                {/* Slogan in Exactly Two Lines */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.6rem] font-heading font-extrabold leading-[1.12] text-white tracking-tight drop-shadow-md flex-1">
                  {isArabic ? (
                    <>
                      <span className="block">بنيت على الثقة،</span>
                      <span className="block text-sky-300">مركزة على الجودة</span>
                    </>
                  ) : (
                    <>
                      <span className="block">Built on Trust,</span>
                      <span className="block text-sky-300">Focused on Quality</span>
                    </>
                  )}
                </h1>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={300} direction="up">
              <p className="text-base sm:text-lg md:text-xl text-slate-200 mb-7 leading-relaxed max-w-[600px]">
                {isArabic
                  ? '١٨+ عامًا من التميز في الهندسة والمقاولات والبنية التحتية في المملكة العربية السعودية ومصر'
                  : '18+ years of engineering, civil infrastructure, and turnkey construction excellence across Saudi Arabia and Egypt.'}
              </p>
            </AnimatedReveal>

            {/* Stats Grid with Animated Counters in Liquid Glass Pods */}
            <AnimatedReveal delay={400} direction="up">
              <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-7 pt-2">
                <div className="liquid-glass-dark p-3 sm:p-4 rounded-2xl text-center border border-white/20 shadow-xl group hover:border-white/40 transition-all">
                  <div className="text-2xl sm:text-4xl font-extrabold text-white mb-1">
                    <AnimatedCounter target={18} suffix="+" duration={1800} />
                  </div>
                  <div className="text-[11px] sm:text-xs text-sky-200 font-semibold">
                    {isArabic ? 'سنوات الخبرة' : 'Years Experience'}
                  </div>
                </div>
                <div className="liquid-glass-dark p-3 sm:p-4 rounded-2xl text-center border border-white/20 shadow-xl group hover:border-white/40 transition-all">
                  <div className="text-2xl sm:text-4xl font-extrabold text-white mb-1">
                    <AnimatedCounter target={8} duration={1400} />
                  </div>
                  <div className="text-[11px] sm:text-xs text-sky-200 font-semibold">
                    {isArabic ? 'مشاريع كبرى' : 'Major Projects'}
                  </div>
                </div>
                <div className="liquid-glass-dark p-3 sm:p-4 rounded-2xl text-center border border-white/20 shadow-xl group hover:border-white/40 transition-all">
                  <div className="text-2xl sm:text-4xl font-extrabold text-white mb-1">
                    <AnimatedCounter target={2} duration={1200} />
                  </div>
                  <div className="text-[11px] sm:text-xs text-sky-200 font-semibold">
                    {isArabic ? 'دول العمل' : 'Countries'}
                  </div>
                </div>
              </div>
            </AnimatedReveal>

            {/* CTA Buttons - Guaranteed in One Single Line */}
            <AnimatedReveal delay={500} direction="up">
              <div className="flex flex-nowrap items-center gap-2 sm:gap-3 overflow-x-auto sm:overflow-visible pb-1 sm:pb-0 scrollbar-none max-w-full">
                <Link href="/projects" className="inline-flex shrink-0">
                  <Button size="md" className="shadow-2xl whitespace-nowrap px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm">
                    <span>{isArabic ? 'استكشف المشاريع' : 'Explore Projects'}</span>
                    <ArrowRight size={16} className={isArabic ? 'rotate-180' : ''} />
                  </Button>
                </Link>
                <button
                  type="button"
                  onClick={() => setIsDownloadModalOpen(true)}
                  className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm liquid-glass-dark hover:bg-white/20 text-white border border-white/30 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <FileDown size={16} className="text-sky-300" />
                  <span>{isArabic ? 'تحميل البروفايل (PDF)' : 'Download Profile (PDF)'}</span>
                </button>
                <Link href="/contact" className="inline-flex shrink-0">
                  <Button size="md" variant="ghost" className="bg-white/10 hover:bg-white/20 text-white border border-white/25 whitespace-nowrap px-3.5 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm">
                    <span>{isArabic ? 'اتصل بنا' : 'Contact Us'}</span>
                  </Button>
                </Link>
              </div>
            </AnimatedReveal>
          </div>

          {/* Right: Project Hero Showcase with BorderBeam & Liquid Glass Frame */}
          <AnimatedReveal delay={250} direction="none" className="w-full">
            <div className="relative h-[380px] sm:h-[440px] lg:h-[520px] rounded-3xl overflow-hidden shadow-2xl border border-white/30 group">
              <Image
                src="/images/projects/Saudi Arabia/on going/Dar Elhijra Al Madina/HERO.jpg"
                alt="Palm Hills Gulf Projects - Dar Elhijra Al Madina"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent pointer-events-none" />

              {/* Dynamic 21st Border Beam */}
              <BorderBeam size={280} duration={10} colorFrom="#38bdf8" colorTo="#2563eb" />

              {/* Floating Project Glass Pill Tag */}
              <div className="absolute bottom-5 start-5 end-5 flex items-center justify-between z-10">
                <div className="liquid-glass-pill-dark px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 shadow-xl animate-float-delayed border border-white/30">
                  <span className="w-2 h-2 rounded-full bg-sky-400" />
                  <span>{isArabic ? 'مشروع دار الهجرة • المدينة المنورة' : 'Dar Elhijra Project • Madinah'}</span>
                </div>
                <div className="hidden sm:flex glass-icon-blue px-3 py-1 rounded-lg text-[11px] font-semibold text-white">
                  <span>{isArabic ? 'برج أيقوني' : 'Iconic High-Rise'}</span>
                </div>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </Container>

      {/* Dual Language Profile Download Modal */}
      <DownloadProfileModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
        locale={locale}
      />
    </Section>
  );
}
