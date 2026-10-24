'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Section, Container } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useLocale } from '@/lib/context/LocaleContext';
import { AnimatedReveal } from '@/components/ui/AnimatedReveal';
import { BorderBeam } from '@/components/ui/BorderBeam';
import { ArrowRight, ArrowLeft, Sparkles, MapPin } from 'lucide-react';

interface ProjectsGridProps {
  locale?: 'en' | 'ar';
}

export function ProjectsGrid({ locale: propLocale }: ProjectsGridProps = {}) {
  const context = useLocale();
  const locale = propLocale || context.locale;
  const isArabic = locale === 'ar';
  const [filter, setFilter] = useState<'all' | 'saudi' | 'egypt'>('all');

  const projects = [
    {
      slug: 'dar-elhijra-al-madina',
      title: isArabic ? 'دار الهجرة المدينة' : 'Dar Elhijra Al Madina',
      location: isArabic ? 'المدينة المنورة' : 'Madinah',
      country: 'saudi',
      category: isArabic ? 'تطوير أبراج سكنية' : 'High-Rise Development',
      image: '/images/projects/Saudi Arabia/on going/Dar Elhijra Al Madina/HERO.jpg',
    },
    {
      slug: 'hail-housing-project',
      title: isArabic ? 'مشروع الإسكان في حائل' : 'Hail Housing Project',
      location: isArabic ? 'حائل' : 'Hail',
      country: 'saudi',
      category: isArabic ? 'تطوير سكني' : 'Residential Development',
      image: '/images/projects/Saudi Arabia/finished/Hail Housing Project/HERO.jpg',
    },
    {
      slug: 'al-namas-housing-development',
      title: isArabic ? 'تطوير إسكان النماص' : 'Al Namas Housing Development',
      location: isArabic ? 'النماص' : 'Al Namas',
      country: 'saudi',
      category: isArabic ? 'تطوير البنية التحتية' : 'Infrastructure Development',
      image: '/images/projects/Saudi Arabia/on going/Al Namas Housing Development/HERO.jpg',
    },
    {
      slug: 'hacienda-bay',
      title: isArabic ? 'هاسيندا باي' : 'Hacienda Bay',
      location: isArabic ? 'الساحل الشمالي' : 'North Coast',
      country: 'egypt',
      category: isArabic ? 'منتجع فاخر' : 'Luxury Resort',
      image: '/images/projects/EGYPT/North Coast — Hacienda Bay/HERO.webp',
    },
    {
      slug: 'swan-lake',
      title: isArabic ? 'سوان ليك' : 'Swan Lake',
      location: isArabic ? 'الساحل الشمالي' : 'North Coast',
      country: 'egypt',
      category: isArabic ? 'منتجع سكني' : 'Residential Resort',
      image: '/images/projects/EGYPT/North Coast — Swan Lake/HERO.jpg',
    },
    {
      slug: 'new-alamein',
      title: isArabic ? 'العلمين الجديدة' : 'New Alamein',
      location: isArabic ? 'العلمين' : 'Alamein',
      country: 'egypt',
      category: isArabic ? 'مشروع حضري' : 'Urban Development',
      image: '/images/projects/EGYPT/New Alamein Project/HERO.webp',
    },
  ];

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true;
    return project.country === filter;
  });

  return (
    <Section id="projects" background="default" className="py-20 lg:py-28 bg-pattern-light">
      <Container>
        <AnimatedReveal direction="up" delay={100}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full liquid-glass-pill text-xs font-bold mb-3 shadow-xs text-sky-800">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
              <span>{isArabic ? 'سجل الإنجازات العمرانية' : 'PORTFOLIO OF EXCELLENCE'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 mb-3 tracking-tight">
              {isArabic ? 'مشاريعنا المختارة' : 'Selected Projects'}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
              {isArabic
                ? 'مشاريع بارزة في المملكة العربية السعودية ومصر'
                : 'Landmark projects across Saudi Arabia and Egypt'}
            </p>
          </div>
        </AnimatedReveal>

        {/* Filter - VisionOS / macOS Liquid Segmented Control */}
        <AnimatedReveal direction="up" delay={200}>
          <div className="flex justify-center gap-1.5 sm:gap-2 mb-12 p-1.5 bg-white/60 backdrop-blur-xl rounded-full border border-white/80 shadow-md w-fit mx-auto">
            <Button
              variant={filter === 'all' ? 'primary' : 'ghost'}
              onClick={() => setFilter('all')}
              size="sm"
              className={filter === 'all' ? 'shadow-md scale-102 transition-transform' : 'hover:scale-102'}
            >
              {isArabic ? 'كافة المشاريع' : 'All'}
            </Button>
            <Button
              variant={filter === 'saudi' ? 'primary' : 'ghost'}
              onClick={() => setFilter('saudi')}
              size="sm"
              className={filter === 'saudi' ? 'shadow-md scale-102 transition-transform' : 'hover:scale-102'}
            >
              {isArabic ? 'المملكة العربية السعودية' : 'Saudi Arabia'}
            </Button>
            <Button
              variant={filter === 'egypt' ? 'primary' : 'ghost'}
              onClick={() => setFilter('egypt')}
              size="sm"
              className={filter === 'egypt' ? 'shadow-md scale-102 transition-transform' : 'hover:scale-102'}
            >
              {isArabic ? 'جمهورية مصر العربية' : 'Egypt'}
            </Button>
          </div>
        </AnimatedReveal>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project, index) => (
            <AnimatedReveal key={project.slug} direction="up" delay={index * 90}>
              <Link href={`/projects/${project.slug}`}>
                <Card className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 shimmer-sheen h-full relative liquid-glass-card">
                  {index === 0 && (
                    <BorderBeam size={260} duration={12} colorFrom="#38bdf8" colorTo="#2563eb" />
                  )}
                  <div className="relative h-64 overflow-hidden rounded-t-[26px]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
                    <div className="absolute bottom-3 start-4 end-4 text-white flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs text-sky-200 font-medium">
                        <MapPin size={13} className="text-sky-400" />
                        <span>{project.location}</span>
                      </div>
                      <span className="liquid-glass-pill-dark px-3 py-1 rounded-full text-[11px] font-bold text-white border border-white/25">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow" dir={isArabic ? 'rtl' : 'ltr'}>
                    <h3 className="text-xl font-heading font-extrabold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs font-bold text-sky-600 uppercase tracking-wider mb-4">
                      {project.category}
                    </p>
                    <div className="mt-auto pt-3 border-t border-slate-200/60 flex items-center justify-between text-sky-600 font-bold text-sm">
                      <span>{isArabic ? 'عرض تفاصيل المشروع' : 'View Project Details'}</span>
                      {isArabic ? (
                        <ArrowLeft size={16} className="group-hover:-translate-x-1.5 transition-transform" />
                      ) : (
                        <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
                      )}
                    </div>
                  </div>
                </Card>
              </Link>
            </AnimatedReveal>
          ))}
        </div>

        <AnimatedReveal direction="up" delay={200}>
          <div className="text-center mt-14" dir={isArabic ? 'rtl' : 'ltr'}>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl glass-btn-blue text-white font-bold text-base transition-all shadow-xl hover:scale-105 active:scale-95 shimmer-sheen"
            >
              <span>{isArabic ? 'عرض جميع المشاريع الكبرى' : 'Explore All Landmark Projects'}</span>
              {isArabic ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
            </Link>
          </div>
        </AnimatedReveal>
      </Container>
    </Section>
  );
}
